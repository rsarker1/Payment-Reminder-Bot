"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.change = void 0;
const discord_js_1 = require("discord.js");
class change {
    name = 'change';
    desc = 'Change specified value for given user';
    data = new discord_js_1.SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.desc)
        .addSubcommandGroup((subcommandGroup) => subcommandGroup
        .setName('options')
        .setDescription('The values to change')
        .addSubcommand((subcommand) => subcommand
        .setName('init-amount')
        .setDescription('The initial amount owed')
        .addUserOption((option) => option
        .setName('target')
        .setDescription('The user to edit')
        .setRequired(true))
        .addIntegerOption((option) => option
        .setName('amount')
        .setDescription('The amount to change to')
        .setRequired(true)))
        .addSubcommand((subcommand) => subcommand
        .setName('day')
        .setDescription('The specific day to send out a message')
        .addUserOption((option) => option
        .setName('target')
        .setDescription('The user to edit')
        .setRequired(true))
        .addStringOption((option) => option
        .setName('date')
        .setDescription('The day to send a reminder message')
        .setRequired(true))));
    async execute(intr) {
        //let user = intr.options.getSubcommand()
        await intr.reply('Test');
    }
}
exports.change = change;
