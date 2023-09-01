const { createConnection } = require('./db');

async function getUserByEmailAndPassword(email, password) {
  let connection;

  try {
    connection = await createConnection(); // Crie uma conexão
    const sql = 'SELECT * FROM cadastro WHERE email = ? AND password = ?';
    const [rows] = await connection.execute(sql, [email, password]);

    return rows;
  } catch (error) {
    throw error;
  } 
}

module.exports = {
  getUserByEmailAndPassword,
};
