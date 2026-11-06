// home.js — TrustNetGain Home Page
import { navHTML, footerHTML, CALENDLY_URL, CHECK_ICON, STAR_ICON } from './shared.js';

const SERVICE_TEASERS = [
  {
    title: 'AI Consulting & Autonomous Agents',
    description: 'From agentic workflow design to autonomous execution engines — AI that integrates with your operations and reports with full accountability.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
  {
    title: 'VMware / Broadcom Infrastructure',
    description: 'Practitioner-grade expertise across vSphere, NSX-T, vSAN, and VCF — from architecture to migration to delivery-ready documentation.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r="0.75" fill="currentColor"/><circle cx="6" cy="12.5" r="0.75" fill="currentColor"/><circle cx="6" cy="19.5" r="0.75" fill="currentColor"/></svg>`,
  },
  {
    title: 'Cloud Infrastructure Advisory',
    description: 'Hybrid and multi-cloud strategy grounded in operational reality — not vendor-driven slide decks. Workload placement, FinOps, and cloud-native readiness.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  },
  {
    title: 'Technical Program Execution',
    description: 'We embed into delivery teams and run workstreams — not just advise on them. Discovery sessions, audit-ready documentation, and on-track delivery.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
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

// ⚠ PLACEHOLDER CONTENT — replace with real client reviews before launch
const REVIEWS = [
  {
    initials: 'RK',
    name: 'Raymond K.',
    role: 'VP of Infrastructure, Financial Services',
    text: 'Net Gain came in when our VMware migration had stalled for three months. Within two weeks they had a working MOP, a revised LLD, and the team back on track. The documentation alone was worth the engagement.',
    stars: 5,
  },
  {
    initials: 'SL',
    name: 'Sandra L.',
    role: 'CTO, Mid-Market SaaS',
    text: "We brought them in for an AI readiness review expecting a generic report. What we got was a direct, prioritized assessment that told us exactly where we'd waste money and where we'd actually see ROI. Refreshingly honest.",
    stars: 5,
  },
  {
    initials: 'DM',
    name: 'David M.',
    role: 'Director of IT Operations, Healthcare',
    text: 'The autonomous agent they built for our lead qualification process runs without intervention and flags edge cases for human review. It has handled thousands of records since launch with zero errors requiring rollback.',
    stars: 5,
  },
  {
    initials: 'JP',
    name: 'James P.',
    role: 'Infrastructure Architect, Enterprise Retail',
    text: "Most consultants write recommendations and disappear. Net Gain stayed in the workstream through delivery. Their NSX-T architecture work held up through a full security audit — no surprises, no revisions needed.",
    stars: 5,
  },
  {
    initials: 'AT',
    name: 'Angela T.',
    role: 'COO, Professional Services Firm',
    text: "The discovery sprint was exactly the forcing function we needed. We came in thinking we needed a full AI overhaul. They showed us three targeted automations that addressed 80% of our inefficiency at a fraction of the cost.",
    stars: 5,
  },
  {
    initials: 'MR',
    name: 'Marcus R.',
    role: 'Cloud Strategy Lead, Insurance',
    text: 'The hybrid cloud advisory engagement gave us a vendor-agnostic workload placement model we still use as the standard for new project intake. Solid, practical work with no upsell pressure.',
    stars: 5,
  },
];

function serviceTeasersHTML() {
  return SERVICE_TEASERS.map(({ title, description, icon }) => `
    <div class="practice-card">
      <div class="practice-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${description}</p>
    </div>`).join('');
}

function differentiatorItemsHTML() {
  return DIFFERENTIATORS.map(({ title, description }) => `
    <li class="diff-item">
      <div class="diff-check">${CHECK_ICON}</div>
      <div class="diff-item-text">
        <strong>${title}</strong>
        <span>${description}</span>
      </div>
    </li>`).join('');
}

function starsHTML(count) {
  return Array(count).fill(STAR_ICON).join('');
}

function reviewsHTML() {
  return REVIEWS.map(({ initials, name, role, text, stars }) => `
    <div class="review-card">
      <div class="review-stars">${starsHTML(stars)}</div>
      <p class="review-text">"${text}"</p>
      <div class="review-author">
        <div class="review-avatar">${initials}</div>
        <div>
          <span class="review-name">${name}</span>
          <span class="review-role">${role}</span>
        </div>
      </div>
    </div>`).join('');
}

document.getElementById('app').innerHTML = `
  ${navHTML()}

  <main>
    <div class="page">

      <!-- HERO -->
      <section class="hero" style="padding: 7rem 0 5rem; border-bottom: 1px solid var(--navy-border);">
        <p class="eyebrow">AI &amp; Infrastructure Consulting</p>
        <h1 style="font-family:'Barlow',sans-serif; font-size:clamp(3rem,6vw,5rem); font-weight:900; line-height:1.0; letter-spacing:-0.01em; text-transform:uppercase; color:var(--white); max-width:800px; margin-bottom:1.5rem;">
          Remove the friction.<br><em style="font-style:normal;color:var(--teal);">Operate with integrity.</em>
        </h1>
        <p style="font-size:1.15rem; font-weight:300; color:var(--white-dim); max-width:580px; line-height:1.8; margin-bottom:2.5rem;">
          Net Gain brings senior practitioner depth to infrastructure modernization and AI adoption —
          so your programs deliver what the SOW promised.
        </p>
        <div class="hero-actions">
          <a href="${CALENDLY_URL}" class="btn-primary" target="_blank" rel="noreferrer">Schedule a Discovery Call</a>
          <a href="/services" class="btn-ghost">View Services</a>
        </div>
      </section>

      <!-- SERVICES TEASER -->
      <section class="section">
        <div class="section-label">
          <span class="section-num">01</span>
          <h2 class="section-title">What We Do</h2>
        </div>
        <div class="practice-grid" style="margin-bottom:2rem;">
          ${serviceTeasersHTML()}
        </div>
        <div style="text-align:center; margin-top:2rem;">
          <a href="/services" class="btn-ghost">See All Practice Areas &rarr;</a>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="section">
        <div class="section-label">
          <span class="section-num">02</span>
          <h2 class="section-title">About Net Gain</h2>
        </div>
        <div class="about-row">
          <div class="about-left">
            <div class="about-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h2>Built by<br>a <em>practitioner.</em></h2>
            <p class="about-sub">Not a staffing firm. Not a methodology shop. A senior technologist who has been in the work — and built a firm around doing it right.</p>
            <div class="about-stats" style="margin-top:2rem;">
              <div class="about-stat">
                <span class="stat-num">20+</span>
                <span class="stat-label">Years in Enterprise Infrastructure</span>
              </div>
              <div class="about-stat">
                <span class="stat-num">50+</span>
                <span class="stat-label">Enterprise Engagements Delivered</span>
              </div>
              <div class="about-stat">
                <span class="stat-num">100%</span>
                <span class="stat-label">Integrity-Driven Engagements</span>
              </div>
            </div>
          </div>
          <div class="about-right">
            <p>
              Net Gain was founded on a straightforward observation: <strong>most consulting engagements fail not because of bad technology, but because of bad honesty.</strong>
              Vendors oversell. Consultants overpromise. Programs drift. And the people accountable for delivery are left holding documentation that doesn't reflect reality.
            </p>
            <p>
              The firm was built to fix that. Net Gain operates with a simple mandate — <strong>remove inefficiencies, operate with integrity, and tell clients what they need to hear before it costs them.</strong>
              That means honest scoping, audit-ready deliverables, and a bias toward outcomes over optics.
            </p>
            <p>
              Our principal brings over two decades of hands-on enterprise infrastructure experience, with deep specialization in VMware and Broadcom data center environments.
              That foundation now extends into AI consulting and autonomous agent deployment — not as a pivot, but as a natural evolution of the same discipline:
              <strong>understand the environment, identify the real leverage points, and build something that actually works.</strong>
            </p>
            <p>
              We don't believe in altruism as a business model. We believe in <strong>mutual value — engagements where the client gets measurable outcomes and we get the satisfaction of work done well.</strong>
              That alignment is what makes the relationship sustainable. It's also what makes us selective about the engagements we take.
            </p>
            <p>
              If you need someone to validate a decision you've already made, we're probably not the right fit.
              If you need someone to tell you the truth about your infrastructure, your AI readiness, or your program's trajectory — and then do something about it — <strong>that's exactly what we're here for.</strong>
            </p>
          </div>
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
            <a href="/services" class="btn-primary">See Our Services</a>
          </div>
          <ul class="diff-list">
            ${differentiatorItemsHTML()}
          </ul>
        </div>
      </section>

      <!-- REVIEWS -->
      <section class="section">
        <div class="section-label">
          <span class="section-num">03</span>
          <h2 class="section-title">Client Reviews</h2>
        </div>
        <div class="placeholder-notice">
          <svg viewBox="0 0 24 24" style="width:12px;height:12px;stroke:rgba(255,180,0,0.7);fill:none;stroke-width:2;" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Placeholder content — replace with real client reviews before launch
        </div>
        <div class="reviews-grid">
          ${reviewsHTML()}
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
          <a href="${CALENDLY_URL}" class="btn-primary" target="_blank" rel="noreferrer">Schedule a Call</a>
          <a href="/contact" class="btn-ghost">Send a Message</a>
        </div>
      </section>

    </div>
  </main>

  ${footerHTML()}
`;
