import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_CAMPAIGN } from '../data/agencyData';

export default function FeaturedWork({ onOpenCaseStudy }) {
  return (
    <section id="work" className="editorial-section featured-work-section">
      <div className="container">
        {/* Section Top Header */}
        <div className="featured-work-header">
          <div>
            <div className="eyebrow-label">SELECTED WORK / CASE STUDY</div>
            <h2 className="editorial-section-title">
              CRAFTED FOR<br />
              <span className="serif-italic">CULTURAL IMPACT.</span>
            </h2>
          </div>
          <div className="featured-header-meta">
            <span className="meta-category-badge">{FEATURED_CAMPAIGN.category}</span>
            <span className="meta-year">{FEATURED_CAMPAIGN.year}</span>
          </div>
        </div>

        {/* Large Visual Case Study Showcase */}
        <div className="case-study-hero-card">
          <div className="case-study-image-wrapper">
            <img 
              src={FEATURED_CAMPAIGN.image} 
              alt={FEATURED_CAMPAIGN.title}
              className="case-study-main-image"
              loading="lazy"
            />
            <div className="case-study-floating-tag">
              <span className="tag-dot"></span>
              <span>FEATURED CAMPAIGN 01</span>
            </div>
          </div>

          <div className="case-study-content-grid">
            <div className="case-study-left">
              <span className="campaign-project-title">{FEATURED_CAMPAIGN.title}</span>
              <h3 className="campaign-subtitle">{FEATURED_CAMPAIGN.subtitle}</h3>
              <p className="campaign-desc">{FEATURED_CAMPAIGN.description}</p>

              <blockquote className="campaign-quote">
                "{FEATURED_CAMPAIGN.quote}"
                <cite className="quote-author">— {FEATURED_CAMPAIGN.clientAuthor}</cite>
              </blockquote>

              <div className="case-study-action">
                <button 
                  onClick={() => onOpenCaseStudy(FEATURED_CAMPAIGN)}
                  className="btn-editorial btn-editorial-solid"
                  id="view-case-study-btn"
                >
                  <span>View Case Study Breakdown</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Campaign Impact Metrics Column */}
            <div className="case-study-metrics-column">
              <div className="metrics-column-header">
                <span>VERIFIED CAMPAIGN IMPACT</span>
                <span className="metrics-disclosure">*Sample Demo Data</span>
              </div>

              <div className="metrics-list">
                {FEATURED_CAMPAIGN.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-row-item">
                    <span className="metric-row-label">{metric.label}</span>
                    <span className="metric-row-val">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="case-study-footnote">
                Executed across Meta Advantage+, Google Search, and bespoke editorial video production.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
