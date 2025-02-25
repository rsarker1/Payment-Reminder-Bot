import { CommandInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder, SlashCommandSubcommandBuilder,  } from 'discord.js';

type CustomCommand = SlashCommandBuilder & SlashCommandSubcommandBuilder & SlashCommandOptionsOnlyBuilder

export interface Command {
    name: string,
    desc: string,
    data: any, 
    execute(intr: CommandInteraction): Promise<void>
}

export enum CommandType {
    PUBLIC = 'PUBLIC',
    HIDDEN = 'HIDDEN'
}