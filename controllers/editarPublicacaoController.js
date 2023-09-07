const express = require('express');
const router = express.Router();
const publicacaoModel = require('../models/editarPublicacaoModel');
const isAuthenticated = require('../middleware/middleware');
 

router.get('/editar/:id', isAuthenticated, async (req, res) => {
  const id= req.params.id; 

  try {
    const publicacao = await publicacaoModel.Publicacao(id);

    if (publicacao) {
 
      res.render('editarPublicacao', { publicacao });
    } else {
      res.status(404).send('Publicação não encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar a publicação para edição');
  }
});

router.post('/atualizar', async (req, res) => {
  const id = req.body.id;
  const Descricao = req.body.description || null;
  const Endereco = req.body.address || null;
  const Telefone = req.body.phone_number || null;
  const Valor = req.body.value || null;

  try {
    const atualizacao = await publicacaoModel.atualizarPublicacao(id, Descricao, Endereco, Telefone, Valor);

    if (atualizacao) {
      // Configurar a mensagem de sucesso na sessão
      req.session.successMessage = 'Imóvel atualizado com sucesso!';
    } else {
      req.session.errorMessage = 'Erro ao atualizar a publicação.';
    }

    // Redirecione para a página home
    res.redirect('/home');
  }  catch (error) {
    console.error(error);
    req.session.errorMessage = 'Erro ao atualizar a publicação.';
    res.redirect('/home');
  }
});

module.exports = router;
