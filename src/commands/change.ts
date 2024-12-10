import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'
import { Database } from 'sqlite3'

export class change implements Command {
  name = 'change'
  desc = 'Change specified value for given user'
  data = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.desc)
    .addSubcommandGroup((subcommandGroup) =>
      subcommandGroup
        .setName('options')
        .setDescription('The values to change')
        .addSubcommand((subcommand) =>
          subcommand
            .setName('init-amount')
            .setDescription('The initial amount owed')
            .addUserOption((option) =>
              option
                .setName('target')
                .setDescription('The user to edit')
                .setRequired(true)
            )
            .addIntegerOption((option) =>
              option
                .setName('amount')
                .setDescription('The amount to change to')
                .setRequired(true)
            )
        )
        .addSubcommand((subcommand) =>
          subcommand
            .setName('day')
            .setDescription('The specific day to send out a message')
            .addUserOption((option) =>
              option
                .setName('target')
                .setDescription('The user to edit')
                .setRequired(true)
            )
            .addStringOption((option) =>
              option
                .setName('date')
                .setDescription('The day to send a reminder message')
                .setRequired(true)
            )
        )
    )
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    //let user = intr.options.getSubcommand()
    await intr.reply('Test')
  }
}
