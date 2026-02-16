// assets/js/live-ticker.js

class LiveTicker {
    constructor() {
        this.ticker = document.getElementById('live-ticker');
        this.closeBtn = this.ticker?.querySelector('.live-ticker__close');
        this.tickerScroll = this.ticker?.querySelector('.ticker-scroll');
        
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
        this.renderMatches();
        this.setupCloseButton();
        this.startAutoUpdate();
    }
  
    renderMatches() {
        if (!this.tickerScroll) return;
        
        // 1. Create the HTML for a SINGLE set of matches
        const singleSetHTML = this.mockMatches.map(match => {
            return `
                <div class="ticker-match" style="padding-right: 3rem;"> <span class="ticker-match__court">${match.court}</span>
                    <span class="ticker-match__player ${match.leading === 'player1' ? 'ticker-match__player--leading' : ''}">${match.player1}</span>
                    <span class="ticker-match__score">${match.score}</span>
                    <span class="ticker-match__player ${match.leading === 'player2' ? 'ticker-match__player--leading' : ''}">${match.player2}</span>
                </div>
            `;
        }).join('');
        
        // 2. Duplicate it 4 times. 
        // This ensures that even on wide screens, the 'scrolling' part (50%) is always full.
        // The CSS animation moves from 0% to -50%. 
        // If we have 4 sets: [Set1][Set2][Set3][Set4].
        // Moving -50% means we move past Set1 and Set2.
        // Visual reset happens instantly because Set3 starts exactly where Set1 started.
        this.tickerScroll.innerHTML = singleSetHTML + singleSetHTML + singleSetHTML + singleSetHTML;
    }
  
    setupCloseButton() {
        this.closeBtn?.addEventListener('click', () => {
            this.ticker.classList.add('hidden');
            // Optional: Remember that user closed it
            sessionStorage.setItem('tickerHidden', 'true');
        });
    }
  
    startAutoUpdate() {
        // Randomly update scores every 5 seconds to simulate "Live" action
        setInterval(() => {
            this.updateScores();
        }, 5000);
    }
  
    updateScores() {
        const randomIndex = Math.floor(Math.random() * this.mockMatches.length);
        const match = this.mockMatches[randomIndex];
        
        // Generate a random score update
        const game1 = Math.floor(Math.random() * 11) + 1;
        const game2 = Math.floor(Math.random() * 11) + 1;
        match.score = `11-${game2}, ${game1}-9, ${game2}-${game1}`;
        
        this.renderMatches();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new LiveTicker();
});