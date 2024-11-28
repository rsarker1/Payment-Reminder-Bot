import { CommandInteraction } from 'discord.js';


export interface Command {
    name: string,
    comType: CommandType,
    execute(intr: CommandInteraction): Promise<void>
}

export enum CommandType {
    PUBLIC = 'PUBLIC',
    HIDDEN = 'HIDDEN'
}