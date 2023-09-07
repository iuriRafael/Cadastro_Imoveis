const express = require('express');
const router = express.Router();
const homeModel = require('../models/homeModel');
const isAuthenticated = require('../middleware/middleware');



router.get('/home', isAuthenticated, async (req, res) => {
    try {
      const imoveis = await homeModel.getImoveis();

      const successMessage = req.session.successMessage;

    // Limpe a mensagem da sessão após exibi-la
    req.session.successMessage = null;

      console.log(imoveis);
      res.render('home', { imoveis, successMessage });
      
      } catch (error) {
        console.error(error);
        res.redirect('/home');
      }
    });

module.exports = router;