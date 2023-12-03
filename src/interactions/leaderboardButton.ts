import { ButtonInteraction } from "discord.js";
import { getGuildSettings, getLeaderboard } from "../db";
import i18next from "i18next";

export async function showLeaderboard(inter: ButtonInteraction) {
  if (inter.guildId == null || inter.channelId == null) return;

  const leaderboard = getLeaderboard(inter.guildId);
  const { language = 'en' } = getGuildSettings(inter.guildId) ?? {};

  const leaders = leaderboard.slice(0, 10)

  const memberIndexInLeaderboard = leaderboard.findIndex(leader => leader.memberId === inter.user.id);

  let leadersStr = (
    await Promise.all(
      leaders.map(async (leader, index) => {
        const member = await inter.guild!.members.fetch(leader.memberId).catch(() => null);
        return i18next.t(`interactions.leaderboard.score-line`, {
          rank: index + 1,
          name: member?.displayName ?? "Unknown",
          score: leader.wins,
          count: leader.wins,
          average: Math.round(leader.averageDelay / 1e3),
          lng: language
        });
      })
    )
  ).join("\n");

  if (leaders.length === 0) {
    leadersStr = i18next.t(`interactions.leaderboard.no-leaderboard`, {
      lng: language
    });
  } else if (memberIndexInLeaderboard >= 10) {
    const memberAsLeader = leaderboard[memberIndexInLeaderboard]

    leadersStr += `
...
${i18next.t(`interactions.leaderboard.score-line`, {
      rank: memberIndexInLeaderboard + 1,
      name: inter.user.displayName ?? "Unknown",
      score: memberAsLeader.wins,
      average: Math.round(memberAsLeader.averageDelay / 1e3),
      lng: language
    })}`
  }

  await inter.reply({
    content: `**${i18next.t('interactions.leaderboard.leaderboard', { lng: language })}**\n${leadersStr}`,
    ephemeral: true
  });

}