
const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"))

  app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });
  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "inicio EJS" });
  });
  app.get("/servicios", (req, res) => {
    res.render("servicios", { titulo: "inicio EJS" });
  });

  app.get("/login", (req, res) => {
    res.render("login", { titulo: "inicio EJS" });
  });
  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: "Página 404" });
  });

app.listen(PORT, () => {
    console.log(`Servidro escuchando en el puerto: ${ PORT }`);
});