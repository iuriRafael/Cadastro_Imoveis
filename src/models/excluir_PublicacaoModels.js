const { createConnection } = require('./db');

async function excluirPublicacaoPorId(id) {
  try {
    const connection = await createConnection();

    const query = 'DELETE FROM imoveis WHERE id = ?';
    await connection.execute(query, [id]);

    console.log(`Publicação com ID ${id} excluída com sucesso`);

    return true;
  } catch (error) {
    console.error(`Erro ao excluir a publicação com ID ${id}:`, error);
    throw error;
  }
}

module.exports = { excluirPublicacaoPorId };
