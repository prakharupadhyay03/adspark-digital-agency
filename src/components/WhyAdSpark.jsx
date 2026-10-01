import React from 'react';
import { WHY_ADSPARK } from '../data/agencyData';

export default function WhyAdSpark() {
  return (
    <section className="editorial-section why-editorial-section">
      <div className="container">
        <div className="why-split-grid">
          {/* Left Column: Bold Editorial Title */}
          <div className="why-left-title-column">
            <div className="eyebrow-label">OUR DISTINCT POSITION</div>
            <h2 className="why-hero-text">
              WHY<br />
              <span className="serif-italic">ADSPARK?</span>
            </h2>
            <p className="why-lead-paragraph">
              We reject the false dichotomy between pure creative vanity and uninspired performance grinding. We believe the biggest commercial growth happens at their intersection.
            </p>
          </div>

          {/* Right Column: Typographic Principles List */}
          <div className="why-right-list-column">
            {WHY_ADSPARK.map((item, idx) => (
              <div key={item.title} className="why-principle-item">
                <div className="principle-top-row">
                  <span className="principle-index">0{idx + 1}</span>
                  <h3 className="principle-name">{item.title}</h3>
                </div>
                <p className="principle-explanation">{item.text}</p>
                <div className="hairline-divider" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
