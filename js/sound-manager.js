// Sound Effects System using Web Audio API
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.enabled = true;
        this.volume = 2;
        this.masterGain = null;
        this.init();
    }
    
    async init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            this.masterGain.gain.setValueAtTime(0.1, this.audioContext.currentTime); // initial volume
            
            await this.createSounds();
        } catch (error) {
            console.warn('Web Audio not supported:', error);
            this.enabled = false;
        }
    }
    
    // Define sound functions
    async createSounds() {
        this.sounds.whoosh = this.createSoftLowTone(50, 0.3);
        this.sounds.modalOpen = this.createWarmTone(80, 0.18);
        this.sounds.modalClose = this.createWarmTone(40, 0.18);
    }
    
    // Create a warm sine wave tone with envelope and filter
    createWarmTone(frequency, duration) {
        return () => {
            if (!this.enabled || !this.audioContext || this.audioContext.state !== 'running') return;

            const now = this.audioContext.currentTime;
            const osc1 = this.audioContext.createOscillator();
            const osc2 = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filterNode = this.audioContext.createBiquadFilter();

            try {
                filterNode.type = 'lowpass';
                filterNode.frequency.setValueAtTime(frequency * 3, now);
                filterNode.Q.setValueAtTime(2, now);

                osc1.type = 'sine';
                osc1.frequency.setValueAtTime(frequency, now);

                osc2.type = 'sine';
                osc2.frequency.setValueAtTime(frequency + 2, now);

                osc1.connect(filterNode);
                osc2.connect(filterNode);
                filterNode.connect(gainNode);
                gainNode.connect(this.masterGain);

                // Envelope for smooth attack and release
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.8, now + 0.05);
                gainNode.gain.setValueAtTime(this.volume * 0.8, now + duration - 0.1);
                gainNode.gain.linearRampToValueAtTime(0, now + duration);

                // Frequency glide down slightly
                osc1.frequency.linearRampToValueAtTime(frequency * 0.95, now + duration);

                osc1.start(now);
                osc2.start(now);
                osc1.stop(now + duration);
                osc2.stop(now + duration);

                // Clean up after sound finishes
                setTimeout(() => {
                    osc1.disconnect();
                    osc2.disconnect();
                    gainNode.disconnect();
                    filterNode.disconnect();
                }, duration * 1000 + 100);
            } catch (e) {
                console.warn('Audio playback error:', e);
            }
        };
    }

    // Create a soft triangle wave tone with gentle rising pitch and envelope
    createSoftLowTone(frequency, duration) {
        return () => {
            if (!this.enabled || !this.audioContext || this.audioContext.state !== 'running') return;

            const now = this.audioContext.currentTime;
            const osc1 = this.audioContext.createOscillator();
            const osc2 = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filterNode = this.audioContext.createBiquadFilter();

            try {
                filterNode.type = 'lowpass';
                filterNode.frequency.setValueAtTime(frequency * 1.5, now);
                filterNode.Q.setValueAtTime(1.5, now);

                osc1.type = 'triangle';
                osc1.frequency.setValueAtTime(frequency, now);

                osc2.type = 'triangle';
                osc2.frequency.setValueAtTime(frequency * 1.02, now);

                osc1.connect(filterNode);
                osc2.connect(filterNode);
                filterNode.connect(gainNode);
                gainNode.connect(this.masterGain);

                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.5, now + 0.1);
                gainNode.gain.setValueAtTime(this.volume * 0.5, now + duration - 0.15);
                gainNode.gain.linearRampToValueAtTime(0, now + duration);

                // Frequency glide UP for subtle rising pitch
                osc1.frequency.linearRampToValueAtTime(frequency * 1.4, now + duration);
                osc2.frequency.linearRampToValueAtTime(frequency * 1.45, now + duration);

                osc1.start(now);
                osc2.start(now);
                osc1.stop(now + duration);
                osc2.stop(now + duration);

                setTimeout(() => {
                    osc1.disconnect();
                    osc2.disconnect();
                    gainNode.disconnect();
                    filterNode.disconnect();
                }, duration * 1000 + 100);
            } catch (e) {
                console.warn('Audio playback error:', e);
            }
        };
    }

    // Play a sound by name
    play(soundName) {
        if (this.sounds[soundName] && this.enabled) {
            if (this.audioContext?.state === 'suspended') {
                this.audioContext.resume();
            }
            // Slight delay to avoid audio glitches
            setTimeout(() => this.sounds[soundName](), 10);
        }
    }

    // Toggle sound enabled state
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// Export globally
window.SoundManager = SoundManager;
