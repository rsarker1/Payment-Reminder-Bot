import 'dotenv/config'
import 'path'
import 'fs'
import { Client, Collection, GatewayIntentBits } from 'discord.js'
import { Command } from './commands/command'
import { Bot } from './bot'

let client: Client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

let commands: Command[] = [
  
]

let bot = new Bot(process.env.TOKEN!, client)
bot.start()
