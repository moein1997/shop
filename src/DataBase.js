const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Moein1376',
  database: 'shop',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL databsae "shop"!');
});


connection.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    console.log(results);
  });