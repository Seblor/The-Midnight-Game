import { AttachmentBuilder, ButtonInteraction, GuildMember } from "discord.js";
import { addWinner, getGuildSettings, getRewards, removeReward } from "../db";
import { getTimeZoneMinutesOffsetOfLocale } from "../utils/time";
import i18next from "i18next";
import { createMidnightGameMessage } from "../createMidnightGameMessage";

export const logo = new AttachmentBuilder('./assets/logo.webp').setName('logo.webp')

export function onMidnightButtonClick(inter: ButtonInteraction): void {
  if (inter.guildId == null || inter.channelId == null) return;

  const now = new Date();

  const guildSettings = getGuildSettings(inter.guildId);
  const { language = 'en' } = getGuildSettings(inter.guildId) ?? {};

  if (guildSettings == null) {
    inter.reply({
      content: i18next.t('interactions.midnight.error-not-initialized', { lng: language }),
      ephemeral: true
    });
    return;
  }

  const guildTimezone = guildSettings.timezone;

  const dateWithOffset = now.getTime() + getTimeZoneMinutesOffsetOfLocale(guildTimezone) * 60e3;

  const timePastMidnight = RegExp(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/).exec(new Date(dateWithOffset).toISOString());

  const { year, month, day, hours, minutes, seconds } = timePastMidnight?.groups ?? {};

  if (parseInt(hours) <= 0 && parseInt(minutes) <= 15) {
    const result = addWinner(inter.guildId, inter.user.id, now);

    if (result === null) {
      inter.reply({
        content: i18next.t('interactions.midnight.click-after-player', { lng: language }),
        ephemeral: true
      });
      return;
    }

    inter.message.edit(createMidnightGameMessage(
      inter.client,
      language,
      guildTimezone,
      {
        id: inter.user.id,
        delay: result.delayInMs,
        date: {
          year: parseInt(year),
          month: parseInt(month),
          day: parseInt(day)
        }
      }
    ));

    inter.reply({
      content: i18next.t('interactions.midnight.won-game', {
        numberOfWins: result.numberOfWins,
        lng: language
      }),
      ephemeral: true
    });

    inter.guild!.members.fetch(inter.user.id).then(member => {
      giveMemberRewards(member, result.numberOfWins);
    });
  } else {
    inter.reply({
      content: i18next.t('interactions.midnight.click-too-late', {
        hours,
        minutes,
        seconds,
        lng: language
      }),
      ephemeral: true
    });
  }
}

async function giveMemberRewards(member: GuildMember, numberOfWins: number): Promise<void> {
  const rewards = getRewards(member.guild.id);
  const reward = rewards.find(reward => reward.numberOfWins === numberOfWins);

  if (reward == null) return;

  if (await member.guild.roles.fetch(reward.rewardedRoleId) == null) {
    removeReward(member.guild.id, reward.rewardedRoleId);
    return;
  }

  await member.roles.add(reward.rewardedRoleId);
}
