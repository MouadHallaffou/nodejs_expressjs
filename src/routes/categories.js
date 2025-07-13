// Routes de gestion des catégories (CRUD)
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const requireAdmin  = require('../middleware/role');

// Liste des catégories
router.get('/categories', requireAdmin, categoriesController.listCategories);
// Formulaire d'ajout
router.get('/categories/new', requireAdmin, categoriesController.newCategoryForm);
// Création d'une catégorie
router.post('/categories', requireAdmin, categoriesController.createCategory);
// Formulaire d'édition
router.get('/categories/edit/:id', requireAdmin, categoriesController.editCategoryForm);
// Mise à jour d'une catégorie
router.put('/categories/edit/:id', requireAdmin, categoriesController.updateCategory);
// Suppression d'une catégorie
router.delete('/categories/delete/:id', requireAdmin, categoriesController.deleteCategory);

module.exports = router; 