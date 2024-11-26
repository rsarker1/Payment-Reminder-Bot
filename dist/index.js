"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const discord_js_1 = require("discord.js");
dotenv.config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds]
});
client.on('ready', b => {
    console.log(`${b.user.tag} is online.`);
});
client.login(process.env.TOKEN);
