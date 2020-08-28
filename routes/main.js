const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/all', mainController.all);
router.post('/serie/new/create', mainController.createSerie);
router.get('/serie/:name', mainController.serie);

module.exports = router;