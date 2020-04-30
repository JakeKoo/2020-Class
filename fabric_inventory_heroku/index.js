const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'ba20a1efdaa699',
  password : '4b9377da',
  database : 'heroku_58c64d732ee7859'
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/stock', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT f.subtype, f.color, f.colorsecondary, s.length, s.width, s.basesaleprice FROM fabric AS f JOIN stock AS s ON f.idfabric = s.idfabric;', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
 console.log('Go to http://localhost:5000/stock so you can see the data.');
});