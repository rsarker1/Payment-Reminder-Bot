import { CommandInteraction } from 'discord.js';


export interface Command {
    name: string,
    comType: CommandType,
    execute(event: CommandInteraction): Promise<void>
}

export enum CommandType {
    PUBLIC = 'PUBLIC',
    HIDDEN = 'HIDDEN'
}