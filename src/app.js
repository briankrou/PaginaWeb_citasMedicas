
//const { erro } = require('console');
const express = require('express')

const morgan = require('morgan');
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


//inicia servidor
  try {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto: ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error.message);
    // or console.error('Error starting the server:', error.stack);
  }
