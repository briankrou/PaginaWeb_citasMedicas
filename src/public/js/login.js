function iniciarSesion(email,password){

  console.log("Funcionando");

}




  $(document).ready(function() {
    // Definir la función para obtener las credenciales
    function obtenerCredenciales(event) {
    // Evitar la recarga de la página  
    event.preventDefault();
    
      const email = document.querySelector('#inputEmail').value;
      const password = document.querySelector('#inputPassword').value;

      iniciarSesion(email,password);

    }

    // Agregar un controlador de eventos al botón de "Iniciar sesión"
    $('#btnIniciarSesion').click(obtenerCredenciales);
  });

/*


    // controlllador base de datos
    const { fetchData } = require('\src\data\contollerDB.js');
      //iniciar secion
      (async () => {
        try {
          const resultado = await fetchData('SELECT * FROM usuarios');
      
          if (resultado) {
            const dataJSON = JSON.parse(resultado);
      
            if (dataJSON.length > 0) {
              const firstUser = dataJSON[0];
      
              console.log('Token:', firstUser.token);
      
            } else {
              console.log('No users found.');
            }
          } else {
            console.log('No data received from fetchData.');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
      


*/