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
        .addSubcommandGroup(subcommandGroup => subcommandGroup
        .setName('options')
        .setDescription('The values to change')
        .addSubcommand(subcommand => subcommand
        .setName('user')
        .setDescription('The targeted user')
        .addUserOption(option => option
        .setName('target')
        .setDescription('Test')
        .setRequired(true))));
    async execute(intr) {
        //let user = intr.options.getSubcommand()
        await intr.reply('Test');
    }
}
exports.change = change;
