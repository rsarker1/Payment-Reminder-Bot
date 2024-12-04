"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delUser = void 0;
const discord_js_1 = require("discord.js");
class delUser {
    name = 'add';
    desc = 'Adds specified user to reminder list with options to choose values';
    data = new discord_js_1.SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.desc)
        .addUserOption(option => option
        .setName('target')
        .setDescription('The member to add')
        .setRequired(true))
        .addIntegerOption(option => option
        .setName('initial-amount')
        .setDescription('The initial amount owed'));
    async execute(intr) {
        //let user = intr.options.getSubcommand()
        await intr.reply('Test');
    }
}
exports.delUser = delUser;
