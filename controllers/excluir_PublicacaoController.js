const express = require('express');
const router = express.Router();
const publicacaoModel = require("../models/excluir_PublicacaoModels");

router.post('/excluir/:id', async (req, res) => {
    const id = req.params.id; 
    try {

      const excluidaComSucesso = await publicacaoModel.excluirPublicacaoPorId(id);
  
      if (excluidaComSucesso) {
        res.redirect('/home'); // Altere para a página desejada
      } else {
        res.status(500).send('Erro ao excluir a publicação.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao excluir a publicação.');
    }
  });
  
  

module.exports = router;
