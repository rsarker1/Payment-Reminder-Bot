"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class addUser {
    name = 'addUser';
    com_type = command_1.CommandType.HIDDEN;
    async execute(event) {
        await event.reply('Test');
    }
}
exports.default = addUser;
