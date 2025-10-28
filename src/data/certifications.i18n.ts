import { Locale } from '@/lib/i18n';

export interface CertificationTranslations {
  description: string;
}

export const certificationsI18n: Record<string, Record<Locale, CertificationTranslations>> = {
  ccna1: {
    fr: {
      description: 'Certification fondamentale en réseaux Cisco couvrant les concepts de routage et de commutation. Maîtrise des protocoles réseau, configuration des équipements Cisco, et troubleshooting des infrastructures réseau.'
    },
    en: {
      description: 'Fundamental Cisco networking certification covering routing and switching concepts. Mastery of network protocols, Cisco equipment configuration, and network infrastructure troubleshooting.'
    }
  },
  'aws-cloud-practitioner': {
    fr: {
      description: 'Certification de base AWS couvrant les services cloud essentiels, l\'architecture cloud, la sécurité, et les modèles de tarification. Compréhension des concepts fondamentaux du cloud computing.'
    },
    en: {
      description: 'AWS foundational certification covering essential cloud services, cloud architecture, security, and pricing models. Understanding of fundamental cloud computing concepts.'
    }
  },
  'deep-learning-specialization': {
    fr: {
      description: 'Spécialisation complète en Deep Learning couvrant les réseaux de neurones, CNN, RNN, et techniques avancées d\'optimisation. Projets pratiques avec TensorFlow et Keras.'
    },
    en: {
      description: 'Comprehensive Deep Learning specialization covering neural networks, CNN, RNN, and advanced optimization techniques. Hands-on projects with TensorFlow and Keras.'
    }
  },
  'machine-learning': {
    fr: {
      description: 'Certification en Machine Learning couvrant les algorithmes supervisés et non supervisés, régression, classification, clustering et systèmes de recommandation.'
    },
    en: {
      description: 'Machine Learning certification covering supervised and unsupervised algorithms, regression, classification, clustering and recommendation systems.'
    }
  }
};
