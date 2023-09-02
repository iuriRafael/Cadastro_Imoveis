const express = require('express');
const router = express.Router();
const cadastroModel = require('../models/cadastroModel');


router.use(express.json()); // transforma o payload do request em json

router.get('/cadastro', (req, res) => {
    res.render('cadastro'); // Renderiza a página de cadastro (se você estiver usando EJS)
});

router.post('/cadastro', async (req, res) => {

    const { name, email, password } = req.body;

    console.log('Received data from form:', name, email, password);

    try {
        await cadastroModel.Cadastro(name, email, password);

        req.session.user = { email, password };
         //iuri
         res.redirect('home');
         
    } catch (error) {
        console.error(error);
        res.render('cadastro', { error: 'Erro ao cadastrar usuário' });
    }
});

module.exports = router;
