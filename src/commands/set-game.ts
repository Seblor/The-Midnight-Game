import { AutocompleteInteraction, ChannelType, ChatInputCommandInteraction, GuildTextBasedChannel, PermissionFlagsBits, PermissionsBitField, SlashCommandBuilder } from "discord.js";
import { setGuildSettings } from "../db";
import { timzeones } from "../data/timezones";
import { createMidnightGameMessage } from "../createMidnightGameMessage";
import i18next from "i18next";
import { addedLanguages } from "../../@types/i18next";

const setGameCommand = {
  command: new SlashCommandBuilder()
    .setName('set-game')
    .setDescription(i18next.t('commands.set-game.description', { lng: 'en' }))
    .setDescriptionLocalizations({
      "en-GB": i18next.t('commands.set-game.description', { lng: 'en' }),
      "en-US": i18next.t('commands.set-game.description', { lng: 'en' }),
      fr: i18next.t('commands.set-game.description', { lng: 'fr' })
    })
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false)
    .addChannelOption(option => option
      .setName(i18next.t('commands.set-game.options.channel.name', { lng: 'en' }))
      .setNameLocalizations({
        "en-GB": i18next.t('commands.set-game.options.channel.name', { lng: 'en' }),
        "en-US": i18next.t('commands.set-game.options.channel.name', { lng: 'en' }),
        fr: i18next.t('commands.set-game.options.channel.name', { lng: 'fr' })
      })
      .setDescription(i18next.t('commands.set-game.options.channel.name', { lng: 'en' }))
      .setDescriptionLocalizations({
        "en-GB": i18next.t('commands.set-game.options.channel.description', { lng: 'en' }),
        "en-US": i18next.t('commands.set-game.options.channel.description', { lng: 'en' }),
        fr: i18next.t('commands.set-game.options.channel.description', { lng: 'fr' })
      })
      .setRequired(true)
      .addChannelTypes(ChannelType.GuildText)
    )
    .addStringOption(option => option
      .setName(i18next.t('commands.set-game.options.timezone.name', { lng: 'en' }))
      .setNameLocalizations({
        "en-GB": i18next.t('commands.set-game.options.timezone.name', { lng: 'en' }),
        "en-US": i18next.t('commands.set-game.options.timezone.name', { lng: 'en' }),
        fr: i18next.t('commands.set-game.options.timezone.name', { lng: 'fr' })
      })
      .setDescription(i18next.t('commands.set-game.options.timezone.name', { lng: 'en' }))
      .setDescriptionLocalizations({
        "en-GB": i18next.t('commands.set-game.options.timezone.description', { lng: 'en' }),
        "en-US": i18next.t('commands.set-game.options.timezone.description', { lng: 'en' }),
        fr: i18next.t('commands.set-game.options.timezone.description', { lng: 'fr' })
      })
      .setRequired(true)
      .setAutocomplete(true)
    )
    .addStringOption(option => option
      .setName(i18next.t('commands.set-game.options.language.name', { lng: 'en' }))
      .setNameLocalizations({
        "en-GB": i18next.t('commands.set-game.options.language.name', { lng: 'en' }),
        "en-US": i18next.t('commands.set-game.options.language.name', { lng: 'en' }),
        fr: i18next.t('commands.set-game.options.language.name', { lng: 'fr' })
      })
      .setDescription(i18next.t('commands.set-game.options.language.name', { lng: 'en' }))
      .setDescriptionLocalizations({
        "en-GB": i18next.t('commands.set-game.options.language.description', { lng: 'en' }),
        "en-US": i18next.t('commands.set-game.options.language.description', { lng: 'en' }),
        fr: i18next.t('commands.set-game.options.language.description', { lng: 'fr' })
      })
      .setRequired(true)
      .addChoices(
        {
          name: 'English',
          value: 'en',
        },
        {
          name: 'Français',
          value: 'fr'
        }
      )
    ),
  autocomplete: async (inter: AutocompleteInteraction) => {
    if (inter.guildId == null) return;
    const focusedValue = inter.options.getFocused();

    inter.respond(timzeones
      .filter(
        tz => tz.countryCode.toLowerCase().includes(focusedValue.toLowerCase())
          || tz.countryName.toLowerCase().includes(focusedValue.toLowerCase())
          || tz.timeZone.toLowerCase().includes(focusedValue.toLowerCase())
          || tz.GMTOffset.toLowerCase().includes(focusedValue.toLowerCase())
      )
      .map(tz => ({
        name: `${tz.timeZone} - ${tz.countryName} (${tz.GMTOffset})`,
        value: tz.timeZone
      }))
      .slice(0, 25)
    )
  },
  run: async (inter: ChatInputCommandInteraction) => {
    if (inter.guildId == null || inter.channelId == null) return;

    const channel = inter.options.getChannel(i18next.t('commands.set-game.options.channel.name', { lng: 'en' })) as GuildTextBasedChannel;
    const timezone = inter.options.getString(i18next.t('commands.set-game.options.timezone.name', { lng: 'en' }));
    const language = inter.options.getString(i18next.t('commands.set-game.options.language.name', { lng: 'en' })) as addedLanguages;

    const supportedLanguages = Object.keys(i18next.services.resourceStore.data);

    if (channel == null || timezone == null || language == null || !channel.isTextBased() || supportedLanguages.includes(language) === false) {
      await inter.reply({
        content: "The arguments specified are invalid",
        ephemeral: true
      });
      return;
    }

    if (timzeones.find(tz => tz.timeZone === timezone) == null) {
      await inter.reply({
        content: "The timezone is not valid",
        ephemeral: true
      });
      return;
    }

    setGuildSettings(inter.guildId, {
      channelId: channel.id,
      timezone,
      language
    });



    const permsInChannel = (inter.channel as GuildTextBasedChannel).permissionsFor(await inter.guild!.members.fetchMe())

    const missingPerms = {
      "View channel": !permsInChannel.has(PermissionsBitField.Flags.ViewChannel),
      "Send messages": !permsInChannel.has(PermissionsBitField.Flags.SendMessages),
      "Embed links": !permsInChannel.has(PermissionsBitField.Flags.EmbedLinks),
      "Attach files": !permsInChannel.has(PermissionsBitField.Flags.AttachFiles),
      "Manage roles": !permsInChannel.has(PermissionsBitField.Flags.ManageRoles),
    }
    if (Object.values(missingPerms).some(v => v)) {
      await inter.reply({
        content: `${Object.values(missingPerms).filter(v => v).length > 1 ? 'Some permissions are' : 'A permission is'} missing in <#${inter.channelId}> :
          ${Object.entries(missingPerms).map(([key, value]) => {
          return `- ${value ? '❌' : '✅'} ${key}`
        }).join('\n')}`,
        ephemeral: true
      })

      return this
    }

    await inter.reply({
      content: `The game has been set up in <#${inter.channelId}>.`,
      ephemeral: true
    });

    channel.send(createMidnightGameMessage(inter.client, language, timezone, null))
  }
}

export default setGameCommand
