import 'dotenv/config'
import 'path'
import 'fs'
import { Client, Collection, GatewayIntentBits, REST, Routes } from 'discord.js'
import { Command } from './commands/command'
import { Bot } from './bot'
import addUser from './commands/addUser'
import { CommandHandler } from './commandHandler'


async function start() {
  const client: Client = new Client({
    intents: [GatewayIntentBits.Guilds],
  })
  const commands: Command[] = [new addUser()]
  
  const commandHandler = new CommandHandler(commands)
  
  const bot = new Bot(process.env.TOKEN!, client, commandHandler)
  
  if (process.argv[2] == 'register') {
    try {
      const rest = new REST().setToken(process.env.TOKEN!)
      let commandData = commands.map(({ data }) => data.toJSON())
      console.log(commandData)
  
      const data = await rest.put(Routes.applicationCommands(process.env.ID!), {
        body: commandData,
      })
      console.log('Success')
    } catch (error) {
      console.log('Error: Could not register commands')
      console.log(error)
    }
  }
  await bot.start()
}


start()
