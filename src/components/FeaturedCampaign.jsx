import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_CAMPAIGN } from '../data/agencyData';

export default function FeaturedCampaign({ onOpenCaseStudy }) {
  return (
    <section id="work" className="compact-section featured-campaign-section">
      <div className="container">
        {/* Metadata Above Media: Editorial Hierarchy */}
        <div className="campaign-editorial-header">
          <div className="section-eyebrow">FEATURED WORK</div>
          <div className="campaign-title-meta-row">
            <div className="campaign-title-block">
              <span className="campaign-index-tag">{FEATURED_CAMPAIGN.number}</span>
              <h2 className="campaign-main-title">{FEATURED_CAMPAIGN.title}</h2>
            </div>
            <div className="campaign-disciplines-tag">
              <span>{FEATURED_CAMPAIGN.category}</span>
            </div>
          </div>
          <p className="campaign-headline-editorial">"{FEATURED_CAMPAIGN.headline}"</p>
        </div>

        {/* Controlled 16:9 Aspect Ratio Media Screen */}
        <div 
          className="campaign-media-wrapper"
          onClick={() => onOpenCaseStudy(FEATURED_CAMPAIGN)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenCaseStudy(FEATURED_CAMPAIGN);
            }
          }}
          aria-label={`View ${FEATURED_CAMPAIGN.title} campaign details`}
        >
          <div className="campaign-media-screen">
            <video
              className="campaign-video-player"
              autoPlay
              muted
              loop
              playsInline
              poster={FEATURED_CAMPAIGN.posterUrl}
            >
              <source src={FEATURED_CAMPAIGN.videoUrl} type="video/mp4" />
              <img 
                src={FEATURED_CAMPAIGN.posterUrl} 
                alt={FEATURED_CAMPAIGN.title}
                className="campaign-fallback-img" 
              />
            </video>

            <div className="campaign-badge-clean">
              <span className="badge-live-pulse" />
              <span>LIVE CAMPAIGN</span>
            </div>

            {/* Subtle View Campaign Hover Indicator */}
            <div className="campaign-hover-indicator" aria-hidden="true">
              <span>VIEW CAMPAIGN</span>
              <ArrowRight size={13} />
            </div>
          </div>
        </div>

        {/* Clean Metrics & Action Below Media */}
        <div className="campaign-footer-bar">
          <div className="campaign-metrics-row">
            {FEATURED_CAMPAIGN.metrics.map((m, idx) => (
              <div key={idx} className="campaign-metric-item">
                <span className="metric-number-display">{m.value}</span>
                <span className="metric-label-clean">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="campaign-action-cell">
            <button 
              onClick={() => onOpenCaseStudy(FEATURED_CAMPAIGN)}
              className="btn-view-campaign-action"
              id="featured-campaign-view-btn"
            >
              <span>VIEW CAMPAIGN</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
