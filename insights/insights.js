// insights/insights.js — TrustNetGain Insights Page
import { navHTML, footerHTML, CALENDLY_URL } from '../shared.js';

const ARTICLES = [
  {
    category: 'AI Governance',
    title: "Hallucinations Are Permanent. Your Risk Framework Probably Isn't.",
    date: 'April 2025',
    readTime: '5 min read',
    type: 'commentary',
    excerpt: "OpenAI's landmark study confirmed what engineers already knew: AI hallucinations aren't a bug to be patched — they're a mathematical property of how large language models work. The training process rewards confident output over admitted uncertainty. That's not changing. What needs to change is how enterprises govern around it.",
    commentary: "The Computerworld piece covering this research does a solid job of conveying the finding but undersells the enterprise implication. The recommendation to shift 'from prevention to risk containment' is correct — but incomplete. Containment without instrumentation is just hoping. Every autonomous AI system you deploy needs confidence scoring, escalation logic, and audit trails. Not as aspirational governance — as table stakes.",
    originalTitle: "OpenAI admits AI hallucinations are mathematically inevitable",
    originalSource: "Computerworld",
    originalUrl: "https://www.computerworld.com/article/4059383/openai-admits-ai-hallucinations-are-mathematically-inevitable-not-just-engineering-flaws.html",
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  },
  {
    category: 'AI Strategy',
    title: "Stanford Said the Quiet Part Loud: Nobody Knows the ROI on AI",
    date: 'April 2025',
    readTime: '6 min read',
    type: 'commentary',
    excerpt: "The Stanford HAI AI Index 2025 confirmed that enterprise AI adoption crossed the 78% mark — meaning if you're not using AI, you're not being cautious, you're behind. But buried in the same report: 'There isn't a good understanding of the economic benefit yet. No one agrees on what the ROI is, and no one really knows.' High adoption, uncertain return. That's the actual state of play.",
    commentary: "Stanford's framing is diplomatically balanced. Ours is blunter. The reason nobody knows the ROI is that most organizations are measuring AI adoption (how many tools deployed, how many users active) instead of AI outcomes (what decisions improved, what processes got faster, what errors got caught). You can't manage what you don't instrument. If your AI strategy doesn't include a measurement framework, you're running a very expensive experiment with no hypothesis.",
    originalTitle: "2025 AI Index Report",
    originalSource: "Stanford HAI",
    originalUrl: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
    icon: `<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    category: 'Security',
    title: "AI Doesn't Fail Like People Do — And That's the Problem",
    date: 'March 2025',
    readTime: '5 min read',
    type: 'commentary',
    excerpt: "Cybersecurity expert Bruce Schneier and Harvard's Nathan Sanders published a sharp essay in IEEE Spectrum arguing that AI failure modes are structurally different from human failure modes — different in scale, in predictability, and in the kind of damage they cause. The security frameworks built around human error don't map cleanly onto machine error.",
    commentary: "Schneier and Sanders are right, and the infrastructure world should be paying closer attention. Human errors are local and idiosyncratic — one engineer makes one mistake. AI errors are systematic and simultaneous — the same flaw fires across every instance, every invocation, at scale. If you're using AI in any operational workflow and your incident response playbook still assumes human-scale failure, you have a gap. The playbook needs a 'systemic AI error' scenario that isn't just 'turn it off.'",
    originalTitle: "AI Mistakes Are Way Weirder Than Human Mistakes",
    originalSource: "IEEE Spectrum",
    originalUrl: "https://spectrum.ieee.org/ai-mistakes-schneier",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    category: 'Agentic AI',
    title: "Agentic AI Was Supposed to Arrive in 2025. Here's What Actually Happened.",
    date: 'March 2025',
    readTime: '7 min read',
    type: 'original',
    excerpt: "Every major tech vendor spent 2024 promising that 2025 would be the year autonomous AI agents transformed enterprise operations. The year is here. Agents are real, they work in constrained environments, and they're genuinely useful — but the 'fully automated enterprise' vision is still very much a horizon, not a destination. The gap between demo and deployment remains wide.",
    commentary: null,
    originalTitle: null,
    originalSource: null,
    originalUrl: null,
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
  {
    category: 'Infrastructure',
    title: "The Broadcom Acquisition Hangover: What VMware Customers Should Do Now",
    date: 'March 2025',
    readTime: '8 min read',
    type: 'original',
    excerpt: "Two years into the Broadcom acquisition, the VMware licensing landscape has been restructured, the product roadmap consolidated, and a significant number of enterprise customers are re-evaluating their infrastructure strategy for the first time in a decade. The pressure is real. The options are real. What's missing is clear-eyed analysis that isn't written by a vendor with a migration product to sell.",
    commentary: null,
    originalTitle: null,
    originalSource: null,
    originalUrl: null,
    icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/></svg>`,
  },
  {
    category: 'AI Strategy',
    title: "Inference Got 280x Cheaper. You Should Revisit Every AI Project You Shelved.",
    date: 'February 2025',
    readTime: '5 min read',
    type: 'commentary',
    excerpt: "The Stanford AI Index 2025 buried one of the most consequential data points in AI economics: inference costs dropped 280x between 2022 and 2024. Use cases that were too expensive to build eighteen months ago are now among the highest-ROI opportunities on the table. Most organizations haven't updated their mental models — or their budgets — to reflect this.",
    commentary: "The Libertify analysis of the Stanford report frames this well: 'The moat isn't access to AI anymore — it's proprietary data and domain-specific workflows.' That's exactly right, and it has a direct implication for infrastructure and IT organizations. The competitive advantage in AI has shifted from model access (which is now commodity) to knowing your environment well enough to target automation precisely. That knowledge — of your systems, your data, your workflows — is your actual asset. The question is whether you're using it.",
    originalTitle: "Stanford AI Index Report 2025: Key Findings",
    originalSource: "Stanford HAI / Libertify Analysis",
    originalUrl: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
    icon: `<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  },
  {
    category: 'Security',
    title: "Prompt Injection Is the SQL Injection of the AI Era — And Most Teams Aren't Ready",
    date: 'February 2025',
    readTime: '6 min read',
    type: 'commentary',
    excerpt: "Bruce Schneier and Barath Raghavan published a pointed piece in IEEE Spectrum on prompt injection attacks: the method of tricking LLMs into ignoring safety guardrails by crafting inputs that override system instructions. Their framing is memorable — if a drive-through worker would ignore 'give me the cash drawer' appended to a burger order, why does an LLM comply? Because LLMs don't have common sense. They have statistics.",
    commentary: "Schneier and Raghavan are sounding an alarm that enterprise security teams need to hear, especially those deploying agents with access to internal systems, databases, or APIs. Prompt injection isn't a theoretical vulnerability — it's being actively exploited. The answer isn't to avoid agentic AI; it's to architect it correctly: sandboxed execution environments, constrained tool permissions, human-in-the-loop gates for high-stakes actions. If your agent can send an email or modify a record, it needs guardrails that go beyond the model's own safety training.",
    originalTitle: "Why AI Keeps Falling for Prompt Injection Attacks",
    originalSource: "IEEE Spectrum",
    originalUrl: "https://spectrum.ieee.org/prompt-injection-attack",
    icon: `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    category: 'Agentic AI',
    title: "Building an AI Agent That Earns Its Place: Accountability as Architecture",
    date: 'January 2025',
    readTime: '7 min read',
    type: 'original',
    excerpt: "Autonomous agents that can't explain their decisions, escalate edge cases, or be audited after the fact aren't AI assets — they're liability generators. The governance frameworks for agentic AI are still catching up to the deployment reality. In the meantime, the teams building the right way are treating accountability not as a compliance checkbox but as a core design constraint.",
    commentary: null,
    originalTitle: null,
    originalSource: null,
    originalUrl: null,
    icon: `<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  },
  {
    category: 'Cloud Strategy',
    title: "Hybrid Cloud Is Not a Destination. It's a Discipline.",
    date: 'January 2025',
    readTime: '6 min read',
    type: 'original',
    excerpt: "Organizations that treat hybrid cloud as a state to achieve — rather than an ongoing operational model — consistently underestimate the governance, cost, and tooling overhead that comes with it. Hybrid cloud done right is a continuous management problem. Hybrid cloud done wrong is two environments, neither of which you fully control, and a FinOps bill that surprises you quarterly.",
    commentary: null,
    originalTitle: null,
    originalSource: null,
    originalUrl: null,
    icon: `<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  },
  {
    category: 'AI Governance',
    title: "Yale's Agentic AI Governance Framework Is Worth Reading. Here's the Short Version.",
    date: 'December 2024',
    readTime: '5 min read',
    type: 'commentary',
    excerpt: "Yale's Chief Executive Leadership Institute published a cross-industry governance framework for agentic AI, identifying eight governance variables — transparency, accountability, bias, data privacy, decision reversibility, stakeholder impact scope, regulatory prescription, and structural governability — and mapping them across banking, healthcare, retail, and supply chain.",
    commentary: "The framework is well-constructed and the eight-variable model is a useful forcing function for organizations that haven't mapped their AI governance posture yet. Our practical note: 'decision reversibility' is the variable that gets ignored most often in deployment. Teams focus on accuracy and bias because those are measurable before launch. Reversibility only matters when something goes wrong — which is exactly when you discover whether you thought about it. Before any autonomous agent goes to production, the team should be able to answer: if this agent takes an action based on bad data, can we undo it? If the answer isn't immediate and clear, the architecture needs work.",
    originalTitle: "Yale CELI Agentic AI Governance Framework",
    originalSource: "Yale Chief Executive Leadership Institute",
    originalUrl: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
    icon: `<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  },
  {
    category: 'Delivery',
    title: "Why Your MOP Gets Read at 2am — And Why That Means It Matters",
    date: 'December 2024',
    readTime: '5 min read',
    type: 'original',
    excerpt: "Method of Procedure documents are treated as delivery afterthoughts on most programs. They're written last, reviewed quickly, and approved without scrutiny. They're also the document that gets read at 2am during a failed change window, by someone who wasn't in the planning meeting and needs to know exactly what to do next. What a real MOP looks like, and why it's worth getting right before the maintenance window opens.",
    commentary: null,
    originalTitle: null,
    originalSource: null,
    originalUrl: null,
    icon: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  },
  {
    category: 'AI Strategy',
    title: "The Honest Case for Starting Small: One Automation Done Well Beats Ten Done Poorly",
    date: 'November 2024',
    readTime: '5 min read',
    type: 'original',
    excerpt: "Every AI vendor wants to sell you a platform transformation. What most organizations actually need is one well-scoped, well-instrumented automation that works reliably, produces measurable output, and builds the internal confidence to go further. How to identify that first automation target, what success looks like, and why it matters more than your AI strategy deck.",
    commentary: null,
    originalTitle: null,
    originalSource: null,
    originalUrl: null,
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
];

const CATEGORIES = ['All', 'AI Strategy', 'AI Governance', 'Agentic AI', 'Infrastructure', 'Cloud Strategy', 'Security', 'Delivery'];

function articleCardHTML({ category, title, date, readTime, type, excerpt, commentary, originalTitle, originalSource, originalUrl, icon }) {
  const commentaryBlock = commentary ? `
    <div style="background:rgba(0,212,168,0.06);border:1px solid rgba(0,212,168,0.2);border-radius:8px;padding:1rem 1.25rem;margin-top:0.75rem;">
      <p style="font-size:0.78rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--teal);margin-bottom:0.5rem;">Net Gain Take</p>
      <p style="font-size:0.85rem;color:var(--white-dim);line-height:1.65;margin:0;">${commentary}</p>
    </div>` : '';

  const sourceBlock = originalUrl ? `
    <a href="${originalUrl}" target="_blank" rel="noreferrer"
       style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.75rem;color:var(--white-muted);text-decoration:none;border:1px solid var(--navy-border);padding:0.3rem 0.7rem;border-radius:4px;transition:color 0.2s,border-color 0.2s;margin-top:0.75rem;"
       onmouseover="this.style.color='var(--teal)';this.style.borderColor='var(--teal)'"
       onmouseout="this.style.color='var(--white-muted)';this.style.borderColor='var(--navy-border)'">
      <svg viewBox="0 0 24 24" style="width:11px;height:11px;stroke:currentColor;fill:none;stroke-width:2;">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      Original: ${originalTitle} — ${originalSource}
    </a>` : '';

  const typeBadge = type === 'commentary'
    ? `<span style="font-size:0.68rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,180,0,0.85);border:1px solid rgba(255,180,0,0.25);background:rgba(255,180,0,0.06);padding:0.2rem 0.5rem;border-radius:4px;">Commentary</span>`
    : `<span style="font-size:0.68rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--teal);border:1px solid rgba(0,212,168,0.2);background:var(--teal-glow);padding:0.2rem 0.5rem;border-radius:4px;">Original</span>`;

  return `
    <div class="insight-card" data-category="${category}">
      <div class="insight-thumb">${icon}</div>
      <div class="insight-body">
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
          <span class="insight-category">${category}</span>
          ${typeBadge}
        </div>
        <h3>${title}</h3>
        <p>${excerpt}</p>
        ${commentaryBlock}
        <div class="insight-meta">
          <span class="insight-date">${date} &middot; ${readTime}</span>
          ${sourceBlock}
        </div>
      </div>
    </div>`;
}

document.getElementById('app').innerHTML = `
  ${navHTML()}
  <main>
    <div class="page">

      <section class="page-hero">
        <p class="eyebrow">Insights</p>
        <h1>Perspectives from<br><em>the work.</em></h1>
        <p>Practitioner writing on infrastructure, AI adoption, and what it actually takes to deliver. Some posts are ours. Some are responses to things worth responding to. All of it is direct.</p>
      </section>

      <section class="section">
        <div class="section-label">
          <span class="section-num">01</span>
          <h2 class="section-title">Latest</h2>
        </div>

        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:2.5rem;align-items:center;">
          <span style="font-size:0.78rem;color:var(--white-muted);margin-right:0.5rem;">Filter:</span>
          ${CATEGORIES.map((cat, i) => `
            <button
              onclick="filterArticles('${cat}')"
              id="filter-${cat.replace(/\s+/g,'-').replace(/\//g,'')}"
              style="background:${i === 0 ? 'var(--teal)' : 'transparent'};
                     color:${i === 0 ? 'var(--navy)' : 'var(--white-dim)'};
                     border:1px solid ${i === 0 ? 'var(--teal)' : 'var(--navy-border)'};
                     padding:0.4rem 1rem;border-radius:6px;font-family:'DM Sans',sans-serif;
                     font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s;"
            >${cat}</button>`).join('')}
        </div>

        <div style="display:flex;gap:0.75rem;margin-bottom:2rem;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.75rem;color:var(--white-muted);">
            <span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:var(--teal-glow);border:1px solid rgba(0,212,168,0.3);"></span>
            Original posts
          </div>
          <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.75rem;color:var(--white-muted);">
            <span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(255,180,0,0.06);border:1px solid rgba(255,180,0,0.25);"></span>
            Commentary on external articles (linked to originals)
          </div>
        </div>

        <div class="insights-grid" id="articles-grid">
          ${ARTICLES.map(articleCardHTML).join('')}
        </div>
      </section>

      <section class="cta-band">
        <h2>Have a topic<br>you want us to <em>dig into?</em></h2>
        <p>Infrastructure decision, AI investment, program that's off track — if it's worth writing about, it's worth a conversation first.</p>
        <div class="cta-actions">
          <a href="${CALENDLY_URL}" class="btn-primary" target="_blank" rel="noreferrer">Schedule a Call</a>
          <a href="/contact" class="btn-ghost">Send a Message</a>
        </div>
      </section>

    </div>
  </main>
  ${footerHTML()}
`;

window.filterArticles = function(category) {
  document.querySelectorAll('.insight-card').forEach(card => {
    card.style.display = (category === 'All' || card.dataset.category === category) ? 'flex' : 'none';
  });
  document.querySelectorAll('[id^="filter-"]').forEach(btn => {
    const btnCategory = btn.textContent.trim();
    const isActive = btnCategory === category;
    btn.style.background  = isActive ? 'var(--teal)' : 'transparent';
    btn.style.color       = isActive ? 'var(--navy)' : 'var(--white-dim)';
    btn.style.borderColor = isActive ? 'var(--teal)' : 'var(--navy-border)';
  });
};
