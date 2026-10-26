import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_META } from '../data/agencyData';

export default function Footer({ onOpenLegal }) {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="compact-footer">
      <div className="container">
        <div className="footer-main-row">
          {/* Brand Left */}
          <div className="footer-brand-side">
            <h2 className="footer-title">{STUDIO_META.name}</h2>
            <p className="footer-tagline-text">{STUDIO_META.tagline}</p>
          </div>

          {/* Navigation Middle */}
          <div className="footer-nav-side">
            <span className="footer-nav-label">NAVIGATION</span>
            <ul className="footer-nav-links">
              <li><button onClick={() => handleNavClick('hero')} className="footer-link-action">Home</button></li>
              <li><button onClick={() => handleNavClick('work')} className="footer-link-action">Work</button></li>
              <li><button onClick={() => handleNavClick('services')} className="footer-link-action">Services</button></li>
              <li><button onClick={() => handleNavClick('solutions')} className="footer-link-action">Solutions</button></li>
              <li><button onClick={() => handleNavClick('faq')} className="footer-link-action">FAQ</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="footer-link-action">Contact</button></li>
            </ul>
          </div>

          {/* Social Right */}
          <div className="footer-social-side">
            <span className="footer-nav-label">SOCIAL</span>
            <ul className="footer-social-list">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                  <span>X (Twitter)</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-divider dark" style={{ margin: '36px 0 24px 0' }} />

        {/* Bottom Copyright & Legal Line */}
        <div className="footer-bottom-strip">
          <span>© 2026 AdSpark. Independent Creative & Digital Studio.</span>
          <div className="footer-legal-inline">
            <button onClick={() => onOpenLegal('privacy')} className="legal-link-btn">Privacy</button>
            <span>/</span>
            <button onClick={() => onOpenLegal('terms')} className="legal-link-btn">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
