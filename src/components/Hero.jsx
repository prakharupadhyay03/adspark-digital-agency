import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import Hero3D from './Hero3D';
import { STUDIO_META } from '../data/agencyData';

export default function Hero({ onStartProject }) {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('work');
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
    <section id="hero" className="compact-hero-section">
      <div className="container hero-split-container">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-text-content">
          <div className="hero-eyebrow-pill">
            <span className="eyebrow-dash"></span>
            <span>{STUDIO_META.heroLabel}</span>
          </div>

          <h1 className="hero-giant-title">
            <span>{STUDIO_META.heroTitle[0]}</span>
            <span className="serif-italic-brand">{STUDIO_META.heroTitle[1]}</span>
            <span>{STUDIO_META.heroTitle[2]}</span>
          </h1>

          <p className="hero-subtext-para">
            {STUDIO_META.heroSubtitle}
          </p>

          <div className="hero-cta-buttons-row">
            <button 
              onClick={onStartProject}
              className="btn-hero-primary"
              id="hero-start-cta"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={15} />
            </button>

            <a 
              href="#work" 
              onClick={handleScrollToWork}
              className="btn-hero-secondary"
            >
              <span>VIEW OUR WORK</span>
              <ArrowDownRight size={15} />
            </a>
          </div>

          <div className="hero-quick-proof">
            <span className="proof-tag">SELECTED CAMPAIGNS • GLOBAL MARKETS</span>
          </div>
        </div>

        {/* Right Column: 3D Centerpiece + Video Badge */}
        <div className="hero-visual-centerpiece">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
