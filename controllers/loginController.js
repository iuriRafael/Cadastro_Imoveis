
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.use(express.json()); 

router.get('/login', (req, res) => {
    res.render('login'); 
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const rows = await userModel.login(email, password);

        if (rows.length > 0) {
            console.log("Usuario logado");
            res.redirect('/home');
        } else {

            res.render('login', { error: 'Credenciais inválidas' });
            console.log("Usuario negado")
        }
        
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'Erro ao fazer login' });
    }
});

module.exports = router;
