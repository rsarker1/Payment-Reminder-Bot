import { Database } from 'sqlite3'

let database = new Database('../../users.sqlite')

export const db = database 