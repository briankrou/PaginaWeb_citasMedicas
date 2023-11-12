// conexion.js
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

function getConnection() {
  // Read the configuration from config.json
  const rawdata = fs.readFileSync(path.join(__dirname, 'config.json'));
  const config = JSON.parse(rawdata);

  // Create MySQL connection
  const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  });

  return connection;
}

module.exports = { getConnection };
