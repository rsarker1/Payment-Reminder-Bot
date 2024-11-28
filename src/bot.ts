import { Client, Events, Interaction } from 'discord.js';


export class Bot {
    constructor(private token: string, private client: Client) {

    }
    public async start(): Promise<void>{ 
        this.registerListeners()
        await this.login(this.token)
        this.client.on('ready', (b) => {
            console.log(`${b.user.displayName} is online.`)
          })
    }
    // Just need a chat text listener
    private registerListeners(): void {
         //this.client.on(Events.InteractionCreate, (event: Interaction) => this.onInteraction(intr));
    }
    private async login(token: string){
        try {
            this.client.login(token)
        } catch (error) {
            console.log('Login error has occured')
            return
        }
    }
}