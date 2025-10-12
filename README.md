# Portfolio Personnel - Brahim Haroun Hassan

## 🎯 Statut: PRÊT POUR LA PRODUCTION ✅

Un portfolio moderne et sécurisé construit avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- ⚡ **Performance optimisée** - Next.js 14 avec génération statique
- 🎨 **Design moderne** - Interface responsive avec thème sombre/clair  
- 🌐 **Multilingue** - Support français/anglais complet
- 📱 **PWA** - Installation possible sur mobile/desktop
- 🔍 **SEO optimisé** - Meta tags, sitemap, données structurées
- ♿ **Accessible** - Conforme aux standards WCAG
- 📊 **Analytics** - Suivi respectueux de la vie privée
- 🔒 **Sécurisé** - Téléchargements protégés, validation d'accès
- 🎯 **ScrollToTop** - Navigation fluide desktop uniquement
- 🔄 **CI/CD** - Déploiement automatique avec GitHub Actions

## 🛠️ Technologies utilisées

- **Frontend**: Next.js 14.0.4, React 18.2.0, TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.0, Framer Motion 10.16.16
- **Sécurité**: Rate limiting, token validation, audit automatisé
- **Performance**: Bundle optimization, image optimization
- **Déploiement**: GitHub Pages avec export statique
- **Monitoring**: Analytics intégrés, Lighthouse CI

## ⚡ Démarrage rapide

```bash
# Installation
git clone https://github.com/brahimharounhassan/portfolio.git
cd portfolio
npm install --legacy-peer-deps

# Développement
npm run dev

# Production
npm run build
npm run start

# Audit final
npm run production-check
```

## 📁 Structure optimisée

```
portfolio/
├── .github/workflows/    # CI/CD GitHub Actions
├── public/              # Fichiers statiques
├── src/
│   ├── app/            # Pages Next.js 14 (App Router)
│   ├── components/     # Composants React
│   ├── hooks/          # Hooks personnalisés
│   ├── lib/           # Utilitaires
│   ├── types/         # Types TypeScript
│   └── data/          # Données du portfolio
├── tests/             # Tests unitaires et e2e
└── docs/             # Documentation
```

## 🚀 Déploiement

### Automatique (recommandé)

Le déploiement se fait automatiquement via GitHub Actions :

1. Push sur la branche `main`
2. Tests automatiques
3. Build de production
4. Déploiement sur GitHub Pages

### Manuel

```bash
# Build de production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests en mode watch
npm run test:watch

# Tests e2e
npm run test:e2e

# Coverage
npm run test:ci
```

## 📊 Monitoring

### Performance

```bash
# Audit Lighthouse
npm run lighthouse

# Analyse du bundle
npm run analyze
```

### Métriques surveillées

- **Performance** > 90%
- **Accessibilité** > 95%
- **SEO** > 95%
- **PWA** > 80%

## 🔄 Maintenance

### Mises à jour régulières

```bash
# Mettre à jour les dépendances
npm run update-deps

# Backup du contenu
npm run backup
```

### Calendrier de maintenance

- **Hebdomadaire** : Vérification des métriques Lighthouse
- **Mensuel** : Mise à jour des dépendances
- **Trimestriel** : Audit de sécurité complet

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalité`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalité`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : votre@email.com
- **LinkedIn** : [Votre Profil](https://linkedin.com/in/votre-profil)
- **GitHub** : [Votre GitHub](https://github.com/votre-nom)

## 🔒 Sécurité des Documents

### CV et Documents Sensibles

Les CV sont stockés de manière sécurisée dans `/src/documents/cv/` et non dans `/public/` pour éviter l'accès direct.

**Structure sécurisée :**
```
/src/documents/cv/
├── CV_fr-Brahim-Haroun-Hassan.pdf
└── CV_en-Brahim-Haroun-Hassan.pdf
```

**Fonctionnalités de sécurité :**
- ✅ Rate limiting (5 téléchargements/minute)
- ✅ Validation du referer
- ✅ Tokens temporaires (5 minutes)
- ✅ Log des accès
- ✅ Détection d'attaques
- ✅ User-agent filtering

**Pour ajouter un nouveau document :**
1. Placer le fichier dans `/src/documents/cv/`
2. Ajouter l'entrée dans `documentSecurity.ts`
3. Tester l'accès via le composant sécurisé

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous a été utile !
└── CV_en-Brahim-Haroun-Hassan.pdf
```

**Fonctionnalités de sécurité :**
- ✅ Rate limiting (5 téléchargements/minute)
- ✅ Validation du referer
- ✅ Tokens temporaires (5 minutes)
- ✅ Log des accès
- ✅ Détection d'attaques
- ✅ User-agent filtering

**Pour ajouter un nouveau document :**
1. Placer le fichier dans `/src/documents/cv/`
2. Ajouter l'entrée dans `documentSecurity.ts`
3. Tester l'accès via le composant sécurisé

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous a été utile !
