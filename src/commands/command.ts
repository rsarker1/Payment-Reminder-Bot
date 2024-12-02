import { CommandInteraction, SharedSlashCommandSubcommands, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder, SlashCommandSubcommandBuilder,  } from 'discord.js';

export interface Command {
    name: string,
    desc: string,
    data: SlashCommandBuilder | SlashCommandSubcommandBuilder | SlashCommandOptionsOnlyBuilder, 
    execute(intr: CommandInteraction): Promise<void>
}

export enum CommandType {
    PUBLIC = 'PUBLIC',
    HIDDEN = 'HIDDEN'
}