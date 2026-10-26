import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function AgencyPhilosophyModal({ isOpen, onClose, onScrollToContact }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-philosophy-title">
      <div className="modal-content philosophy-modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-block">
          <span className="badge">Our Agency Manifesto</span>
          <h2 id="modal-philosophy-title" className="modal-title">Creative Firepower Meets Quantitative Precision</h2>
          <p className="modal-desc">
            Founded on the conviction that traditional advertising agencies are too slow and pure media agencies are too bland, AdSpark merges both disciplines into a singular, high-velocity growth engine.
          </p>
        </div>

        <div className="manifesto-principles-grid">
          <div className="principle-box">
            <h4 className="principle-title">1. Downstream Impact Over Vanity Impressions</h4>
            <p className="principle-text">
              We don't send weekly reports bragging about cheap clicks or broad reach if they don't produce qualified pipeline, transactions, and verifiable customer lifetime value.
            </p>
          </div>

          <div className="principle-box">
            <h4 className="principle-title">2. Creative As The Primary Growth Lever</h4>
            <p className="principle-text">
              With automated bidding and machine learning taking over platform algorithms, ad creative is the new targeting. We produce high-concept, thumb-stopping creative that commands attention.
            </p>
          </div>

          <div className="principle-box">
            <h4 className="principle-title">3. Radical Operational Transparency</h4>
            <p className="principle-text">
              No black boxes. You own 100% of your advertising accounts, pixels, creative assets, and data. If we ever part ways, every campaign and asset stays in your hands.
            </p>
          </div>
        </div>

        <div className="leadership-stats-strip">
          <div className="l-stat">
            <span className="l-num">120+</span>
            <span className="l-lbl">Global Brands Partnered</span>
          </div>
          <div className="l-stat">
            <span className="l-num">25+</span>
            <span className="l-lbl">Senior Strategists & Creatives</span>
          </div>
          <div className="l-stat">
            <span className="l-num">98.4%</span>
            <span className="l-lbl">Client Retention Rate</span>
          </div>
        </div>

        <div className="modal-actions-row">
          <button 
            onClick={() => {
              onClose();
              onScrollToContact();
            }} 
            className="btn btn-primary"
          >
            <span>Partner With AdSpark</span>
            <ArrowRight size={16} />
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
