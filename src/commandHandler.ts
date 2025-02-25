import { CommandInteraction } from 'discord.js'
import { Command } from './commands/command'

export class CommandHandler {
  constructor(public commands: Command[]) {}
  public async process(intr: CommandInteraction): Promise<void> {
    // Guard from self and other bots
    if (intr.user.id === intr.client.user?.id || intr.user.bot) return

    let found = [...this.commands]
    let command: Command 
    found = found.filter((com) => com.data.name === intr.commandName)
    if (found.length === 0) {
      console.log('Error: Cannot find command')
      return
    } else if (found.length === 1) command = found[0]
    // @ts-expect-error
    await command.execute(intr)
  }
}

