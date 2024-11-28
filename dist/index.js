"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("path");
require("fs");
const discord_js_1 = require("discord.js");
let client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds],
});
client.on('ready', (b) => {
    console.log(`${b.user.displayName} is online.`);
});
client.login(process.env.TOKEN);
