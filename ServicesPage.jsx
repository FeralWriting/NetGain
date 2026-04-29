// ServicesPage.jsx
// Drop into your React/Vite project at: src/pages/ServicesPage.jsx
// Requires React Router — import { Link } from 'react-router-dom' is used for nav links.
// Google Fonts (Barlow + DM Sans) should be loaded in index.html or index.css globally.

import { Link } from 'react-router-dom';

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
  :root {
    --navy: #0a0f1e;
    --navy-mid: #0f1729;
    --navy-card: #131d35;
    --navy-border: #1e2d50;
    --teal: #00d4a8;
    --teal-dim: #00a882;
    --teal-muted: rgba(0,212,168,0.12);
    --teal-glow: rgba(0,212,168,0.06);
    --white: #f0f4ff;
    --white-dim: rgba(240,244,255,0.65);
    --white-muted: rgba(240,244,255,0.35);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--navy);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }

  .ng-page { max-width: 1120px; margin: 0 auto; padding: 0 2rem; }

  /* NAV */
  .ng-nav {
    border-bottom: 1px solid var(--navy-border);
    padding: 1.25rem 0;
    position: sticky;
    top: 0;
    background: rgba(10,15,30,0.95);
    backdrop-filter: blur(12px);
    z-index: 100;
  }
  .ng-nav-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ng-logo {
    font-family: 'Barlow', sans-serif;
    font-weight: 900;
    font-size: 1.2rem;
    color: var(--white);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
  }
  .ng-logo span { color: var(--teal); }
  .ng-nav-links { display: flex; gap: 2rem; list-style: none; }
  .ng-nav-links a {
    color: var(--white-dim);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 400;
    transition: color 0.2s;
  }
  .ng-nav-links a:hover,
  .ng-nav-links a.active { color: var(--teal); }
  .ng-nav-cta {
    background: var(--teal);
    color: var(--navy);
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
  }
  .ng-nav-cta:hover { background: var(--teal-dim); }

  /* HERO */
  .ng-hero {
    padding: 6rem 0 4rem;
    border-bottom: 1px solid var(--navy-border);
  }
  .ng-eyebrow {
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 1.25rem;
  }
  .ng-hero h1 {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(2.75rem, 5.5vw, 4.25rem);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--white);
    max-width: 720px;
    margin-bottom: 1.5rem;
  }
  .ng-hero h1 em { font-style: normal; color: var(--teal); }
  .ng-hero-sub {
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--white-dim);
    max-width: 600px;
    line-height: 1.75;
    margin-bottom: 2.5rem;
  }
  .ng-hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }

  /* BUTTONS */
  .ng-btn-primary {
    background: var(--teal);
    color: var(--navy);
    padding: 0.75rem 1.75rem;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .ng-btn-primary:hover { background: var(--teal-dim); transform: translateY(-1px); }
  .ng-btn-ghost {
    background: transparent;
    color: var(--white-dim);
    padding: 0.75rem 1.75rem;
    border-radius: 6px;
    font-weight: 400;
    font-size: 0.9rem;
    cursor: pointer;
    border: 1px solid var(--navy-border);
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s, color 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .ng-btn-ghost:hover { border-color: var(--teal); color: var(--teal); }

  /* SECTIONS */
  .ng-section {
    padding: 5rem 0;
    border-bottom: 1px solid var(--navy-border);
  }
  .ng-section-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }
  .ng-section-num {
    font-family: 'Barlow', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: var(--teal);
    border: 1px solid var(--teal-dim);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
  .ng-section-title {
    font-family: 'Barlow', sans-serif;
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--white);
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  /* PRACTICE GRID */
  .ng-practice-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5px;
    background: var(--navy-border);
    border: 1px solid var(--navy-border);
    border-radius: 12px;
    overflow: hidden;
  }
  .ng-practice-card {
    background: var(--navy-card);
    padding: 2.5rem;
    transition: background 0.2s;
    position: relative;
    overflow: hidden;
  }
  .ng-practice-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--teal);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  .ng-practice-card:hover { background: #162038; }
  .ng-practice-card:hover::before { transform: scaleX(1); }
  .ng-practice-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--teal-muted);
    border: 1px solid rgba(0,212,168,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .ng-practice-icon svg {
    width: 20px;
    height: 20px;
    stroke: var(--teal);
    fill: none;
    stroke-width: 1.75;
  }
  .ng-practice-card h3 {
    font-family: 'Barlow', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--white);
    margin-bottom: 0.75rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .ng-practice-card p {
    font-size: 0.9rem;
    color: var(--white-dim);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  .ng-tag-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .ng-tag {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    background: var(--teal-glow);
    color: var(--teal);
    border: 1px solid rgba(0,212,168,0.2);
  }
  .ng-tag-dim {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    background: rgba(240,244,255,0.04);
    color: var(--white-muted);
    border: 1px solid rgba(240,244,255,0.1);
  }

  /* ENGAGEMENT MODELS */
  .ng-engagement-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .ng-eng-card {
    background: var(--navy-card);
    border: 1px solid var(--navy-border);
    border-radius: 10px;
    padding: 1.75rem;
    transition: border-color 0.2s;
  }
  .ng-eng-card:hover { border-color: var(--teal-dim); }
  .ng-eng-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--teal);
    margin-bottom: 1.25rem;
  }
  .ng-eng-card h4 {
    font-family: 'Barlow', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
  }
  .ng-eng-card p {
    font-size: 0.875rem;
    color: var(--white-muted);
    line-height: 1.65;
  }

  /* DIFFERENTIATORS */
  .ng-diff-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  .ng-diff-left h2 {
    font-family: 'Barlow', sans-serif;
    font-size: 2.1rem;
    font-weight: 900;
    color: var(--white);
    letter-spacing: 0em;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  .ng-diff-left h2 em { font-style: normal; color: var(--teal); }
  .ng-diff-left p {
    font-size: 0.95rem;
    color: var(--white-dim);
    line-height: 1.75;
    margin-bottom: 1.5rem;
  }
  .ng-diff-list { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
  .ng-diff-item { display: flex; gap: 1rem; align-items: flex-start; }
  .ng-diff-check {
    width: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 50%;
    background: var(--teal-muted);
    border: 1px solid var(--teal-dim);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }
  .ng-diff-check svg { width: 10px; height: 10px; stroke: var(--teal); fill: none; stroke-width: 2.5; }
  .ng-diff-item-text strong {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 0.2rem;
  }
  .ng-diff-item-text span { font-size: 0.85rem; color: var(--white-muted); }

  /* CTA BAND */
  .ng-cta-band { padding: 5rem 0; text-align: center; }
  .ng-cta-band h2 {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 2.75rem);
    font-weight: 900;
    color: var(--white);
    letter-spacing: 0em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .ng-cta-band h2 em { font-style: normal; color: var(--teal); }
  .ng-cta-band p {
    color: var(--white-dim);
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
  .ng-cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* FOOTER */
  .ng-footer {
    border-top: 1px solid var(--navy-border);
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--white-muted);
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .ng-practice-grid { grid-template-columns: 1fr; }
    .ng-engagement-grid { grid-template-columns: 1fr; }
    .ng-diff-row { grid-template-columns: 1fr; }
    .ng-nav-links { display: none; }
    .ng-footer { flex-direction: column; gap: 0.5rem; text-align: center; }
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const practiceAreas = [
  {
    id: 'ai-agents',
    title: 'AI Consulting & Autonomous Agents',
    description:
      'We design and deploy AI systems that do real work — not demos. From agentic workflow architecture to autonomous profitability engines, we build AI that integrates with existing operations, executes with tiered controls, and reports with full accountability.',
    tags: ['Agent Design', 'Workflow Automation', 'LLM Integration'],
    dimTags: ['Relevance AI', 'Claude / GPT-4o', 'Airtable Ledger'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'vmware',
    title: 'VMware / Broadcom Data Center & Cloud',
    description:
      'Deep, practitioner-level expertise across VMware and Broadcom infrastructure stacks. We lead technical discovery, architect migration paths, and produce the delivery-grade documentation — HLDs, LLDs, MOPs — that keeps complex programs on track.',
    tags: ['vSphere / vSAN', 'NSX-T', 'VCF'],
    dimTags: ['HLD / LLD', 'MOP Authoring', 'Migration Planning'],
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="10" width="20" height="5" rx="1" />
        <rect x="2" y="17" width="20" height="5" rx="1" />
        <circle cx="6" cy="5.5" r="0.75" fill="currentColor" />
        <circle cx="6" cy="12.5" r="0.75" fill="currentColor" />
        <circle cx="6" cy="19.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure Advisory',
    description:
      'We help organizations navigate hybrid and multi-cloud decisions without vendor-driven bias. From workload placement strategy to cloud-native readiness assessments, our advisory work is grounded in operational reality — not slide-deck theory.',
    tags: ['Hybrid Cloud Design', 'Workload Migration', 'Cost Optimization'],
    dimTags: ['AWS / Azure', 'VCF on Cloud', 'FinOps'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: 'programs',
    title: 'Technical Program Execution',
    description:
      'We run technical workstreams, not just recommend them. Our senior practitioners embed into delivery teams to lead structured discovery sessions, produce audit-ready documentation, and keep complex infrastructure programs from drifting off track.',
    tags: ['Technical Discovery', 'Stakeholder Advisory', 'Delivery Collateral'],
    dimTags: ['Architecture Review', 'Risk Identification', 'Exec Reporting'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 'ops-ai',
    title: 'Operational Efficiency & Process AI',
    description:
      'We identify where human time is leaking into repeatable processes and replace it with intelligent automation. From lead qualification to internal reporting, we reduce friction, increase throughput, and instrument outcomes from day one.',
    tags: ['Process Mapping', 'AI-Assisted Workflows', 'ROI Instrumentation'],
    dimTags: ['n8n / Make', 'CRM Automation', 'Reporting Pipelines'],
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 'readiness',
    title: 'AI Readiness & Strategic Positioning',
    description:
      'Before you invest in AI, you need an honest assessment of where the leverage actually is. We conduct structured AI readiness reviews — mapping your infrastructure, data posture, and operational workflows against what AI can realistically accelerate today.',
    tags: ['Readiness Assessment', 'Use Case Prioritization', 'Roadmap Design'],
    dimTags: ['Data Posture Review', 'Vendor Evaluation', 'Executive Briefing'],
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const engagementModels = [
  {
    id: 'retainer',
    title: 'Advisory Retainer',
    description:
      'Ongoing access to senior-level expertise across infrastructure and AI. Structured monthly cadence with defined deliverables. Ideal for organizations navigating continuous change.',
  },
  {
    id: 'project',
    title: 'Project Engagement',
    description:
      'Scoped, outcomes-driven engagements with defined start and delivery milestones. We embed with your team, produce the artifacts, and hand off clean. No vague statements of work.',
  },
  {
    id: 'sprint',
    title: 'Technical Discovery Sprint',
    description:
      'A focused, time-boxed discovery engagement — typically two to four weeks. We interview stakeholders, audit your environment, and deliver a prioritized findings report with a clear path forward.',
  },
];

const differentiators = [
  {
    id: 'practitioner',
    title: 'Practitioner-first, not process-first',
    description:
      'Our principals have hands-on VMware, Broadcom, and cloud delivery experience — not just methodology frameworks.',
  },
  {
    id: 'ai-roi',
    title: 'AI that earns its place',
    description:
      'We deploy autonomous AI where the ROI is real — not to claim a capability. Every agent we build is instrumented and accountable.',
  },
  {
    id: 'docs',
    title: 'Documentation that survives delivery',
    description:
      'We produce HLDs, LLDs, and MOPs to a standard that holds up under audit, not just internal review.',
  },
  {
    id: 'integrity',
    title: 'Integrity over optics',
    description:
      "We tell clients what they need to hear. If the project scope is wrong, we say so before the SOW is signed.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg viewBox="0 0 12 12">
    <polyline points="2 6 5 9 10 3" />
  </svg>
);

const PracticeCard = ({ title, description, tags, dimTags, icon }) => (
  <div className="ng-practice-card">
    <div className="ng-practice-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="ng-tag-row">
      {tags.map((tag) => (
        <span key={tag} className="ng-tag">{tag}</span>
      ))}
      {dimTags.map((tag) => (
        <span key={tag} className="ng-tag-dim">{tag}</span>
      ))}
    </div>
  </div>
);

const EngagementCard = ({ title, description }) => (
  <div className="ng-eng-card">
    <div className="ng-eng-dot" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const DifferentiatorItem = ({ title, description }) => (
  <li className="ng-diff-item">
    <div className="ng-diff-check">
      <CheckIcon />
    </div>
    <div className="ng-diff-item-text">
      <strong>{title}</strong>
      <span>{description}</span>
    </div>
  </li>
);

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* Inject scoped styles — move to ServicesPage.module.css or global CSS in production */}
      <style>{styles}</style>

      {/* NAV */}
      <nav className="ng-nav">
        <div className="ng-nav-inner">
          <Link to="/" className="ng-logo">
            Trust<span>Net</span>Gain
          </Link>
          <ul className="ng-nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services" className="active">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {/* Replace href with your Calendly link when ready */}
          <a href="https://calendly.com/yourlink" className="ng-nav-cta" target="_blank" rel="noreferrer">
            Book a Call
          </a>
        </div>
      </nav>

      <main>
        <div className="ng-page">

          {/* HERO */}
          <section className="ng-hero">
            <p className="ng-eyebrow">Services &amp; Practice Areas</p>
            <h1>
              Infrastructure expertise.<br />
              <em>AI-native</em> execution.
            </h1>
            <p className="ng-hero-sub">
              We operate at the intersection of enterprise infrastructure and autonomous AI —
              bringing practitioner-grade depth to environments where shallow consulting falls short.
            </p>
            <div className="ng-hero-actions">
              {/* Replace href with your Calendly link when ready */}
              <a href="https://calendly.com/yourlink" className="ng-btn-primary" target="_blank" rel="noreferrer">
                Schedule a Discovery Call
              </a>
              <Link to="/insights" className="ng-btn-ghost">
                View Case Studies
              </Link>
            </div>
          </section>

          {/* PRACTICE AREAS */}
          <section className="ng-section">
            <div className="ng-section-label">
              <span className="ng-section-num">01</span>
              <h2 className="ng-section-title">Practice areas</h2>
            </div>
            <div className="ng-practice-grid">
              {practiceAreas.map((area) => (
                <PracticeCard key={area.id} {...area} />
              ))}
            </div>
          </section>

          {/* ENGAGEMENT MODELS */}
          <section className="ng-section">
            <div className="ng-section-label">
              <span className="ng-section-num">02</span>
              <h2 className="ng-section-title">How we engage</h2>
            </div>
            <div className="ng-engagement-grid">
              {engagementModels.map((model) => (
                <EngagementCard key={model.id} {...model} />
              ))}
            </div>
          </section>

          {/* DIFFERENTIATORS */}
          <section className="ng-section">
            <div className="ng-diff-row">
              <div className="ng-diff-left">
                <h2>
                  Why practitioners<br />choose <em>Net Gain</em>
                </h2>
                <p>
                  Most consulting firms send you generalists dressed as specialists. We're senior
                  technologists who have built, migrated, and broken real infrastructure — and
                  rebuilt it. That experience travels with every engagement.
                </p>
                <Link to="/about" className="ng-btn-primary">
                  See How We Work
                </Link>
              </div>
              <div>
                <ul className="ng-diff-list">
                  {differentiators.map((item) => (
                    <DifferentiatorItem key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="ng-cta-band">
            <h2>
              Let's diagnose<br />the <em>actual</em> problem first.
            </h2>
            <p>
              No pitch deck, no pre-packaged solution. Start with a 30-minute discovery call
              and we'll tell you honestly where we can move the needle.
            </p>
            <div className="ng-cta-actions">
              <a href="https://calendly.com/yourlink" className="ng-btn-primary" target="_blank" rel="noreferrer">
                Schedule a Call
              </a>
              <Link to="/about" className="ng-btn-ghost">
                Learn About Us
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <div className="ng-page">
        <footer className="ng-footer">
          <span>© 2025 TrustNetGain · NetGain, LLC</span>
          <span>trustnetgain.com</span>
        </footer>
      </div>
    </>
  );
}
