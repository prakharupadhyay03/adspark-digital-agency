import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SOLUTIONS } from '../data/agencyData';

export default function Solutions({ onSelectSolution }) {
  return (
    <section id="solutions" className="compact-section solutions-section">
      <div className="container">
        {/* Header */}
        <div className="section-eyebrow">MODULAR ENGAGEMENTS</div>
        <h2 className="section-title-clean" style={{ marginBottom: '40px' }}>SOLUTIONS</h2>

        {/* 3 Editorial Horizontal/Vertical Blocks */}
        <div className="solutions-editorial-blocks">
          {SOLUTIONS.map((sol) => (
            <div 
              key={sol.number}
              className="solution-block-item"
              onClick={() => onSelectSolution(sol)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSolution(sol);
                }
              }}
            >
              <div className="solution-block-top">
                <span className="sol-num">{sol.number}</span>
                <span className="sol-arrow-corner">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <h3 className="sol-heading">{sol.title}</h3>
              <p className="sol-tagline">{sol.tagline}</p>
              <p className="sol-description">{sol.description}</p>

              <div className="sol-deliverables-strip">
                {sol.deliverables.map((d, idx) => (
                  <span key={idx} className="sol-pill-tag">{d}</span>
                ))}
              </div>

              <div className="sol-explore-cta">
                <span>EXPLORE {sol.title} →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
