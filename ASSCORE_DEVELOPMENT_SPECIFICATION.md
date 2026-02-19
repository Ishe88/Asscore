# ASSCORE SQUASH SERIES - FRONTEND DEVELOPMENT SPECIFICATION

## EXECUTIVE SUMMARY

This document provides comprehensive specifications for developing the Asscore Squash Series website frontend. This is **Phase 1** of the project, focusing exclusively on a high-performance, visually stunning static frontend using HTML, CSS, and JavaScript. The architecture must be designed to seamlessly accommodate future backend integrations (Phase 2) without requiring structural refactoring.

**Project Vision**: A "Digital Stadium" for squash - a dark-mode, high-energy sports platform that delivers an immersive experience rivaling top global sports websites like the PSA Tour.

**Technology Stack**: Pure HTML5, CSS3 (with CSS Grid & Flexbox), Vanilla JavaScript (ES6+)

**Critical Success Factors**:
- Mobile-first, fully responsive design (320px - 4K)
- "Industrial Velocity" aesthetic - dark, dynamic, energetic
- Modular architecture ready for live data integration
- Sub-2-second page load times
- Accessibility compliance (WCAG 2.1 AA)

---

## PROJECT STRUCTURE

```
asscore-squash/
│
├── index.html                 # Homepage (Adaptive States)
├── assets/
│   ├── css/
│   │   ├── reset.css         # CSS Reset/Normalize
│   │   ├── variables.css     # CSS Custom Properties
│   │   ├── typography.css    # Font Definitions & Styles
│   │   ├── components.css    # Reusable UI Components
│   │   ├── layout.css        # Grid System & Layouts
│   │   └── main.css          # Main Stylesheet (imports all)
│   ├── js/
│   │   ├── app.js            # Main Application Logic
│   │   ├── navigation.js     # Navigation & Mobile Menu
│   │   ├── live-ticker.js    # Live Score Ticker (Mock Data)
│   │   ├── countdown.js      # Event Countdown Timer
│   │   ├── animations.js     # Scroll Animations & Transitions
│   │   └── state-manager.js  # Homepage State Management
│   ├── images/
│   │   ├── logo/             # Brand Assets
│   │   ├── players/          # Player Cutouts (Transparent PNGs)
│   │   ├── venues/           # Venue Photography
│   │   └── icons/            # UI Icons (SVG)
│   └── fonts/
│       ├── oswald/           # Headlines Font
│       └── roboto-mono/      # Data/Scores Font
│
├── pages/
│   ├── series-overview.html
│   ├── rankings.html
│   ├── tournaments.html
│   ├── tournament-detail.html
│   ├── media-gallery.html
│   ├── media-videos.html
│   ├── resources.html
│   └── contact.html
│
└── README.md                  # Setup & Deployment Instructions
```

---

## DESIGN SYSTEM

### COLOR PALETTE

**Primary Colors** (Derived from Logo):
```css
:root {
  /* Brand Colors */
  --asscore-red: #E31E24;           /* Logo Red - Primary Action */
  --asscore-cyan: #5CC2E8;          /* Logo Cyan - Secondary Action */
  --asscore-blue: #1B4E9B;          /* Logo Blue - Accent */
  --asscore-light-blue: #87CEEB;    /* Light Cyan - Hover States */
  
  /* Backgrounds */
  --bg-primary: #1A1A1A;            /* Main Background (Deep Charcoal) */
  --bg-secondary: #242424;          /* Card Backgrounds */
  --bg-tertiary: #2E2E2E;           /* Elevated Elements */
  --bg-overlay: rgba(26, 26, 26, 0.95); /* Modal/Overlay */
  
  /* Accent Colors */
  --accent-gold: #D4AF37;           /* Premium/Trophy Elements */
  --accent-bronze: #CD7F32;         /* Secondary Premium */
  --accent-green: #00FF88;          /* Live Indicator */
  
  /* Text Colors */
  --text-primary: #FFFFFF;          /* Primary Text */
  --text-secondary: #B0B0B0;        /* Secondary Text */
  --text-muted: #707070;            /* Disabled/Placeholder */
  
  /* Status Colors */
  --status-live: #FF0000;           /* Live Match */
  --status-upcoming: #FFA500;       /* Upcoming */
  --status-completed: #00FF00;      /* Completed */
  
  /* Borders */
  --border-primary: #3A3A3A;
  --border-accent: var(--asscore-cyan);
}
```

**Color Usage Guidelines**:
- **Red**: Primary CTAs, "Live" badges, critical alerts
- **Cyan**: Interactive elements, score highlights, links
- **Blue**: Complementary accents, secondary buttons
- **Gold**: Trophy icons, series leader badges, premium content
- **Green**: Live indicators, success states

### TYPOGRAPHY

**Font Stack**:
```css
:root {
  /* Headlines - Bold, Condensed, Aggressive */
  --font-headline: 'Oswald', 'Arial Narrow', sans-serif;
  
  /* Body Text - Clean, Readable */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Data/Scores - Monospaced, Aligned */
  --font-mono: 'Roboto Mono', 'Courier New', monospace;
  
  /* Font Weights */
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-bold: 700;
  --fw-black: 900;
  
  /* Font Sizes (Fluid Typography) */
  --fs-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);     /* 12-14px */
  --fs-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);      /* 14-16px */
  --fs-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);     /* 16-18px */
  --fs-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.5rem);    /* 18-24px */
  --fs-xl: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);      /* 24-36px */
  --fs-2xl: clamp(2rem, 1.75rem + 1.25vw, 3.25rem);       /* 32-52px */
  --fs-3xl: clamp(2.5rem, 2rem + 2.5vw, 5rem);            /* 40-80px */
}
```

**Typography System**:
```css
/* Hero Headlines */
h1, .h1 {
  font-family: var(--font-headline);
  font-weight: var(--fw-bold);
  font-size: var(--fs-3xl);
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Section Titles */
h2, .h2 {
  font-family: var(--font-headline);
  font-weight: var(--fw-bold);
  font-size: var(--fs-2xl);
  line-height: 1.2;
  text-transform: uppercase;
}

/* Subsection Titles */
h3, .h3 {
  font-family: var(--font-headline);
  font-weight: var(--fw-medium);
  font-size: var(--fs-xl);
  line-height: 1.3;
}

/* Body Text */
p, .body {
  font-family: var(--font-body);
  font-size: var(--fs-base);
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Scores & Data */
.score, .data {
  font-family: var(--font-mono);
  font-weight: var(--fw-bold);
  letter-spacing: 0.05em;
}
```

### SPACING SYSTEM

```css
:root {
  /* Spacing Scale (8px base) */
  --space-xs: 0.25rem;    /* 4px */
  --space-sm: 0.5rem;     /* 8px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-2xl: 3rem;      /* 48px */
  --space-3xl: 4rem;      /* 64px */
  --space-4xl: 6rem;      /* 96px */
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.5);
  --shadow-glow-cyan: 0 0 20px rgba(92, 194, 232, 0.5);
  --shadow-glow-red: 0 0 20px rgba(227, 30, 36, 0.5);
}
```

### ANIMATION SYSTEM

