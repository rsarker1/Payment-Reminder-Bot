"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const fs_1 = require("fs");
const sqlite3_1 = require("sqlite3");
let dbPath = './users.db';
let database = new sqlite3_1.Database(dbPath, (err) => {
    if (err)
        console.log('Error: Failed to create database');
    else {
        if ((0, fs_1.existsSync)(dbPath))
            console.log('Connected to existing database');
        else
            console.log('Database created. Connected to database');
    }
});
const setup_query = (0, fs_1.readFileSync)('./src/sql/populate.sql').toString();
database.run(setup_query, (err) => {
    if (err)
        console.log('Error: Could not run setup query');
    else
        console.log('Initial setup succeded');
});
exports.db = database;
