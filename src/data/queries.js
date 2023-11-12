// data/queries.js
const { getConnection } = require('./conexion');

function getAllData(consulta) {
  //Crea una conexión de base de datos MySQL
  const connection = getConnection();
  //conecta a la base de datos
  connection.connect();

  return new Promise((resolve, reject) => {
    const sql = consulta;

    connection.query(sql, (err, results) => {
      if (err) {
        //rechaza la promesa con el error
        reject(err);
      } else {
        // resuelve la promesa con los resultados de la consulta
        resolve(results);
      }
      //cierra la conexión a la base de datos
      connection.end();
    });
  });
}

module.exports = { getAllData };
