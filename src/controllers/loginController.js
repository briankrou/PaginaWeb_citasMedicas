exports.iniciarSesion =(token,usuario)=>{

  // controlllador base de datos
const { fetchData } = require('../data/contollerDB');

// Consulta a la base de datos
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



}

