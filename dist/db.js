"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const fs_1 = require("fs");
const sqlite3_1 = require("sqlite3");
let database = new sqlite3_1.Database('./users.db', (err) => {
    if (err)
        console.log('Error: Failed to create database');
    else
        console.log('Database created');
});
const init_query = (0, fs_1.readFileSync)('./src/sql/populate.sql').toString();
database.run(init_query, (err) => {
    if (err) {
        console.log(err);
        console.log('Error: Could not run query');
    }
    else
        console.log('Initial setup succeded');
});
exports.db = database;
