const express = require('express');
const router = express.Router();

const loginController = require('..//controllers/loginController');


const morgan = require('morgan');
// middleware

  //router.use(morgan('tiny'));
  //endpoints

  //endpoint principal
   router.get("/", (req, res) => { res.render("index", { titulo: "inicio EJS" });});

  //endpoint nosotros
   router.get("/nosotros", (req, res) => {res.render("nosotros", { titulo: "inicio EJS" });});

  //endpoint servicios
   router.get("/servicios", (req, res) => {res.render("servicios", { titulo: "inicio EJS" });});
  
  //endpoint login
    router.get("/login",(req,res) => {res.render("login", { titulo: "inicio EJS" });});

  //login iniciar sesion
    router.get('/login/iniciar',(req,res) => {loginController.iniciarSesion(req)})
  
  //enponit usuario
    router.get("/usuario", (req, res) => {res.render("usuario", { titulo: "inicio EJS" });});

    router.use((req, res, next) => {
      res.status(404).render("404", { titulo: 'Página 404' });
    });
  
    module.exports = router;





