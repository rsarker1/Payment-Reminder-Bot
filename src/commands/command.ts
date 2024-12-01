import { CommandInteraction, SlashCommandBuilder } from 'discord.js';


export interface Command {
    data: SlashCommandBuilder,
    execute(intr: CommandInteraction): Promise<void>
}

export enum CommandType {
    PUBLIC = 'PUBLIC',
    HIDDEN = 'HIDDEN'
}