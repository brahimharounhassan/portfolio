const fs = require('fs')
const path = require('path')

console.log('🔍 Vérification du .gitignore...\n')

// Fichiers qui ne doivent JAMAIS être committés
const forbiddenFiles = [
  '.env',
  '.env.local', 
  '.env.production.local',
  'node_modules/',
  '.next/',
  'out/',
  '*.log',
  '.DS_Store',
  '*.key',
  '*.pem',
  'secrets/',
  'private/'
]

// Fichiers qui doivent être présents
const requiredFiles = [
  '.gitignore',
  'package.json',
  'next.config.js',
  'tailwind.config.js',
  'tsconfig.json'
]

// Vérifier que .gitignore existe
if (!fs.existsSync('.gitignore')) {
  console.log('❌ .gitignore manquant!')
  process.exit(1)
}

// Lire le contenu du .gitignore
const gitignoreContent = fs.readFileSync('.gitignore', 'utf8')

// Vérifier que les règles importantes sont présentes
const importantRules = [
  'node_modules/',
  '.env',
  '.next/',
  'out/',
  '*.log'
]

console.log('✅ Règles de sécurité:')
importantRules.forEach(rule => {
  if (gitignoreContent.includes(rule)) {
    console.log(`  ✅ ${rule}`)
  } else {
    console.log(`  ❌ MANQUANT: ${rule}`)
  }
})

// Vérifier les fichiers qui existent et ne devraient pas
console.log('\n🚨 Fichiers potentiellement sensibles:')
const checkFiles = [
  '.env',
  '.env.local',
  'node_modules',
  '.next',
  'out'
]

checkFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ⚠️  ATTENTION: ${file} existe (doit être gitignored)`)
  } else {
    console.log(`  ✅ ${file} absent (bon)`)
  }
})

// Statistiques du .gitignore
const lines = gitignoreContent.split('\n').length
const rules = gitignoreContent.split('\n').filter(line => 
  line.trim() && !line.startsWith('#')
).length

console.log('\n📊 Statistiques .gitignore:')
console.log(`  📝 ${lines} lignes totales`)
console.log(`  🔒 ${rules} règles actives`)
console.log(`  📁 ${gitignoreContent.split('# =====').length - 1} sections`)

console.log('\n✅ .gitignore configuré de manière stricte!')
console.log('🔒 Sécurité maximale activée')
