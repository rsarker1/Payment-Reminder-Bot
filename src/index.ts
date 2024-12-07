import 'dotenv/config'
import 'path'
import 'fs'
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js'
import { Command } from './commands/command'
import { Bot } from './bot'
import { addUser, change, delUser } from './commands'
import { CommandHandler } from './commandHandler'


async function start() {
  const client: Client = new Client({
    intents: [GatewayIntentBits.Guilds],
  })
  const commands: Command[] = [
    new addUser(),
    new delUser(),
    new change(),
  ]
  const commandHandler = new CommandHandler(commands)
  const bot = new Bot(process.env.TOKEN!, client, commandHandler)
  
  if (process.argv[2] == 'register') {
    try {
      const rest = new REST().setToken(process.env.TOKEN!)
      let commandData = commands.map(({ data }) => data.toJSON())
  
      await rest.put(Routes.applicationCommands(process.env.ID!), {
        body: commandData,
      })
      console.log('Success')
    } catch (error) {
      console.log('Error: Could not register commands')
    }
    process.exit()
  }
  await bot.start()
}

start()
