"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const discord_js_1 = require("discord.js");
class addUser {
    name = 'add';
    desc = 'Adds specified user to reminder list with options to choose values';
    data = new discord_js_1.SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.desc)
        .addUserOption((option) => option
        .setName('target')
        .setDescription('The member to add')
        .setRequired(true))
        .addIntegerOption((option) => option
        .setName('init-amount')
        .setDescription('The initial amount owed')
        .setRequired(true))
        .addIntegerOption((option) => option
        .setName('rate')
        .setDescription('The montly rate to add to the total amount owed')
        .setRequired(true))
        .addStringOption((option) => option
        .setName('date')
        .setDescription('The day to send a reminder message')
        .setRequired(true)
        .setMinLength(10)
        .setMaxLength(10))
        .addIntegerOption((option) => option
        .setName('freq')
        .setDescription('The frequency in # of months to send the message')
        .setRequired(true));
    async execute(intr) {
        const user = intr.options.getUser('target');
        // let initAmt = intr.options.getUser('init-amount')
        console.log(user);
        await intr.reply('Test');
    }
}
exports.addUser = addUser;
