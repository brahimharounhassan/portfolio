export type Locale = 'fr' | 'en'

export const defaultLocale: Locale = 'fr'

export const locales: Locale[] = ['fr', 'en']

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      greeting: "👋 Bienvenue dans mon Portfolio, je suis",
      name: "Brahim Haroun Hassan",
      title: "Ingénieur en Intelligence Artificielle",
      subtitle: "Spécialisé en Machine Learning, Deep Learning et traitement du langage naturel. Je transforme les données en solutions intelligentes.",
      cta: {
        contact: "Me Contacter",
        contactShort: "Contact",
        projects: "Voir mes Projets",
        projectsFull: "Découvrir mes projets",
        projectsShort: "Mes projets",
        cv: "Télécharger CV"
      },
      stats: {
        experience: "Années d'expérience",
        projects: "Projets réalisés", 
        certifications: "Certifications",
        precision: "Précision",
        citations: "Citations",
        published: "Publié",
        publication: "Publication",
        experiences: "Expériences",
        yearsAI: "Années IA",
        views: "Vues"
      }
    },
    about: {
      title: "A propos de moi",
      subtitle: "Transformant les défis complexes en solutions intelligentes",
      description: "Ingénieur en Intelligence Artificielle avec une expertise approfondie en Machine Learning et Deep Learning. Passionné par l'innovation technologique, je me spécialise dans le développement de solutions IA avancées, notamment en traitement du langage naturel et vision par ordinateur.",
      highlights: {
        ai: "Expertise en IA et Machine Learning",
        research: "Recherche et développement",
        innovation: "Innovation et créativité",
        collaboration: "Collaboration et leadership"
      },
      contact: {
        emailPrimary: "Email Principal",
        emailSecondary: "Email Secondaire",
        locationLabel: "Localisation",
        email1: "brahimharoun57@yahoo.fr",
        email2: "haroun-hassan.brahim@etu-univ.amu.fr",
        location: "Marseille, France",
        availability: "Disponible pour de nouveaux défis"
      },
      cv: {
        badge: "Curriculum Vitae",
        title: "Mon CV Complet",
        subtitle: "Téléchargez mon curriculum vitae détaillé",
        preview: "Aperçu du CV",
        completePortfolio: "Portfolio Complet",
        description: "Découvrez mon parcours détaillé, mes compétences techniques et mes réalisations professionnelles dans ce document complet.",
        highlights: {
          education: "Formation académique et certifications",
          publications: "Publications et recherches",
          projects: "Projets et réalisations techniques"
        },
        download: {
          french: "Télécharger CV (Français)",
          frenchShort: "CV FR",
          frenchFull: "Télécharger CV",
          english: "Télécharger CV (Anglais)",
          englishShort: "CV EN",
          englishFull: "Download CV"
        },
        downloading: "Téléchargement...",
        retry: "Réessayer",
        securityInfo: "Téléchargement sécurisé et suivi",
        securityActive: "Sécurité Active",
        accessDenied: "Accès refusé",
        rateLimitExceeded: "Trop de tentatives, réessayez plus tard",
        invalidReferer: "Source de requête non autorisée",
        suspiciousActivity: "Activité suspecte détectée",
        downloadError: "Erreur de téléchargement"
      }
    },
    skills: {
      title: "Expertise Technique",
      subtitle: "Technologies maîtrisées et domaines d'expertise",
      categories: {
        "Machine Learning": "Machine Learning",
        "Deep Learning": "Deep Learning",
        "Langages de Programmation": "Langages de Programmation",
        "Outils & Frameworks": "Outils & Frameworks",
        "Bases de Données": "Bases de Données",
        "Cloud & DevOps": "Cloud & DevOps"
      }
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Solutions IA qui repoussent les limites",
      featured: "Projet Phare",
      viewCode: "Voir le Code",
      viewDemo: "Voir la Démo",
      viewPublication: "Voir la Publication",
      categories: {
        all: "Tous",
        "machine learning": "Machine Learning",
        "deep learning": "Deep Learning",
        "computer vision": "Vision par Ordinateur",
        "nlp": "Traitement du Langage",
        "data science": "Science des Données"
      }
    },
    experience: {
      badge: "Parcours",
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours dans l'intelligence artificielle",
      present: "Présent",
      months: {
        1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Jun",
        7: "Jul", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc"
      }
    },
    certifications: {
      title: "Certifications et Formations",
      subtitle: "Validation de mes compétences techniques",
      viewCertificate: "Voir le Certificat",
      verify: "Vérifier",
      issuer: "Délivré par",
      date: "Date d'obtention",
      skills: "Compétences validées"
    },
    secureDownload: {
      validating: "Validation de l'accès...",
      generating: "Génération du token sécurisé...",
      downloading: "Téléchargement en cours...",
      success: "Succès ✓",
      protectedDocument: "Document protégé",
      accessLogged: "Accès enregistré pour sécurité",
      retry: "Réessayer",
      accessDenied: "Accès refusé",
      rateLimitExceeded: "Trop de tentatives, réessayez plus tard",
      invalidReferer: "Source de requête non autorisée",
      suspiciousActivity: "Activité suspecte détectée",
      downloadError: "Erreur de téléchargement"
    },
    footer: {
      description: "Ingénieur en Intelligence Artificielle passionné par l'innovation et la recherche.",
      quickLinks: "Liens Rapides",
      connect: "Me Suivre", 
      rights: "Tous droits réservés",
      madeWith: "Créé avec"
    },
    ui: {
      backToTop: "Retour en haut"
    },
    cookies: {
      title: "Cookies & Confidentialité",
      description: "Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Vos données restent anonymes et sécurisées.",
      technicalTitle: "🔧 Cookies techniques",
      technicalRequired: "Requis",
      technicalDescription: "Nécessaires au fonctionnement du site (thème, langue, préférences).",
      analyticsTitle: "📊 Google Analytics",
      analyticsOptional: "Optionnel",
      analyticsDescription: "Analyse anonyme du trafic pour améliorer le site.",
      acceptAll: "Tout accepter",
      showDetails: "Détails",
      hideDetails: "Masquer",
      decline: "Refuser",
      notice: "En continuant, vous acceptez notre utilisation des cookies essentiels."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      greeting: "👋 Welcome to my Portfolio, I'm",
      name: "Brahim Haroun Hassan",
      title: "AI Engineer",
      subtitle: "Specialized in Machine Learning, Deep Learning and Natural Language Processing. I transform data into intelligent solutions.",
      cta: {
        contact: "Get In Touch",
        contactShort: "Contact",
        projects: "View Projects",
        projectsFull: "Discover my projects",
        projectsShort: "My projects",
        cv: "Download CV"
      },
      stats: {
        experience: "Years of experience",
        projects: "Completed projects", 
        certifications: "Certifications",
        precision: "Accuracy",
        citations: "Citations",
        published: "Published",
        publication: "Publication",
        experiences: "Experiences",
        yearsAI: "AI Years",
        views: "Views"
      }
    },
    about: {
      title: "About Me",
      subtitle: "Transforming complex challenges into intelligent solutions",
      description: "AI Engineer with deep expertise in Machine Learning and Deep Learning. Passionate about technological innovation, I specialize in developing advanced AI solutions, particularly in natural language processing and computer vision.",
      highlights: {
        ai: "AI and Machine Learning expertise",
        research: "Research and development",
        innovation: "Innovation and creativity",
        collaboration: "Collaboration and leadership"
      },
      contact: {
        emailPrimary: "Primary Email",
        emailSecondary: "Secondary Email",
        locationLabel: "Location",
        email1: "brahimharoun57@yahoo.fr",
        email2: "haroun-hassan.brahim@etu.univ-amu.fr",
        location: "Marseille, France",
        availability: "Available for new challenges"
      },
      cv: {
        badge: "Curriculum Vitae",
        title: "My Complete CV",
        subtitle: "Download my detailed resume",
        preview: "CV Preview",
        completePortfolio: "Complete Portfolio",
        description: "Discover my detailed background, technical skills and professional achievements in this comprehensive document.",
        highlights: {
          education: "Academic background and certifications",
          publications: "Publications and research",
          projects: "Projects and technical achievements"
        },
        download: {
          french: "Download CV (French)",
          frenchShort: "CV FR",
          frenchFull: "Télécharger CV",
          english: "Download CV (English)",
          englishShort: "CV EN",
          englishFull: "Download CV"
        },
        downloading: "Downloading...",
        retry: "Retry",
        securityInfo: "Secure and tracked download",
        securityActive: "Security Active",
        accessDenied: "Access denied",
        rateLimitExceeded: "Too many attempts, try again later",
        invalidReferer: "Unauthorized request source",
        suspiciousActivity: "Suspicious activity detected",
        downloadError: "Download error"
      }
    },
    skills: {
      title: "Technical Expertise",
      subtitle: "Mastered technologies and areas of expertise",
      categories: {
        "Machine Learning": "Machine Learning",
        "Deep Learning": "Deep Learning",
        "Programming Languages": "Programming Languages",
        "Tools & Frameworks": "Tools & Frameworks",
        "Databases": "Databases",
        "Cloud & DevOps": "Cloud & DevOps"
      }
    },
    projects: {
      title: "My Projects",
      subtitle: "AI solutions that push boundaries",
      featured: "Featured Project",
      viewCode: "View Code",
      viewDemo: "View Demo",
      viewPublication: "View Publication",
      categories: {
        all: "All",
        "machine learning": "Machine Learning",
        "deep learning": "Deep Learning",
        "computer vision": "Computer Vision",
        "nlp": "Natural Language Processing",
        "data science": "Data Science"
      }
    },
    experience: {
      badge: "Journey",
      title: "Professional Experience",
      subtitle: "My journey in artificial intelligence",
      present: "Present",
      months: {
        1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun",
        7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"
      }
    },
    certifications: {
      title: "Certifications and Training",
      subtitle: "Validation of my technical skills",
      viewCertificate: "View Certificate",
      verify: "Verify",
      issuer: "Issued by",
      date: "Date obtained",
      skills: "Skills validated"
    },
    secureDownload: {
      validating: "Validating access...",
      generating: "Generating secure token...",
      downloading: "Downloading...",
      success: "Success ✓",
      protectedDocument: "Protected document",
      accessLogged: "Access logged for security",
      retry: "Retry",
      accessDenied: "Access denied",
      rateLimitExceeded: "Too many attempts, try again later",
      invalidReferer: "Unauthorized request source",
      suspiciousActivity: "Suspicious activity detected",
      downloadError: "Download error"
    },
    footer: {
      description: "AI Engineer passionate about innovation and research.",
      quickLinks: "Quick Links",
      connect: "Follow Me",
      rights: "All rights reserved",
      madeWith: "Made with"
    },
    ui: {
      backToTop: "Back to top"
    },
    cookies: {
      title: "Cookies & Privacy",
      description: "This site uses cookies to improve your browsing experience and analyze traffic. Your data remains anonymous and secure.",
      technicalTitle: "🔧 Technical cookies",
      technicalRequired: "Required",
      technicalDescription: "Necessary for the site to function (theme, language, preferences).",
      analyticsTitle: "📊 Google Analytics",
      analyticsOptional: "Optional",
      analyticsDescription: "Anonymous traffic analysis to improve the site.",
      acceptAll: "Accept all",
      showDetails: "Details",
      hideDetails: "Hide",
      decline: "Decline",
      notice: "By continuing, you accept our use of essential cookies."
    }
  },
} as const;