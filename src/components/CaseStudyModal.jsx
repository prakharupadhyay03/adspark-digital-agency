import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ campaign, onClose, onStartProject }) {
  useEffect(() => {
    if (!campaign) return;

    // Lock background body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [campaign, onClose]);

  if (!campaign) return null;

  return (
    <div 
      className="editorial-modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-case-heading"
    >
      <div className="editorial-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Pinned Sticky Header Bar: Close Button Always Visible */}
        <div className="modal-header-pinned">
          <div className="modal-header-meta">
            <span className="modal-eyebrow-text">{campaign.number} • {campaign.category}</span>
            <h2 id="modal-case-heading" className="modal-pinned-title">{campaign.title}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="modal-pinned-close-btn" 
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="modal-content-area">
          {/* Clean Contained Modal Media */}
          <div className="modal-media">
            <img 
              src={campaign.posterUrl || campaign.image} 
              alt={campaign.title} 
            />
            <div className="modal-media-caption">
              <span>GLOBAL CAMPAIGN DIRECTION • ART DIRECTION & PAID ACQUISITION</span>
            </div>
          </div>

          {/* Subtitle & Core Narrative */}
          <div className="modal-narrative-section">
            <h3 className="modal-narrative-headline">
              "{campaign.headline}"
            </h3>
            
            <div className="modal-copy-block">
              <h4 className="modal-section-label">THE STRATEGIC CHALLENGE</h4>
              <p>
                Entering a crowded consumer market dominated by legacy heritage fragrance houses, the brand required an uncompromising visual vocabulary that positioned organic fragrance as an architectural design discipline rather than a commodity cosmetic.
              </p>
            </div>

            <div className="modal-copy-block">
              <h4 className="modal-section-label">THE CREATIVE EXECUTION</h4>
              <p>{campaign.description}</p>
            </div>

            {/* Performance Benchmarks Delivered */}
            <div className="modal-benchmarks-box">
              <span className="benchmarks-caption">MEASURABLE COMMERCIAL IMPACT</span>
              <div className="modal-benchmarks-grid">
                {campaign.metrics && campaign.metrics.map((m, idx) => (
                  <div key={idx} className="benchmark-cell">
                    <span className="benchmark-val">{m.value}</span>
                    <span className="benchmark-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial Quote */}
            {campaign.quote && (
              <blockquote className="modal-testimonial-quote">
                <p className="quote-body">"{campaign.quote}"</p>
                {campaign.clientAuthor && (
                  <cite className="quote-author">— {campaign.clientAuthor}</cite>
                )}
              </blockquote>
            )}
          </div>

          {/* Action Row at Bottom */}
          <div className="modal-action-row">
            <button 
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="btn-modal-primary-cta"
            >
              <span>DISCUSS A SIMILAR CAMPAIGN</span>
              <ArrowRight size={15} />
            </button>
            <button 
              onClick={onClose} 
              className="btn-modal-secondary-cta"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
