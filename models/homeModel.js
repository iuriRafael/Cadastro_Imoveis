const { createConnection } = require('./db');

async function getImoveis() {
    try {
      const connection = await createConnection();
      const query = 'SELECT * FROM imoveis'; 
      const [rows] = await connection.query(query);
  
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  module.exports = { getImoveis };