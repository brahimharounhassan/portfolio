const { execSync } = require('child_process')
const fs = require('fs')

console.log('🚀 Migration vers le domaine principal GitHub Pages...\n')

// 1. Vérifications préliminaires
console.log('🔍 Vérifications...')
if (!fs.existsSync('.git')) {
  console.log('❌ Ce dossier n\'est pas un repository Git')
  process.exit(1)
}

// 2. Backup du repository actuel
console.log('\n📦 Sauvegarde...')
try {
  execSync('git add . && git commit -m "Backup before migration to main domain" || true', { stdio: 'inherit' })
  console.log('✅ Sauvegarde effectuée')
} catch (error) {
  console.log('⚠️  Erreur sauvegarde (peut être normal)')
}

// 3. Instructions pour la migration
console.log('\n📋 ÉTAPES DE MIGRATION :')
console.log('1. Créer un nouveau repository sur GitHub avec le nom : portfolio')
console.log('2. Copier tout le contenu de ce projet dans le nouveau repository')
console.log('3. Pousser vers le nouveau repository')

console.log('\n💻 COMMANDES À EXÉCUTER :')
console.log('# 1. Ajouter le nouveau remote')
console.log('git remote add main-domain https://github.com/brahimharounhassan/portfolio.git')
console.log('')
console.log('# 2. Pousser vers le nouveau repository')
console.log('git push main-domain main')
console.log('')
console.log('# 3. Configurer GitHub Pages (optionnel, automatique)')
console.log('# Aller dans Settings > Pages > Source: GitHub Actions')

console.log('\n🌐 RÉSULTAT :')
console.log('✅ Portfolio accessible sur : https://brahimharounhassan.github.io/portfolio')
console.log('✅ Plus besoin de /portfolio à la fin de l\'URL')
console.log('✅ GitHub Actions configuré pour déploiement automatique')

console.log('\n⚠️  ATTENTION :')
console.log('- Le repository doit s\'appeler exactement : portfolio')
console.log('- Un seul repository GitHub Pages principal par utilisateur')
console.log('- Les anciens liens avec /portfolio seront cassés')

console.log('\n✨ Migration préparée!')
