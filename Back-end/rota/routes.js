const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/formulario', formController.salvarDados);

module.exports = router;
