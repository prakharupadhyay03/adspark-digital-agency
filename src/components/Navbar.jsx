import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onStartProject }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on click outside and on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        if (toggleBtnRef.current) {
          toggleBtnRef.current.focus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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

        {/* Center Links (Desktop) */}
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

        {/* Right CTA & Mobile Toggle */}
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
            ref={toggleBtnRef}
            type="button" 
            className="hamburger-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Compact Premium Mobile Dropdown Panel */}
      <nav 
        ref={menuRef}
        id="mobile-nav-panel"
        className={`compact-mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <ul className="mobile-dropdown-list">
          {NAV_LINKS.map((link, idx) => (
            <li key={link.label} className="mobile-dropdown-item">
              <a 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-dropdown-link"
              >
                <span className="mobile-dropdown-num">0{idx + 1}</span>
                <span className="mobile-dropdown-text">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-dropdown-cta-wrap">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onStartProject();
            }}
            className="btn-mobile-dropdown-cta"
          >
            <span>START A PROJECT</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>
    </header>
  );
}
