const User = require('../models/user');
const bcrypt = require('bcrypt');

// Affiche le formulaire d'inscription
exports.getRegister = (req, res) => {
  res.render('register', { message: undefined });
};

// Traite l'inscription
exports.postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.render('register', { message: 'Email déjà utilisé.' });
    }
    const user = new User({ username, email, password });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('register', { message: 'Erreur lors de l\'inscription.' });
  }
};

// Affiche le formulaire de connexion
exports.getLogin = (req, res) => {
  res.render('login', { message: undefined });
};

// Traite la connexion
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.render('login', { message: 'Email ou mot de passe incorrect.' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.render('login', { message: 'Email ou mot de passe incorrect.' });
    }
    req.session.user = { id: user._id, username: user.username, email: user.email };
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.render('login', { message: 'Erreur lors de la connexion.' });
  }
};

// Déconnexion
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};

// Dashboard protégé
exports.getDashboard = (req, res) => {
  if (!req.session || !req.session.user) {
    return res.redirect('/login');
  }
  res.render('dashboard', { user: req.session.user });
}; 