```css
:root {
  /* Transition Durations */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* Easing Functions */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Standard Transitions */
.transition {
  transition: all var(--duration-normal) var(--ease-in-out);
}

/* Hover Scale Effect */
.hover-lift {
  transition: transform var(--duration-fast) var(--ease-out);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

/* Glitch Animation (for live score changes) */
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

.score-update {
  animation: glitch 0.3s ease-in-out;
}

/* Pulse Animation (for live indicators) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.live-indicator {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Slide-in Animation */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

---

## RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
:root {
  /* Breakpoints */
  --bp-xs: 320px;   /* Small Mobile */
  --bp-sm: 480px;   /* Mobile */
  --bp-md: 768px;   /* Tablet */
  --bp-lg: 1024px;  /* Desktop */
  --bp-xl: 1280px;  /* Large Desktop */
  --bp-2xl: 1536px; /* Extra Large Desktop */
}

/* Media Query Usage */
/* Mobile First: Base styles are mobile, use min-width for larger screens */

/* Example:
.element {
  width: 100%;              // Mobile
}

@media (min-width: 768px) {
  .element {
    width: 50%;             // Tablet+
  }
}

@media (min-width: 1024px) {
  .element {
    width: 33.333%;         // Desktop+
  }
}
*/
```

**Testing Requirements**:
- Must be tested on: iPhone SE (375px), iPhone 14 Pro (393px), iPad (768px), Desktop (1920px), 4K (3840px)
- Touch targets minimum 44x44px on mobile
- No horizontal scroll on any breakpoint
- Text remains readable at all sizes (min 14px for body text on mobile)

---

## CORE COMPONENTS

### 1. NAVIGATION HEADER

**Desktop Layout**:
- Fixed position header (height: 80px)
- Logo left-aligned (click to home)
- Horizontal menu center-aligned
- "Live Scores" CTA button right-aligned (red background, pulsing when live)

**Mobile Layout** (< 768px):
- Height: 60px
- Logo left, hamburger icon right
- Slide-in menu from right with overlay
- Menu items stacked vertically

**HTML Structure**:
```html
<!-- //HEADER SECTION// -->
<header class="header" id="main-header">
  <div class="container">
    <div class="header__inner">
      <!-- Logo -->
      <a href="index.html" class="header__logo">
        <img src="assets/images/logo/asscore-logo.svg" alt="Asscore Squash Series">
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="nav" id="main-nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="pages/series-overview.html">Series</a></li>
          <li class="nav__item"><a href="pages/rankings.html">Rankings</a></li>
          <li class="nav__item"><a href="pages/tournaments.html">Tournaments</a></li>
          <li class="nav__item"><a href="pages/media-gallery.html">Media</a></li>
          <li class="nav__item"><a href="pages/resources.html">Resources</a></li>
          <li class="nav__item"><a href="pages/contact.html">Contact</a></li>
        </ul>
      </nav>
      
      <!-- Live Scores CTA -->
      <div class="header__actions">
        <a href="#live-ticker" class="btn btn--live">
          <span class="live-indicator"></span>
          Live Scores
        </a>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle Menu">
        <span class="mobile-toggle__line"></span>
        <span class="mobile-toggle__line"></span>
        <span class="mobile-toggle__line"></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu" id="mobile-menu">
  <div class="mobile-menu__overlay"></div>
  <div class="mobile-menu__content">
    <nav class="mobile-nav">
      <ul class="mobile-nav__list">
        <li class="mobile-nav__item"><a href="pages/series-overview.html">Series Overview</a></li>
        <li class="mobile-nav__item"><a href="pages/rankings.html">Rankings</a></li>
        <li class="mobile-nav__item"><a href="pages/tournaments.html">Tournaments</a></li>
        <li class="mobile-nav__item"><a href="pages/media-gallery.html">Media</a></li>
        <li class="mobile-nav__item"><a href="pages/resources.html">Resources</a></li>
        <li class="mobile-nav__item"><a href="pages/contact.html">Contact</a></li>
      </ul>
      <div class="mobile-nav__cta">
        <a href="#live-ticker" class="btn btn--live btn--block">
          <span class="live-indicator"></span>
          View Live Scores
        </a>
      </div>
    </nav>
  </div>
</div>
```

**CSS Specifications**:
```css
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: var(--bg-overlay);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-primary);
  z-index: 1000;
  transition: transform var(--duration-fast) var(--ease-out);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: var(--space-lg);
}

/* Logo */
.header__logo img {
  height: 50px;
  width: auto;
  transition: transform var(--duration-fast) var(--ease-out);
}

.header__logo:hover img {
  transform: scale(1.05);
}

/* Desktop Navigation */
.nav__list {
  display: flex;
  gap: var(--space-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__item a {
  color: var(--text-secondary);
  text-decoration: none;
  font-family: var(--font-headline);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--space-sm) 0;
  position: relative;
  transition: color var(--duration-fast) var(--ease-out);
}

.nav__item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--asscore-cyan);
  transition: width var(--duration-normal) var(--ease-out);
}

.nav__item a:hover,
.nav__item a.active {
  color: var(--text-primary);
}

.nav__item a:hover::after,
.nav__item a.active::after {
  width: 100%;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  padding: var(--space-sm);
  cursor: pointer;
  z-index: 1002;
}

.mobile-toggle__line {
  width: 28px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--duration-normal) var(--ease-in-out);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  z-index: 1001;
  transition: right var(--duration-normal) var(--ease-in-out);
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
}

.mobile-menu__content {
  position: relative;
  margin-left: auto;
  width: 85%;
  max-width: 400px;
  height: 100%;
  background: var(--bg-secondary);
  padding: 100px var(--space-xl) var(--space-xl);
  overflow-y: auto;
}

.mobile-nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav__item {
  border-bottom: 1px solid var(--border-primary);
}

.mobile-nav__item a {
  display: block;
  padding: var(--space-lg) 0;
  color: var(--text-secondary);
  text-decoration: none;
  font-family: var(--font-headline);
  font-size: var(--fs-lg);
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  transition: color var(--duration-fast), transform var(--duration-fast);
}

.mobile-nav__item a:hover {
  color: var(--asscore-cyan);
  transform: translateX(8px);
}

/* Responsive Behavior */
@media (max-width: 767px) {
  .header {
    height: 60px;
  }
  
  .header__logo img {
    height: 40px;
  }
  
  .nav {
    display: none;
  }
  
  .header__actions {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
}

/* Active Mobile Toggle Animation */
.mobile-toggle.active .mobile-toggle__line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-toggle.active .mobile-toggle__line:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active .mobile-toggle__line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
```

**JavaScript Functionality**:
```javascript
// navigation.js
class Navigation {
  constructor() {
    this.header = document.getElementById('main-header');
    this.mobileToggle = document.getElementById('mobile-toggle');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.lastScroll = 0;
    
    this.init();
  }
  
  init() {
    this.setupMobileMenu();
    this.setupScrollBehavior();
    this.highlightActiveNav();
  }
  
  setupMobileMenu() {
    this.mobileToggle?.addEventListener('click', () => {
      this.mobileToggle.classList.toggle('active');
      this.mobileMenu.classList.toggle('active');
      document.body.style.overflow = this.mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking overlay
    this.mobileMenu?.querySelector('.mobile-menu__overlay')?.addEventListener('click', () => {
      this.closeMobileMenu();
    });
    
    // Close menu when clicking nav link
    this.mobileMenu?.querySelectorAll('.mobile-nav__item a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
  }
  
  closeMobileMenu() {
    this.mobileToggle?.classList.remove('active');
    this.mobileMenu?.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  setupScrollBehavior() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  
  handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Hide header on scroll down, show on scroll up
    if (currentScroll > this.lastScroll && currentScroll > 100) {
      this.header.style.transform = 'translateY(-100%)';
    } else {
      this.header.style.transform = 'translateY(0)';
    }
    
    this.lastScroll = currentScroll;
  }
  
  highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__item a, .mobile-nav__item a').forEach(link => {
      if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});
```

