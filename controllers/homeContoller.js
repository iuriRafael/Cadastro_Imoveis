const express = require('express');
const router = express.Router();
const homeModel = require('../models/homeModel');

router.get('/home',  async (req, res) => {
    try {
      const imoveis = await homeModel.getImoveis();
      console.log(imoveis);
      res.render('home', { imoveis });
      
      } catch (error) {
        console.error(error);
        res.redirect('/home');
      }
    });

module.exports = router;