/**
 * Asscore Squash Series - Main Application Script
 * Handles navigation, mobile menu, and interactive elements.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLiveTicker();
    initScrollEffects();
});

/**
 * Navigation & Mobile Menu Handler
 */
function initNavigation() {
    const header = document.getElementById('main-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Toggle Mobile Menu
    mobileToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.contains('active');
        toggleMenu(!isActive);
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    function toggleMenu(show) {
        if (show) {
            mobileMenu.classList.add('active');
            mobileToggle.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
            header.style.padding = '0'; // Shrink slightly if needed
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
}

/**
 * Live Ticker Handler
 */
function initLiveTicker() {
    const ticker = document.getElementById('live-ticker');
    // Logic to close ticker if we added a close button (currently removed for simplicity in HTML)
    
    // Mock Data Injection (Optional - could fetch from API)
    const matches = [
        "J. Anderson (1) def. M. Le Roux (2) 3-2",
        "Upcoming: Ladies Final @ 14:00",
        "Court 3: U19 Semi-Final - Live"
    ];
    
    // If we wanted to update dynamically:
    // const content = document.getElementById('ticker-content');
    // content.innerHTML = matches.map(m => `<span>${m}</span><span>•</span>`).join('');
}

/**
 * Global Scroll Interactions (Fade-ins)
 */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Add the class style dynamically if not in CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}