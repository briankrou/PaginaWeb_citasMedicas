
const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"))

require('./router/routing')(app);
 
  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: 'Página 404' });
  });

app.listen(PORT, () => {
    console.log(`Servidro escuchando en el puerto: ${ PORT }`);
});