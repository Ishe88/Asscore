// assets/js/live-ticker.js

class LiveTicker {
    constructor() {
        this.ticker = document.getElementById('live-ticker');
        this.closeBtn = this.ticker?.querySelector('.live-ticker__close');
        this.tickerScroll = this.ticker?.querySelector('.ticker-scroll');
        this.toggleBtn = document.querySelector('.btn-live'); // Select the "Live Scores" button
        
        // Mock Data for Phase 1
        this.mockMatches = [
            { court: 'Glass Court', player1: 'J. Anderson', player2: 'M. Le Roux', score: '11-9, 11-8, 7-5', leading: 'player1' },
            { court: 'Court 3', player1: 'T. Russell', player2: 'S. Brownlee', score: '8-11, 11-6, 9-9', leading: 'player2' },
            { court: 'Court 2', player1: 'A. Smith', player2: 'B. Jones', score: '11-3, 10-12, 8-3', leading: 'player1' },
            { court: 'Court 1', player1: 'C. Williams', player2: 'D. Brown', score: '6-11, 11-9, 5-5', leading: null }
        ];
        
        this.init();
    }
  
    init() {
        if (!this.ticker) return;
        
        // 1. Check if user previously closed it (or you can force it hidden by default here)
        const isHidden = sessionStorage.getItem('tickerHidden') === 'true';
        if (isHidden) {
            this.ticker.classList.add('hidden');
        }

        this.renderMatches();
        this.setupInteractions();
        this.startAutoUpdate();
    }
  
    renderMatches() {
        if (!this.tickerScroll) return;
        
        const singleSetHTML = this.mockMatches.map(match => {
            return `
                <div class="ticker-match" style="padding-right: 3rem;"> 
                    <span class="ticker-match__court">${match.court}</span>
                    <span class="ticker-match__player ${match.leading === 'player1' ? 'ticker-match__player--leading' : ''}">${match.player1}</span>
                    <span class="ticker-match__score">${match.score}</span>
                    <span class="ticker-match__player ${match.leading === 'player2' ? 'ticker-match__player--leading' : ''}">${match.player2}</span>
                </div>
            `;
        }).join('');
        
        this.tickerScroll.innerHTML = singleSetHTML.repeat(4);
    }
  
    setupInteractions() {
        // Close Button Logic
        this.closeBtn?.addEventListener('click', () => {
            this.hideTicker();
        });

        // "Live Scores" Header Button Logic
        this.toggleBtn?.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent link default jump
            this.toggleTicker();
        });
    }

    toggleTicker() {
        if (this.ticker.classList.contains('hidden')) {
            this.showTicker();
        } else {
            this.hideTicker();
        }
    }

    hideTicker() {
        this.ticker.classList.add('hidden');
        sessionStorage.setItem('tickerHidden', 'true');
    }

    showTicker() {
        this.ticker.classList.remove('hidden');
        sessionStorage.setItem('tickerHidden', 'false');
    }
  
    startAutoUpdate() {
        setInterval(() => {
            if (!this.ticker.classList.contains('hidden')) { // Only update if visible
                this.updateScores();
            }
        }, 5000);
    }
  
    updateScores() {
        const randomIndex = Math.floor(Math.random() * this.mockMatches.length);
        const match = this.mockMatches[randomIndex];
        
        const game1 = Math.floor(Math.random() * 11) + 1;
        const game2 = Math.floor(Math.random() * 11) + 1;
        match.score = `11-${game2}, ${game1}-9, ${game2}-${game1}`;
        
        this.renderMatches();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LiveTicker();
});