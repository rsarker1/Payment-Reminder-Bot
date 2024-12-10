"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3_1 = require("sqlite3");
let database = new sqlite3_1.Database('../../users.sqlite');
exports.db = database;
