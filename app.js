const express = require('express');

const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ferry@19',
  database: 'list_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
  );
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);