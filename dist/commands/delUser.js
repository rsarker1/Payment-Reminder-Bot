"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delUser = void 0;
const discord_js_1 = require("discord.js");
class delUser {
    name = 'del';
    desc = 'Removes specified user from list';
    data = new discord_js_1.SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.desc)
        .addUserOption((option) => option
        .setName('target')
        .setDescription('The member to remove')
        .setRequired(true));
    async execute(intr) {
        //let user = intr.options.getSubcommand()
        await intr.reply('Test');
    }
}
exports.delUser = delUser;
