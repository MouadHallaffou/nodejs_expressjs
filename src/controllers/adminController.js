const User = require('../models/user');

// Affiche la liste de tous les utilisateurs
exports.dashboard = async (req, res) => {
  const users = await User.find();
  res.render('admin', { users, admin: req.session.user });
};

// Supprime un utilisateur
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  req.flash('success', 'Utilisateur supprimé avec succès.');
  res.redirect('/admin');
};

// Change le rôle d’un utilisateur
exports.changeRole = async (req, res) => {
  const { role } = req.body;
  await User.findByIdAndUpdate(req.params.id, { role });
  req.flash('success', "Rôle de l'utilisateur mis à jour.");
  res.redirect('/admin');
};
