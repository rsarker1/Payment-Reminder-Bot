import { CommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'


export default class addUser implements Command {
    name = 'addUser'
    comType = CommandType.HIDDEN
    public async execute(event: CommandInteraction): Promise<void> {
        await event.reply('Test')
    }
} 
