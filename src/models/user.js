// Schéma Mongoose pour les utilisateurs (User)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false, trim: true }, // Nom d'utilisateur
  email:    { type: String, required: true, unique: true, trim: true }, // Email unique
  password: { type: String, required: true }, // Mot de passe hashé
  role:     { type: String, enum: ['user', 'admin'], default: 'user' }  // Rôle (user/admin)
});

// Hash du mot de passe avant sauvegarde
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Méthode pour comparer un mot de passe en clair avec le hash
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);