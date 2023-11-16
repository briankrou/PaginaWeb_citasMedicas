const express = require('express');
const router = express.Router();

const Sesion = require('../controllers/loginController');

console.log(typeof(iniciarSesion));

const morgan = require('morgan');
// middleware

  //router.use(morgan('tiny'));
  //endpoints

  //endpoint principal
   router.get("/", (req, res) => { res.render("index", { titulo: "Inicio", estado: 'Iniciar Sesion' });});

  //endpoint nosotros
   router.get("/nosotros", (req, res) => {res.render("nosotros", { titulo: "Nosotros" ,estado: 'Iniciar Sesion' });});

  //endpoint servicios
   router.get("/servicios", (req, res) => {res.render("servicios", { titulo: "Servicios" ,estado: 'Iniciar Sesion' });});
  
  //endpoint login
    router.get("/login",(req,res) => {res.render("login", { titulo: "Login"  ,estado: 'Iniciar Sesion'});});
     
  //endpoint especialistas
    router.get("/especialistas",(req,res) => {res.render("especialistas", { titulo: "Especialistas" ,estado: 'Iniciar Sesion'});

  });

  //login iniciar sesion
    router.get('/login/iniciar', (req, res) => {
      const tocken = Sesion.iniciarSesion(req.query.user,req.query.password)
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
    
    
    module.exports = router;





