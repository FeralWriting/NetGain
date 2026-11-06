// contact/contact.js — TrustNetGain Contact Page
import { navHTML, footerHTML, CALENDLY_URL } from '../shared.js';

document.getElementById('app').innerHTML = `
  ${navHTML()}
  <main>
    <div class="page">

      <section class="page-hero">
        <p class="eyebrow">Contact</p>
        <h1>Let's start with<br><em>the real problem.</em></h1>
        <p>No intake forms that go nowhere. Book a call directly or send a message — we respond to every serious inquiry within one business day.</p>
      </section>

      <!-- CONTACT SPLIT -->
      <section class="section">
        <div class="contact-row">

          <!-- LEFT: details + Calendly embed -->
          <div class="contact-left">
            <h2>Book a<br><em>discovery call.</em></h2>
            <p>A 30-minute call costs nothing and usually tells both parties whether there's a fit worth pursuing. No pitch deck, no pre-packaged agenda.</p>
            <div class="contact-details" style="margin-bottom:2rem;">
              <div class="contact-detail">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>hello@trustnetgain.com</span>
              </div>
              <div class="contact-detail">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Response within 1 business day</span>
              </div>
            </div>

            <!-- Calendly inline embed -->
            <div
              id="calendly-embed"
              style="min-width:280px;height:520px;border-radius:10px;overflow:hidden;border:1px solid var(--navy-border);background:var(--navy-card);"
            >
              <!-- Calendly inline widget — loads after script below -->
              <div class="calendly-inline-widget"
                data-url="${CALENDLY_URL}?hide_gdpr_banner=1&background_color=131d35&text_color=f0f4ff&primary_color=00d4a8"
                style="min-width:280px;height:520px;">
              </div>
            </div>
          </div>

          <!-- RIGHT: contact form -->
          <div>
            <div class="contact-form" id="contact-form-wrapper">
              <div class="section-label" style="margin-bottom:1.5rem;">
                <span class="section-num">or</span>
                <h2 class="section-title" style="font-size:1.1rem;">Send a message</h2>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="fname">First Name</label>
                  <input type="text" id="fname" placeholder="Jane" autocomplete="given-name" />
                </div>
                <div class="form-group">
                  <label for="lname">Last Name</label>
                  <input type="text" id="lname" placeholder="Smith" autocomplete="family-name" />
                </div>
              </div>
              <div class="form-group">
                <label for="email">Work Email</label>
                <input type="email" id="email" placeholder="jane@company.com" autocomplete="email" />
              </div>
              <div class="form-group">
                <label for="company">Company</label>
                <input type="text" id="company" placeholder="Acme Corp" autocomplete="organization" />
              </div>
              <div class="form-group">
                <label for="interest">Area of Interest</label>
                <select id="interest">
                  <option value="" disabled selected>Select one...</option>
                  <option>AI Consulting &amp; Autonomous Agents</option>
                  <option>VMware / Broadcom Infrastructure</option>
                  <option>Cloud Infrastructure Advisory</option>
                  <option>Technical Program Execution</option>
                  <option>Operational Efficiency &amp; Process AI</option>
                  <option>AI Readiness Assessment</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">What's the situation?</label>
                <textarea id="message" placeholder="Brief description of your environment, challenge, or what you're trying to accomplish..."></textarea>
              </div>
              <div class="form-group">
                <label for="timeline">Timeline</label>
                <select id="timeline">
                  <option value="" disabled selected>When are you looking to engage?</option>
                  <option>Immediately — I have an active need</option>
                  <option>Within 30 days</option>
                  <option>Within 90 days</option>
                  <option>Planning for next quarter</option>
                  <option>Exploratory — no set timeline</option>
                </select>
              </div>
              <div class="form-submit">
                <button class="btn-primary" style="width:100%;text-align:center;" onclick="handleSubmit()">Send Message</button>
              </div>
              <p style="font-size:0.75rem;color:var(--white-muted);margin-top:0.75rem;line-height:1.5;">
                Your information is used only to respond to your inquiry.
                We don't sell data, run newsletters without consent, or add you to anything you didn't ask for.
              </p>
              <p id="form-notice" style="font-size:0.72rem;color:rgba(255,180,0,0.65);margin-top:0.5rem;display:none;">
                ⚠ Form endpoint not yet connected — wire to Formspree, Netlify Forms, or your own API before launch.
              </p>
            </div>

            <div id="form-success" style="display:none;background:var(--navy-card);border:1px solid rgba(0,212,168,0.3);border-radius:12px;padding:2.5rem;text-align:center;">
              <div style="width:48px;height:48px;border-radius:50%;background:var(--teal-muted);border:1px solid var(--teal-dim);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;">
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:var(--teal);fill:none;stroke-width:2.5;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style="font-family:'Barlow',sans-serif;font-size:1.25rem;font-weight:800;color:var(--white);text-transform:uppercase;margin-bottom:0.75rem;">Message Received</h3>
              <p style="font-size:0.9rem;color:var(--white-dim);line-height:1.7;">
                We'll review your message and be in touch within one business day.
                If your situation is time-sensitive, book a call directly using the calendar on the left.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  </main>
  ${footerHTML()}
`;

// Load Calendly widget script after DOM is ready
const calendlyScript = document.createElement('script');
calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
calendlyScript.async = true;
document.body.appendChild(calendlyScript);

// Show the endpoint notice in dev (localhost)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  const notice = document.getElementById('form-notice');
  if (notice) notice.style.display = 'block';
}

window.handleSubmit = function () {
  const fname   = document.getElementById('fname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fname || !email || !message) {
    alert('Please fill in your name, email, and message before submitting.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // ── Wire this to your form endpoint before launch ──────────────────────────
  // Formspree example:
  //   const formData = new FormData();
  //   formData.append('name', fname);
  //   formData.append('email', email);
  //   formData.append('message', message);
  //   fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: formData });
  // ──────────────────────────────────────────────────────────────────────────

  document.getElementById('contact-form-wrapper').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
};
