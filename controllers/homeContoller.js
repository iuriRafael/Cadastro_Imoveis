const express = require('express');
const router = express.Router();

const { createConnection } = require("../models/db");


router.get('/home', async (req, res) => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM imoveis'; // Removido o filtro por id
        const [rows] = await connection.query(query);

        res.render('home', { imoveis: rows }); // Passa todos os imóveis para a página home

    } catch (error) {
        console.error(error);
        res.redirect('/home');
    }
});

module.exports = router;