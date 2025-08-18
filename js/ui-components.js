// UI Components and Modal Management
class UIComponents {
    constructor(soundManager) {
        this.soundManager = soundManager;
        this.firstLoadComplete = false; // Skip loading overlay on first load
    }

    // Toggle mobile menu visibility
    toggleMenu() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('active');
        this.soundManager.play('click');
    }

    // Show contact modal and focus first input after a delay
    openModal() {
        const modal = document.getElementById('contactModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.soundManager.play('modalOpen');

        setTimeout(() => {
            const firstInput = modal.querySelector('input, select, textarea');
            if (firstInput) firstInput.focus();
        }, 300);
    }

    // Hide contact modal and restore scrolling
    closeModal() {
        const modal = document.getElementById('contactModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.soundManager.play('modalClose');
    }

    // Close modal if clicking on backdrop (outside modal content)
    closeModalOnBackdrop(event) {
        if (event.target === event.currentTarget) this.closeModal();
    }

    // Validate and handle form submission
    submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        if (!data.terms) {
            alert('Please agree to the contact terms.');
            return;
        }

        console.log('Form submitted:', data);
        alert("Thank you for your message! We'll get back to you within 24 hours.");
        event.target.reset();
        this.closeModal();
    }

    // Create and insert a loading overlay element with spinner and styles
    createLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'loadingOverlay';
        overlay.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner-ring"></div>
                <div class="loading-text">Loading...</div>
            </div>
        `;
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.3); display: flex; justify-content: center;
            align-items: center; z-index: 10000; opacity: 0; transition: opacity 0.3s ease;
            backdrop-filter: blur(3px);
        `;

        const style = document.createElement('style');
        style.textContent = `
            .loading-spinner {
                text-align: center; color: #fff; background: rgba(0,0,0,0.8);
                padding: 30px 40px; border-radius: 12px; backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            }
            .spinner-ring {
                width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid #fff; border-radius: 50%; animation: spin 1s linear infinite;
                margin: 0 auto 15px;
            }
            .loading-text {
                font-size: 16px; font-weight: 500; letter-spacing: 0.5px;
                color: rgba(255,255,255,0.9);
            }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `;

        document.head.appendChild(style);
        document.body.appendChild(overlay);

        // Fade in overlay
        setTimeout(() => overlay.style.opacity = '1', 10);

        return overlay;
    }

    // Show loading overlay (skipped on first load)
    showLoading() {
        if (!this.firstLoadComplete) {
            this.firstLoadComplete = true;
            return;
        }
        if (!document.getElementById('loadingOverlay')) {
            this.createLoadingOverlay();
        }
    }

    // Hide and remove loading overlay
    hideLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
    }

    // Add click sound effect to common interactive elements
    addHoverSounds() {
        const interactiveSelectors = [
            'button', '.cta-button', '.consultation-cta',
            '.nav-link', '.read-more', '.back-link'
        ].join(',');

        document.querySelectorAll(interactiveSelectors).forEach(element => {
            element.addEventListener('click', () => this.soundManager.play('click'));
        });
    }
}

// Export for use elsewhere
window.UIComponents = UIComponents;
