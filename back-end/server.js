const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/items', (req, res) => {
  const query = `SELECT * FROM items`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to retrieve items' });
    } else {
      res.json(rows);
    }
  });
});

app.post('/items', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Item name is required' });
  }

  const query = `INSERT INTO items (name) VALUES (?)`;
  db.run(query, [name], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to add item' });
    } else {
      res.json({ id: this.lastID, name }); // return the newly added item with its ID
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});