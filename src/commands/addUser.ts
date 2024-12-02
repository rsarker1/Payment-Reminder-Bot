import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'

export class addUser implements Command {
  name = 'add'
  desc = 'Adds specified user to reminder list with options to choose values'
  data = new SlashCommandBuilder()
    .setName(this.name) 
    .setDescription(this.desc)
    .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
    // .addSubcommand(subcommand =>
    //   subcommand
    //     .setName('user')
    //     .setDescription('User')
    //     .addUserOption(option => option.setName('target').setDescription('The user')))
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    //let user = intr.options.getSubcommand()
    await intr.reply('Test')
  }
}
