const express = require('express');
const cadastroController = require('./controllers/cadastroController');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeContoller');
const imoveisControllers = require("./controllers/imoveisControllers");


const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true })); // Configurando o express para lidar com dados de formulários
app.use(express.static('public'));

app.use('/', loginController);
app.use('/', cadastroController);
app.use("/", homeController)
app.use("/", imoveisControllers);


app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});