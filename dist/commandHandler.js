"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
class CommandHandler {
    commands;
    constructor(commands) {
        this.commands = commands;
    }
    async process(intr) {
        // Guard from self and other bots
        if (intr.user.id === intr.client.user?.id || intr.user.bot)
            return;
        let found = [...this.commands];
        let command;
        found.filter((com) => com.data.name === intr.commandName);
        if (found.length === 0) {
            console.log('Error: Cannot find command');
            return;
        }
        else if (found.length === 1)
            command = found[0];
        // @ts-expect-error
        await command.execute(intr);
    }
}
exports.CommandHandler = CommandHandler;
// addClientEventHandlers() {
//     // ... existing code
//     this.client.on(Events.InteractionCreate, (interaction) => {
//       this.interactionHandler.handleInteraction(
//         interaction as ChatInputCommandInteraction
//       );
//     });
//     getSlashCommands() {
//         return this.commands.map((command: Command) =>
//           command.slashCommandConfig.toJSON()
//         );
//       }
//     }
