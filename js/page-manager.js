// Page Navigation Management
class PageManager {
    constructor(soundManager, ui) {
        this.soundManager = soundManager;
        this.ui = ui;
        this.currentPage = 'home';
        this.isTransitioning = false;
    }

    // Navigate to a page with transition effects, loading overlay, and sound
    showPage(pageId) {
        if (!window.pageData[pageId] || this.isTransitioning) return;

        this.soundManager.play('whoosh');
        this.isTransitioning = true;
        this.ui.showLoading();

        const mainContent = document.getElementById('mainContent');
        if (!mainContent) return;

        // Start fade-out and slide-down transition
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            this.currentPage = pageId;
            const page = window.pageData[pageId];

            document.title = page.title;

            // Inject new page content sections
            mainContent.innerHTML = `
                <div class="left-section">${page.leftSection}</div>
                <div class="center-section">${page.centerSection}</div>
                <div class="right-section">${page.rightSection}</div>
            `;

            // Update active nav link and add click sound handlers
            this.updateNavigation(pageId);
            this.ui.addHoverSounds();

            // Fade-in and reset transform
            setTimeout(() => {
                this.ui.hideLoading();
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                setTimeout(() => {
                    this.isTransitioning = false;
                }, 200);
            }, 300);
        }, 250);
    }

    // Mark active navigation link based on current page
    updateNavigation(pageId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
    }

    // Setup click listeners for navigation links
    initializeNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.dataset.page) {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    this.showPage(link.dataset.page);
                });
            }
        });
    }
}

// Export for use in other files
window.PageManager = PageManager;
