import { Client, OAuth2Scopes } from "discord.js";

export function isProduction(): boolean {
  return process.env.NODE_ENV?.startsWith('prod') ?? false;
}

export function generateInvite(client: Client): string {
  return client.generateInvite({
    scopes: [
      OAuth2Scopes.Bot
    ],
    permissions: [
      'SendMessages',
      'ViewAuditLog',
      "ManageRoles",
      'ViewChannel',
      'UseApplicationCommands',
      'EmbedLinks',
      'AttachFiles',
      'ReadMessageHistory'
    ]
  })
}