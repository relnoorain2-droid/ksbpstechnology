const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const pages = [
  { slug: 'ai-development', type: 'service', title: 'AI Development', kicker: 'Artificial intelligence', desc: 'Build AI assistants, automation workflows, recommendation engines, intelligent search, and decision systems that connect safely with your business data.', bullets: ['AI assistants and copilots', 'RAG knowledge systems', 'Model integration', 'AI governance support'] },
  { slug: 'generative-ai-development', type: 'service', title: 'Generative AI Development', kicker: 'Generative AI', desc: 'Create secure GenAI products for content, support, operations, knowledge retrieval, and customer engagement.', bullets: ['Prompt workflows', 'Document intelligence', 'Content automation', 'Private knowledge assistants'] },
  { slug: 'mobile-app-development', type: 'service', title: 'Mobile App Development', kicker: 'Mobile engineering', desc: 'Design and develop mobile apps for customers, field teams, operations, healthcare, commerce, and startups.', bullets: ['iOS and Android apps', 'Cross-platform builds', 'App redesign', 'Store-ready launch support'] },
  { slug: 'ios-app-development', type: 'service', title: 'iOS App Development', kicker: 'Apple platforms', desc: 'Build fast, polished iPhone and iPad apps with clean onboarding, secure data flows, and scalable backend connections.', bullets: ['Swift-ready architecture', 'Apple UI patterns', 'Push notifications', 'Subscription flows'] },
  { slug: 'android-app-development', type: 'service', title: 'Android App Development', kicker: 'Android platforms', desc: 'Deliver Android applications for consumer, enterprise, and field operations with reliable performance and simple maintenance.', bullets: ['Material-style interfaces', 'Device compatibility', 'Offline support', 'Play Store release support'] },
  { slug: 'web-development', type: 'service', title: 'Web Development', kicker: 'Web platforms', desc: 'Launch web apps, dashboards, portals, ecommerce platforms, marketplaces, and customer self-service systems.', bullets: ['Admin portals', 'SaaS products', 'Customer dashboards', 'CMS-powered sites'] },
  { slug: 'software-development', type: 'service', title: 'Software Development', kicker: 'Custom software', desc: 'Plan and build maintainable business software around your workflows, data, user roles, integrations, and reporting needs.', bullets: ['Custom workflows', 'System integrations', 'Role-based access', 'Operational reporting'] },
  { slug: 'enterprise-software-development', type: 'service', title: 'Enterprise Software Development', kicker: 'Enterprise systems', desc: 'Modernize complex business operations with CRM, ERP, billing, approval, finance, HR, and internal software platforms.', bullets: ['CRM and ERP modules', 'Legacy modernization', 'Multi-role dashboards', 'Enterprise integrations'] },
  { slug: 'saas-development', type: 'service', title: 'SaaS Development', kicker: 'SaaS products', desc: 'Build subscription-ready platforms with onboarding, plans, billing-ready structures, analytics, permissions, and admin controls.', bullets: ['Tenant architecture', 'Subscription design', 'Usage dashboards', 'Product analytics'] },
  { slug: 'cloud-consulting', type: 'service', title: 'Cloud Consulting', kicker: 'Cloud strategy', desc: 'Choose, migrate, optimize, and operate cloud infrastructure with cost awareness, observability, and resilience.', bullets: ['Cloud readiness audit', 'Migration roadmap', 'Cost optimization', 'Reliability planning'] },
  { slug: 'devops-services', type: 'service', title: 'DevOps Services', kicker: 'Release operations', desc: 'Automate deployments, environments, monitoring, backups, and infrastructure workflows for safer product delivery.', bullets: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup', 'Release governance'] },
  { slug: 'cybersecurity-consulting', type: 'service', title: 'Cybersecurity Consulting', kicker: 'Security', desc: 'Strengthen your applications, cloud, access model, and delivery practices with practical security controls.', bullets: ['Security audits', 'Access reviews', 'Cloud hardening', 'Vulnerability remediation'] },
  { slug: 'data-analytics', type: 'service', title: 'Data Analytics', kicker: 'Data intelligence', desc: 'Turn scattered business data into dashboards, reports, pipelines, forecasts, and leadership-ready insights.', bullets: ['BI dashboards', 'ETL pipelines', 'Data warehouses', 'Predictive reporting'] },
  { slug: 'ui-ux-design', type: 'service', title: 'UI/UX Design', kicker: 'Product design', desc: 'Create clear product journeys, interface systems, prototypes, and conversion-focused user experiences.', bullets: ['User journeys', 'Design systems', 'Interactive prototypes', 'Usability refinement'] },

  { slug: 'healthcare-software-development', type: 'industry', title: 'Healthcare Software Development', kicker: 'Healthcare', desc: 'Digital health platforms, patient engagement, appointment flows, wellness apps, admin portals, and secure health data workflows.', bullets: ['Telehealth flows', 'Patient portals', 'Clinical dashboards', 'Healthcare AI support'] },
  { slug: 'fintech-software-development', type: 'industry', title: 'FinTech Software Development', kicker: 'Financial technology', desc: 'FinTech apps and portals for payments, lending, wallets, investment workflows, KYC-ready onboarding, and reporting.', bullets: ['Digital wallets', 'Payment portals', 'Lending workflows', 'Risk dashboards'] },
  { slug: 'ecommerce-development', type: 'industry', title: 'Ecommerce Development', kicker: 'Commerce', desc: 'Online stores, marketplaces, inventory operations, loyalty programs, branch dashboards, and customer mobile experiences.', bullets: ['Marketplace builds', 'Order management', 'Loyalty systems', 'Inventory analytics'] },
  { slug: 'logistics-software-development', type: 'industry', title: 'Logistics Software Development', kicker: 'Logistics', desc: 'Fleet tracking, dispatch tools, warehouse workflows, route visibility, delivery apps, and supply chain dashboards.', bullets: ['Fleet dashboards', 'Driver apps', 'Warehouse systems', 'Shipment visibility'] },
  { slug: 'real-estate-app-development', type: 'industry', title: 'Real Estate App Development', kicker: 'Real estate', desc: 'Listing portals, property CRM, tenant tools, broker dashboards, virtual tour flows, and lead management systems.', bullets: ['Property portals', 'Broker CRM', 'Tenant workflows', 'Lead dashboards'] },
  { slug: 'education-app-development', type: 'industry', title: 'Education App Development', kicker: 'Education', desc: 'Learning platforms, student portals, assessments, content delivery, certificates, and education analytics.', bullets: ['LMS platforms', 'Assessment tools', 'Student portals', 'Learning analytics'] },
  { slug: 'manufacturing-software-development', type: 'industry', title: 'Manufacturing Software Development', kicker: 'Manufacturing', desc: 'Production dashboards, quality tracking, IoT visibility, maintenance planning, vendor portals, and operational intelligence.', bullets: ['Production metrics', 'Quality tracking', 'Maintenance workflows', 'Vendor portals'] },
  { slug: 'travel-app-development', type: 'industry', title: 'Travel App Development', kicker: 'Travel', desc: 'Booking engines, itinerary apps, concierge tools, partner portals, personalized recommendations, and travel operations dashboards.', bullets: ['Booking platforms', 'Itinerary tools', 'Travel CRM', 'Recommendation engines'] },
  { slug: 'retail-software-development', type: 'industry', title: 'Retail Software Development', kicker: 'Retail', desc: 'Omnichannel commerce, POS integrations, customer loyalty, staff tools, branch analytics, and customer engagement systems.', bullets: ['POS integrations', 'Customer apps', 'Branch analytics', 'Staff tools'] },
  { slug: 'automotive-software-development', type: 'industry', title: 'Automotive Software Development', kicker: 'Automotive', desc: 'Dealer portals, service booking, mobility apps, parts workflows, connected customer experiences, and analytics.', bullets: ['Dealer portals', 'Service apps', 'Parts workflows', 'Customer engagement'] },

  { slug: 'ai-development-cost-guide', type: 'blog', title: 'How Much Does AI Development Cost?', kicker: 'Guide', desc: 'A practical cost guide covering scope, data readiness, model selection, integrations, compliance, and launch support.', bullets: ['Discovery and prototype', 'Data and integration cost', 'Security and governance', 'Maintenance planning'] },
  { slug: 'choose-mobile-app-development-company', type: 'blog', title: 'How to Choose a Mobile App Development Company', kicker: 'Blog', desc: 'What to check before hiring an app development partner: process, portfolio, architecture, design quality, testing, and support.', bullets: ['Discovery quality', 'Design maturity', 'Engineering process', 'Post-launch support'] },
  { slug: 'enterprise-software-modernization', type: 'blog', title: 'Enterprise Software Modernization Roadmap', kicker: 'Insight', desc: 'A phased approach to replacing manual workflows, legacy tools, and disconnected spreadsheets with modern digital systems.', bullets: ['Audit current systems', 'Prioritize workflows', 'Migrate safely', 'Measure adoption'] },
  { slug: 'cloud-migration-checklist', type: 'blog', title: 'Cloud Migration Checklist for Growing Businesses', kicker: 'Guide', desc: 'A straightforward checklist for planning secure, cost-aware cloud migration without interrupting daily operations.', bullets: ['Readiness audit', 'Data backup', 'Security controls', 'Monitoring after launch'] },
  { slug: 'ai-in-healthcare-use-cases', type: 'blog', title: 'AI in Healthcare: Practical Use Cases', kicker: 'Blog', desc: 'Explore patient support, admin automation, clinical documentation, analytics, and engagement use cases for healthcare teams.', bullets: ['Patient triage', 'Document automation', 'Predictive analytics', 'Care reminders'] },
  { slug: 'fintech-app-features', type: 'blog', title: 'Essential Features for FinTech Apps', kicker: 'Blog', desc: 'A feature guide for wallet, payment, investment, lending, and finance dashboard platforms.', bullets: ['Secure onboarding', 'Transaction views', 'Risk controls', 'Admin reviews'] },
  { slug: 'ksbps-expands-digital-services', type: 'press', title: 'KSBPS Technology Expands Digital Engineering Services', kicker: 'Press release', desc: 'KSBPS Technology is expanding its service catalog across AI, cloud, mobile, data, cybersecurity, and enterprise software.', bullets: ['AI-first offerings', 'Cloud operations', 'Industry solutions', 'Global delivery mindset'] },
  { slug: 'digital-transformation-playbook', type: 'insight', title: 'Digital Transformation Playbook', kicker: 'Insight', desc: 'A concise playbook for leaders planning digital transformation across operations, customer experience, data, and infrastructure.', bullets: ['Map outcomes', 'Modernize workflows', 'Automate reporting', 'Scale with governance'] },
];

const groups = {
  service: pages.filter(p => p.type === 'service'),
  industry: pages.filter(p => p.type === 'industry'),
  blog: pages.filter(p => ['blog', 'press', 'insight'].includes(p.type)),
};

function layout({ title, description, body }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | KSBPS Technology</title>
  <meta name="description" content="${description}">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/css/styles.css?v=motion-fix-0922">
</head>
<body>
  <div class="top-strip"><span>AI, software, cloud and digital transformation partner.</span><a href="contact.html">Schedule free consultation</a></div>
  <header class="site-header" data-header>
    <a class="brand" href="index.html"><span class="brand-mark">K</span><span><strong>KSBPS</strong><small>Technology</small></span></a>
    <button class="nav-toggle" type="button" aria-label="Open navigation" data-nav-toggle><span></span><span></span><span></span></button>
    <nav class="main-nav" data-nav>
      <div class="nav-item has-panel"><a href="services.html">Services</a><div class="mega-panel mega-wide">
        ${groups.service.slice(0, 12).map(p => `<a href="${p.slug}.html">${p.title}</a>`).join('')}
      </div></div>
      <div class="nav-item has-panel"><a href="industries.html">Industries</a><div class="mega-panel mega-wide">
        ${groups.industry.map(p => `<a href="${p.slug}.html">${p.kicker}</a>`).join('')}
      </div></div>
      <a href="case-studies.html">Work</a>
      <a href="resources.html">Resources</a>
      <a href="about.html">Company</a>
      <a href="contact.html" class="nav-cta">Contact</a>
    </nav>
  </header>
${body}
  <footer class="site-footer"><div><a class="brand footer-brand" href="index.html"><span class="brand-mark">K</span><span><strong>KSBPS</strong><small>Technology</small></span></a><p>Original KSBPS Technology website for AI, software, cloud, data and digital transformation services.</p></div><div><h3>Services</h3><a href="ai-development.html">AI development</a><a href="mobile-app-development.html">Mobile apps</a><a href="cloud-consulting.html">Cloud consulting</a></div><div><h3>Industries</h3><a href="healthcare-software-development.html">Healthcare</a><a href="fintech-software-development.html">FinTech</a><a href="ecommerce-development.html">Ecommerce</a></div><div><h3>Contact</h3><a href="mailto:hello@ksbpstechnology.com">hello@ksbpstechnology.com</a><a href="tel:+14155501984">+1 415 550 1984</a></div></footer>
  <script src="assets/js/main.js?v=motion-fix-0922"></script>
</body>
</html>`;
}

function detailPage(p) {
  const related = pages.filter(x => x.type === p.type && x.slug !== p.slug).slice(0, 6);
  return layout({
    title: p.title,
    description: p.desc,
    body: `<main>
    <section class="page-hero detail-hero"><div class="page-hero-inner reveal"><p class="eyebrow">${p.kicker}</p><h1>${p.title}</h1><p>${p.desc}</p><div class="hero-actions"><a class="button primary" href="contact.html">Discuss this requirement</a><a class="button ghost" href="${p.type === 'industry' ? 'industries.html' : p.type === 'service' ? 'services.html' : 'resources.html'}">Back to ${p.type === 'industry' ? 'industries' : p.type === 'service' ? 'services' : 'resources'}</a></div></div></section>
    <section class="section split"><div class="section-copy reveal"><p class="eyebrow">KSBPS approach</p><h2>Built with clear scope, strong engineering and measurable outcomes.</h2><p>We shape every engagement around your workflows, users, integrations, security needs, timeline and launch model. The result is a practical roadmap and a polished digital system that can grow after launch.</p></div><div class="service-stack">${p.bullets.map((b, i) => `<article class="feature-card reveal"><span>0${i + 1}</span><h3>${b}</h3><p>Plan, design, build and improve this capability with a dedicated KSBPS delivery track.</p></article>`).join('')}</div></section>
    <section class="section texture"><div class="section-head reveal"><p class="eyebrow">What you get</p><h2>A complete delivery path, not a disconnected set of tasks.</h2></div><div class="process-grid">${['Discovery workshop', 'UX and architecture', 'Agile development', 'Quality assurance', 'Launch support', 'Managed improvement'].map(x => `<article class="directory-card reveal"><h3>${x}</h3><p>Structured execution with documented decisions, milestones, and business-facing reporting.</p></article>`).join('')}</div></section>
    <section class="section"><div class="section-head reveal"><p class="eyebrow">Related pages</p><h2>Explore more KSBPS capabilities.</h2></div><div class="directory-grid">${related.map(x => `<a class="directory-card link-card reveal" href="${x.slug}.html"><h3>${x.title}</h3><p>${x.desc}</p></a>`).join('')}</div></section>
    <section class="cta-section reveal"><div><p class="eyebrow">Start now</p><h2>Tell us your requirement and we will shape the right plan.</h2></div><a class="button primary" href="contact.html">Contact KSBPS</a></section>
  </main>`
  });
}

function listingPage(filename, title, kicker, desc, list, extra = '') {
  return layout({
    title,
    description: desc,
    body: `<main><section class="page-hero"><div class="page-hero-inner reveal"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${desc}</p></div></section>${extra}<section class="section"><div class="directory-grid">${list.map(p => `<a class="directory-card link-card reveal" href="${p.slug}.html"><p class="eyebrow">${p.kicker}</p><h3>${p.title}</h3><p>${p.desc}</p></a>`).join('')}</div></section></main>`
  });
}

for (const p of pages) {
  fs.writeFileSync(path.join(root, `${p.slug}.html`), detailPage(p));
}

fs.writeFileSync(path.join(root, 'resources.html'), listingPage('resources.html', 'Resources', 'Knowledge hub', 'Guides, insights, blog posts, and press updates from KSBPS Technology.', groups.blog, `<section class="section stats-wall reveal"><div><strong>8</strong><span>featured resources</span></div><div><strong>4</strong><span>guide categories</span></div><div><strong>24/7</strong><span>digital strategy mindset</span></div></section>`));

const sitemapUrls = ['index.html', 'services.html', 'industries.html', 'case-studies.html', 'about.html', 'contact.html', 'resources.html', ...pages.map(p => `${p.slug}.html`)];
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map(u => `  <url><loc>https://ksbpstechnology.com/${u === 'index.html' ? '' : u}</loc></url>`).join('\n')}\n</urlset>\n`);

console.log(`Generated ${pages.length} detail pages plus resources and sitemap.`);
