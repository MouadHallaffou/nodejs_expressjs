// Routes d'authentification (inscription, connexion, déconnexion, dashboard)
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Formulaire d'inscription
router.get('/register', authController.getRegister);
// Traitement de l'inscription
router.post('/register', authController.postRegister);
// Formulaire de connexion
router.get('/login', authController.getLogin);
// Traitement de la connexion
router.post('/login', authController.postLogin);
// Déconnexion
router.get('/logout', authController.logout);
// Dashboard utilisateur (protégé)
router.get('/dashboard', authController.getDashboard);

module.exports = router;

