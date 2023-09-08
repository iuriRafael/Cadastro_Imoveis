const express = require('express');
const cadastroController = require('./controllers/cadastroController');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeContoller');
const imoveisControllers = require("./controllers/imoveisControllers");
const excluirControllers = require("./controllers/excluir_PublicacaoController");
const editarControllers = require("./controllers/editarPublicacaoController");

const session = require('express-session');


const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(session({
    secret: 'info63', // Deve ser mantido em segredo
    resave: false,
    saveUninitialized: false,
  }));

app.use('/', loginController);
app.use('/', cadastroController);
app.use("/", homeController)
app.use("/", imoveisControllers);
app.use("/", excluirControllers);
app.use("/", editarControllers);




app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});