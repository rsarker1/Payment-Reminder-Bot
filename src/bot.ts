import { Client, CommandInteraction, Events, Interaction } from 'discord.js'
import { CommandHandler } from './commandHandler'

export class Bot {
  constructor(
    private token: string,
    private client: Client,
    private commandHandler: CommandHandler
  ) {}
  public async start(): Promise<void> {
    this.registerListeners()
    await this.login(this.token)
    this.client.on('ready', (b) => {
      console.log(`${b.user.displayName} is online.`)
    })
  }
  // Just need a chat text listener
  private registerListeners(): void {
    this.client.on(Events.InteractionCreate, (intr: Interaction) =>
      this.onInteraction(intr)
    )
  }
  private async onInteraction(intr: Interaction): Promise<void> {
    if (intr instanceof CommandInteraction) {
      try {
        await this.commandHandler.process(intr)
      } catch (error) {
        console.log('Error: Cannot process given interaction')
      }
    }
  }
  private async login(token: string) {
    try {
      this.client.login(token)
    } catch (error) {
      console.log('Login error has occured')
      return
    }
  }
}
