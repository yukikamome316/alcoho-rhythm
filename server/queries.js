const Users = {
  createTable: `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      weight REAL NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );`,
  create: `INSERT INTO users (username, weight, email, password) VALUES (?, ?, ?, ?)`,
};

const DrinkingRecords = {
  createTable: `
    CREATE TABLE IF NOT EXISTS drinking_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      alcohol_amount REAL NOT NULL,
      condition INTEGER NOT NULL,
      date INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );`,
  create: `INSERT INTO drinking_records (user_id, alcohol_amount, condition, date, updated_at) VALUES (?, ?, ?, strftime('%s', ?), strftime('%s', ?))`,
};

const queries = { Users, DrinkingRecords };
export default queries;
