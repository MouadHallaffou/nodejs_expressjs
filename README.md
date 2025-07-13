# Node.js, JavaScript & MongoDB – Plan d'Apprentissage

## 🚀 Introduction
Ce projet a pour but de t'aider à apprendre Node.js, JavaScript et MongoDB à travers des étapes progressives et des bonnes pratiques professionnelles.

---

## 🛠️ Prérequis
- Node.js (v14+ recommandé)
- npm
- MongoDB (local ou Atlas)
- Git
- EJS (installé via npm)

---

## ⚡ Installation
1. Cloner le dépôt :
   ```bash
   git clone <url-du-repo>
   cd <nom-du-dossier>
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer l'environnement :
   - Créer un fichier `.env` avec la chaîne de connexion MongoDB

---

## ▶️ Démarrage
- Lancer le serveur :
  ```bash
  node src/index.js
  # ou, si nodemon est installé
  nodemon src/index.js
  ```
- Accéder à l'application sur [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Structure professionnelle du projet

```text
nodejs-exp/
│
├── models/
│   ├── user.js         # Schéma User (exemple)
│   ├── product.js      # Schéma Product (exemple)
│   └── myschema.js     # Schéma principal actuel
│
├── database/
│   └── cnx.js          # Connexion MongoDB
│
├── src/
│   ├── index.js        # Point d’entrée principal
│   ├── controllers/
│   │   └── homeController.js
│   └── routes/
│       └── index.js
│
├── views/
│   ├── home.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── public/             # Fichiers statiques (CSS, images, JS client)
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧠 Organisation des modèles (Best Practice)

- **Un fichier = un schéma = une entité**
- Exemple :
  ```js
  // models/user.js
  const mongoose = require('mongoose');
  const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  module.exports = mongoose.model('User', userSchema);
  ```
- Importation dans un contrôleur :
  ```js
  const User = require('../../models/user');
  ```
- **Ne jamais tout regrouper dans un seul fichier** : cela nuit à la lisibilité et à la maintenabilité.

---

## 📝 Étapes d'apprentissage

### 1. Node.js & Express
- Créer un serveur Express
- Gérer les routes (GET, POST)
- Installer et configurer EJS comme moteur de templates
- Créer des vues dynamiques avec EJS (ex : page d’accueil, liste d’utilisateurs)
- Servir des fichiers statiques

### 2. JavaScript côté serveur
- Manipuler les objets, tableaux, fonctions asynchrones (async/await)
- Utiliser les modules (import/export)

### 3. MongoDB & Mongoose
- Connecter l'app à MongoDB
- Créer des modèles (schemas)
- Effectuer les opérations CRUD (Create, Read, Update, Delete)
- Valider les données

### 4. Fonctionnalités avancées
- Authentification (sessions, JWT)
- Gestion des erreurs
- Déploiement (Render, Heroku, etc.)

---

## 🏆 Best Practices professionnelles
- **Respecter la structure MVC** (Models, Views, Controllers, Routes)
- **Un fichier = un schéma = une entité** dans `models/`
- **Séparer la logique métier des routes** (controllers/ vs routes/)
- **Utiliser .gitignore** pour exclure `node_modules`, `.env`, etc.
- **Valider les entrées utilisateur** côté serveur (Mongoose, express-validator...)
- **Gérer les erreurs proprement** (try/catch, middlewares d'erreur)
- **Ne jamais stocker de mots de passe en clair** (utiliser bcrypt)
- **Utiliser des partials EJS** pour factoriser le HTML (header, footer, etc.)
- **Servir les fichiers statiques** via le dossier `public/`
- **Documenter le code** (commentaires, README)
- **Utiliser des variables d'environnement** pour les secrets et la config
- **Organiser les vues EJS dans un dossier `views/`**
- **Garder la logique métier hors des templates**

---

## 🔎 Concepts & Méthodes à approfondir
- Asynchrone en JS (callbacks, promises, async/await)
- Middlewares Express
- Modèles Mongoose & validation
- Sécurité (hashing, validation, CORS)
- Environnements (variables d'env, .env)
- Déploiement d'une app Node.js

---

## 📚 Ressources utiles
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Express Docs](https://expressjs.com/)
- [MongoDB University](https://university.mongodb.com/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [EJS Docs](https://ejs.co/)

---

**Bon apprentissage et code propre !**
