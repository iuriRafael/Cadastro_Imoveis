const { createConnection } = require('./db');

async function excluirPublicacaoPorId(id) {
  try {
    const connection = await createConnection();

    // Execute uma consulta de exclusão com base no ID
    const query = 'DELETE FROM imoveis WHERE id = ?';
    await connection.execute(query, [id]);

    console.log(`Publicação com ID ${id} excluída com sucesso`);

    // Retorne um indicativo de que a exclusão foi bem-sucedida
    return true;
  } catch (error) {
    console.error(`Erro ao excluir a publicação com ID ${id}:`, error);
    throw error;
  }
}

module.exports = { excluirPublicacaoPorId };
