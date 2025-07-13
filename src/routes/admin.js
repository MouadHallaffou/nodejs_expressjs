// Routes d'administration (gestion des utilisateurs)
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const requireAdmin = require('../middleware/role');

// Interface admin (listing utilisateurs)
router.get('/admin', requireAdmin, adminController.dashboard);
// Suppression d'un utilisateur
router.post('/admin/user/:id/delete', requireAdmin, adminController.deleteUser);
// Changement de rôle d'un utilisateur
router.post('/admin/user/:id/role', requireAdmin, adminController.changeRole);
// (optionnel) Edition d'un utilisateur
router.get('/admin/user/:id/edit', requireAdmin, adminController.editUser);
router.post('/admin/user/:id/edit', requireAdmin, adminController.updateUser);

module.exports = router;