---

### 2. LIVE SCORE TICKER

**Purpose**: Persistent bar showing real-time match scores (mock data for Phase 1)

**Desktop**: Top of viewport, below header (fixed position)
**Mobile**: Bottom of viewport (fixed position, doesn't interfere with content)

**HTML Structure**:
```html
<!-- //LIVE TICKER SECTION// -->
<aside class="live-ticker" id="live-ticker">
  <div class="live-ticker__container">
    <div class="live-ticker__label">
      <span class="live-indicator"></span>
      <span class="live-ticker__text">LIVE NOW</span>
    </div>
    
    <div class="live-ticker__matches">
      <div class="ticker-scroll">
        <!-- Match Items (Generated by JS) -->
        <div class="ticker-match">
          <span class="ticker-match__court">Glass Court</span>
          <span class="ticker-match__player ticker-match__player--leading">J. Anderson</span>
          <span class="ticker-match__score">11-9, 11-8, 7-5</span>
          <span class="ticker-match__player">M. Le Roux</span>
        </div>
        
        <div class="ticker-match">
          <span class="ticker-match__court">Court 3</span>
          <span class="ticker-match__player">T. Russell</span>
          <span class="ticker-match__score">8-11, 11-6, 9-9</span>
          <span class="ticker-match__player ticker-match__player--leading">S. Brownlee</span>
        </div>
        
        <!-- More matches... -->
      </div>
    </div>
    
    <button class="live-ticker__close" aria-label="Close Live Ticker">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="2"/>
      </svg>
    </button>
  </div>
</aside>
```

**CSS Specifications**:
```css
.live-ticker {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, var(--status-live) 0%, var(--asscore-red) 100%);
  box-shadow: var(--shadow-lg);
  z-index: 999;
  transform: translateY(0);
  transition: transform var(--duration-normal) var(--ease-out);
}

.live-ticker.hidden {
  transform: translateY(-100%);
}

.live-ticker__container {
  display: grid;
  grid-template-columns: 150px 1fr 50px;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
}

.live-ticker__label {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-headline);
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.live-indicator {
  width: 10px;
  height: 10px;
  background: var(--text-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.live-ticker__matches {
  overflow: hidden;
  position: relative;
}

.ticker-scroll {
  display: flex;
  gap: var(--space-2xl);
  animation: scroll-ticker 30s linear infinite;
}

@keyframes scroll-ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ticker-match {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: var(--fs-sm);
}

.ticker-match__court {
  color: var(--text-primary);
  font-weight: var(--fw-bold);
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-sm);
}

.ticker-match__player {
  color: var(--text-secondary);
}

.ticker-match__player--leading {
  color: var(--text-primary);
  font-weight: var(--fw-bold);
}

.ticker-match__score {
  color: var(--text-primary);
  font-weight: var(--fw-bold);
  padding: 0 var(--space-sm);
}

.live-ticker__close {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  cursor: pointer;
  transition: background var(--duration-fast);
}

.live-ticker__close:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Mobile Adjustments */
@media (max-width: 767px) {
  .live-ticker {
    top: auto;
    bottom: 0;
  }
  
  .live-ticker__container {
    grid-template-columns: 100px 1fr 40px;
    padding: var(--space-sm) var(--space-md);
  }
  
  .live-ticker__label {
    font-size: var(--fs-xs);
  }
  
  .ticker-match {
    font-size: var(--fs-xs);
    gap: var(--space-sm);
  }
  
  .ticker-match__court {
    display: none; /* Hide court names on very small screens */
  }
}
```

**JavaScript Functionality**:
```javascript
// live-ticker.js
class LiveTicker {
  constructor() {
    this.ticker = document.getElementById('live-ticker');
    this.closeBtn = this.ticker?.querySelector('.live-ticker__close');
    this.tickerScroll = this.ticker?.querySelector('.ticker-scroll');
    
    this.mockMatches = [
      { court: 'Glass Court', player1: 'J. Anderson', player2: 'M. Le Roux', score: '11-9, 11-8, 7-5', leading: 'player1' },
      { court: 'Court 3', player1: 'T. Russell', player2: 'S. Brownlee', score: '8-11, 11-6, 9-9', leading: 'player2' },
      { court: 'Court 2', player1: 'A. Smith', player2: 'B. Jones', score: '11-3, 10-12, 8-3', leading: 'player1' },
      { court: 'Court 1', player1: 'C. Williams', player2: 'D. Brown', score: '6-11, 11-9, 5-5', leading: null }
    ];
    
    this.init();
  }
  
  init() {
    this.renderMatches();
    this.setupCloseButton();
    this.startAutoUpdate();
  }
  
  renderMatches() {
    if (!this.tickerScroll) return;
    
    // Duplicate matches for seamless scroll
    const matchesHTML = [...this.mockMatches, ...this.mockMatches].map(match => {
      return `
        <div class="ticker-match">
          <span class="ticker-match__court">${match.court}</span>
          <span class="ticker-match__player ${match.leading === 'player1' ? 'ticker-match__player--leading' : ''}">${match.player1}</span>
          <span class="ticker-match__score">${match.score}</span>
          <span class="ticker-match__player ${match.leading === 'player2' ? 'ticker-match__player--leading' : ''}">${match.player2}</span>
        </div>
      `;
    }).join('');
    
    this.tickerScroll.innerHTML = matchesHTML;
  }
  
  setupCloseButton() {
    this.closeBtn?.addEventListener('click', () => {
      this.ticker.classList.add('hidden');
      sessionStorage.setItem('tickerHidden', 'true');
    });
    
    // Check if previously hidden
    if (sessionStorage.getItem('tickerHidden') === 'true') {
      this.ticker?.classList.add('hidden');
    }
  }
  
  startAutoUpdate() {
    // Simulate score updates every 10 seconds
    setInterval(() => {
      this.updateScores();
    }, 10000);
  }
  
  updateScores() {
    // Randomly update one match score (mock behavior)
    const randomIndex = Math.floor(Math.random() * this.mockMatches.length);
    const match = this.mockMatches[randomIndex];
    
    // Generate random game score
    const game1 = Math.floor(Math.random() * 11) + 1;
    const game2 = Math.floor(Math.random() * 11) + 1;
    const game3 = Math.floor(Math.random() * 11) + 1;
    match.score = `${game1}-${game2}, ${game3}-${game2 + 1}, ${game1}-${game2}`;
    
    // Flash animation on update
    const matchElements = this.tickerScroll?.querySelectorAll('.ticker-match');
    matchElements?.[randomIndex]?.classList.add('score-update');
    
    setTimeout(() => {
      matchElements?.[randomIndex]?.classList.remove('score-update');
    }, 300);
    
    this.renderMatches();
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new LiveTicker();
});
```

---

### 3. BUTTON SYSTEM

**Button Variants**:

```html
<!-- Primary Button (Red) -->
<button class="btn btn--primary">Enter Tournament</button>

<!-- Secondary Button (Cyan) -->
<button class="btn btn--secondary">View Draw</button>

<!-- Tertiary Button (Blue) -->
<button class="btn btn--tertiary">Learn More</button>

<!-- Live Button (Pulsing Red) -->
<button class="btn btn--live">
  <span class="live-indicator"></span>
  Watch Live
</button>

<!-- Outline Button -->
<button class="btn btn--outline">Cancel</button>

<!-- Icon Button -->
<button class="btn btn--icon">
  <svg>...</svg>
</button>

<!-- Block Button (Full Width) -->
<button class="btn btn--block">Submit</button>
```

**CSS Specifications**:
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-headline);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
  white-space: nowrap;
}

