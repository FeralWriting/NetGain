// shared.js — shared across all pages
export const CALENDLY_URL = 'https://calendly.com/yourlink'; // ← swap before deploy

export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact',  href: '/contact' },
];

export function navHTML() {
  const links = NAV_LINKS.map(({ label, href }) => {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const normalizedHref = href.replace(/\/$/, '') || '/';
    const isActive = path === normalizedHref ? ' class="active"' : '';
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

export function footerHTML() {
  return `
    <div class="page">
      <footer class="site-footer">
        <span>&copy; 2025 TrustNetGain &middot; NetGain, LLC</span>
        <span>trustnetgain.com</span>
      </footer>
    </div>`;
}

export const CHECK_ICON = `<svg viewBox="0 0 12 12" aria-hidden="true"><polyline points="2 6 5 9 10 3"/></svg>`;
export const STAR_ICON  = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
