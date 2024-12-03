"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("path");
require("fs");
const discord_js_1 = require("discord.js");
const bot_1 = require("./bot");
const commands_1 = require("./commands");
const commandHandler_1 = require("./commandHandler");
async function start() {
    const client = new discord_js_1.Client({
        intents: [discord_js_1.GatewayIntentBits.Guilds],
    });
    const commands = [new commands_1.addUser()];
    const commandHandler = new commandHandler_1.CommandHandler(commands);
    const bot = new bot_1.Bot(process.env.TOKEN, client, commandHandler);
    if (process.argv[2] == 'register') {
        try {
            const rest = new discord_js_1.REST().setToken(process.env.TOKEN);
            let commandData = commands.map(({ data }) => data.toJSON());
            await rest.put(discord_js_1.Routes.applicationCommands(process.env.ID), {
                body: commandData,
            });
            console.log('Success');
        }
        catch (error) {
            console.log('Error: Could not register commands');
        }
        process.exit();
    }
    await bot.start();
}
start();
