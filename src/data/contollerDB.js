
//conexion con base dedatos
// app.js
const { getAllData } = require('./queries');

async function fetchData(consulta) {
  try {
    const data = await getAllData(consulta);
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports ={ fetchData}