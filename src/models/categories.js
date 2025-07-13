// Schéma Mongoose pour les catégories (Category)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: false,
    unique: true,
    trim: true
  }
});

// Génère automatiquement le slug à partir du nom si absent ou modifié
categories.pre('save', function(next) {
  if (this.name && (!this.slug || this.isModified('name'))) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  }
  next();
});

module.exports = mongoose.model('Category', categories);