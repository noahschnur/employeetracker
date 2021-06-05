const mysql = require("mysql");

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_NAME,
  port:3306,
  // Your username
  user: process.env.DB_USER,
  // Your password
  password: process.env.DB_PW,
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;