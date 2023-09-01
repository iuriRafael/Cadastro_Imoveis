const { createConnection } = require('./db');

async function insertCadastro(name, email, password) {
  try {
    const connection = await createConnection();
    const sql = 'INSERT INTO cadastro (name, email, password) VALUES (?, ?, ?)';
   
    await connection.execute(sql, [name || null, email || null, password || null]);
   
    console.log('Cadastro inserido com sucesso');
  } catch (error) {
    console.error('Erro ao inserir cadastro:', error);
    throw error;
  }
}

module.exports = { insertCadastro};