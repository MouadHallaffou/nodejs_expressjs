const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const requireAdmin = require('../middleware/role');

router.get('/admin', requireAdmin, adminController.dashboard);
router.post('/admin/user/:id/delete', requireAdmin, adminController.deleteUser);
router.post('/admin/user/:id/role', requireAdmin, adminController.changeRole);
router.get('/admin/user/:id/edit', requireAdmin, adminController.editUser);
router.post('/admin/user/:id/edit', requireAdmin, adminController.updateUser);  

module.exports = router;
