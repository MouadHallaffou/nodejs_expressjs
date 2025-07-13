const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/categories', categoriesController.getCategories);
router.post('/categories', categoriesController.postCategories);
router.get('/categories/edit/:id', categoriesController.getEdit);
router.put('/categories/edit/:id', categoriesController.putEdit);
router.delete('/categories/delete/:id', categoriesController.deleteData);

module.exports = router; 