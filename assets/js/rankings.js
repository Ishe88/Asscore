// assets/js/rankings.js

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
});

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.ranking-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');

            // 1. Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. Add active class to clicked button
            button.classList.add('active');

            // 3. Show target content
            const targetContent = document.getElementById(`tab-${targetId}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}