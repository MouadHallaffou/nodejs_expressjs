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

categories.pre('save', function(next) {
  if (this.name && (!this.slug || this.isModified('name'))) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  }
  next();
});

const categorys = mongoose.model('categorys', categories);
module.exports = categorys;