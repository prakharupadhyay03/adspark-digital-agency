import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { EDITORIAL_SERVICES } from '../data/agencyData';

export default function Services({ onSelectService }) {
  const [activeHoverId, setActiveHoverId] = useState(null);
  const [expandedRow, setExpandedRow] = useState('01'); // First one expanded by default

  const toggleRow = (num) => {
    setExpandedRow((prev) => (prev === num ? null : num));
  };

  return (
    <section id="services" className="editorial-section services-editorial-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-section-header">
          <div>
            <div className="eyebrow-label">DISCIPLINES & CAPABILITIES</div>
            <h2 className="editorial-section-title">
              WHAT WE DO FOR<br />
              <span className="serif-italic">AMBITIOUS BRANDS.</span>
            </h2>
          </div>
          <p className="services-header-aside">
            We don't do generic marketing tasks. We configure custom creative and growth teams that own the entire trajectory from brand perception to performance scaling.
          </p>
        </div>

        {/* Vertical Editorial List */}
        <div className="editorial-services-list">
          {EDITORIAL_SERVICES.map((service) => {
            const isHovered = activeHoverId === service.number;
            const isExpanded = expandedRow === service.number;

            return (
              <div 
                key={service.number}
                className={`editorial-service-row ${isHovered ? 'hovered' : ''} ${isExpanded ? 'expanded' : ''}`}
                onMouseEnter={() => setActiveHoverId(service.number)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                {/* Main Row Header (Clickable) */}
                <div 
                  className="service-row-header"
                  onClick={() => toggleRow(service.number)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleRow(service.number);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="row-left">
                    <span className="row-number">{service.number}</span>
                    <h3 className="row-title">{service.title}</h3>
                  </div>

                  <div className="row-right">
                    <span className="row-subtitle-label">{service.subtitle}</span>
                    <div className="row-toggle-badge">
                      {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Editorial Content Drawer */}
                <div className={`service-row-drawer ${isExpanded ? 'open' : ''}`}>
                  <div className="drawer-inner-grid">
                    <div className="drawer-description-block">
                      <p className="drawer-desc-text">{service.description}</p>
                      
                      <div className="drawer-deliverables">
                        <span className="deliverables-heading">CORE DELIVERABLES:</span>
                        <ul className="deliverables-list">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="deliverable-item">
                              <span className="bullet-dash">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="drawer-actions">
                        <button 
                          onClick={() => onSelectService(service)}
                          className="btn-editorial btn-editorial-solid btn-sm"
                        >
                          <span>Explore Scope & Details</span>
                          <ArrowUpRight size={14} />
                        </button>
                        <span className="drawer-timing-tag">{service.detailNote}</span>
                      </div>
                    </div>

                    {/* Editorial Still Thumbnail */}
                    <div className="drawer-visual-preview">
                      <div className="preview-image-wrap">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="service-preview-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
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
