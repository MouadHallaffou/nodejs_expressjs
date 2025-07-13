// Point d'entrée principal de l'application Express/MongoDB/EJS
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const connectDB = require('./database/connection');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Servir les fichiers statiques (CSS, images...)
app.use(express.static(path.join(__dirname, '../public')));

// Configuration de la session utilisateur
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 }
}));

// Middleware pour les messages flash (succès/erreur)
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Middleware pour injecter 'user' dans toutes les vues
app.use((req, res, next) => {
  res.locals.user = req.session && req.session.user ? req.session.user : null;
  next();
});

// Utilisation du middleware csurf pour la protection CSRF
const csrf = require('csurf');
// Use session-based CSRF instead of cookie-based
const csrfProtection = csrf();

// Middleware pour injecter le token CSRF dans toutes les vues
app.use((req, res, next) => {
  // Apply CSRF protection to generate tokens for GET requests
  if (req.method === 'GET') {
    csrfProtection(req, res, (err) => {
      if (!err && req.csrfToken) {
        res.locals.csrfToken = req.csrfToken();
      } else {
        res.locals.csrfToken = '';
      }
      next();
    });
  } else {
    // For non-GET requests, we'll validate later
    res.locals.csrfToken = '';
    next();
  }
});

// Apply CSRF validation for state-changing requests
app.use((req, res, next) => {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    csrfProtection(req, res, next);
  } else {
    next();
  }
});

// Branchement des routeurs MVC
const mainRouter = require('./routes/categories');
app.use('/', mainRouter);
const authRouter = require('./routes/auth');
app.use('/', authRouter);
const adminRouter = require('./routes/admin');
app.use('/', adminRouter);

// Connexion à la base MongoDB puis démarrage du serveur
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}/login`);
  });
});