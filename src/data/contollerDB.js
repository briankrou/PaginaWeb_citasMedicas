
//conexion con base dedatos
// app.js
const { getAllData } = require('./queries');

async function fetchData() {
  try {
    const data = await getAllData();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports ={ fetchData}