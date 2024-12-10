import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'
import { db } from '../db'
import { readFileSync } from 'fs'

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
    )
    .addIntegerOption((option) =>
      option
        .setName('freq')
        .setDescription('The frequency in # of months to send the message')
        .setRequired(true)
    )
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    //let user = intr.options.getSubcommand()
    await intr.reply('Test')
    // console.log(__dirname)
    // db.exec(readFileSync(__dirname + '/sql/populate.sql').toString())
  }
}
