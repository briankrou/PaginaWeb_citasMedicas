const express = require('express');
const router = express.Router();

const iniciarSesion = require('../controllers/loginController');

console.log(typeof(iniciarSesion));

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
    router.get('/login/iniciar', (req, res) => {
      const tocken = iniciarSesion(req.query.user,req.query.password)
      console.log('Respuesta '+tocken)
      if(tocken!=false){
        res.set('token',tocken);
        res.send(true)
      }else{
        res.send(false)
      }

   
    });
  
  
  //enponit usuario
    router.get("/usuario", (req, res) => {res.render("usuario", { titulo: "inicio EJS" });});
    

    router.use((req, res, next) => {
      res.status(404).render("404", { titulo: 'Página 404' });
    });
  

    
    module.exports = router;





