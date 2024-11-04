const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (it will create a file named 'items.db')
const db = new sqlite3.Database('./items.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');

    // Create an 'items' table if it doesn't exist
    db.run(
      `CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
            )`,
      (err) => {
        if (err) {
          console.error('Error creating table:', err.message);
        }
      }
    );
  }
});

module.exports = db;