.btn--primary {
  background: var(--asscore-red);
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
}

.btn--primary:hover {
  background: #FF2E34;
  box-shadow: var(--shadow-glow-red);
  transform: translateY(-2px);
}

.btn--secondary {
  background: var(--asscore-cyan);
  color: var(--bg-primary);
  box-shadow: var(--shadow-md);
}

.btn--secondary:hover {
  background: var(--asscore-light-blue);
  box-shadow: var(--shadow-glow-cyan);
  transform: translateY(-2px);
}

.btn--tertiary {
  background: var(--asscore-blue);
  color: var(--text-primary);
}

.btn--tertiary:hover {
  background: #2563B0;
  transform: translateY(-2px);
}

.btn--live {
  background: var(--status-live);
  color: var(--text-primary);
  animation: pulse-button 2s infinite;
}

@keyframes pulse-button {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
  }
}

.btn--outline {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-accent);
}

.btn--outline:hover {
  background: var(--border-accent);
  color: var(--bg-primary);
}

.btn--icon {
  padding: var(--space-md);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
}

.btn--icon:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.btn--block {
  width: 100%;
}

/* Mobile Adjustments */
@media (max-width: 767px) {
  .btn {
    padding: var(--space-sm) var(--space-lg);
    font-size: var(--fs-xs);
  }
}
```

---

### 4. CARD COMPONENT

**Card Types**: Player Card, Match Card, Venue Card, News Card

**HTML Structure**:
```html
<!-- Player Card -->
<div class="card card--player">
  <div class="card__image">
    <img src="assets/images/players/player-1.png" alt="Player Name">
    <div class="card__badge">
      <span class="badge badge--gold">Rank #1</span>
    </div>
  </div>
  <div class="card__content">
    <h3 class="card__title">John Anderson</h3>
    <p class="card__meta">
      <span class="card__meta-item">🇿🇦 South Africa</span>
      <span class="card__meta-item">PSA: #45</span>
    </p>
    <div class="card__stats">
      <div class="stat">
        <span class="stat__value">850</span>
        <span class="stat__label">Series Points</span>
      </div>
      <div class="stat">
        <span class="stat__value">12-3</span>
        <span class="stat__label">W-L</span>
      </div>
    </div>
  </div>
  <div class="card__actions">
    <button class="btn btn--secondary btn--block">View Profile</button>
  </div>
</div>

<!-- Match Card -->
<div class="card card--match">
  <div class="card__header">
    <span class="badge badge--live">LIVE</span>
    <span class="card__venue">Glass Court</span>
  </div>
  <div class="card__match">
    <div class="match-player match-player--leading">
      <div class="match-player__info">
        <span class="match-player__name">J. Anderson</span>
        <span class="match-player__seed">[1]</span>
      </div>
      <div class="match-player__score">
        <span class="score-set">11</span>
        <span class="score-set">11</span>
        <span class="score-set score-set--current">9</span>
      </div>
    </div>
    <div class="match-divider"></div>
    <div class="match-player">
      <div class="match-player__info">
        <span class="match-player__name">M. Le Roux</span>
        <span class="match-player__seed">[4]</span>
      </div>
      <div class="match-player__score">
        <span class="score-set">8</span>
        <span class="score-set">7</span>
        <span class="score-set score-set--current">7</span>
      </div>
    </div>
  </div>
  <div class="card__footer">
    <span class="card__time">In Progress - 35 mins</span>
  </div>
</div>
```

**CSS Specifications**:
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Player Card */
.card--player {
  display: flex;
  flex-direction: column;
}

.card__image {
  position: relative;
  aspect-ratio: 3 / 4;
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%);
  overflow: hidden;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.card:hover .card__image img {
  transform: scale(1.1);
}

.card__badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
}

.card__content {
  padding: var(--space-lg);
}

.card__title {
  font-family: var(--font-headline);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  font-size: var(--fs-sm);
  color: var(--text-secondary);
}

.card__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  padding-top: var(--space-md);
  border-top: 1px solid var(--border-primary);
}

.stat {
  text-align: center;
}

.stat__value {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  color: var(--asscore-cyan);
}

.stat__label {
  display: block;
  font-size: var(--fs-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: var(--space-xs);
}

.card__actions {
  padding: 0 var(--space-lg) var(--space-lg);
}

/* Match Card */
.card--match {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--border-primary);
}

.card__venue {
  font-family: var(--font-headline);
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  text-transform: uppercase;
}

.card__match {
  padding: var(--space-xl) var(--space-lg);
}

.match-player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;
}

.match-player--leading {
  font-weight: var(--fw-bold);
}

.match-player__info {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.match-player__name {
  font-family: var(--font-headline);
  font-size: var(--fs-lg);
  color: var(--text-primary);
}

.match-player__seed {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.match-player__score {
  display: flex;
  gap: var(--space-sm);
}

.score-set {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  padding: var(--space-xs) var(--space-sm);
  font-family: var(--font-mono);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--text-secondary);
  background: var(--bg-primary);
  border-radius: var(--radius-sm);
}

.score-set--current {
  color: var(--text-primary);
  background: var(--asscore-cyan);
  box-shadow: var(--shadow-glow-cyan);
}

.match-divider {
  height: 1px;
  background: var(--border-primary);
  margin: var(--space-sm) 0;
}

.card__footer {
  padding: var(--space-md) var(--space-lg);
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: var(--fs-sm);
  color: var(--text-muted);
}
```

---

### 5. BADGE SYSTEM

```html
<!-- Status Badges -->
<span class="badge badge--live">LIVE</span>
<span class="badge badge--upcoming">Upcoming</span>
<span class="badge badge--completed">Completed</span>

<!-- Rank Badges -->
<span class="badge badge--gold">Champion</span>
<span class="badge badge--silver">#2</span>
<span class="badge badge--bronze">#3</span>

<!-- Info Badge -->
<span class="badge badge--info">New</span>
```

**CSS**:
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 4px 12px;
  font-family: var(--font-headline);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.badge--live {
  background: var(--status-live);
  color: var(--text-primary);
  animation: pulse 2s infinite;
}

.badge--upcoming {
  background: var(--status-upcoming);
  color: var(--bg-primary);
}

.badge--completed {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
}

.badge--gold {
  background: linear-gradient(135deg, var(--accent-gold) 0%, #F4D03F 100%);
  color: var(--bg-primary);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
}

.badge--silver {
  background: linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%);
  color: var(--bg-primary);
}

