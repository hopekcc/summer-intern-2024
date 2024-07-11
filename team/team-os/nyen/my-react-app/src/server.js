const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'ext_yensydney_gmail_com',
    password: '20050704',
    database: 'niniTest'
  });

db.connect(err => {
if (err) {
    console.error('Error connecting to the database:', err);
    return;
}
console.log('Connected to the MySQL database.');
});

app.get('/api/data', (req, res) => {
db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
    res.status(500).send(err);
    return;
    }
    res.json(results);
});
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});