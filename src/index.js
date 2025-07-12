const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const connectDB = require('../database/cnx');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Utiliser le routeur principal
const mainRouter = require('./routes/index');
app.use('/', mainRouter);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
});