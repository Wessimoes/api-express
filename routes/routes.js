const express 	= require('express');
const router	= express.Router();

// Controllers
const apiController = require('../Controllers/ApiController');

/* GET home. */
router.get('/', function(req, res) {
  res.render('index', { title: 'synapi' });
});

/* GET Cidades. */
router.get('/api/cidades', apiController.cidades);

/* GET Orgaos. */
router.get('/api/orgaos', apiController.orgaos);

/* GET Unidades. */
router.get('/api/unidades', apiController.unidades);

module.exports = router;