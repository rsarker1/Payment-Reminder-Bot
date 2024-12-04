import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'

export class delUser implements Command {
  name = 'add'
  desc = 'Adds specified user to reminder list with options to choose values'
  data = new SlashCommandBuilder()
    .setName(this.name) 
    .setDescription(this.desc)
    .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to add')
				.setRequired(true))
    .addIntegerOption(option => 
      option
        .setName('initial-amount')
        .setDescription('The initial amount owed')
    )
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    //let user = intr.options.getSubcommand()
    await intr.reply('Test')
  }
}
