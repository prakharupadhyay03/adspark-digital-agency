import React from 'react';
import { BRAND_TAGS, SELECTED_CLIENTS } from '../data/agencyData';

export default function BrandStrip() {
  return (
    <div className="editorial-brand-strip">
      <div className="container">
        {/* Disciplines Running Strip */}
        <div className="disciplines-strip">
          {BRAND_TAGS.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="discipline-item">{tag}</span>
              {idx < BRAND_TAGS.length - 1 && <span className="discipline-dot">/</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="hairline-divider" />

        {/* Selected Work / Concept Projects */}
        <div className="concept-projects-bar">
          <span className="concept-label">SELECTED WORK & CONCEPT DIRECTORY:</span>
          <div className="concept-list">
            {SELECTED_CLIENTS.map((client, idx) => (
              <div key={client.name} className="concept-item">
                <span className="concept-idx">0{idx + 1}</span>
                <span className="concept-name">{client.name}</span>
                <span className="concept-cat">({client.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
