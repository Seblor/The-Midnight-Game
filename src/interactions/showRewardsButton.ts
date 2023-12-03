import { ButtonInteraction } from "discord.js";
import { getGuildSettings, getRewards, removeReward } from "../db";
import i18next from "i18next";

export async function showRewards(inter: ButtonInteraction) {
  if (inter.guildId == null || inter.channelId == null) return;

  const rewards = getRewards(inter.guildId);
  const { language = 'en' } = getGuildSettings(inter.guildId) ?? {};

  const rewardsStr = (
    await Promise.all(
      rewards
        .toSorted((a, b) => a.numberOfWins - b.numberOfWins)
        .map(async reward => {
          const role = await inter.guild!.roles.fetch(reward.rewardedRoleId);

          if (role == null) {
            removeReward(inter.guildId!, reward.rewardedRoleId);
            return null;
          }

          return i18next.t('interactions.rewards.reward-line', {
            numberOfWins: reward.numberOfWins,
            roleId: role.id,
            lng: language
          })
        })
    )
  )
    .filter(string => string) // Removed null values from deleted roles
    .join("\n");

  if (rewards.length === 0) {
    await inter.reply({
      content: i18next.t('interactions.rewards.no-rewards-set', { lng: language }),
      ephemeral: true
    });
    return;
  }

  inter.reply({
    content: `**${i18next.t('interactions.rewards.rewards', { lng: language })}**\n${rewardsStr}`,
    ephemeral: true
  });
}