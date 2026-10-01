import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onStartProject }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`compact-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Left */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')} 
          className="brand-logo-link"
          aria-label="ADSPARK Home"
        >
          <span className="brand-title">ADSPARK</span>
        </a>

        {/* Center Links */}
        <nav className="nav-desktop-links" aria-label="Main Navigation">
          <ul className="nav-items-row">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link-btn"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="nav-cta-wrapper">
          <button 
            onClick={onStartProject}
            className="btn-start-project"
            id="nav-start-project-btn"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight size={14} />
          </button>

          <button 
            type="button" 
            className="hamburger-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Dropdown Menu */}
      <div className={`compact-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-drawer-inner">
          <ul className="mobile-drawer-links">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.label} className="mobile-drawer-item">
                <span className="drawer-num">0{idx + 1}</span>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="drawer-anchor"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-bottom">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="btn-editorial-solid-full"
            >
              START A PROJECT →
            </button>
            <div className="drawer-direct-contact">
              <span>hello@adspark.com</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
