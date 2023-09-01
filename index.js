const express = require('express');
const cadastroController = require('./controllers/cadastroController');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeContoller');
const imoveisControllers = require("./controllers/imoveisControllers");
const excluirControllers = require("./controllers/excluir_PublicacaoController");

const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true })); // Configurando o express para lidar com dados de formulários
app.use(express.static('public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/', loginController);
app.use('/', cadastroController);
app.use("/", homeController)
app.use("/", imoveisControllers);
app.use("/", excluirControllers);



app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});