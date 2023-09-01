const express = require('express');
const router = express.Router();
const multer = require('multer');
const  { createConnection } = require("../models/db");

router.use(express.json()); // transforma para json

router.get('/imoveis', (req, res) => {
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
      const connection = await createConnection(); // Crie uma conexão
      const query = 'INSERT INTO imoveis (image_url, description, address, phone_number, value) VALUES (?, ?, ?, ?, ?)';
      const [result] = await connection.execute(query, [filePath, description, address, phone_number, value]);
  
      console.log('Dados e imagem enviados e salvos com sucesso!', result);
  
      res.redirect('/home');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao salvar os dados no banco de dados.');
    }
  });

module.exports = router;