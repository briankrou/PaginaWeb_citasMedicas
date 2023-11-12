// data/queries.js
const { getConnection } = require('./conexion');

function getAllData(consulta) {
  const connection = getConnection();

  connection.connect();

  return new Promise((resolve, reject) => {
    const sql = consulta;

    connection.query(sql, (err, results) => {
      connection.end();

      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { getAllData };
