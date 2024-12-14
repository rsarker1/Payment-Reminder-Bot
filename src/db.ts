import { readFileSync, existsSync } from 'fs'
import { Database } from 'sqlite3'

let dbPath = './users.db'

let database = new Database(dbPath, (err) => {
  if (err) console.log('Error: Failed to create database')
  else {
    if (existsSync(dbPath)) console.log('Connected to existing database')
    else console.log('Database created. Connected to database')
  }
})

const setup_query = readFileSync('./src/sql/populate.sql').toString()

database.run(setup_query, (err) => {
  if (err) console.log('Error: Could not run setup query')
  else console.log('Initial setup succeded')
})

export const db = database
