"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class addUser {
    data = new discord_js_1.SlashCommandBuilder().setName('add').setDescription('test');
    async execute(intr) {
        await intr.reply('Test');
    }
}
exports.default = addUser;
