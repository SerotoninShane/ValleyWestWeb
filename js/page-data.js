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
                    <div class="orbit-item">|</div>
                    <div class="orbit-item">_</div>
                    <div class="orbit-item">|</div>
                    <div class="orbit-item">_</div>
                </div>
            </div>
        `,
        rightSection: `
            <div class="contact-info">
                <div><span class="css-icon email-icon"></span><span class="contact-text">valleywestweb@gmail.com</span></div>
                <div><span class="css-icon phone-icon"></span><span class="contact-text">623-445-1434</span></div>
                <div><span class="css-icon location-icon"></span><span class="contact-text">Arizona, USA</span></div>
            </div>
            <h1>YOUR LOCAL WEB<br> DEVELOPMENT STUDIO</h1>
                <p class="italics">From Sketch To Screen.</p>
            <h2>Why Choose Us:</h2>
            <ul class="services-list">
                <li>Modern & Responsive – Looks great on any device</li>
                <li>Fast & SEO-Ready – Built for speed and visibility</li>
                <li>Tailored – Designed to fit your brand</li>
                <li>Affordable – Perfect for growing businesses</li>
            </ul>

            <button class="cta-button" onclick="ui.openModal()">Start Your Project</button>
            <span class="read-more" onclick="pageManager.showPage('about')">Learn more →</span>
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
                    <div class="orbit-item">|</div>
                    <div class="orbit-item">_</div>
                    <div class="orbit-item">|</div>
                    <div class="orbit-item">_</div>              
                </div>
            </div>
        `,
        rightSection: `
            <div class="contact-info">
                <div><span class="css-icon email-icon"></span><span class="contact-text">valleywestweb@gmail.com</span></div>
                <div><span class="css-icon phone-icon"></span><span class="contact-text">623-445-1434</span></div>
                <div><span class="css-icon location-icon"></span><span class="contact-text">Arizona, USA</span></div>
            </div>

            <h1>WHAT TO EXPECT</h1>
            <p class="italics">We create affordable, custom websites built for entrepreneurs and small businesses.</p>

            <h2>How We Help Your Business</h2>
            <ul class="services-list">
                <li>We listen first: Understanding your goals and vision is our top priority.</li>
                <li>Collaborative design: You’re involved in every step, from concept to launch.</li>
                <li>Transparent process: Clear timelines, open communication, and no hidden surprises.</li>
                <li>Client-focused solutions: We tailor every website to meet your unique business needs.</li>
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
                    <h3>Marketing Services</h3>
                    <ul class="services-list">
                        <li>SEO & Local Search</li>
                        <li>Social Media Campaigns</li>
                        <li>Google Ads</li>
                        <li>Meta (Facebook & Instagram) Ads</li>
                        <li>Microsoft Ads</li>
                    </ul>
                    <div class="availability-status">READY TO GROW</div>
                </div>
            </div>

            <button class="consultation-cta" onclick="ui.openModal()">Get Started</button>
        `,
        centerSection: `
            <div class="main-circle">
                <div class="circle-center"></div>
                <div class="orbital-text">
                    <div class="orbit-item">|</div>
                    <div class="orbit-item">_</div>
                    <div class="orbit-item">|</div>
                    <div class="orbit-item">_</div>
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
                    <p>Tailored, brand-focused sites built from scratch.</p>
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
                <div class="service-item">
                    <h3>API Integration</h3>
                    <p>Connect your site with third-party apps, CRMs, and tools for a seamless workflow.</p>
                </div>
                <div class="service-item">
                    <h3>Cloud Services</h3>
                    <p>Hosting, backups, and scalable cloud solutions.</p>
                </div>
            </div>
            <button class="cta-button" onclick="ui.openModal()">Start Your Project</button>
            <span class="back-link" onclick="pageManager.showPage('home')">← back to home</span>
        `
    }
};

// Export for use in other files
window.pageData = pageData;
