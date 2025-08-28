// Dynamically load JS modules in order and then initialize the app
(async function() {
    const jsFiles = [
        'js/sound-manager.js',
        'js/ui-components.js',
        'js/page-data.js',
        'js/page-manager.js',
        'js/orbit-animation.js'
    ];

    // Load a script and return a Promise that resolves on load or rejects on error
    const loadScript = (src) => new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    try {
        for (const file of jsFiles) {
            await loadScript(file);
        }
        initializeApp();
    } catch (error) {
        console.error('Failed to load scripts:', error);
    }
})();

// Initialize main application components and UI setup
function initializeApp() {
    const soundManager = new window.SoundManager();
    const ui = new window.UIComponents(soundManager);
    const pageManager = new window.PageManager(soundManager, ui);
    const orbitAnimation = new window.OrbitAnimation();

    // Expose globally for debugging or external use
    Object.assign(window, { soundManager, ui, pageManager });

    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        mainContent.style.opacity = 0; // start hidden
    }

    setupEventListeners(soundManager, ui);
    pageManager.showPage('home');
    pageManager.initializeNavigation();

    // Fade out intro overlay before showing main content
    const introOverlay = document.getElementById('introOverlay');
    if (introOverlay) {
        setTimeout(() => {
            introOverlay.style.transition = 'opacity 0.7s ease';
            introOverlay.style.opacity = 0;

            introOverlay.addEventListener('transitionend', function onFadeOut() {
                introOverlay.removeEventListener('transitionend', onFadeOut);
                introOverlay.remove();
                if (mainContent) mainContent.style.opacity = 1;
            });
        }, 10);
    } else if (mainContent) {
        mainContent.style.opacity = 1;
    }
}

// Setup global event listeners for UI interactions
function setupEventListeners(soundManager, ui) {
    // Checkbox toggle styling and sound effect
    document.querySelectorAll('.checkbox-input').forEach(cb =>
        cb.addEventListener('change', function() {
            soundManager.play('click');
            this.style.background = this.checked ? '#2a2a2a' : '#ffffff';
        })
    );

    // Close mobile menu on nav link click with click sound
    document.querySelectorAll('.nav-menu a').forEach(link =>
        link.addEventListener('click', () => {
            soundManager.play('click');
            document.getElementById('navMenu').classList.remove('active');
        })
    );

    // Close modal on Escape key press
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('contactModal');
            if (modal?.classList.contains('active')) {
                ui.closeModal();
            }
        }
    });
}

// Global functions bound to UI controls (called from HTML)
function toggleMenu() { window.ui?.toggleMenu(); }
function openModal() { window.ui?.openModal(); }
function closeModal() { window.ui?.closeModal(); }
function closeModalOnBackdrop(event) { window.ui?.closeModalOnBackdrop(event); }
function submitForm(event) { window.ui?.submitForm(event); }

// DOMContentLoaded listener left empty since scripts load asynchronously
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // No init needed here, handled by script loading
    });
}
