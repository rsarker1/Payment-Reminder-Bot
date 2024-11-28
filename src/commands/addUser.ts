import { CommandInteraction } from 'discord.js'
import { Command, CommandType } from './command'

export default class addUser implements Command {
  name = 'addUser'
  comType = CommandType.HIDDEN
  public async execute(intr: CommandInteraction): Promise<void> {
    await intr.reply('Test')
  }
}
