import { ActionRowBuilder, AttachmentBuilder, ButtonBuilder, ButtonStyle, Client, EmbedBuilder } from "discord.js";
import { generateInvite } from "./utils/misc";
import { logo } from "./interactions/midnightButton";
import i18next from "i18next";
import { addedLanguages } from "../@types/i18next";


export function createMidnightGameMessage(client: Client, language: addedLanguages, timezone: string, lastWinner: { id: string; delay: number; date: { year: number; month: number; day: number; }; } | null): { embeds: EmbedBuilder[]; components: ActionRowBuilder<ButtonBuilder>[]; files: AttachmentBuilder[]; } {
  return {
    embeds: [
      new EmbedBuilder()
        .setTitle(i18next.t('embed.midnight.title', { lng: language }))
        .setDescription(i18next.t('embed.midnight.description', {
          timezone,
          timezoneUrl: `https://www.zeitverschiebung.net/en/timezone/${timezone.toLowerCase().replace('/', '--')}`,
          interpolation: { escapeValue: false },
          lng: language
        }))
        .setThumbnail('attachment://logo.webp')
        .addFields(lastWinner != null ? [{
          name: i18next.t('embed.midnight.last-winner-timestamp', {
            lastWinnerTimestamp: Math.floor(new Date().getTime() / 1000),
            lng: language
          }),
          value: i18next.t('embed.midnight.last-winner', {
            lastWinnerId: lastWinner.id,
            lastWinnerDelay: lastWinner.delay < 1e3
              ? `0.${String(lastWinner.delay).padStart(3, '0')}`
              : Math.round(lastWinner.delay / 1000),
            lng: language
          })
        }] : [])
        .setColor(255)
    ],
    components: [
      new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('btn-midnight')
            .setLabel(i18next.t('buttons.midnight', { lng: language }))
            .setStyle(ButtonStyle.Primary),
          new ButtonBuilder()
            .setCustomId('btn-leaderboard')
            .setLabel(i18next.t('buttons.leaderboard', { lng: language }))
            .setStyle(ButtonStyle.Secondary),
          new ButtonBuilder()
            .setCustomId('btn-rewards')
            .setLabel(i18next.t('buttons.rewards', { lng: language }))
            .setStyle(ButtonStyle.Success),
          new ButtonBuilder()
            .setLabel(i18next.t('buttons.add-to-server', { lng: language }))
            .setStyle(ButtonStyle.Link)
            .setURL(generateInvite(client))
        )
    ],
    files: [
      logo
    ]
  };
}
