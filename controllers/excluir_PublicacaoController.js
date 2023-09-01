const express = require('express');
const router = express.Router();
const publicacaoModel = require("../models/excluir_PublicacaoModels");

router.post('/excluir/:id', async (req, res) => {
    const idDaPublicacao = req.params.id; // Obtenha o ID da publicação a ser excluída
  
    try {

      const excluidaComSucesso = await publicacaoModel.excluirPublicacaoPorId(idDaPublicacao);
  
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
