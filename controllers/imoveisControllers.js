const express = require('express');
const router = express.Router();
const multer = require('multer');
const imoveisModel = require('../models/postagem');
const isAuthenticated = require('../middleware/middleware');


router.use(express.json()); 

router.get('/imoveis', isAuthenticated, (req, res) => {
    res.render('imoveis');
});

//Configura o multer para lidar com uploads de arquivos
const storage = multer.diskStorage({
    destination: './uploads', // guardar na pasta 
    filename: (req, file, cb) => { //nome do arquivo
    
      const hash = Math.random().toString(36).substring(7); //Cria um titulo aleatorio pro arquivo cheio de caracter
      const filename = `${hash}_${file.originalname}`; // ele gruda a hash criado em cima com o titulo original
      cb(null, filename);  // função cb
    }
  });
  const upload = multer({ storage });

router.post('/imoveis', upload.single('image'), async (req, res) => {
    const { description, address, phone_number, value } = req.body;
    const uploadedFile = req.file;
    const filePath = uploadedFile.filename; 
  
    try {
      await imoveisModel.insertImovel(filePath, description, address, phone_number, value);

      req.session.successMessage = 'Imóvel cadastrado com sucesso!';
  
      res.redirect('/home');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao salvar os dados no banco de dados.');
    }
  });

module.exports = router;