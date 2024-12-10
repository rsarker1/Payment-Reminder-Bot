"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const discord_js_1 = require("discord.js");
const db_1 = require("../db");
const fs_1 = require("fs");
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
        .setRequired(true))
        .addIntegerOption((option) => option
        .setName('freq')
        .setDescription('The frequency in # of months to send the message')
        .setRequired(true));
    async execute(intr) {
        //let user = intr.options.getSubcommand()
        await intr.reply('Test');
        console.log(__dirname);
        db_1.db.exec((0, fs_1.readFileSync)(__dirname + '/sql/populate.sql').toString());
    }
}
exports.addUser = addUser;
