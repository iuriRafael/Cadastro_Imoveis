// authenticationMiddleware.js

// authMiddleware.js

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        // Se o usuário estiver autenticado, continue para a próxima rota
        return next();
    }

    // Se o usuário não estiver autenticado, redirecione para a página de login
    res.redirect('/login');
}

module.exports = isAuthenticated;
