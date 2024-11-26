import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js'


const client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

client.on('ready', (b) => {
  console.log(`${b.user.displayName} is online.`)
})

client.login(process.env.TOKEN)
