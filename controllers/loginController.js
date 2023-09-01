
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.use(express.json()); // transforma o payload do request em json

router.get('/login', (req, res) => {
    res.render('login'); // Renderiza a página de login (se você estiver usando EJS)
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const rows = await userModel.getUserByEmailAndPassword(email, password);

        if (rows.length > 0) {
            // Usuário encontrado, faça o redirecionamento para a página de sucesso ou home
            console.log("Usuario logado");
            res.redirect('/home');
        } else {
            // Usuário não encontrado ou credenciais incorretas
            res.render('login', { error: 'Credenciais inválidas' });
            console.log("Usuario negado")
        }
        
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'Erro ao fazer login' });
    }
});

module.exports = router;
