class PageManager {
    constructor(soundManager, ui) {
        this.soundManager = soundManager;
        this.ui = ui;
        this.currentPage = 'home';
        this.isTransitioning = false;

        // Show the page based on the current URL path
        const path = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
        if (window.pageData[path]) {
            this.showPage(path, false);
        }

        // Handle browser back/forward
        window.addEventListener('popstate', (event) => {
            const pageId = (event.state && event.state.page) || 'home';
            if (window.pageData[pageId]) {
                this.showPage(pageId, false);
            }
        });

        this.initializeNavigation();
    }

    showPage(pageId, pushState = true) {
        if (!window.pageData[pageId] || this.isTransitioning) return;

        this.soundManager.play('whoosh');
        this.isTransitioning = true;
        this.ui.showLoading();

        const mainContent = document.getElementById('mainContent');
        if (!mainContent) return;

        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            this.currentPage = pageId;
            const page = window.pageData[pageId];

            document.title = page.title;

            mainContent.innerHTML = `
                <div class="left-section">${page.leftSection}</div>
                <div class="center-section">${page.centerSection}</div>
                <div class="right-section">${page.rightSection}</div>
            `;

            this.updateNavigation(pageId);
            this.ui.addHoverSounds();

            // Push URL to browser history
            if (pushState) {
                const url = pageId === 'home' ? '/' : `/${pageId}`;
                window.history.pushState({ page: pageId }, page.title, url);
            }

            setTimeout(() => {
                this.ui.hideLoading();
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                setTimeout(() => this.isTransitioning = false, 200);
            }, 150);
        }, 250);
    }

    updateNavigation(pageId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkPage = link.dataset.page;
            link.classList.toggle('active', linkPage === pageId);
        });
    }

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

window.PageManager = PageManager;
