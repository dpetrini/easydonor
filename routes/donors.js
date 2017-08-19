const express = require('express'),
	router = express.Router();

const mongo = require('../db/mongo');
const donorsModel = require('../models/donorsModel')(mongo);
const donorsController = require('../controllers/donorsController')(donorsModel);


// Bindinds for controllers
router.get('/', donorsController.getAll.bind(donorsController));
router.get('/donors', donorsController.createNew.bind(donorsController));
router.get('/:_id', donorsController.getById.bind(donorsController));
router.post('/', donorsController.create.bind(donorsController));
router.put('/:_id', donorsController.update.bind(donorsController));
router.delete('/:_id', donorsController.remove.bind(donorsController));

module.exports = router;
