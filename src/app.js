const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const middlewares = require('./middleware/middlewares');

const router = require('./router/routing');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use('/',router);

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"))

///app.use(middlewares.notFound);
//app.use(middlewares.errorHandler);

const PORT=3000;
try {
  app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
  } catch (error) {
    console.error('Error starting the server:', error.message);
    // or console.error('Error starting the server:', error.stack);
  }
