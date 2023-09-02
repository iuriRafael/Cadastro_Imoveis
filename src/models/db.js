const mysql = require('mysql2/promise');

async function createConnection() {
    try {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection;
        }
        const connection = await mysql.createConnection({
            url: 'mysql://root:BXmLarjbcQbtGP0ypoZq@containers-us-west-71.railway.app:6882/railway',
            host: 'containers-us-west-71.railway.app',
            user: 'root',
            password :'BXmLarjbcQbtGP0ypoZq',
            database: 'railway',
            port: 6882
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


