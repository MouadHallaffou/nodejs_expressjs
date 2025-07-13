module.exports = function requireAdmin(req, res, next) {
  if (!req.session || !req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).send('Accès refusé : réservé aux administrateurs.');
    // Ou : return res.redirect('/dashboard');
  }
  next();
}; 