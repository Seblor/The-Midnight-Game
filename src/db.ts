import sqlite from 'bun:sqlite';
import { isProduction } from './utils/misc';
import { addedLanguages } from '../@types/i18next';

export const db = sqlite.open(`./db-${isProduction() ? 'prod' : 'dev'}.sqlite`);

/**
 * Create a database with a single 
 */
async function initDb() {
  /**
   * Create table 'IgnoredChannels' with the columns:
   * - channelId: VARCHAR PRIMARY KEY
   * - guildId: VARCHAR
   */
  db.run(`
    CREATE TABLE IF NOT EXISTS MidnightGameChannel (
      guildId VARCHAR,
      channelId VARCHAR,
      timezone VARCHAR,
      language VARCHAR,
      PRIMARY KEY (guildId, channelId)
    );
  `);

  /**
   * Create table 'Winners'
   */
  db.run(`
    CREATE TABLE IF NOT EXISTS Winners (
      guildId VARCHAR,
      memberId VARCHAR,
      date DATE,
      delayms INTEGER,
      PRIMARY KEY (guildId, date)
    );
  `);

  /**
   * Create table 'Rewards'
   */
  db.run(`
    CREATE TABLE IF NOT EXISTS Rewards (
      guildId VARCHAR,
      number_of_wins INTEGER,
      rewardedRoleId VARCHAR,
      PRIMARY KEY (guildId, rewardedRoleId)
    );
  `);
}

export function setGuildSettings(guildId: string, data: { channelId: string, timezone: string, language: string }) {
  const { channelId, timezone, language } = data;
  db.run(`
    INSERT OR REPLACE INTO MidnightGameChannel (guildId, channelId, timezone, language)
    VALUES (?, ?, ?, ?)
  `, [guildId, channelId, timezone, language]);
}

export function getGuildSettings(guildId: string): { channelId: string, timezone: string, language: addedLanguages } | null {
  const result = db.prepare(`
    SELECT channelId, timezone, language
    FROM MidnightGameChannel
    WHERE guildId = ?
  `, [guildId]).values()

  if (!result || result.length === 0) return null;

  const [channelId, timezone, language] = result[0].map(value => value.toString());

  return { channelId, timezone, language: language as addedLanguages };
}

export function addWinner(guildId: string, memberId: string, date: Date): { numberOfWins: number, delayInMs: number } | null {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const delayInMs = minutes * 60 * 1000 + seconds * 1000 + milliseconds;

  try {
    db.run(`
    INSERT INTO Winners (guildId, memberId, date, delayms)
    VALUES (?, ?, ?, ?)
    `, [guildId, memberId, `${year}-${month}-${day}`, delayInMs]);

    const numberOfWins = db.prepare<{ numberOfWins: number }, string[]>(`
      SELECT COUNT(*) AS numberOfWins
      FROM Winners
      WHERE guildId = ?
      AND memberId = ?
    `, [guildId, memberId]).get()!.numberOfWins;
    return {
      numberOfWins,
      delayInMs
    };
  } catch (error) {
    return null;
  }
}

export function getWinnerOfDay(guildId: string, year: number, month: number, day: number): { memberId: string, delayms: number } {
  const winners = db.prepare<{ memberId: string, delayms: number }, string[]>(`
    SELECT memberId, delayms
    FROM Winners
    WHERE guildId = ?
      AND date = ?
  `, [guildId, `${year}-${month}-${day}`]).all();

  return winners.map(row => ({
    memberId: row.memberId.toString(),
    delayms: row.delayms
  }))[0];
}



export function getLeaderboard(guildId: string): { memberId: string, wins: number, averageDelay: number }[] {
  const leaderboard = db.prepare<{ memberId: string, wins: number, averageDelay: number }, string[]>(`
    SELECT memberId, COUNT(*) AS wins, AVG(delayms) AS averageDelay
    FROM Winners
    WHERE guildId = ?
    GROUP BY memberId
    ORDER BY wins DESC, averageDelay ASC
  `, [guildId]).all();

  return leaderboard.map(row => ({
    memberId: row.memberId.toString(),
    wins: row.wins,
    averageDelay: row.averageDelay
  }));
}

export function addReward(guildId: string, numberOfWins: number, rewardedRoleId: string) {
  db.run(`
    INSERT INTO Rewards (guildId, number_of_wins, rewardedRoleId)
    VALUES (?, ?, ?)
  `, [guildId, numberOfWins, rewardedRoleId]);
}

export function getRewards(guildId: string): { numberOfWins: number, rewardedRoleId: string }[] {
  const rewards = db.prepare<{ number_of_wins: number, rewardedRoleId: string }, string[]>(`
    SELECT number_of_wins, rewardedRoleId
    FROM Rewards
    WHERE guildId = ?
  `, [guildId]).all();

  return rewards.map(row => ({
    numberOfWins: row.number_of_wins,
    rewardedRoleId: row.rewardedRoleId.toString()
  }));
}

export function removeReward(guildId: string, rewardedRoleId: string) {
  db.run(`
    DELETE FROM Rewards
    WHERE guildId = ?
      AND rewardedRoleId = ?
  `, [guildId, rewardedRoleId]);
}

initDb();