.badge--bronze {
  background: linear-gradient(135deg, var(--accent-bronze) 0%, #E89347 100%);
  color: var(--bg-primary);
}

.badge--info {
  background: var(--asscore-cyan);
  color: var(--bg-primary);
}
```

---

## HOMEPAGE ARCHITECTURE

### Overview

The homepage has **THREE ADAPTIVE STATES** that transform based on tournament schedule:

1. **BUILD-UP STATE** (Mon-Wed): Focus on upcoming event
2. **LIVE STATE** (Thu-Sun): Real-time dashboard with live matches
3. **WRAP-UP STATE** (Mon post-event): Celebrate winner & show updated standings

For Phase 1, implement a **JavaScript state manager** that allows manual switching between states (will be automated with backend in Phase 2).

---

### BUILD-UP STATE (Pre-Event)

**Hero Section**:
```html
<!-- //HERO SECTION - BUILD-UP STATE// -->
<section class="hero hero--buildup" id="hero">
  <div class="hero__background">
    <div class="hero__gradient"></div>
    <img src="assets/images/venues/parkview-courts.jpg" alt="Venue" class="hero__image">
  </div>
  
  <div class="container">
    <div class="hero__content">
      <div class="hero__badge">
        <span class="badge badge--upcoming">Next Event</span>
      </div>
      
      <h1 class="hero__title">
        <span class="hero__title-event">Asscore Satellite #2</span>
        <span class="hero__title-venue">@ Parkview Squash Club</span>
      </h1>
      
      <div class="hero__countdown" id="countdown">
        <div class="countdown-item">
          <span class="countdown-value" id="days">00</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value" id="hours">00</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value" id="minutes">00</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value" id="seconds">00</span>
          <span class="countdown-label">Seconds</span>
        </div>
      </div>
      
      <div class="hero__actions">
        <a href="#" class="btn btn--primary">Enter Now</a>
        <a href="pages/tournament-detail.html" class="btn btn--outline">View Draw</a>
      </div>
      
      <div class="hero__info">
        <div class="info-item">
          <svg class="info-icon" width="24" height="24">
            <use xlink:href="#icon-calendar"></use>
          </svg>
          <span>March 15-17, 2026</span>
        </div>
        <div class="info-item">
          <svg class="info-icon" width="24" height="24">
            <use xlink:href="#icon-location"></use>
          </svg>
          <span>Parkview, Johannesburg</span>
        </div>
        <div class="info-item">
          <svg class="info-icon" width="24" height="24">
            <use xlink:href="#icon-trophy"></use>
          </svg>
          <span>R25,000 Prize Pool</span>
        </div>
      </div>
    </div>
    
    <div class="hero__visual">
      <img src="assets/images/players/featured-player.png" alt="Featured Player" class="hero__player">
    </div>
  </div>
</section>

<!-- //FEATURED MATCHES SECTION// -->
<section class="section section--dark">
  <div class="container">
    <header class="section__header">
      <h2 class="section__title">Top Seeds Preview</h2>
      <p class="section__subtitle">Head-to-head stats of tournament favorites</p>
    </header>
    
    <div class="matchup-grid">
      <!-- Matchup Cards (Generated by JS) -->
      <div class="matchup-card">
        <div class="matchup-card__player">
          <img src="assets/images/players/player-1.png" alt="Player 1">
          <div class="matchup-card__info">
            <span class="matchup-card__name">John Anderson</span>
            <span class="matchup-card__seed">[1]</span>
          </div>
        </div>
        
        <div class="matchup-card__stats">
          <div class="h2h-stat">
            <span class="h2h-stat__value">3</span>
            <span class="h2h-stat__label">Wins</span>
          </div>
          <span class="h2h-divider">VS</span>
          <div class="h2h-stat">
            <span class="h2h-stat__value">1</span>
            <span class="h2h-stat__label">Wins</span>
          </div>
        </div>
        
        <div class="matchup-card__player">
          <img src="assets/images/players/player-2.png" alt="Player 2">
          <div class="matchup-card__info">
            <span class="matchup-card__name">Mike Le Roux</span>
            <span class="matchup-card__seed">[4]</span>
          </div>
        </div>
      </div>
      
      <!-- More matchup cards... -->
    </div>
  </div>
</section>
```

**CSS for Build-Up Hero**:
```css
.hero {
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.7) 50%, rgba(26, 26, 26, 0.95) 100%);
  z-index: 1;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.hero__content {
  max-width: 600px;
  z-index: 2;
}

.hero__badge {
  margin-bottom: var(--space-lg);
}

.hero__title {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.hero__title-event {
  font-size: var(--fs-3xl);
  color: var(--text-primary);
  text-transform: uppercase;
  line-height: 1;
}

.hero__title-venue {
  font-size: var(--fs-xl);
  color: var(--asscore-cyan);
  font-weight: var(--fw-medium);
}

.hero__countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg);
  background: var(--bg-secondary);
  border: 2px solid var(--border-accent);
  border-radius: var(--radius-lg);
}

.countdown-value {
  font-family: var(--font-mono);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--asscore-cyan);
  line-height: 1;
}

.countdown-label {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: var(--space-sm);
}

.hero__actions {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.hero__info {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xl);
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--fs-sm);
  color: var(--text-secondary);
}

.info-icon {
  fill: var(--asscore-cyan);
}

.hero__visual {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 50%;
  pointer-events: none;
}

.hero__player {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7));
}

/* Mobile Adjustments */
@media (max-width: 1023px) {
  .hero__visual {
    opacity: 0.3;
    max-width: 60%;
  }
}

@media (max-width: 767px) {
  .hero {
    min-height: auto;
    padding: var(--space-3xl) 0;
  }
  
  .hero__title-event {
    font-size: var(--fs-2xl);
  }
  
  .hero__countdown {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
  }
  
  .countdown-item {
    padding: var(--space-md);
  }
  
  .countdown-value {
    font-size: var(--fs-2xl);
  }
  
  .hero__actions {
    flex-direction: column;
  }
  
  .hero__visual {
    display: none;
  }
}
```

**Countdown Timer JavaScript**:
```javascript
// countdown.js
class Countdown {
  constructor(targetDate) {
    this.targetDate = new Date(targetDate).getTime();
    this.elements = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds')
    };
    
    this.start();
  }
  
  start() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }
  
  update() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;
    
    if (distance < 0) {
      clearInterval(this.interval);
      this.showExpired();
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.elements.days.textContent = String(days).padStart(2, '0');
    this.elements.hours.textContent = String(hours).padStart(2, '0');
    this.elements.minutes.textContent = String(minutes).padStart(2, '0');
    this.elements.seconds.textContent = String(seconds).padStart(2, '0');
  }
  
  showExpired() {
    Object.values(this.elements).forEach(el => {
      if (el) el.textContent = '00';
    });
  }
}

