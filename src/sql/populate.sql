CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    init_amount REAL DEFAULT 0.0,
    rate REAL DEFAULT 0.0,
    msg_date TEXT DEFAULT (DATE('now')),
    frequency INTEGER DEFAULT 1
)