import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function About({ onStartProject }) {
  return (
    <section id="about" className="editorial-section about-editorial-section">
      <div className="container">
        {/* Large Editorial Manifesto Statement */}
        <div className="about-statement-wrapper">
          <div className="eyebrow-label">STUDIO PHILOSOPHY</div>
          <h2 className="about-large-statement">
            GOOD ADVERTISING DOESN'T INTERRUPT.<br />
            <span className="serif-italic">IT EARNS ATTENTION.</span>
          </h2>
        </div>

        {/* Asymmetrical 2-Column Composition */}
        <div className="about-editorial-grid">
          {/* Left: Concise Narrative & Studio POV */}
          <div className="about-editorial-narrative">
            <p className="narrative-lead">
              We live in a culture saturated with generic marketing, automated noise, and templated software. When everything looks and sounds the same, conformity is the most expensive mistake a brand can make.
            </p>

            <p className="narrative-body">
              At AdSpark, we believe true commercial growth starts with a distinct point of view. We combine rigorous consumer research and quantitative media buying with uncompromising creative art direction. We build campaigns people talk about, remember, and buy from.
            </p>

            <div className="about-principles-compact">
              <div className="compact-principle">
                <span className="p-num">01</span>
                <div>
                  <strong>Creative as Targeting:</strong> In algorithmic ad platforms, compelling creative is the ultimate differentiator.
                </div>
              </div>
              <div className="compact-principle">
                <span className="p-num">02</span>
                <div>
                  <strong>Commercial Rigor:</strong> We optimize for downstream revenue and contribution margin, never vanity metrics.
                </div>
              </div>
              <div className="compact-principle">
                <span className="p-num">03</span>
                <div>
                  <strong>Direct Senior Focus:</strong> You work directly with experienced creative directors and growth strategists.
                </div>
              </div>
            </div>

            <div className="about-narrative-action">
              <button onClick={onStartProject} className="btn-editorial-link">
                <span>Start a Project With Our Studio</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Large Editorial Still Photography */}
          <div className="about-editorial-image-column">
            <div className="about-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" 
                alt="AdSpark Creative Direction and Studio Atmosphere"
                className="about-still-img"
                loading="lazy"
              />
              <div className="about-image-caption">
                <span className="cap-label">ATELIER NINE CAMPAIGN</span>
                <span className="cap-sub">Photographed for Selected Work Collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
