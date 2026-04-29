// main.js — TrustNetGain Services Page
// Vite entry point. Renders all page content into <div id="app">.
// Replace CALENDLY_URL with your real Calendly link before deploying.

const CALENDLY_URL = 'https://calendly.com/yourlink'; // ← swap this

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact',  href: '/contact' },
];

const PRACTICE_AREAS = [
  {
    title: 'AI Consulting & Autonomous Agents',
    description: 'We design and deploy AI systems that do real work — not demos. From agentic workflow architecture to autonomous profitability engines, we build AI that integrates with existing operations, executes with tiered controls, and reports with full accountability.',
    tags:    ['Agent Design', 'Workflow Automation', 'LLM Integration'],
    dimTags: ['Relevance AI', 'Claude / GPT-4o', 'Airtable Ledger'],
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
  {
    title: 'VMware / Broadcom Data Center & Cloud',
    description: 'Deep, practitioner-level expertise across VMware and Broadcom infrastructure stacks. We lead technical discovery, architect migration paths, and produce the delivery-grade documentation — HLDs, LLDs, MOPs — that keeps complex programs on track.',
    tags:    ['vSphere / vSAN', 'NSX-T', 'VCF'],
    dimTags: ['HLD / LLD', 'MOP Authoring', 'Migration Planning'],
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r="0.75" fill="currentColor"/><circle cx="6" cy="12.5" r="0.75" fill="currentColor"/><circle cx="6" cy="19.5" r="0.75" fill="currentColor"/></svg>`,
  },
  {
    title: 'Cloud Infrastructure Advisory',
    description: 'We help organizations navigate hybrid and multi-cloud decisions without vendor-driven bias. From workload placement strategy to cloud-native readiness assessments, our advisory work is grounded in operational reality — not slide-deck theory.',
    tags:    ['Hybrid Cloud Design', 'Workload Migration', 'Cost Optimization'],
    dimTags: ['AWS / Azure', 'VCF on Cloud', 'FinOps'],
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  },
  {
    title: 'Technical Program Execution',
    description: 'We run technical workstreams, not just recommend them. Our senior practitioners embed into delivery teams to lead structured discovery sessions, produce audit-ready documentation, and keep complex infrastructure programs from drifting off track.',
    tags:    ['Technical Discovery', 'Stakeholder Advisory', 'Delivery Collateral'],
    dimTags: ['Architecture Review', 'Risk Identification', 'Exec Reporting'],
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  },
  {
    title: 'Operational Efficiency & Process AI',
    description: 'We identify where human time is leaking into repeatable processes and replace it with intelligent automation. From lead qualification to internal reporting, we reduce friction, increase throughput, and instrument outcomes from day one.',
    tags:    ['Process Mapping', 'AI-Assisted Workflows', 'ROI Instrumentation'],
    dimTags: ['n8n / Make', 'CRM Automation', 'Reporting Pipelines'],
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    title: 'AI Readiness & Strategic Positioning',
    description: 'Before you invest in AI, you need an honest assessment of where the leverage actually is. We conduct structured AI readiness reviews — mapping your infrastructure, data posture, and operational workflows against what AI can realistically accelerate today.',
    tags:    ['Readiness Assessment', 'Use Case Prioritization', 'Roadmap Design'],
    dimTags: ['Data Posture Review', 'Vendor Evaluation', 'Executive Briefing'],
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Advisory Retainer',
    description: 'Ongoing access to senior-level expertise across infrastructure and AI. Structured monthly cadence with defined deliverables. Ideal for organizations navigating continuous change.',
  },
  {
    title: 'Project Engagement',
    description: 'Scoped, outcomes-driven engagements with defined start and delivery milestones. We embed with your team, produce the artifacts, and hand off clean. No vague statements of work.',
  },
  {
    title: 'Technical Discovery Sprint',
    description: 'A focused, time-boxed discovery engagement — typically two to four weeks. We interview stakeholders, audit your environment, and deliver a prioritized findings report with a clear path forward.',
  },
];

const DIFFERENTIATORS = [
  {
    title: 'Practitioner-first, not process-first',
    description: 'Our principals have hands-on VMware, Broadcom, and cloud delivery experience — not just methodology frameworks.',
  },
  {
    title: 'AI that earns its place',
    description: 'We deploy autonomous AI where the ROI is real — not to claim a capability. Every agent we build is instrumented and accountable.',
  },
  {
    title: 'Documentation that survives delivery',
    description: 'We produce HLDs, LLDs, and MOPs to a standard that holds up under audit, not just internal review.',
  },
  {
    title: 'Integrity over optics',
    description: "We tell clients what they need to hear. If the project scope is wrong, we say so before the SOW is signed.",
  },
];

// ─── Render helpers ────────────────────────────────────────────────────────────

function navHTML() {
  const links = NAV_LINKS.map(({ label, href }) => {
    const isActive = window.location.pathname === href ? ' class="active"' : '';
    return `<li><a href="${href}"${isActive}>${label}</a></li>`;
  }).join('');

  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="/" class="logo">Trust<span class="accent">Net</span>Gain</a>
        <ul class="nav-links">${links}</ul>
        <a href="${CALENDLY_URL}" class="nav-cta" target="_blank" rel="noreferrer">Book a Call</a>
      </div>
    </nav>`;
}

function practiceCardsHTML() {
  return PRACTICE_AREAS.map(({ title, description, tags, dimTags, icon }) => {
    const tagSpans    = tags.map(t    => `<span class="tag">${t}</span>`).join('');
    const dimTagSpans = dimTags.map(t => `<span class="tag-dim">${t}</span>`).join('');
    return `
      <div class="practice-card">
        <div class="practice-icon">${icon}</div>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="tag-row">${tagSpans}${dimTagSpans}</div>
      </div>`;
  }).join('');
}

function engagementCardsHTML() {
  return ENGAGEMENT_MODELS.map(({ title, description }) => `
    <div class="eng-card">
      <div class="eng-dot"></div>
      <h4>${title}</h4>
      <p>${description}</p>
    </div>`).join('');
}

function differentiatorItemsHTML() {
  const checkIcon = `<svg viewBox="0 0 12 12" aria-hidden="true"><polyline points="2 6 5 9 10 3"/></svg>`;
  return DIFFERENTIATORS.map(({ title, description }) => `
    <li class="diff-item">
      <div class="diff-check">${checkIcon}</div>
      <div class="diff-item-text">
        <strong>${title}</strong>
        <span>${description}</span>
      </div>
    </li>`).join('');
}

function footerHTML() {
  return `
    <div class="page">
      <footer class="site-footer">
        <span>&copy; 2025 TrustNetGain &middot; NetGain, LLC</span>
        <span>trustnetgain.com</span>
      </footer>
    </div>`;
}

// ─── Mount ─────────────────────────────────────────────────────────────────────

document.getElementById('app').innerHTML = `
  ${navHTML()}

  <main>
    <div class="page">

      <!-- HERO -->
      <section class="hero">
        <p class="eyebrow">Services &amp; Practice Areas</p>
        <h1>Infrastructure expertise.<br><em>AI-native</em> execution.</h1>
        <p class="hero-sub">
          We operate at the intersection of enterprise infrastructure and autonomous AI —
          bringing practitioner-grade depth to environments where shallow consulting falls short.
        </p>
        <div class="hero-actions">
          <a href="${CALENDLY_URL}" class="btn-primary" target="_blank" rel="noreferrer">
            Schedule a Discovery Call
          </a>
          <a href="/insights" class="btn-ghost">View Case Studies</a>
        </div>
      </section>

      <!-- PRACTICE AREAS -->
      <section class="section">
        <div class="section-label">
          <span class="section-num">01</span>
          <h2 class="section-title">Practice Areas</h2>
        </div>
        <div class="practice-grid">
          ${practiceCardsHTML()}
        </div>
      </section>

      <!-- ENGAGEMENT MODELS -->
      <section class="section">
        <div class="section-label">
          <span class="section-num">02</span>
          <h2 class="section-title">How We Engage</h2>
        </div>
        <div class="engagement-grid">
          ${engagementCardsHTML()}
        </div>
      </section>

      <!-- DIFFERENTIATORS -->
      <section class="section">
        <div class="diff-row">
          <div class="diff-left">
            <h2>Why practitioners<br>choose <em>Net Gain</em></h2>
            <p>
              Most consulting firms send you generalists dressed as specialists.
              We're senior technologists who have built, migrated, and broken real
              infrastructure — and rebuilt it. That experience travels with every engagement.
            </p>
            <a href="/about" class="btn-primary">See How We Work</a>
          </div>
          <ul class="diff-list">
            ${differentiatorItemsHTML()}
          </ul>
        </div>
      </section>

      <!-- CTA BAND -->
      <section class="cta-band">
        <h2>Let's diagnose<br>the <em>actual</em> problem first.</h2>
        <p>
          No pitch deck, no pre-packaged solution. Start with a 30-minute discovery
          call and we'll tell you honestly where we can move the needle.
        </p>
        <div class="cta-actions">
          <a href="${CALENDLY_URL}" class="btn-primary" target="_blank" rel="noreferrer">
            Schedule a Call
          </a>
          <a href="/about" class="btn-ghost">Learn About Us</a>
        </div>
      </section>

    </div>
  </main>

  ${footerHTML()}
`;
