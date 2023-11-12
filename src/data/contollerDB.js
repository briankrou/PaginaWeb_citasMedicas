
//conexion con base dedatos
const { getAllData } = require('./queries');

async function fetchData(consulta) {
  try {
    //Define una función asíncrona llamada fetchDataque toma una consulta SQL (`consultaconsulta) como argumento.
    const data = await getAllData(consulta);
    return JSON.stringify(data);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports ={ fetchData}