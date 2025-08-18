// Page Content Data
const pageData = {
    home: {
        title: 'Valley West Web',
        leftSection: `
            <div class="hours-card">
                <div class="sketch-annotation"></div>
                <div class="hours">
                    <h3>Business Hours</h3>
                    <div class="hours-compact">Monday - Sunday</div>
                    <div class="hours-compact">9:00 AM - 5:00 PM MST</div>
                    <div class="availability-status">AVAILABLE NOW</div>
                </div>
            </div>
            <button class="consultation-cta" onclick="ui.openModal()">Free Consultation</button>
        `,
        centerSection: `
            <div class="main-circle">
                <div class="circle-center"></div>
                <div class="orbital-text">
                    <div class="orbit-item">Modern</div>
                    <div class="orbit-item">Responsive</div>
                    <div class="orbit-item">Fast</div>
                    <div class="orbit-item">Tailored</div>
                </div>
            </div>
        `,
        rightSection: `
            <div class="contact-info">
                <div><span class="css-icon email-icon"></span><span class="contact-text">valleywestweb@gmail.com</span></div>
                <div><span class="css-icon phone-icon"></span><span class="contact-text">623-445-1434</span></div>
                <div><span class="css-icon location-icon"></span><span class="contact-text">Arizona, USA</span></div>
            </div>
            <h1>FROM SKETCH<br>TO SCREEN</h1>
            <p>Transforming creative visions into powerful digital experiences with intentionality.</p>
            <button class="cta-button" onclick="ui.openModal()">Contact Us</button>
            <span class="read-more" onclick="pageManager.showPage('about')">read more</span>
        `
    },

    about: {
        title: 'About - Valley West Web',
        leftSection: `
            <div class="story-card">
                <div class="sketch-annotation"></div>
                <div class="story">
                    <h3>Our Story</h3>
                    <p>From a small freelance gig to a trusted LLC serving clients across the Valley and beyond.</p>
                    <p>We help business owners stand out with smart, effective websites.</p>
                </div>
            </div>
            <button class="founder-cta" onclick="openFounderModal()">Meet Shane</button>
        `,
        centerSection: `
            <div class="main-circle">
                <div class="circle-center"></div>
                <div class="orbital-text">
                    <div class="orbit-item">Modern</div>
                    <div class="orbit-item">Responsive</div>
                    <div class="orbit-item">Fast</div>
                    <div class="orbit-item">Tailored</div>
                </div>
            </div>
        `,
        rightSection: `
            <div class="contact-info">
                <div><span class="css-icon email-icon"></span><span class="contact-text">valleywestweb@gmail.com</span></div>
                <div><span class="css-icon phone-icon"></span><span class="contact-text">623-445-1434</span></div>
                <div><span class="css-icon location-icon"></span><span class="contact-text">Arizona, USA</span></div>
            </div>
            <h1>ABOUT US</h1>
            <p>We create affordable, custom websites built for entrepreneurs and small businesses.</p>
            <h2>What We Do</h2>
            <ul class="services-list">
                <li>Modern & Responsive – Looks great on any device</li>
                <li>Fast & SEO-Ready – Built for speed and visibility</li>
                <li>Tailored – Designed for your unique brand</li>
                <li>Full-Service – From design to launch</li>
            </ul>
            <button class="cta-button" onclick="ui.openModal()">Start Your Project</button>
            <span class="back-link" onclick="pageManager.showPage('home')">← back to home</span>
        `
    },

    services: {
        title: 'Services - Valley West Web',
        leftSection: `
            <div class="hours-card">
                <div class="sketch-annotation"></div>
                <div class="hours">
                    <h3>Our Services</h3>
                    <div class="hours-compact">Custom Solutions</div>
                    <div class="hours-compact">Professional Results</div>
                    <div class="availability-status">READY TO BUILD</div>
                </div>
            </div>
            <button class="consultation-cta" onclick="ui.openModal()">Get Started</button>
        `,
        centerSection: `
            <div class="main-circle">
                <div class="circle-center"></div>
                <div class="orbital-text">
                    <div class="orbit-item">Modern</div>
                    <div class="orbit-item">Responsive</div>
                    <div class="orbit-item">Fast</div>
                    <div class="orbit-item">Tailored</div>
                </div>
            </div>
        `,
        rightSection: `
            <div class="contact-info">
                <div><span class="css-icon email-icon"></span><span class="contact-text">valleywestweb@gmail.com</span></div>
                <div><span class="css-icon phone-icon"></span><span class="contact-text">623-445-1434</span></div>
                <div><span class="css-icon location-icon"></span><span class="contact-text">Arizona, USA</span></div>
            </div>
            <h1>SERVICES</h1>
            <div class="services-grid">
                <div class="service-item">
                    <h3>Custom Websites</h3>
                    <p>Tailored, brand-focused sites built from the ground up.</p>
                </div>
                <div class="service-item">
                    <h3>E-commerce</h3>
                    <p>Stores with secure payments and easy inventory control.</p>
                </div>
                <div class="service-item">
                    <h3>Redesigns</h3>
                    <p>Modern upgrades to refresh and improve your site.</p>
                </div>
                <div class="service-item">
                    <h3>Maintenance</h3>
                    <p>Ongoing care to keep your site secure and running smoothly.</p>
                </div>
            </div>
            <button class="cta-button" onclick="ui.openModal()">Start Your Project</button>
            <span class="back-link" onclick="pageManager.showPage('home')">← back to home</span>
        `
    }
};

// Export for use in other files
window.pageData = pageData;
