const user = require('../models/user');
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

// Affiche le formulaire d'édition d'un utilisateur
exports.editUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    req.flash('error', 'Utilisateur non trouvé.');
    return res.redirect('/admin');
  }
  res.render('editUser', { user, admin: req.session.user });
}

// Met à jour les informations d'un utilisateur
exports.updateUser = async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findById(req.params.id);
  
  if (!user) {
    req.flash('error', 'Utilisateur non trouvé.');
    return res.redirect('/admin');
  }
  user.username = username;
  user.email = email;
  await user.save();

  req.flash('success', 'Informations de l\'utilisateur mises à jour.');
  res.redirect('/admin');
}

// Change le rôle d’un utilisateur
exports.changeRole = async (req, res) => {
  const { role } = req.body;
  await User.findByIdAndUpdate(req.params.id, { role });
  req.flash('success', "Rôle de l'utilisateur mis à jour.");
  if (user.role === 'admin') {
  res.redirect('/admin')
  } else {
    res.redirect('/dashboard');
  }
};
