"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class addUser {
    name = 'addUser';
    comType = command_1.CommandType.HIDDEN;
    async execute(intr) {
        await intr.reply('Test');
    }
}
exports.default = addUser;
