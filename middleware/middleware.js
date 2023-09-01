// authenticationMiddleware.js

function isAuthenticated(req, res, next) {
    // Verifique se o usuário está autenticado, por exemplo, verificando se há uma sessão válida
    if (req.isAuthenticated()) {
      // Se o usuário estiver autenticado, chame o próximo middleware
      return next();
    }
  
    // Se o usuário não estiver autenticado, redirecione para a página de login (ou outra página)
    res.redirect('/login'); // Altere para a página de login do seu aplicativo
  }
  