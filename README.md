# Node.js, JavaScript & MongoDB – Plan d'Apprentissage

## 🚀 Introduction
Ce projet a pour but de t'aider à apprendre Node.js, JavaScript et MongoDB à travers des étapes progressives et des bonnes pratiques.

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

## 📝 Étapes d'apprentissage

### 1. Node.js & Express
- Créer un serveur Express
- Gérer les routes (GET, POST)
- **Installer et configurer EJS comme moteur de templates**
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

## 🏆 Best Practices
- **Respecter la structure MVC** (Models, Views, Controllers)
- **Utiliser .gitignore** pour exclure `node_modules` et `.env`
- **Valider les entrées utilisateur** côté serveur
- **Gérer les erreurs proprement** (try/catch, middlewares d'erreur)
- **Ne jamais stocker de mots de passe en clair** (utiliser bcrypt)
- **Séparer la logique métier des routes**
- **Documenter le code** (commentaires, README)
- Organiser les vues EJS dans un dossier `views/`
- Utiliser des partials (ex : header.ejs, footer.ejs) pour éviter la duplication de code
- Garder la logique métier hors des templates

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

---

**Bon apprentissage !**

---

## 📦 Où placer EJS dans ton plan d’apprentissage ?

- **Dans la section “Node.js & Express”** :
  - Utiliser EJS pour les vues dynamiques
- **Dans les prérequis/dépendances** :
  - Ajouter EJS comme dépendance à installer

---

## 📝 Exemple d’ajout dans le README

### 1. Dans les Prérequis

```markdown
- EJS (installé via npm)
```

### 2. Dans l’Installation

```markdown
npm install ejs
```

### 3. Dans les Étapes d’apprentissage

```markdown
### 1. Node.js & Express
- Créer un serveur Express
- Gérer les routes (GET, POST)
- **Installer et configurer EJS comme moteur de templates**
- Créer des vues dynamiques avec EJS (ex : page d’accueil, liste d’utilisateurs)
- Servir des fichiers statiques
```

### 4. Dans les Best Practices

```markdown
<code_block_to_apply_changes_from>
```

---

## 🧑‍💻 Concepts EJS à approfondir

- Syntaxe EJS (`<%= %>`, `<% %>`)
- Passer des variables du contrôleur à la vue
- Utiliser des partials (includes)
- Boucles et conditions dans les templates

---

## 📚 Ressources EJS

- [Documentation EJS](https://ejs.co/)
- [Express + EJS Guide](https://expressjs.com/en/guide/using-template-engines.html)

---

Veux-tu que j’ajoute ces sections directement dans ton README.md, ou souhaites-tu un exemple de code Express + EJS ?  
🗳️ **Vote requis** :  
- 👍 Oui, ajoute au README  
- 🧑‍💻 Je veux un exemple de code  
- ✋ Non, c’est bon