// Initialize with next tournament date
document.addEventListener('DOMContentLoaded', () => {
  // Example: Tournament starts March 15, 2026 at 9:00 AM
  new Countdown('2026-03-15T09:00:00');
});
```

---

### LIVE STATE (During Event)

**Hero Section**:
```html
<!-- //HERO SECTION - LIVE STATE// -->
<section class="hero hero--live" id="hero">
  <div class="hero__background">
    <div class="hero__gradient"></div>
    <!-- Animated gradient background -->
    <div class="live-bg-animation"></div>
  </div>
  
  <div class="container">
    <div class="hero__content">
      <div class="hero__badge">
        <span class="badge badge--live">LIVE NOW</span>
      </div>
      
      <h1 class="hero__title">
        <span class="hero__title-main">Asscore Satellite #2</span>
        <span class="hero__title-sub">Live Dashboard</span>
      </h1>
      
      <div class="court-status-grid">
        <!-- Court Status Cards -->
        <div class="court-status court-status--live">
          <div class="court-status__header">
            <span class="court-status__name">Glass Court</span>
            <span class="badge badge--live">Live</span>
          </div>
          <div class="court-status__match">
            <span class="court-status__player">J. Anderson [1]</span>
            <span class="court-status__score">11-9, 11-8, 7-5</span>
            <span class="court-status__player">M. Le Roux [4]</span>
          </div>
          <div class="court-status__time">In Progress - 35 mins</div>
        </div>
        
        <div class="court-status court-status--ontime">
          <div class="court-status__header">
            <span class="court-status__name">Court 1</span>
            <span class="badge badge--upcoming">On Time</span>
          </div>
          <div class="court-status__next">
            <span>Next: 2:00 PM</span>
          </div>
        </div>
        
        <div class="court-status court-status--delayed">
          <div class="court-status__header">
            <span class="court-status__name">Court 3</span>
            <span class="badge" style="background: #FFA500;">Delayed</span>
          </div>
          <div class="court-status__next">
            <span>Delayed 15 mins</span>
          </div>
        </div>
        
        <!-- More court statuses... -->
      </div>
      
      <div class="hero__actions">
        <a href="#" class="btn btn--live">Watch Live Stream</a>
        <a href="pages/tournament-detail.html" class="btn btn--outline">View Full Draw</a>
      </div>
    </div>
  </div>
</section>

<!-- //LIVE MATCHES SECTION// -->
<section class="section section--dark">
  <div class="container">
    <header class="section__header">
      <h2 class="section__title">Live Matches</h2>
      <div class="section__actions">
        <button class="btn btn--icon" id="refresh-scores" title="Refresh Scores">
          <svg width="20" height="20">
            <use xlink:href="#icon-refresh"></use>
          </svg>
        </button>
      </div>
    </header>
    
    <div class="match-grid">
      <!-- Match Cards (auto-generated by JS) -->
    </div>
  </div>
</section>
```

**CSS for Live Hero**:
```css
.hero--live {
  background: var(--bg-primary);
}

.live-bg-animation {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(227, 30, 36, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(92, 194, 232, 0.15) 0%, transparent 50%);
  animation: pulse-background 5s ease-in-out infinite;
}

@keyframes pulse-background {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.court-status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.court-status {
  background: var(--bg-secondary);
  border: 2px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--duration-normal) var(--ease-out);
}

.court-status--live {
  border-color: var(--status-live);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
}

.court-status__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.court-status__name {
  font-family: var(--font-headline);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--text-primary);
}

.court-status__match {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.court-status__player {
  font-size: var(--fs-base);
  color: var(--text-secondary);
}

.court-status__score {
  font-family: var(--font-mono);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--asscore-cyan);
  margin: var(--space-sm) 0;
}

.court-status__time {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  text-align: center;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border-primary);
}

.court-status__next {
  text-align: center;
  padding: var(--space-xl) 0;
  font-size: var(--fs-base);
  color: var(--text-secondary);
}

