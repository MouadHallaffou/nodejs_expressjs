const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.getCategories);
router.post('/', categoriesController.postCategories);
router.get('/edit/:id', categoriesController.getEdit);
router.put('/edit/:id', categoriesController.putEdit);
router.delete('/delete/:id', categoriesController.deleteData);

module.exports = router; 