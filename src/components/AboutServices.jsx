import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

export default function AboutServices({ onSelectService }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleRow = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="compact-section about-services-section">
      <div className="container">
        {/* Top Editorial Statement */}
        <div className="about-services-top">
          <div className="section-eyebrow">ABOUT & CAPABILITIES</div>
          <h2 className="about-statement-headline">
            Strategy meets creative to build<br />
            <span className="serif-italic-editorial">brands people remember.</span>
          </h2>
          <p className="about-statement-desc">
            We don't separate creative from performance. In algorithmic advertising, compelling art direction is the ultimate targeting mechanism.
          </p>
        </div>

        <div className="hairline-divider" />

        {/* 5 Compact Service Rows */}
        <div className="compact-services-list">
          {SERVICES.map((srv, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={srv.number}
                className={`compact-service-row ${isExpanded ? 'expanded' : ''}`}
              >
                <div 
                  className="service-row-main"
                  onClick={() => toggleRow(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleRow(idx);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="service-row-left">
                    <span className="service-number">{srv.number}</span>
                    <h3 className="service-name">{srv.name}</h3>
                  </div>

                  <div className="service-row-center">
                    <p className="service-summary-text">{srv.summary}</p>
                  </div>

                  <div className="service-row-right">
                    <span 
                      className="service-arrow-box" 
                      aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
                    >
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </div>
                </div>

                {/* Inline Drawer with Clean Editorial Inclusions */}
                <div className={`service-drawer-wrapper ${isExpanded ? 'open' : ''}`}>
                  <div className="service-drawer-content">
                    <div className="service-inclusions-line">
                      <span className="inclusions-label">INCLUDES</span>
                      <span className="inclusions-separator">—</span>
                      <span className="inclusions-text">
                        {srv.deliverables.join(' · ')}
                      </span>
                    </div>

                    <button 
                      onClick={() => onSelectService(srv)}
                      className="btn-inquire-service"
                    >
                      <span>Inquire About {srv.name}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="hairline-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