@media (max-width: 767px) {
  .court-status-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### WRAP-UP STATE (Post-Event)

**Hero Section**:
```html
<!-- //HERO SECTION - WRAP-UP STATE// -->
<section class="hero hero--wrapup" id="hero">
  <div class="hero__background">
    <div class="hero__gradient"></div>
    <img src="assets/images/winners/tournament-winner.jpg" alt="Champion" class="hero__image hero__image--champion">
  </div>
  
  <div class="container">
    <div class="hero__content">
      <div class="hero__badge">
        <span class="badge badge--gold">Champion</span>
      </div>
      
      <h1 class="hero__title">
        <span class="hero__title-player">John Anderson</span>
        <span class="hero__title-achievement">Wins Asscore Satellite #2</span>
      </h1>
      
      <div class="hero__stats">
        <div class="stat-item">
          <span class="stat-item__value">3-0</span>
          <span class="stat-item__label">Finals Score</span>
        </div>
        <div class="stat-item">
          <span class="stat-item__value">5</span>
          <span class="stat-item__label">Matches Won</span>
        </div>
        <div class="stat-item">
          <span class="stat-item__value">+120</span>
          <span class="stat-item__label">Series Points</span>
        </div>
      </div>
      
      <div class="hero__actions">
        <a href="pages/media-videos.html" class="btn btn--primary">Watch Highlights</a>
        <a href="pages/rankings.html" class="btn btn--secondary">Updated Rankings</a>
      </div>
    </div>
  </div>
</section>

<!-- //UPDATED STANDINGS SECTION// -->
<section class="section">
  <div class="container">
    <header class="section__header">
      <h2 class="section__title">Series Standings Updated</h2>
      <p class="section__subtitle">After Satellite #2</p>
    </header>
    
    <div class="leaderboard">
      <div class="leaderboard__podium">
        <!-- Podium visualization -->
        <div class="podium-place podium-place--2">
          <div class="podium-player">
            <img src="assets/images/players/player-2.png" alt="Player 2">
            <span class="podium-rank">2</span>
          </div>
          <div class="podium-block podium-block--2">
            <span class="podium-points">780</span>
          </div>
        </div>
        
        <div class="podium-place podium-place--1">
          <div class="podium-player">
            <img src="assets/images/players/player-1.png" alt="Player 1">
            <span class="podium-rank">1</span>
          </div>
          <div class="podium-block podium-block--1">
            <span class="podium-points">920</span>
          </div>
        </div>
        
        <div class="podium-place podium-place--3">
          <div class="podium-player">
            <img src="assets/images/players/player-3.png" alt="Player 3">
            <span class="podium-rank">3</span>
          </div>
          <div class="podium-block podium-block--3">
            <span class="podium-points">650</span>
          </div>
        </div>
      </div>
      
      <div class="leaderboard__table">
        <!-- Full rankings table -->
        <table class="rankings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Points</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <!-- Rows generated by JS -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
```

**State Manager JavaScript**:
```javascript
// state-manager.js
class HomepageStateManager {
  constructor() {
    this.states = {
      buildup: 'buildup',
      live: 'live',
      wrapup: 'wrapup'
    };
    
    this.currentState = this.states.buildup;
    this.hero = document.getElementById('hero');
    
    this.init();
  }
  
  init() {
    // For Phase 1: Manual state switching (add buttons to test)
    this.createStateControls();
    
    // For Phase 2: Will automatically determine state based on tournament dates
    // this.autoDetectState();
  }
  
  createStateControls() {
    // Development-only: Create state switcher
    const controls = document.createElement('div');
    controls.className = 'dev-controls';
    controls.innerHTML = `
      <button onclick="stateManager.setState('buildup')">Build-Up</button>
      <button onclick="stateManager.setState('live')">Live</button>
      <button onclick="stateManager.setState('wrapup')">Wrap-Up</button>
    `;
    controls.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9999;display:flex;gap:10px;';
    document.body.appendChild(controls);
  }
  
  setState(state) {
    if (!Object.values(this.states).includes(state)) return;
    
    this.currentState = state;
    this.updateHero();
  }
  
  updateHero() {
    // Remove all state classes
    Object.values(this.states).forEach(state => {
      this.hero?.classList.remove(`hero--${state}`);
    });
    
    // Add current state class
    this.hero?.classList.add(`hero--${this.currentState}`);
    
    // Load appropriate content (simplified for Phase 1)
    this.loadStateContent();
  }
  
  loadStateContent() {
    // In Phase 1, content is pre-loaded and hidden/shown with CSS
    // In Phase 2, this will fetch live data from backend
    console.log(`Switched to ${this.currentState} state`);
  }
  
  autoDetectState() {
    // Phase 2: Check tournament dates from API
    // For now, mock behavior:
    const now = new Date();
    const eventStart = new Date('2026-03-15');
    const eventEnd = new Date('2026-03-17');
    
    if (now < eventStart) {
      this.setState(this.states.buildup);
    } else if (now >= eventStart && now <= eventEnd) {
      this.setState(this.states.live);
    } else {
      this.setState(this.states.wrapup);
    }
  }
}

// Initialize
let stateManager;
document.addEventListener('DOMContentLoaded', () => {
  stateManager = new HomepageStateManager();
});
```

---

## ADDITIONAL PAGE SPECIFICATIONS

Due to length constraints, here's a high-level breakdown of remaining pages. Each follows the same component system and design language:

### 1. SERIES OVERVIEW PAGE (`pages/series-overview.html`)

**Sections**:
- About Asscore (brand story, mission)
- 11-Event Calendar (visual timeline)
- Venues (cards for each venue with maps, photos, facilities)
- Prizes & Points System

**Key Components**: Timeline component, Venue cards with embedded Google Maps

---

### 2. RANKINGS PAGE (`pages/rankings.html`)

**Sections**:
- Asscore Series Leaderboard (primary focus)
- PSA World Rankings (filtered for SA players)
- Junior Standings

**Key Features**:
- Interactive Player Cards (flip on hover for H2H stats)
- Sortable table (by points, wins, nationality)
- Search/filter functionality

**JavaScript**:
```javascript
// Mock data structure
const playerData = [
  {
    id: 1,
    name: 'John Anderson',
    nationality: 'ZA',
    rank: 1,
    seriesPoints: 920,
    wins: 15,
    losses: 3,
    psaRank: 45,
    photo: 'assets/images/players/player-1.png'
  },
  // More players...
];

// Sorting, filtering, and card rendering logic
```

---

### 3. TOURNAMENTS PAGE (`pages/tournaments.html`)

**Two Tabs**:
1. **Upcoming Events**: Cards with "Enter Now" CTAs
2. **Past Tournaments**: Archive with results, draws, reports

**Key Components**: Tournament cards, filterable archive

---

### 4. TOURNAMENT DETAIL PAGE (`pages/tournament-detail.html`)

**Sections**:
- Tournament Info Banner
- Live Bracket Visualization (tree structure)
- Match Results List
- Gallery (photos from event)

**JavaScript**: Interactive bracket with click-to-expand match details

---

### 5. MEDIA PAGES

**Gallery** (`pages/media-gallery.html`):
- Masonry grid layout
- Lightbox on click
- Filter by event/player

**Videos** (`pages/media-videos.html`):
- Video grid with thumbnails
- Embedded YouTube/Vimeo players
- Categories: Highlights, Interviews, Skills

---

### 6. RESOURCES PAGE (`pages/resources.html`)

**Sections**:
- Squash Rules (accordion FAQ)
- Coaching Tips (articles)
- Officiating (link to WSF rules)
- Developers (API docs placeholder for Phase 2)

---

### 7. CONTACT PAGE (`pages/contact.html`)

**Sections**:
- Contact Form (name, email, message)
- Venue Contact Info (cards for each venue)
- Embedded Google Maps
- Social Media Links

---

## JAVASCRIPT ARCHITECTURE

### Core Modules

1. **app.js** - Main initialization, global utilities
2. **navigation.js** - Header, mobile menu, scroll behavior
3. **live-ticker.js** - Score ticker with mock data
4. **countdown.js** - Event countdown timer
5. **state-manager.js** - Homepage state switching
6. **animations.js** - Scroll animations, intersection observers

**Example: animations.js**
```javascript
class AnimationController {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    this.init();
  }
  
  init() {
    this.setupIntersectionObserver();
    this.setupSmoothScroll();
  }
  
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, this.observerOptions);
    
    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }
  
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AnimationController();
});
```

---

## PERFORMANCE OPTIMIZATION

### Critical Performance Targets

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Strategies

1. **Image Optimization**:
   - Use WebP with fallback
   - Lazy load images below fold
   - Responsive images with srcset
   - Compress all images (target: <200KB for photos)

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

2. **CSS Optimization**:
   - Inline critical CSS
   - Defer non-critical CSS
   - Minimize CSS size (target: <50KB compressed)

3. **JavaScript Optimization**:
   - Defer non-critical scripts
   - Use async where appropriate
   - Code splitting by page
   - Minimize JS size (target: <100KB compressed)

4. **Font Loading**:
```css
@font-face {
  font-family: 'Oswald';
  src: url('fonts/oswald.woff2') format('woff2');
  font-display: swap; /* Prevent invisible text during load */
}
```

5. **Resource Hints**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdn.example.com">
```

---

## ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 AA Compliance

1. **Color Contrast**:
   - Text: Minimum 4.5:1 ratio
   - Large text (18pt+): Minimum 3:1 ratio
   - Use contrast checker during development

2. **Keyboard Navigation**:
   - All interactive elements accessible via Tab
   - Visible focus indicators
   - Skip to main content link

3. **Semantic HTML**:
```html
<nav aria-label="Main Navigation">
  <ul>
    <li><a href="#">Link</a></li>
  </ul>
</nav>

<button aria-label="Close Menu" aria-expanded="false">
  <svg aria-hidden="true">...</svg>
</button>
```

4. **ARIA Attributes**:
   - Use sparingly, prefer semantic HTML
   - Label all form inputs
   - Provide alt text for all images

5. **Screen Reader Testing**:
   - Test with NVDA (Windows) or VoiceOver (Mac)
   - Ensure logical reading order
   - Announce dynamic content changes

---

## FUTURE INTEGRATION POINTS (PHASE 2)

### Data Structure for Backend Integration

**Tournaments API Endpoint** (Future):
```json
{
  "id": "satellite-2",
  "name": "Asscore Satellite #2",
  "venue": "Parkview Squash Club",
  "startDate": "2026-03-15",
  "endDate": "2026-03-17",
  "status": "live",
  "draws": { ... },
  "liveMatches": [ ... ]
}
```

**Players API Endpoint** (Future):
```json
{
  "id": 123,
  "name": "John Anderson",
  "nationality": "ZA",
  "seriesRank": 1,
  "seriesPoints": 920,
  "psaRank": 45,
  "photo": "url",
  "stats": {
    "wins": 15,
    "losses": 3,
    "winRate": 0.833
  }
}
```

**Implementation Strategy**:
- Replace mock data with `fetch()` calls
- Add loading states (skeletons, spinners)
- Implement error handling
- Cache responses in `sessionStorage` for performance

**Example**:
```javascript
async function fetchLiveMatches() {
  try {
    const response = await fetch('/api/matches/live');
    const data = await response.json();
    renderMatches(data);
  } catch (error) {
    showErrorMessage('Unable to load live scores');
  }
}
```

---

## DEVELOPMENT PHASES

### PHASE 1: STATIC FRONTEND (Current Scope)

**Week 1-2: Foundation**
- [ ] Set up project structure
- [ ] Implement design system (CSS variables, typography, spacing)
- [ ] Build header/navigation component
- [ ] Create button system
- [ ] Develop card components

**Week 3-4: Homepage**
- [ ] Build all three hero states (Build-Up, Live, Wrap-Up)
- [ ] Implement state manager with manual switching
- [ ] Create countdown timer
- [ ] Build live score ticker with mock data
- [ ] Add featured sections (previews, standings)

**Week 5-6: Core Pages**
- [ ] Series Overview page
- [ ] Rankings page with interactive player cards
- [ ] Tournaments page (upcoming + archive)
- [ ] Tournament Detail page with bracket visualization

**Week 7: Media & Secondary Pages**
- [ ] Media Gallery with lightbox
- [ ] Media Videos page
- [ ] Resources page
- [ ] Contact page with forms

**Week 8: Polish & Testing**
- [ ] Mobile responsiveness testing (all breakpoints)
- [ ] Performance optimization (images, fonts, JS)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Fix bugs and refinements

**Deliverables**:
- Fully functional static website
- All pages responsive (320px - 4K)
- Mock data for live features
- Ready for backend integration

---

### PHASE 2: BACKEND INTEGRATION (Future)

**Requirements**:
- SportyHQ scraper/API integration
- Real-time database (Supabase/Firebase)
- CMS integration (Sanity.io)
- Live data updates (WebSockets)
- User authentication (optional)

**Changes to Frontend**:
- Replace mock data with API calls
- Add loading states and error handling
- Implement WebSocket listeners for live updates
- Add admin panel for content management

---

## TESTING CHECKLIST

### Functional Testing
- [ ] All navigation links work
- [ ] Mobile menu opens/closes correctly
- [ ] All buttons have hover/active states
- [ ] Forms validate input correctly
- [ ] Countdown timer counts down accurately
- [ ] State manager switches between homepage modes
- [ ] Live ticker scrolls smoothly
- [ ] Image lightbox opens/closes
- [ ] Video embeds play correctly

### Responsive Testing
- [ ] Mobile (320px, 375px, 393px, 430px)
- [ ] Tablet (768px, 834px, 1024px)
- [ ] Desktop (1280px, 1440px, 1920px)
- [ ] 4K (3840px)
- [ ] Landscape orientation (mobile/tablet)
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets minimum 44x44px on mobile

### Performance Testing
- [ ] Lighthouse score > 90 (Performance)
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Images optimized and lazy-loaded
- [ ] CSS/JS minified and compressed
- [ ] No render-blocking resources

### Accessibility Testing
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG AA standards
- [ ] All images have alt text
- [ ] Form labels associated correctly
- [ ] Focus indicators visible
- [ ] ARIA attributes used appropriately

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## DEPLOYMENT INSTRUCTIONS

### Prerequisites
- Web server with HTTPS support
- Domain name configured
- FTP/SFTP access or Git deployment

### Deployment Steps

1. **Prepare Assets**:
   - Optimize all images (WebP + JPEG fallback)
   - Minify CSS and JavaScript
   - Compress fonts to WOFF2 format

2. **Upload Files**:
   ```
   Upload entire `/asscore-squash` directory to server root
   Ensure file permissions are set correctly (644 for files, 755 for directories)
   ```

3. **Configure Server**:
   - Set up 301 redirects for SEO (e.g., www to non-www)
   - Enable Gzip/Brotli compression
   - Set cache headers for static assets
   - Configure HTTPS (SSL certificate)

4. **Test Production**:
   - Check all pages load correctly
   - Test all links and functionality
   - Run Lighthouse audit
   - Check mobile responsiveness
   - Test on multiple devices

5. **Analytics Setup**:
   - Add Google Analytics tracking code
   - Set up Google Search Console
   - Configure event tracking for key interactions

### Server Configuration Examples

**Apache (.htaccess)**:
```apache
# Enable Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## MAINTENANCE & UPDATES

### Regular Maintenance Tasks

**Weekly**:
- Review site performance (Lighthouse)
- Check for broken links
- Monitor error logs

**Monthly**:
- Update content (news, tournament results)
- Review analytics and adjust CTAs
- Test forms and interactive features

**Quarterly**:
- Accessibility audit
- Security updates
- Content refresh (update photos, stats)

---

## GLOSSARY

**Terms for Development Team**:

- **Adaptive Homepage**: Homepage that changes layout/content based on tournament phase
- **Live Ticker**: Persistent score bar showing real-time match updates
- **Hero Section**: Large banner area at top of page with key content/visuals
- **Breakpoint**: Screen width threshold where layout adjusts (e.g., 768px for tablet)
- **Component**: Reusable UI element (e.g., card, button, badge)
- **Mock Data**: Fake/placeholder data used in Phase 1 before real API integration
- **State Manager**: JavaScript class controlling homepage mode (Build-Up/Live/Wrap-Up)

---

## CONTACT & SUPPORT

**Project Lead**: [Client Name]
**Development Team**: [Team Lead Name]

**Questions During Development**:
- Technical issues: [Email/Slack Channel]
- Design clarifications: [Email/Slack Channel]
- Content/copy: [Email/Slack Channel]

---

## FINAL NOTES

This specification provides a complete blueprint for developing the Asscore Squash Series website frontend. The architecture is designed to be:

1. **Modular**: Easy to update individual components
2. **Scalable**: Ready for backend integration without refactoring
3. **Performant**: Optimized for fast loading and smooth interactions
4. **Accessible**: Compliant with WCAG 2.1 AA standards
5. **Responsive**: Flawless experience across all devices

**Key Success Factors**:
- Mobile-first development approach
- Strict adherence to design system (colors, typography, spacing)
- Component reusability across pages
- Clean, commented code for future maintainability
- Thorough testing at each breakpoint

**Development Mindset**:
- Build with Phase 2 integration in mind
- Use semantic HTML for better SEO and accessibility
- Optimize assets early (don't wait until the end)
- Test on real devices, not just browser dev tools
- Document any deviations from this spec

---

## APPENDIX: ICON LIBRARY

Create an SVG sprite file (`assets/images/icons/sprite.svg`) with these icons:

- Calendar
- Location/Pin
- Trophy
- User
- Search
- Filter
- Refresh
- Play (video)
- Close/X
- Menu (hamburger)
- Arrow (up/down/left/right)
- Social media (Facebook, Twitter, Instagram, YouTube)

**Usage**:
```html
<svg width="24" height="24">
  <use xlink:href="assets/images/icons/sprite.svg#icon-calendar"></use>
</svg>
```

---

## DOCUMENT VERSION

**Version**: 1.0
**Date**: February 14, 2026
**Author**: Claude (Anthropic)
**Status**: Final - Ready for Development

---

**END OF SPECIFICATION**