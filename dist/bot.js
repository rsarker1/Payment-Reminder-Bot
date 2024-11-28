"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
class Bot {
    token;
    client;
    commandHandler;
    constructor(token, client, commandHandler) {
        this.token = token;
        this.client = client;
        this.commandHandler = commandHandler;
    }
    async start() {
        this.registerListeners();
        await this.login(this.token);
        this.client.on('ready', (b) => {
            console.log(`${b.user.displayName} is online.`);
        });
    }
    // Just need a chat text listener
    registerListeners() {
        this.client.on(discord_js_1.Events.InteractionCreate, (intr) => this.onInteraction(intr));
    }
    async onInteraction(intr) {
        if (intr instanceof discord_js_1.CommandInteraction) {
            try {
                await this.commandHandler.process(intr);
            }
            catch (error) {
                console.log('Error: Cannot process given interaction');
            }
        }
    }
    async login(token) {
        try {
            this.client.login(token);
        }
        catch (error) {
            console.log('Login error has occured');
            return;
        }
    }
}
exports.Bot = Bot;
