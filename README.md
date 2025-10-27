# Portfolio Personnel - Brahim Haroun Hassan

Portfolio professionnel d'Ingénieur en Intelligence Artificielle, construit avec Next.js 14, React 18, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive (mobile-first)
- 🌓 Thème dark/light avec persistance
- 🌍 Multilingue (Français/Anglais)
- ⚡ Performance optimisée (Lighthouse > 90)
- 🔒 Sécurité renforcée (téléchargement sécurisé de CV)
- 📱 PWA (Progressive Web App)
- ♿ Accessibilité optimale
- 🚀 Déployé sur GitHub Pages

## 🛠️ Technologies

- **Frontend**: Next.js 14.2.33, React 18.2.0, TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: Framer Motion 10.16.16
- **Icons**: Lucide React 0.303.0
- **Build**: SWC minification, PostCSS, cssnano

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/brahimharounhassan/portfolio.git

# Installer les dépendances
cd portfolio
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📦 Build & Déploiement

### Build Production

```bash
npm run build:prod
```

Cette commande :
1. Build le projet Next.js en mode production
2. Corrige automatiquement les chemins CSS pour GitHub Pages
3. Génère le dossier `out/` avec tous les fichiers statiques

### Déploiement GitHub Pages

```bash
npm run deploy
```

Ou simplement push vers `main` - GitHub Actions s'occupe du reste !

### Test Local

```bash
# Servir le build localement
npx http-server out -p 8080

# Ouvrir http://localhost:8080/portfolio/
```

## 📂 Structure du Projet - Brahim Haroun Hassan
