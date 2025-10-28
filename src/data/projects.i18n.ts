import { Locale } from '@/lib/i18n';

export interface ProjectTranslations {
  title: string;
  description: string;
  category: string;
  highlights: string[];
}

export const projectsI18n: Record<string, Record<Locale, ProjectTranslations>> = {
  mci: {
    fr: {
      title: 'Détection MCI avec Transformers',
      description: 'Modèle révolutionnaire utilisant l\'architecture Transformer pour détecter les troubles cognitifs légers (MCI) à partir de signaux EEG et fNIRS. Précision de 98% surpassant les méthodes traditionnelles.',
      category: 'Deep Learning • Neurosciences',
      highlights: [
        'Architecture Transformer adaptée aux signaux temporels',
        'Détection précoce des troubles cognitifs',
        'Validation sur datasets publics',
        'Publication dans EUSIPCO 2023'
      ]
    },
    en: {
      title: 'MCI Detection with Transformers',
      description: 'Revolutionary model using Transformer architecture to detect Mild Cognitive Impairment (MCI) from EEG and fNIRS signals. 98% accuracy surpassing traditional methods.',
      category: 'Deep Learning • Neuroscience',
      highlights: [
        'Transformer architecture adapted for temporal signals',
        'Early detection of cognitive impairment',
        'Validation on public datasets',
        'Published in EUSIPCO 2023'
      ]
    }
  },
  phonems: {
    fr: {
      title: 'Classification de Phonèmes EEG',
      description: 'Système de classification avancé pour identifier les phonèmes /da/ et /ba/ à partir de signaux EEG chez les nourrissons. Utilisation d\'algorithmes de Machine Learning optimisés.',
      category: 'Machine Learning • Neurosciences',
      highlights: [
        'Classification binaire /da/ vs /ba/',
        'Prétraitement avancé des signaux EEG',
        'Validation croisée robuste',
        'Pipeline ML optimisé'
      ]
    },
    en: {
      title: 'EEG Phoneme Classification',
      description: 'Advanced classification system to identify /da/ and /ba/ phonemes from infant EEG signals. Using optimized Machine Learning algorithms.',
      category: 'Machine Learning • Neuroscience',
      highlights: [
        'Binary classification /da/ vs /ba/',
        'Advanced EEG signal preprocessing',
        'Robust cross-validation',
        'Optimized ML pipeline'
      ]
    }
  },
  speech: {
    fr: {
      title: 'Classification de Phonèmes EEG',
      description: 'Système de classification avancé pour identifier les phonèmes /da/ et /ba/ à partir de signaux EEG chez les nourrissons. Utilisation d\'algorithmes de Machine Learning optimisés.',
      category: 'Machine Learning • Neurosciences',
      highlights: [
        'Classification binaire /da/ vs /ba/',
        'Prétraitement avancé des signaux EEG',
        'Validation croisée robuste',
        'Pipeline ML optimisé'
      ]
    },
    en: {
      title: 'EEG Phoneme Classification',
      description: 'Advanced classification system to identify /da/ and /ba/ phonemes from infant EEG signals. Using optimized Machine Learning algorithms.',
      category: 'Machine Learning • Neuroscience',
      highlights: [
        'Binary classification /da/ vs /ba/',
        'Advanced EEG signal preprocessing',
        'Robust cross-validation',
        'Optimized ML pipeline'
      ]
    }
  },
  ipv6: {
    fr: {
      title: 'Tunnel IPv6 over IPv4',
      description: 'Implémentation d\'un mécanisme de tunneling IPv6 sur IPv4 en C. Solution permettant la transition vers IPv6 tout en maintenant la compatibilité avec les réseaux IPv4 existants.',
      category: 'Réseaux • Système',
      highlights: [
        'Tunneling IPv6 over IPv4',
        'Implémentation en C bas niveau',
        'Gestion des protocoles réseau',
        'Performance optimisée'
      ]
    },
    en: {
      title: 'IPv6 over IPv4 Tunnel',
      description: 'Implementation of IPv6 tunneling mechanism over IPv4 in C. Solution enabling IPv6 transition while maintaining compatibility with existing IPv4 networks.',
      category: 'Networking • System',
      highlights: [
        'IPv6 over IPv4 tunneling',
        'Low-level C implementation',
        'Network protocol management',
        'Optimized performance'
      ]
    }
  },
  ocr: {
    fr: {
      title: 'Moteur OCR from Scratch',
      description: 'Développement d\'un moteur de reconnaissance optique de caractères (OCR) from scratch en Python. Implémentation complète du pipeline de traitement d\'images et reconnaissance.',
      category: 'Computer Vision • Machine Learning',
      highlights: [
        'OCR développé from scratch',
        'Pipeline complet de traitement d\'images',
        'Algorithmes de segmentation avancés',
        'Reconnaissance de caractères multi-fonts'
      ]
    },
    en: {
      title: 'OCR Engine from Scratch',
      description: 'Development of an Optical Character Recognition (OCR) engine from scratch in Python. Complete implementation of image processing and recognition pipeline.',
      category: 'Computer Vision • Machine Learning',
      highlights: [
        'OCR developed from scratch',
        'Complete image processing pipeline',
        'Advanced segmentation algorithms',
        'Multi-font character recognition'
      ]
    }
  }
};
