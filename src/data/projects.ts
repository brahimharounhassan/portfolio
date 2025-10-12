export interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  publicationUrl?: string
  featured: boolean
  stats?: {
    precision?: string
    citations?: string
    published?: string
    views?: string
  }
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'mci',
    title: 'Détection MCI avec Transformers',
    description: 'Modèle révolutionnaire utilisant l\'architecture Transformer pour détecter les troubles cognitifs légers (MCI) à partir de signaux EEG et fNIRS. Précision de 98%surpassant les méthodes traditionnelles.',
    category: 'Deep Learning • Neurosciences',
    technologies: ['TensorFlow/Keras', 'Transformers', 'EEG', 'fNIRS', 'Python'],
    githubUrl: 'https://github.com/brahimharounhassan/mci-classification',
    publicationUrl: 'https://ieeexplore.ieee.org/document/10290024',
    featured: true,
    stats: {
      precision: '98%',
      citations: '8+',
      published: 'EUSIPCO',
      views: '500+'
    },
    highlights: [
      'Architecture Transformer adaptée aux signaux temporels',
      'Détection précoce des troubles cognitifs',
      'Validation sur datasets publics',
      'Publication dans EUSIPCO 2023'
    ]
  },
  {
    id: 'speech',
    title: 'Traitement de la Parole chez les Nourrissons',
    description: 'Analyse avancée de la perception des phonèmes /ba/ et /da/ chez les nourrissons pour comprendre les mécanismes neuronaux de l\'acquisition du langage.',
    category: 'Machine Learning • EEG',
    technologies: ['Machine Learning', 'MATLAB', 'EEG', 'Neurosciences', 'Python'],
    githubUrl: 'https://github.com/brahimharounhassan/phonems-classification',
    featured: false,
    highlights: [
      'Analyse de signaux EEG de nourrissons',
      'Mécanismes neuronaux du langage',
      'Classification de phonèmes',
      'Pipeline ML complet'
    ]
  },
  {
    id: 'ipv6',
    title: 'Tunneling Réseau IPv6',
    description: 'Implémentation complète d\'un système de tunneling IPv6 sur IPv4 avec interfaces TUN virtuelles pour la communication inter-réseaux.',
    category: 'Réseaux • Systèmes',
    technologies: ['TUN/TAP', 'Networking', 'IPv4/6', 'Linux', 'C'],
    githubUrl: 'https://github.com/brahimharounhassan/ipv6over4_tun',
    featured: false,
    highlights: [
      'Communication IPv6 sur IPv4',
      'Interfaces TUN virtuelles',
      'Protocole custom',
      'Administration Linux'
    ]
  },
  {
    id: 'ocr',
    title: 'OCR pour Scratch',
    description: 'Système OCR intelligent pour convertir automatiquement des algorithmes Scratch visuels en code Python exécutable.',
    category: 'Computer Vision • OCR',
    technologies: ['Python', 'OpenCV', 'Tesseract', 'Computer Vision', 'GUI'],
    githubUrl: 'https://github.com/brahimharounhassan/scratch-ocr-engine',
    featured: false,
    highlights: [
      'Reconnaissance d\'images Scratch',
      'Génération de code Python',
      'Interface utilisateur intuitive',
      'Pipeline de traitement d\'images'
    ]
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => 
    project.category.toLowerCase().includes(category.toLowerCase())
  )
}
