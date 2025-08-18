// Mouse Orbit Animation
class OrbitAnimation {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.animationFrameId = null;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        // Request animation frame only if none is pending
        if (!this.animationFrameId) {
            this.animationFrameId = requestAnimationFrame(() => this.updateOrbit());
        }
    }

    updateOrbit() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const dx = this.mouseX - centerX;
        const dy = this.mouseY - centerY;

        const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 140); // max radius 140
        const angle = Math.atan2(dy, dx);

        // Calculate new position within max radius circle
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const circleCenter = document.querySelector('.circle-center');
        if (circleCenter) {
            circleCenter.style.transform = `translate(${x}px, ${y}px)`;
        }

        this.animationFrameId = null; // reset to allow next frame
    }
}

// Export for use elsewhere
window.OrbitAnimation = OrbitAnimation;
