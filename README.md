# Node.js Express MongoDB - Starter Project

---

## 🇫🇷 Présentation
Ce projet est une base professionnelle pour une application Node.js utilisant Express, MongoDB (Mongoose), EJS, gestion des rôles (admin/user), interface d'administration, et stylisation moderne. Il respecte la structure MVC et les meilleures pratiques de sécurité et de maintenabilité.

## 🇬🇧 Overview
This project is a professional starter for a Node.js app using Express, MongoDB (Mongoose), EJS, role management (admin/user), admin interface, and modern styling. It follows the MVC structure and best practices for security and maintainability.

---

## 🇫🇷 Table des matières / 🇬🇧 Table of Contents
- [Node.js Express MongoDB - Starter Project](#nodejs-express-mongodb---starter-project)
  - [🇫🇷 Présentation](#-présentation)
  - [🇬🇧 Overview](#-overview)
  - [🇫🇷 Table des matières / 🇬🇧 Table of Contents](#-table-des-matières---table-of-contents)
  - [🛠️ Fonctionnalités / Features](#️-fonctionnalités--features)
  - [🗂️ Structure du projet / Project Structure](#️-structure-du-projet--project-structure)
  - [🚀 Installation \& Démarrage / Installation \& Start](#-installation--démarrage--installation--start)
    - [🇫🇷 Instructions](#-instructions)
    - [🇬🇧 Instructions](#-instructions-1)
  - [🔐 Authentification \& Administration / Auth \& Admin](#-authentification--administration--auth--admin)
  - [🏆 Bonnes pratiques / Best Practices](#-bonnes-pratiques--best-practices)
  - [💡 Exemples d'utilisation / Usage Examples](#-exemples-dutilisation--usage-examples)
  - [📚 Ressources utiles / Useful Resources](#-ressources-utiles--useful-resources)
  - [👨‍💻 Auteurs / Authors](#-auteurs--authors)

---

## 🛠️ Fonctionnalités / Features
- Authentification utilisateur (inscription, connexion, déconnexion)
- Gestion des rôles (utilisateur/admin)
- Interface d'administration sécurisée
- CRUD sur les catégories (exemple)
- Stylisation responsive et moderne (CSS)
- Messages flash (succès/erreur)
- Sécurité : hashage des mots de passe, sessions, .env
- Structure MVC claire et évolutive

---

## 🗂️ Structure du projet / Project Structure

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

## 🚀 Installation & Démarrage / Installation & Start

### 🇫🇷 Instructions
1. Cloner le dépôt :
   ```bash
   git clone <url-du-repo>
   cd nodejs-exp
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer l'environnement :
   - Créer un fichier `.env` avec :
     ```env
     MONGO_URI=mongodb://localhost:27017/nom_de_ta_db
     SESSION_SECRET=un_secret_pour_la_session
     ```
4. Lancer le serveur :
   ```bash
   npm start
   # ou
   npm run dev
   ```
5. Accéder à l'application : [http://localhost:3000](http://localhost:3000)

### 🇬🇧 Instructions
1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd nodejs-exp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment:
   - Create a `.env` file with:
     ```env
     MONGO_URI=mongodb://localhost:27017/your_db_name
     SESSION_SECRET=your_session_secret
     ```
4. Start the server:
   ```bash
   npm start
   # or
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentification & Administration / Auth & Admin

- Inscription et connexion sécurisées (bcrypt, session)
- Rôle utilisateur/admin stocké en base et en session
- Interface `/admin` réservée aux admins (gestion utilisateurs, rôles)
- Dashboard utilisateur `/dashboard`
- Middleware de protection des routes (`requireAdmin`, `requireAuth`)
- Messages flash pour feedback utilisateur

---

## 🏆 Bonnes pratiques / Best Practices
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

## 💡 Exemples d'utilisation / Usage Examples

- **Créer un utilisateur admin** :
  - Inscris-toi puis modifie le champ `role` de ton utilisateur dans la base (`admin`)
- **Ajouter une catégorie** :
  - Utilise le formulaire sur `/categories`
- **Changer le rôle d'un utilisateur** :
  - Depuis l'interface admin, utilise le menu déroulant
- **Supprimer un utilisateur** :
  - Depuis l'interface admin, clique sur "Supprimer"

---

## 📚 Ressources utiles / Useful Resources
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Express Docs](https://expressjs.com/)
- [MongoDB University](https://university.mongodb.com/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [EJS Docs](https://ejs.co/)
- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)

---

## 👨‍💻 Auteurs / Authors
- Projet réalisé par [Ton Nom] dans le cadre d'un apprentissage Node.js/Express/MongoDB.

---

**Bon apprentissage et bon code ! / Happy coding!**
