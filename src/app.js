
const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"))

require('./routes/routing')(app);
 
  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: 'Página 404' ,descripcion: 'Titulo de el sitio web' });
  });

app.listen(PORT, () => {
    console.log(`Servidro escuchando en el puerto: ${ PORT }`);
});