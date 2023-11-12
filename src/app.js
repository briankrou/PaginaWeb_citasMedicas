
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

// Consulta a la base de datos
(async () => {
  try {
    const resultado = await fetchData('SELECT * FROM usuarios');

    if (resultado) {
      const users = JSON.parse(resultado);
      console.log(users);

      if (users.length > 0) {
        const firstUser = users[0];
        console.log('User ID:', firstUser.id);
        console.log('Nombre:', firstUser.nombre);
        console.log('Usuario:', firstUser.usuario);
        console.log('Clave:', firstUser.clave);
        console.log('Token:', firstUser.token);
      } else {
        console.log('No users found.');
      }
    } else {
      console.log('No data received from fetchData.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();


  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: 'Página 404' });
  });


  try {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto: ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error.message);
    // or console.error('Error starting the server:', error.stack);
  }
