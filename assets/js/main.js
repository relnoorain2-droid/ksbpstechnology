const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (nav) {
  nav.innerHTML = `
    <a href="ai-development.html">KSBPS AI</a>
    <div class="nav-item has-panel">
      <a href="services.html">Services</a>
      <div class="mega-panel mega-wide">
        <a href="ai-development.html">AI Development</a>
        <a href="generative-ai-development.html">Generative AI</a>
        <a href="mobile-app-development.html">Mobile App Development</a>
        <a href="ios-app-development.html">iOS App Development</a>
        <a href="android-app-development.html">Android App Development</a>
        <a href="web-development.html">Web Development</a>
        <a href="software-development.html">Software Development</a>
        <a href="enterprise-software-development.html">Enterprise Software</a>
        <a href="saas-development.html">SaaS Development</a>
        <a href="cloud-consulting.html">Cloud Consulting</a>
        <a href="devops-services.html">DevOps Services</a>
        <a href="cybersecurity-consulting.html">Cybersecurity</a>
      </div>
    </div>
    <div class="nav-item has-panel">
      <a href="industries.html">Industries</a>
      <div class="mega-panel mega-wide">
        <a href="healthcare-software-development.html">Healthcare</a>
        <a href="fintech-software-development.html">FinTech</a>
        <a href="ecommerce-development.html">Ecommerce</a>
        <a href="logistics-software-development.html">Logistics</a>
        <a href="real-estate-app-development.html">Real Estate</a>
        <a href="education-app-development.html">Education</a>
        <a href="manufacturing-software-development.html">Manufacturing</a>
        <a href="travel-app-development.html">Travel</a>
        <a href="retail-software-development.html">Retail</a>
        <a href="automotive-software-development.html">Automotive</a>
      </div>
    </div>
    <a href="case-studies.html">Portfolio</a>
    <a href="resources.html">Resources</a>
    <a href="about.html">Company</a>
    <a href="contact.html" class="nav-cta">Contact Us</a>
  `;
}

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const bindMotionCards = () => {
  document.querySelectorAll('.directory-card, .detail-card, .contact-card, .form-card, .footer-offices article, .case-card, .feature-card, .showcase-card').forEach((card) => {
    if (card.dataset.motionBound) return;
    card.dataset.motionBound = 'true';
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });
};

bindMotionCards();

document.querySelectorAll('form[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const original = button.textContent;
    button.textContent = 'Request noted';
    form.reset();
    setTimeout(() => { button.textContent = original; }, 2200);
  });
});

const footer = document.querySelector('.site-footer');

if (footer) {
  footer.innerHTML = `
    <div class="footer-shell">
      <div class="footer-top">
        <div class="footer-brand-block">
          <a class="brand footer-brand" href="index.html">
            <span class="brand-mark">K</span>
            <span><strong>KSBPS</strong><small>Technology</small></span>
          </a>
          <p>Digital product consulting, software engineering, AI, cloud, cybersecurity, and transformation partner for modern businesses.</p>
          <div class="footer-socials" aria-label="KSBPS social links">
            <a href="contact.html" aria-label="LinkedIn">in</a>
            <a href="contact.html" aria-label="Instagram">ig</a>
            <a href="contact.html" aria-label="X">x</a>
            <a href="contact.html" aria-label="YouTube">yt</a>
          </div>
        </div>
        <a class="footer-cta" href="contact.html">
          <span>Have a project in mind?</span>
          <strong>Get In Touch</strong>
        </a>
      </div>

      <div class="footer-offices">
        <article>
          <span class="flag">US</span>
          <h3>United States</h3>
          <p>125 Market Street, Suite 820<br>San Francisco, CA 94105</p>
        </article>
        <article>
          <span class="flag">IN</span>
          <h3>India</h3>
          <p>4th Floor, Meridian Business Park<br>Bengaluru, Karnataka 560103</p>
        </article>
        <article>
          <span class="flag">AE</span>
          <h3>Middle East</h3>
          <p>Business Bay Technology District<br>Dubai, United Arab Emirates</p>
        </article>
        <article>
          <span class="flag">UK</span>
          <h3>United Kingdom</h3>
          <p>86-90 Paul Street<br>London EC2A 4NE</p>
        </article>
      </div>

      <div class="footer-nav-grid">
        <div><h3>Our Company</h3><a href="about.html">About</a><a href="case-studies.html">Portfolio</a><a href="resources.html">Resources</a><a href="contact.html">Contact</a><a href="sitemap.xml">Sitemap</a></div>
        <div><h3>Services</h3><a href="ai-development.html">AI Development</a><a href="mobile-app-development.html">Mobile App Development</a><a href="software-development.html">Software Development</a><a href="cloud-consulting.html">Cloud Services</a><a href="devops-services.html">DevOps</a><a href="services.html">View More</a></div>
        <div><h3>Technologies</h3><a href="generative-ai-development.html">Generative AI</a><a href="data-analytics.html">Data Analytics</a><a href="cybersecurity-consulting.html">Cybersecurity</a><a href="enterprise-software-development.html">Enterprise Systems</a><a href="ui-ux-design.html">UI/UX Design</a></div>
        <div><h3>Industries</h3><a href="healthcare-software-development.html">Healthcare</a><a href="fintech-software-development.html">FinTech</a><a href="ecommerce-development.html">Ecommerce</a><a href="logistics-software-development.html">Logistics</a><a href="industries.html">View More</a></div>
        <div><h3>Resources</h3><a href="ai-development-cost-guide.html">AI Cost Guide</a><a href="cloud-migration-checklist.html">Cloud Checklist</a><a href="digital-transformation-playbook.html">Transformation Playbook</a><a href="ksbps-expands-digital-services.html">Press Release</a></div>
        <div><h3>Contact</h3><a href="mailto:hello@ksbpstechnology.com">hello@ksbpstechnology.com</a><a href="mailto:sales@ksbpstechnology.com">sales@ksbpstechnology.com</a><a href="tel:+14155501984">+1 415 550 1984</a><a href="tel:+918047129044">+91 80 4712 9044</a></div>
      </div>

      <div class="footer-units">
        <span>Business capabilities under KSBPS Technology</span>
        <a href="ai-development.html">KSBPS AI Lab</a>
        <a href="cloud-consulting.html">KSBPS CloudOps</a>
        <a href="resources.html">KSBPS Insights</a>
      </div>

      <div class="footer-bottom">
        <div><a href="sitemap.xml">Sitemap</a><span>|</span><a href="contact.html">Privacy Policy</a><span>|</span><a href="contact.html">Legal Information</a></div>
        <p>Copyright ©2026 KSBPS Technology. All Rights Reserved.</p>
      </div>
    </div>
  `;
  bindMotionCards();
}
