import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'
import { db } from '../db'
import { readFile } from 'fs'

export class addUser implements Command {
  name = 'add'
  desc = 'Adds specified user to reminder list with options to choose values'
  data = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.desc)
    .addUserOption((option) =>
      option
        .setName('target')
        .setDescription('The member to add')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName('init-amount')
        .setDescription('The initial amount owed')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName('rate')
        .setDescription('The montly rate to add to the total amount owed')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('date')
        .setDescription('The day to send a reminder message')
        .setRequired(true)
        .setMinLength(10)
        .setMaxLength(10)
    )
    .addIntegerOption((option) =>
      option
        .setName('freq')
        .setDescription('The frequency in # of months to send the message')
        .setRequired(true)
    )
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    const user = intr.options.getUser('target')
    const initAmt = intr.options.getInteger('init-amount')
    const rate = intr.options.getInteger('rate')
    const date = intr.options.getString('date')
    const freq = intr.options.getInteger('freq')


    console.log(user)
    console.log(date)


    const insertQuery = `
      INSERT INTO users (id, username, init_amount, rate, msg_date, frequency)
      VALUES (?, ?, ?, ?, ?, ?)
    `

    let user_params = [user?.id, user, initAmt, rate, date, freq]
    // db.run(insertQuery, user_params, (err) => {
    //   if (err) console.log('Error inserting data:', err.message)
    //   else console.log('User inserted')
    // })

    await intr.reply('Test')
  }
}
