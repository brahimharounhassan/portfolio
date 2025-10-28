import { Locale } from '@/lib/i18n';

export interface ExperienceTranslations {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export const experiencesI18n: Record<string, Record<Locale, ExperienceTranslations>> = {
  crpn: {
    fr: {
      company: "Centre de Recherche en Psychologie et Neurosciences (CRPN)",
      position: "Assistant chercheur stagiaire",
      location: "Marseille, France",
      startDate: "Mai 2025",
      endDate: "Juillet 2025",
      description: "Bases Cérébrales du traitement de la parole chez le nourrisson: EEG et Apprentissage Automatique.",
      achievements: [
        "Visualisation, prétraitement de données : filtrage, suppression des artefacts et segmentation",
        "Mise en place du Pipeline d'apprentissage pour la classification des propriétés sonores à partir des données EEG",
        "Décodage EEG : cas des phonèmes /da/ et /ba/, analyse et évaluation"
      ]
    },
    en: {
      company: "Research Center in Psychology and Neuroscience (CRPN)",
      position: "Research Assistant Intern",
      location: "Marseille, France",
      startDate: "May 2025",
      endDate: "July 2025",
      description: "Brain Bases of speech processing in infants: EEG and Machine Learning.",
      achievements: [
        "Data visualization and preprocessing: filtering, artifact removal and segmentation",
        "Implementation of learning pipeline for sound properties classification from EEG data",
        "EEG decoding: /da/ and /ba/ phonemes case study, analysis and evaluation"
      ]
    }
  },
  freelance: {
    fr: {
      company: "Freelance",
      position: "Développeur IA & Data Science",
      location: "Remote",
      startDate: "Janvier 2024",
      endDate: "Présent",
      description: "Développement de solutions d'Intelligence Artificielle sur mesure pour divers clients.",
      achievements: [
        "Conception et déploiement de modèles de Machine Learning",
        "Développement d'applications web avec intégration IA",
        "Consulting en stratégie data et IA"
      ]
    },
    en: {
      company: "Freelance",
      position: "AI & Data Science Developer",
      location: "Remote",
      startDate: "January 2024",
      endDate: "Present",
      description: "Development of custom Artificial Intelligence solutions for various clients.",
      achievements: [
        "Design and deployment of Machine Learning models",
        "Web application development with AI integration",
        "Data and AI strategy consulting"
      ]
    }
  },
  university: {
    fr: {
      company: "Université d'Aix-Marseille",
      position: "Étudiant Chercheur - Master IA",
      location: "Marseille, France",
      startDate: "Septembre 2023",
      endDate: "Septembre 2025",
      description: "Master en Intelligence Artificielle avec spécialisation en Machine Learning et Deep Learning.",
      achievements: [
        "Recherche en Deep Learning appliqué aux neurosciences",
        "Publication scientifique dans conférence internationale (EUSIPCO)",
        "Développement de projets innovants en IA"
      ]
    },
    en: {
      company: "Aix-Marseille University",
      position: "Research Student - AI Master",
      location: "Marseille, France",
      startDate: "September 2023",
      endDate: "September 2025",
      description: "Master's degree in Artificial Intelligence with specialization in Machine Learning and Deep Learning.",
      achievements: [
        "Research in Deep Learning applied to neuroscience",
        "Scientific publication in international conference (EUSIPCO)",
        "Development of innovative AI projects"
      ]
    }
  }
};

// Export les IDs dans l'ordre chronologique (plus récent en premier)
export const experienceIds = ['crpn', 'freelance', 'university'];

// Technologies par expérience (non traduites car termes techniques)
export const experienceTechnologies: Record<string, string[]> = {
  crpn: [
    "Scikit-learn",
    "VsCode",
    "Jupyter-Lab",
    "Slurm (Cluster)",
    "Git",
    "Gitlab",
    "MNE-Python"
  ],
  freelance: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Next.js",
    "React",
    "Node.js",
    "Docker"
  ],
  university: [
    "Python",
    "TensorFlow",
    "Keras",
    "Transformers",
    "EEG Analysis",
    "fNIRS",
    "Research"
  ]
};
