//Aqui vamos a usar un modulo de express llamado Router
const express = require('express');
const router = express.Router();

//importamos nuestro customerController
const customerController =require('../controllers/customerController');

//Rutas 

//router escucha a travez del metodo "get "("la ruta",ejecuta)
// Rutas
router.get('/', customerController.login);
router.post('/login', customerController.login_in);
router.get('/register', customerController.register);
router.post('/register', customerController.save_register);
router.get('/list', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);







module.exports = router;


