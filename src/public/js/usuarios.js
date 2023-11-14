const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("usuarios"),{
        arrayUsuarios:[
            {id:25415,nombre:"Brayan Guevara",usuario:"BrianKrou",pasword:"Briankrou03"},
            {id:5522,nombre:"Administrador",usuraio:"Administrador",pasword:"administrador"}
        ]
    }
})

module.exports = router;