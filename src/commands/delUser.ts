import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'

export class delUser implements Command {
  name = 'del'
  desc = 'Removes specified user from list'
  data = new SlashCommandBuilder()
    .setName(this.name) 
    .setDescription(this.desc)
    .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to remove')
				.setRequired(true))
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    //let user = intr.options.getSubcommand()
    await intr.reply('Test')
  }
}
