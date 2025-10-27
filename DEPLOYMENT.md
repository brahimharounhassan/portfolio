# Guide de Déploiement GitHub Pages

## ✅ Problème Résolu

Le CSS ne s'affichait pas en production car Next.js ne générait pas les chemins corrects avec le préfixe `/portfolio`. Un script automatique (`fix-css-paths.js`) a été créé pour corriger tous les chemins CSS après le build.

## 🚀 Déploiement

### Commandes Disponibles

```bash
# Build production avec correction CSS automatique
npm run build:prod

# Build + Déploiement complet
npm run deploy

# Correction CSS seule (après un build manuel)
npm run fix-css

# Développement local
npm run dev
```

### Déploiement Automatique (Recommandé)

1. **Configurez GitHub Pages** :
   - Allez dans Settings → Pages
   - Source : "GitHub Actions"
   - Sauvegardez

2. **Push vers main** :
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

3. **Attendez le déploiement** :
   - GitHub Actions build automatiquement
   - Disponible sur : `https://votre-username.github.io/portfolio/`

### Déploiement Manuel

```bash
# 1. Build avec correction CSS
npm run build:prod

# 2. Vérifier le build
ls -la out/_next/static/css/
grep "stylesheet" out/index.html

# 3. Commit et push
git add .
git commit -m "Deploy"
git push
```

## 🔍 Vérification Post-Déploiement

### Checklist

- [ ] Le site charge correctement
- [ ] Les styles CSS sont appliqués
- [ ] Le changement de thème (dark/light) fonctionne
- [ ] Le changement de langue (FR/EN) fonctionne
- [ ] La navigation fonctionne
- [ ] Les images chargent
- [ ] Le responsive fonctionne sur mobile

### Commandes de Test

```bash
# Vérifier les chemins CSS générés
grep -o 'href="[^"]*\.css"' out/index.html

# Résultat attendu :
# href="/portfolio/_next/static/css/xxxx.css"

# Vérifier que les fichiers CSS existent
ls -lh out/_next/static/css/

# Servir localement pour tester
npx http-server out -p 8080
# Puis ouvrir : http://localhost:8080/portfolio/
```

## 🐛 Dépannage

### CSS ne charge toujours pas ?

1. **Vider le cache** :
   - Ctrl+Shift+R (hard refresh)
   - Tester en mode incognito

2. **Vérifier GitHub Pages** :
   - Settings → Pages → Source doit être "GitHub Actions"
   - Attendre 2-3 minutes après le push

3. **Vérifier le build** :
```bash
npm run build:prod
cat out/index.html | grep stylesheet
```

### Erreurs de build ?

```bash
# Nettoyer et rebuild
rm -rf .next out node_modules
npm install
npm run build:prod
```

### GitHub Actions fail ?

1. Vérifier les logs dans Actions tab
2. S'assurer que Node 18+ est disponible
3. Vérifier les permissions : Settings → Actions → General → Workflow permissions → "Read and write permissions"

## 📝 Notes Importantes

### Ce qui a été fait

1. ✅ Script `fix-css-paths.js` créé
2. ✅ Commande `build:prod` mise à jour
3. ✅ GitHub Actions workflow corrigé
4. ✅ Fichier `.nojekyll` ajouté
5. ✅ Configuration `next.config.js` optimisée

### Configuration Critique

**Ne pas modifier** ces paramètres sans comprendre l'impact :

```javascript
// next.config.js
assetPrefix: '/portfolio'  // REQUIS pour GitHub Pages
basePath: '/portfolio'     // REQUIS pour GitHub Pages
output: 'export'           // REQUIS pour génération statique
```

### Styles Préservés

✅ Tous les styles sont **100% préservés** :
- Tailwind CSS complet
- Classes personnalisées
- Gradients et animations
- Thèmes dark/light
- Responsive design
- Toutes les couleurs primary-*

**Seuls les chemins ont été corrigés** - aucun changement visuel ! 🎨

## 🔗 URLs

- **Production** : `https://votre-username.github.io/portfolio/`
- **Développement** : `http://localhost:3000`
- **GitHub Repo** : `https://github.com/votre-username/portfolio`

## 📊 Performance

Après déploiement, votre portfolio devrait avoir :
- ⚡ Score Lighthouse > 90
- 📦 CSS minifié (49KB)
- 🚀 Chargement < 2s
- ♿ Accessibilité optimale
- 📱 100% responsive

---

**Dernier build** : Exécutez `npm run build:prod` avant chaque déploiement !
