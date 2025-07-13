// Contrôleur d'authentification : gère l'inscription, la connexion, la déconnexion et le dashboard utilisateur
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Affiche le formulaire d'inscription
exports.getRegister = (req, res) => {
  res.render('register', { message: undefined });
};

// Traite l'inscription d'un nouvel utilisateur
exports.postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Vérifie si l'email existe déjà
    const existing = await User.findOne({ email });
    if (existing) {
      return res.render('register', { message: 'Email déjà utilisé.' });
    }
    // Crée et sauvegarde le nouvel utilisateur
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

// Traite la connexion utilisateur
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Recherche l'utilisateur par email
    const user = await User.findOne({ email });
    if (!user) {
      return res.render('login', { message: 'Email ou mot de passe incorrect.' });
    }
    // Vérifie le mot de passe
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.render('login', { message: 'Email ou mot de passe incorrect.' });
    }
    // Stocke les infos utiles en session
    req.session.user = { id: user._id, username: user.username, email: user.email, role: user.role };
    // Redirige selon le rôle
    if (user.role === 'admin') {
      res.redirect('/admin');
    } else {
      res.redirect('/dashboard');
    }
  } catch (err) {
    console.error(err);
    res.render('login', { message: 'Erreur lors de la connexion.' });
  }
};

// Déconnexion utilisateur
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};

// Dashboard protégé (utilisateur connecté)
exports.getDashboard = (req, res) => {
  if (!req.session || !req.session.user) {
    return res.redirect('/login');
  }
  res.render('dashboard', { user: req.session.user });
}; 