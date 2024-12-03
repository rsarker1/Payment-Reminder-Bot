import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { Command, CommandType } from './command'

export class change implements Command {
  name = 'change'
  desc = 'Change specified value for given user'
  data = new SlashCommandBuilder()
    .setName(this.name) 
    .setDescription(this.desc)
    .addSubcommandGroup(subcommandGroup =>
      subcommandGroup
        .setName('options')
        .setDescription('The values to change')
        .addSubcommand(subcommand => subcommand
          .setName('user')
          .setDescription('The targeted user')
          .addUserOption(option => 
            option
              .setName('target')
              .setDescription('Test')
              .setRequired(true)
          )
        )
    )
  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    //let user = intr.options.getSubcommand()
    await intr.reply('Test')
  }
}
