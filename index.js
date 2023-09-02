const express = require('express');
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');
const homeController = require('./src/controllers/homeContoller');
const imoveisControllers = require("./src/controllers/imoveisControllers");
const excluirControllers = require("./src/controllers/excluir_PublicacaoController");
const editarControllers = require("./src/controllers/editarPublicacaoController");

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