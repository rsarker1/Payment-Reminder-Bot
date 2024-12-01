import { CommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'

export default class addUser implements Command {
  data = new SlashCommandBuilder().setName('add').setDescription('test')
  public async execute(intr: CommandInteraction): Promise<void> {
    await intr.reply('Test')
  }
}
