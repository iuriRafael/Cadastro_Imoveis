const mysql = require('mysql2/promise');

async function createConnection() {
    try {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection;
        }
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'iuriimoveis'
        });

        console.log("Connectou no mysql");
        global.connection = connection;
        return connection;
    } catch (error) {
        console.error("Erro ao conectar");
        throw error;
    }
}

module.exports = {createConnection}


