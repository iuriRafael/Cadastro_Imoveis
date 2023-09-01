// // middleware.js

// function verificarAutenticacao(req, res, next) {
//     // Verifique se é a rota de login; se for, apenas chame next() sem redirecionar
//     if (req.path === '/login') {
//         return next();
//     }

//     if (req.session.id && req.session.name && req.session.email) {
//         // O usuário está autenticado, prossiga para a próxima rota
//         return next();
//     } else {
//         // O usuário não está autenticado, redirecione-o para a página de login ou retorne um erro
//         res.redirect('/login'); // ou res.status(401).send('Não autorizado');
//     }
// }

// module.exports = { verificarAutenticacao };

  
  