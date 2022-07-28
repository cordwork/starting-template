import { CommandInteraction } from 'discord.js';
import { DiscordCommand } from '@cordwork/core';

@DiscordCommand({
  name: 'ping',
  description: 'The test command.',
  guilds: [process.env.GUILD || 'my guild name'],
})
export class PingCommand {
  
  async listener(interaction: CommandInteraction): Promise<void> {
    interaction.reply('Pong!');
  }

}