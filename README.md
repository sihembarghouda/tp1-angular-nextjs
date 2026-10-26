# TP1 — Full Stack Development : Angular & Next.js

## 1. Présentation du projet

Ce projet est réalisé dans le cadre du TP1 de Full Stack Development. Il consiste à développer deux applications frontend permettant d'afficher un catalogue de produits :

- **Angular** : application frontend développée avec Angular et TypeScript.
- **Next.js** : application frontend développée avec Next.js, React et TypeScript.

Les deux applications utilisent l'API publique [DummyJSON](https://dummyjson.com/products) pour récupérer les produits.

Le projet inclut également la conteneurisation des deux applications avec Docker et la publication des images sur Docker Hub.

## 2. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| Angular | Développement du frontend Angular |
| Next.js | Développement du frontend React |
| TypeScript | Typage du code |
| HTML et CSS | Structure et mise en forme des interfaces |
| DummyJSON | API publique de produits |
| Node.js et npm | Environnement d'exécution et gestion des dépendances |
| Docker | Conteneurisation des applications |
| Nginx | Serveur web de l'application Angular conteneurisée |
| Git et GitHub | Gestion de versions et hébergement du code |

## 3. Structure du projet

```text
fullstack-tp/
├── ngapp/                 # Application Angular
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .dockerignore
├── nxapp/                 # Application Next.js
│   ├── app/
│   ├── Dockerfile
│   └── .dockerignore
└── README.md
```

## 4. Fonctionnalités

### Application Angular

- Affichage du catalogue de produits.
- Affichage des informations des produits.
- Chargement des données depuis DummyJSON.
- Navigation entre les pages de l'application.
- Pagination du catalogue.
- Gestion des états de chargement et des erreurs.

### Application Next.js

- Interface de boutique ShopNow.
- Affichage d'un catalogue de produits.
- Organisation des produits par catégories.
- Interface de navigation et de panier.
- Mise en page avec React, Next.js et CSS.

## 5. Installation et lancement en développement

### Prérequis

Installer les outils suivants :

- Node.js et npm
- Git
- Docker Desktop, pour utiliser les images Docker

### Lancer Angular

Depuis le dossier racine du projet :

```powershell
cd ngapp
npm install
npm start
```

Si le script `start` n'est pas disponible, lancer Angular avec :

```powershell
npx ng serve
```

L'application est généralement accessible à l'adresse :

http://localhost:4200

### Lancer Next.js

Ouvrir un deuxième terminal PowerShell :

```powershell
cd nxapp
npm install
npm run dev
```

L'application est accessible à l'adresse :

http://localhost:3000

## 6. Lancement avec Docker

Les applications peuvent être exécutées dans des conteneurs Docker indépendants.

### Angular

L'image Docker corrigée est publiée sous le nom `sihem93/ngapp:1.1`.

Pour récupérer et lancer cette image :

```powershell
docker pull sihem93/ngapp:1.1
docker run -d --name ngapp-container -p 8081:80 sihem93/ngapp:1.1
```

Accès au catalogue :

http://localhost:8081/products

### Next.js

L'image Docker est publiée sous le nom `sihem93/nxapp:1.0`.

```powershell
docker pull sihem93/nxapp:1.0
docker run -d --name nxapp-container -p 3000:3000 sihem93/nxapp:1.0
```

Accès à l'application :

http://localhost:3000

### Vérifier les conteneurs

```powershell
docker ps
```

### Arrêter les conteneurs

```powershell
docker stop ngapp-container nxapp-container
```

Pour les supprimer après leur arrêt :

```powershell
docker rm ngapp-container nxapp-container
```

## 7. Images Docker Hub

Les images publiées sont disponibles sur Docker Hub :

- Angular : [sihem93/ngapp](https://hub.docker.com/r/sihem93/ngapp)
- Next.js : [sihem93/nxapp](https://hub.docker.com/r/sihem93/nxapp)

Versions utilisées dans ce TP :

- `sihem93/ngapp:1.1`
- `sihem93/nxapp:1.0`

## 8. API utilisée

L'application Angular utilise l'API publique DummyJSON :

```text
https://dummyjson.com/products
```

Exemple de requête avec pagination :

```text
https://dummyjson.com/products?limit=12&skip=0
```

Cette API fournit les informations des produits au format JSON, notamment leur titre, leur description, leur prix, leur catégorie et leur image.

## 9. Conteneurisation

Chaque application possède son propre Dockerfile et son fichier `.dockerignore`.

- Angular utilise une étape de build Node.js, puis Nginx pour servir les fichiers compilés.
- Next.js utilise une image Node.js pour construire et exécuter l'application.
- Les fichiers inutiles comme `node_modules`, les fichiers de build temporaires et les fichiers de configuration sensibles sont exclus du contexte Docker par `.dockerignore`.

## 10. Objectifs pédagogiques

Ce TP permet de :

- Découvrir le développement frontend avec Angular et Next.js.
- Consommer une API REST publique.
- Organiser une application web moderne.
- Mettre en place la pagination et l'affichage de données.
- Construire et exécuter des images Docker.
- Publier des images sur Docker Hub.
- Gérer le code source avec Git et GitHub.

## 11. Auteur

Projet réalisé dans le cadre du TP Full Stack Development — Partie I : Angular & Next.js.
