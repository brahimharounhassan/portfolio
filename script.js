// ===== CONFIGURATION GLOBALE =====
const CONFIG = {
    // Performance
    DEBOUNCE_DELAY: 100,
    THROTTLE_DELAY: 16, // 60fps
    INTERSECTION_THRESHOLD: 0.1,
    
    // Animations
    ANIMATION_DURATION: 800,
    STAGGER_DELAY: 100,
    
    // Responsive breakpoints
    BREAKPOINTS: {
        mobile: 768,
        tablet: 1024,
        desktop: 1440
    }
};

// ===== UTILITAIRES MODERNES =====
class Utils {
    static debounce(func, delay = CONFIG.DEBOUNCE_DELAY) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    static throttle(func, delay = CONFIG.THROTTLE_DELAY) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, delay);
            }
        };
    }

    static getDeviceType() {
        const width = window.innerWidth;
        if (width < CONFIG.BREAKPOINTS.mobile) return 'mobile';
        if (width < CONFIG.BREAKPOINTS.tablet) return 'tablet';
        if (width < CONFIG.BREAKPOINTS.desktop) return 'laptop';
        return 'desktop';
    }

    static prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    static isInViewport(element, threshold = 0.1) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold;
    }

    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
}

// ===== GESTIONNAIRE DE NAVIGATION =====
class NavigationManager {
    constructor() {
        this.nav = document.querySelector('.nav-modern');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        this.sections = document.querySelectorAll('section[id]');
        
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveSection();
    }

    setupScrollEffects() {
        const handleScroll = Utils.throttle(() => {
            const scrollY = window.scrollY;
            
            // Navbar background effect
            if (scrollY > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    setupMobileMenu() {
        this.mobileToggle?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Fermer au clic sur un lien
        this.navLinks.forEach(link => {
            if (link.classList.contains('mobile-nav-link')) {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            }
        });

        // Fermer au clic à l'extérieur
        this.mobileMenu?.addEventListener('click', (e) => {
            if (e.target === this.mobileMenu) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        const isActive = this.mobileMenu.classList.contains('active');
        if (isActive) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        this.mobileMenu?.classList.add('active');
        this.mobileToggle?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMobileMenu() {
        this.mobileMenu?.classList.remove('active');
        this.mobileToggle?.classList.remove('active');
        document.body.style.overflow = '';
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href?.startsWith('#')) return;

                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    const behavior = Utils.prefersReducedMotion() ? 'auto' : 'smooth';
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior
                    });
                }
            });
        });
    }

    setupActiveSection() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.setActiveLink(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-80px 0px -80px 0px'
            }
        );

        this.sections.forEach(section => observer.observe(section));
    }

    setActiveLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== GESTIONNAIRE DE PROGRESSION =====
class ProgressManager {
    constructor() {
        this.progressBar = document.querySelector('.progress-bar');
        this.scrollToTopBtn = document.querySelector('.scroll-to-top-modern');
        this.progressRing = document.querySelector('.progress-ring-progress');
        
        this.init();
    }

    init() {
        if (!this.progressBar) return;
        
        const handleScroll = Utils.throttle(() => {
            this.updateProgress();
            this.updateScrollToTop();
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        this.setupScrollToTop();
    }

    updateProgress() {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(Math.max((scrolled / maxScroll) * 100, 0), 100);
        
        this.progressBar.style.width = `${progress}%`;
        
        // Mise à jour du ring de progression
        if (this.progressRing) {
            const circumference = 2 * Math.PI * 20; // rayon = 20
            const offset = circumference - (progress / 100) * circumference;
            this.progressRing.style.strokeDasharray = circumference;
            this.progressRing.style.strokeDashoffset = offset;
        }
    }

    updateScrollToTop() {
        if (!this.scrollToTopBtn) return;
        
        if (window.scrollY > 500) {
            this.scrollToTopBtn.classList.add('visible');
        } else {
            this.scrollToTopBtn.classList.remove('visible');
        }
    }

    setupScrollToTop() {
        this.scrollToTopBtn?.addEventListener('click', () => {
            const behavior = Utils.prefersReducedMotion() ? 'auto' : 'smooth';
            window.scrollTo({ top: 0, behavior });
        });
    }
}

// ===== GESTIONNAIRE D'ANIMATIONS =====
class AnimationManager {
    constructor() {
        this.observedElements = new Set();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupTypewriter();
        this.setupSkillBars();
        this.setupParticles();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.observedElements.has(entry.target)) {
                        this.animateElement(entry.target);
                        this.observedElements.add(entry.target);
                    }
                });
            },
            {
                threshold: CONFIG.INTERSECTION_THRESHOLD,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observer les éléments à animer
        const animatedElements = document.querySelectorAll(`
            .skill-card, .project-card, .contact-card, .education-card,
            .timeline-item, .publication-card, [data-aos], .skill-item-modern
        `);

        animatedElements.forEach(el => observer.observe(el));
    }

    animateElement(element) {
        if (Utils.prefersReducedMotion()) {
            element.style.opacity = '1';
            element.style.transform = 'none';
            return;
        }

        // Animation par défaut
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all ${CONFIG.ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;

        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });

        // Animation spécifique pour les barres de compétences
        if (element.classList.contains('skill-item-modern')) {
            this.animateSkillBar(element);
        }
    }

    setupTypewriter() {
        const typewriterElement = document.querySelector('.typewriter');
        if (!typewriterElement || Utils.prefersReducedMotion()) return;

        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        
        let i = 0;
        const typeSpeed = 100;

        const typeWriter = () => {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typeSpeed);
            }
        };

        setTimeout(typeWriter, 1000);
    }

    setupSkillBars() {
        const skillObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateSkillBar(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.skill-item-modern').forEach(item => {
            skillObserver.observe(item);
        });
    }

    animateSkillBar(skillItem) {
        const progressBar = skillItem.querySelector('.skill-progress-modern');
        const targetWidth = progressBar.dataset.width;
        
        if (!progressBar || !targetWidth) return;

        progressBar.style.width = '0%';
        
        setTimeout(() => {
            progressBar.style.width = targetWidth;
        }, 200);
    }

    setupParticles() {
        // Création de particules animées pour le background
        const particlesContainer = document.querySelector('.particles-container');
        if (!particlesContainer || Utils.prefersReducedMotion()) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 10 + 5}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }
}

// ===== GESTIONNAIRE DE THÈME =====
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggle();
        this.watchSystemTheme();
    }

    applyTheme(theme) {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        this.updateThemeIcon(theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    updateThemeIcon(theme) {
        const icons = document.querySelectorAll('.theme-toggle i');
        icons.forEach(icon => {
            icon.className = theme === 'dark' ? 'ph-sun' : 'ph-moon';
        });
    }

    setupToggle() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                e.preventDefault();
                const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme);
            }
        });
    }

    watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// ===== GESTIONNAIRE DE PERFORMANCE =====
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.preloadCriticalResources();
        this.setupL
