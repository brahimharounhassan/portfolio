// ===== UTILITAIRES DE PERFORMANCE =====
// Debouncing pour optimiser les performances
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttling pour les événements fréquents
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
    initScrollAnimations();
    initTypewriter();
    initScrollToTop();
    initSmoothScrolling();
    initTheme();
    initAccessibility();
    initPerformanceOptimizations();
});

// ===== BARRE DE PROGRESSION =====
function initScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;
    
    const updateProgress = throttle(() => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = Math.min(Math.max(scrolled, 0), 100) + '%';
    }, 16); // 60fps
    
    window.addEventListener('scroll', updateProgress, { passive: true });
}

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
    // Respecter les préférences de mouvement réduit
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (prefersReducedMotion) {
                    // Animation réduite pour l'accessibilité
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                } else {
                    // Animation normale
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments à animer
    const elementsToAnimate = document.querySelectorAll(
        '.skill-card, .project-card, .contact-item, .publication-card'
    );
    
    elementsToAnimate.forEach((el, index) => {
        // État initial seulement si les animations sont autorisées
        if (!prefersReducedMotion) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            el.style.transitionDelay = `${index * 0.1}s`; // Animation échelonnée
        }
        observer.observe(el);
    });
}

// ===== EFFET MACHINE À ÉCRIRE =====
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;

    const text = typewriterElement.textContent;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Pas d'animation si mouvement réduit préféré
        typewriterElement.textContent = text;
        return;
    }

    typewriterElement.textContent = '';
    typewriterElement.style.borderRight = '3px solid #3b82f6';
    typewriterElement.style.width = '0';
    typewriterElement.style.whiteSpace = 'nowrap';
    typewriterElement.style.overflow = 'hidden';

    setTimeout(() => {
        typewriterElement.style.animation = 'typewriter 4s steps(40) forwards, blink 1s infinite';
        typewriterElement.textContent = text;
    }, 1000);
}

// ===== BOUTON SCROLL TO TOP =====
function initScrollToTop() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollToTopBtn) return;
    
    const toggleVisibility = debounce(() => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }, 100);
    
    window.addEventListener('scroll', toggleVisibility, { passive: true });
}

function scrollToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
}

// ===== DÉFILEMENT FLUIDE POUR LA NAVIGATION =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Compte pour la nav fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        });
    });
}

// ===== GESTION DU THÈME =====
function initTheme() {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'ph-sun' : 'ph-moon';
    }
}

// ===== EFFET PARALLAXE OPTIMISÉ =====
window.addEventListener('scroll', throttle(function() {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.particles');
    
    // Utiliser requestAnimationFrame pour de meilleures performances
    requestAnimationFrame(() => {
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
        });
    });
}, 16), { passive: true });

// ===== AMÉLIORATION DES INTERACTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Améliorer les effets de survol pour les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.style.transform = 'translateY(-8px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Améliorer l'accessibilité au clavier
        card.addEventListener('focusin', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('focusout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ===== OBSERVATION DES SECTIONS POUR LA NAVIGATION =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Retirer la classe active de tous les liens
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Ajouter la classe active au lien correspondant
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-80px 0px -80px 0px'
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ===== AMÉLIORATIONS D'ACCESSIBILITÉ =====
function initAccessibility() {
    // Gestion des préférences de mouvement réduit
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion(e) {
        if (e.matches) {
            document.documentElement.classList.add('reduced-motion');
        } else {
            document.documentElement.classList.remove('reduced-motion');
        }
    }
    
    mediaQuery.addListener(handleReducedMotion);
    handleReducedMotion(mediaQuery);
    
    // Améliorer la navigation au clavier
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ===== OPTIMISATIONS DE PERFORMANCE =====
function initPerformanceOptimizations() {
    // Précharger les polices critiques
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    fontPreload.as = 'style';
    fontPreload.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(fontPreload);
    
    // Optimisation des images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Améliorer les performances avec will-change
    const animatedElements = document.querySelectorAll('.project-card, .skill-card, .btn-primary, .btn-secondary');
    animatedElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.willChange = 'transform';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.willChange = 'auto';
        });
    });
}

// ===== GESTION DES ERREURS =====
window.addEventListener('error', function(e) {
    console.warn('Erreur capturée:', e.error);
    // En production, vous pourriez envoyer ces erreurs à un service de monitoring
});

// ===== CHARGEMENT TERMINÉ =====
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Optimisation finale
    setTimeout(() => {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        lazyElements.forEach(el => {
            el.removeAttribute('data-lazy');
        });
    }, 100);
});

// ===== DÉTECTION DE CONNEXION LENTE =====
if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        document.documentElement.classList.add('slow-connection');
    }
}

// ===== AMÉLIORATION DES CLICS POUR MOBILE =====
document.addEventListener('touchstart', function() {}, { passive: true });