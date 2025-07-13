// Contrôleur des catégories : gère le CRUD des catégories
const Category = require('../models/categories');

// Liste toutes les catégories
exports.listCategories = async (req, res) => {
  const categories = await Category.find();
  res.render('categories/categories', { categories });
};

// Affiche le formulaire d'ajout d'une catégorie
exports.newCategoryForm = (req, res) => {
  res.render('categories/newCategory');
};

// Crée une nouvelle catégorie
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.redirect('/categories');
  } catch (err) {
    res.status(500).send('Erreur lors de la création de la catégorie');
  }
};

// Affiche le formulaire d'édition d'une catégorie
exports.editCategoryForm = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.redirect('/categories');
  const categories = await Category.find();
  res.render('categories/categories', { categories, editData: category });
};

// Met à jour une catégorie
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.findById(req.params.id);
    if (!category) return res.redirect('/categories');
    
    category.name = name;
    await category.save(); // Ceci déclenchera le middleware pre('save') pour regénérer le slug
    
    res.redirect('/categories');
  } catch (err) {
    res.status(500).send('Erreur lors de la mise à jour de la catégorie');
  }
};

// Supprime une catégorie
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/categories');
  } catch (err) {
    res.status(500).send('Erreur lors de la suppression de la catégorie');
  }
};