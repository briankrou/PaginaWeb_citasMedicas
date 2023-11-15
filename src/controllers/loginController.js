 class Sesion{

  iniciarSesion(user,password){

    if(user=='brianKru'&password=='1234'){
      return '25122552214455b'
    }else{
      return false
    }
  }

}

module.exports=new Sesion();

