import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { addReward, getRewards } from "../db";
import i18next from "i18next";

const addRewardCommand = {
  command: new SlashCommandBuilder()
    .setName('add-reward')
    .setDescription(i18next.t('commands.add-reward.description', { lng: 'en' }))
    .setDescriptionLocalizations({
      "en-GB": i18next.t('commands.add-reward.description', { lng: 'en' }),
      "en-US": i18next.t('commands.add-reward.description', { lng: 'en' }),
      fr: i18next.t('commands.add-reward.description', { lng: 'fr' })
    })
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false)
    .addIntegerOption(option => option
      .setName(i18next.t('commands.add-reward.options.wins.name', { lng: 'en' }))
      .setNameLocalizations({
        "en-GB": i18next.t('commands.add-reward.options.wins.name', { lng: 'en' }),
        "en-US": i18next.t('commands.add-reward.options.wins.name', { lng: 'en' }),
        fr: i18next.t('commands.add-reward.options.wins.name', { lng: 'fr' })
      })
      .setDescription(i18next.t('commands.add-reward.options.wins.name', { lng: 'en' }))
      .setDescriptionLocalizations({
        "en-GB": i18next.t('commands.add-reward.options.wins.description', { lng: 'en' }),
        "en-US": i18next.t('commands.add-reward.options.wins.description', { lng: 'en' }),
        fr: i18next.t('commands.add-reward.options.wins.description', { lng: 'fr' })
      })
      .setRequired(true)
    )
    .addRoleOption(option => option
      .setName(i18next.t('commands.add-reward.options.reward.name', { lng: 'en' }))
      .setNameLocalizations({
        "en-GB": i18next.t('commands.add-reward.options.reward.name', { lng: 'en' }),
        "en-US": i18next.t('commands.add-reward.options.reward.name', { lng: 'en' }),
        fr: i18next.t('commands.add-reward.options.reward.name', { lng: 'fr' })
      })
      .setDescription(i18next.t('commands.add-reward.options.reward.name', { lng: 'en' }))
      .setDescriptionLocalizations({
        "en-GB": i18next.t('commands.add-reward.options.reward.description', { lng: 'en' }),
        "en-US": i18next.t('commands.add-reward.options.reward.description', { lng: 'en' }),
        fr: i18next.t('commands.add-reward.options.reward.description', { lng: 'fr' })
      })
      .setRequired(true)
    ),
  run: async (inter: ChatInputCommandInteraction) => {
    if (inter.guildId == null || inter.channelId == null) return;

    const numberOfWins = inter.options.getInteger('wins');
    const reward = inter.options.getRole('reward');

    if (numberOfWins == null || reward == null) {
      await inter.reply({
        content: "The arguments specified are invalid",
        ephemeral: true
      });
      return;
    }


    if (numberOfWins < 1) {
      await inter.reply({
        content: "The number of wins must be greater than 0",
        ephemeral: true
      });
      return;
    }

    const currentRewards = getRewards(inter.guildId);

    const associatedReward = currentRewards.find(r => r.rewardedRoleId === reward.id)

    if (associatedReward != null) {
      await inter.reply({
        content: `This reward already exists for people reaching ${associatedReward.numberOfWins} wins`,
        ephemeral: true
      });
      return;
    }

    addReward(inter.guildId, numberOfWins, reward.id);

    await inter.reply({
      content: "The reward has been added",
      ephemeral: true
    });
  }
}

export default addRewardCommand
