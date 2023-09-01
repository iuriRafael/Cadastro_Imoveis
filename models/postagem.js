const { createConnection } = require('./db');

async function insertImovel(imageUrl, description, address, phone_number, value) {
  try {
    const connection = await createConnection();
    const query = 'INSERT INTO imoveis (image_url, description, address, phone_number, value) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [imageUrl, description, address, phone_number, value]);

    console.log('Dados e imagem de imóvel enviados e salvos com sucesso!', result);

    return result;
  } catch (error) {
    console.error('Erro ao salvar os dados do imóvel no banco de dados:', error);
    throw error;
  }
}

module.exports = { insertImovel};
