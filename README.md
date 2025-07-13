# Node.js Express MongoDB - Projet de Démarrage

---

## Présentation
Ce projet est une base professionnelle pour une application Node.js utilisant Express, MongoDB (Mongoose), EJS, gestion des rôles (admin/user), interface d'administration, et stylisation moderne. Il respecte la structure MVC et les meilleures pratiques de sécurité et de maintenabilité.

---

## Table des matières
- [Node.js Express MongoDB - Projet de Démarrage](#nodejs-express-mongodb---projet-de-démarrage)
  - [Présentation](#présentation)
  - [Table des matières](#table-des-matières)
  - [🛠️ Fonctionnalités](#️-fonctionnalités)
  - [🗂️ Structure du projet](#️-structure-du-projet)
  - [🚀 Installation & Démarrage](#-installation--démarrage)
  - [🔐 Authentification & Administration](#-authentification--administration)
  - [🏆 Bonnes pratiques](#-bonnes-pratiques)
  - [💡 Exemples d'utilisation](#-exemples-dutilisation)
  - [📚 Ressources utiles](#-ressources-utiles)
  - [👨‍💻 Auteurs](#-auteurs)

---

## 🛠️ Fonctionnalités
- Authentification utilisateur (inscription, connexion, déconnexion)
- Gestion des rôles (utilisateur/admin)
- Interface d'administration sécurisée
- CRUD sur les catégories (exemple)
- Stylisation responsive et moderne (CSS)
- Messages flash (succès/erreur)
- Sécurité : hashage des mots de passe, sessions, .env
- Structure MVC claire et évolutive

---

## 🗂️ Structure du projet

```text
nodejs-exp/
│
├── src/
│   ├── controllers/      # Logique métier (auth, admin, catégories)
│   ├── middleware/        # Middlewares personnalisés (auth, rôle)
│   ├── models/            # Schémas Mongoose (User, Category)
│   ├── routes/            # Définition des routes Express
│   ├── database/          # Connexion MongoDB
│   └── index.js           # Point d'entrée principal
│
├── views/
│   ├── partials/          # Header, footer, navbar
│   ├── admin.ejs          # Interface admin
│   ├── dashboard.ejs      # Dashboard utilisateur
│   ├── login.ejs          # Connexion
│   ├── register.ejs       # Inscription
│   └── categories/        # Vues catégories
│
├── public/
│   └── styles.css         # Style global
│
├── .env                   # Variables d'environnement (non versionné)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Installation & Démarrage

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/MouadHallaffou/nodejs_expressjs.git
   cd nodejs_expressjs
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer l'environnement :
   - Créer un fichier `.env` avec :
     ```env
     MONGO_URI=mongodb://localhost:27017/
     SESSION_SECRET=un_secret_pour_la_session
     ```
4. Lancer le serveur :
   ```bash
   npm start
   # ou
   npm run dev
   ```
5. Accéder à l'application : [http://localhost:3000/login](http://localhost:3000/login)

---

## 🔐 Authentification & Administration

- Inscription et connexion sécurisées (bcrypt, session)
- Rôle utilisateur/admin stocké en base et en session
- Interface `/admin` réservée aux admins (gestion utilisateurs, rôles)
- Dashboard utilisateur `/dashboard`
- Middleware de protection des routes (`requireAdmin`, `requireAuth`)
- Messages flash pour feedback utilisateur

---

## 🏆 Bonnes pratiques
- Structure MVC stricte (models, views, controllers, routes)
- Un fichier = une entité (User, Category, etc.)
- Séparation logique métier / routes / vues
- Utilisation de partials EJS (header, footer, navbar)
- Variables d'environnement pour la config sensible
- Validation des entrées côté serveur
- Gestion centralisée des erreurs
- Code commenté et documenté
- CSS responsive et moderne

---

## 💡 Exemples d'utilisation

- **Créer un utilisateur admin** :
  - Inscris-toi puis modifie le champ `role` de ton utilisateur dans la base (`admin`)
- **Ajouter une catégorie** :
  - Utilise le formulaire sur `/categories`
- **Changer le rôle d'un utilisateur** :
  - Depuis l'interface admin, utilise le menu déroulant
- **Supprimer un utilisateur** :
  - Depuis l'interface admin, clique sur "Supprimer"

---

## 📚 Ressources utiles
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Express Docs](https://expressjs.com/)
- [MongoDB University](https://university.mongodb.com/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [EJS Docs](https://ejs.co/)
- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)

---

## 👨‍💻 Auteurs
- Projet réalisé par [Ton Nom] dans le cadre d'un apprentissage Node.js/Express/MongoDB.

---

**Bon apprentissage et bon code !**
