const express = require('express');
const router = express.Router();

const {createConnection} = require('../models/db');

router.use(express.json()); // transforma o payload do request em json

router.get('/cadastro', (req, res) => {
    res.render('cadastro'); // Renderiza a página de cadastro (se você estiver usando EJS)
});

router.post('/cadastro', async (req, res) => {

    const { name, email, password } = req.body;

    console.log('Received data from form:', name, email, password);

    try {
         // Crie uma conexão com o banco de dados
         const connection = await createConnection();

         // Crie um novo usuário no banco de dados
         const sql = 'INSERT INTO cadastro (name, email, password) VALUES (?, ?, ?)';
         await connection.execute(sql, [name || null, email || null, password || null]);
         
         // Feche a conexão com o banco de dados
         connection.end();

         res.redirect('home');
         
    } catch (error) {
        console.error(error);
        res.render('cadastro', { error: 'Erro ao cadastrar usuário' });
    }
});

module.exports = router;
