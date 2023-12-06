import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { getRewards, removeReward } from "../db";
import i18next from "i18next";

const removeRewardCommand = {
  command: new SlashCommandBuilder()
    .setName('remove-reward')
    .setDescription(i18next.t('commands.remove-reward.description', { lng: 'en' }))
    .setDescriptionLocalizations({
      "en-GB": i18next.t('commands.remove-reward.description', { lng: 'en' }),
      "en-US": i18next.t('commands.remove-reward.description', { lng: 'en' }),
      fr: i18next.t('commands.remove-reward.description', { lng: 'fr' })
    })
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false)
    .addRoleOption(option => option
      .setName(i18next.t('commands.remove-reward.options.reward.name', { lng: 'en' }))
      .setNameLocalizations({
        "en-GB": i18next.t('commands.remove-reward.options.reward.name', { lng: 'en' }),
        "en-US": i18next.t('commands.remove-reward.options.reward.name', { lng: 'en' }),
        fr: i18next.t('commands.remove-reward.options.reward.name', { lng: 'fr' })
      })
      .setDescription(i18next.t('commands.remove-reward.options.reward.name', { lng: 'en' }))
      .setDescriptionLocalizations({
        "en-GB": i18next.t('commands.remove-reward.options.reward.description', { lng: 'en' }),
        "en-US": i18next.t('commands.remove-reward.options.reward.description', { lng: 'en' }),
        fr: i18next.t('commands.remove-reward.options.reward.description', { lng: 'fr' })
      })
      .setRequired(true)
    ),
  run: async (inter: ChatInputCommandInteraction) => {
    if (inter.guildId == null || inter.channelId == null) return;

    const reward = inter.options.getRole('reward');

    if (reward == null) {
      await inter.reply({
        content: "The argument specified is invalid",
        ephemeral: true
      });
      return;
    }

    const currentRewards = getRewards(inter.guildId);

    const associatedReward = currentRewards.find(r => r.rewardedRoleId === reward.id)

    if (associatedReward == null) {
      await inter.reply({
        content: `This reward does not exist`,
        ephemeral: true
      });
      return;
    }

    removeReward(inter.guildId, reward.id);

    await inter.reply({
      content: "The reward has been removed",
      ephemeral: true
    });
  }
}

export default removeRewardCommand
