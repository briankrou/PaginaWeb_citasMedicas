
//const { erro } = require('console');
const express = require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');


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


// controll¿ador base de datos
const { fetchData } = require('./data/contollerDB');
fetchData();


  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: 'Página 404' });
  });


app.listen(PORT, () => {
    console.log(`Servidro escuchando en el puerto: ${ PORT }`);
});

