const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const connectDB = require('./database/connection');
const flash = require('connect-flash');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Middleware session AVANT les routes
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 }
}));

// Utiliser les routeurs
const mainRouter = require('./routes/categories');
app.use('/', mainRouter);
const authRouter = require('./routes/auth');
app.use('/', authRouter);
const adminRouter = require('./routes/admin');
app.use('/', adminRouter);

// Rendre les messages flash accessibles dans toutes les vues EJS
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
});