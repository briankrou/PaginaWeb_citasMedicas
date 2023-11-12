
//const { erro } = require('console');
const express = require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
// app.js
const { getConnection } = require('./data/conexion');// app.js

const app = express()


const PORT = process.env.PORT || 3000;


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"))

//routing
require('./router/routing')(app);

// middleware
app.use(morgan('dev'));

//conexion con base dedatos
const connection = getConnection();
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

connection.end();
//din de conexion base de datos



  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: 'Página 404' });
  });


app.listen(PORT, () => {
    console.log(`Servidro escuchando en el puerto: ${ PORT }`);
});

