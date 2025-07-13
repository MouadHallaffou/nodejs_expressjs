const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const requireAdmin = require('../middleware/role');

router.get('/admin', requireAdmin, adminController.dashboard);
router.post('/admin/user/:id/delete', requireAdmin, adminController.deleteUser);
router.post('/admin/user/:id/role', requireAdmin, adminController.changeRole);

module.exports = router;
