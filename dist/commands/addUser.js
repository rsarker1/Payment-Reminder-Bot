"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class addUser {
    name = 'add';
    desc = 'Adds specified user to reminder list with options to choose values';
    data = new discord_js_1.SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.desc)
        .addUserOption(option => option
        .setName('target')
        .setDescription('The member to ban')
        .setRequired(true));
    // .addSubcommand(subcommand =>
    //   subcommand
    //     .setName('user')
    //     .setDescription('User')
    //     .addUserOption(option => option.setName('target').setDescription('The user')))
    async execute(intr) {
        //let user = intr.options.getSubcommand()
        await intr.reply('Test');
    }
}
exports.default = addUser;
