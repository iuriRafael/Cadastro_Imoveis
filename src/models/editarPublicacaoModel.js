const { createConnection } = require('./db');


async function Publicacao(id) {
  try {
    const connection = await createConnection();
    const query = 'SELECT * FROM imoveis WHERE id = ?';
    const [rows] = await connection.execute(query, [id]);

    if (rows.length === 1) {
      return rows[0];
    } else {
      return null; 
    }
  } catch (error) {
    console.error(`Erro ao buscar a publicação com ID ${id}:`, error);
    throw error;
  }
}

async function atualizarPublicacao(id, Descricao, Endereco, Telefone, Valor) {
  try {
    const connection = await createConnection();
    const query = 'UPDATE imoveis SET description = ?, address = ?, phone_number = ?, value = ? WHERE id = ?';
    await connection.execute(query, [Descricao, Endereco, Telefone, Valor, id]);

    console.log("Publicação atualizada com sucesso");

    return true; 
  } catch (error) {
    console.error("Erro ao atualizar a publicação com ID");
    throw error;
  }
}

module.exports = { Publicacao, atualizarPublicacao };
