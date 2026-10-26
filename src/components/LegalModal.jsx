import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LegalModal({ legalType, onClose }) {
  useEffect(() => {
    if (!legalType) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

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
  }, [legalType, onClose]);

  if (!legalType) return null;

  const isPrivacy = legalType === 'privacy';

  return (
    <div 
      className="editorial-modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-legal-heading"
    >
      <div className="editorial-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Pinned Header Bar */}
        <div className="modal-header-pinned">
          <div className="modal-header-meta">
            <span className="modal-eyebrow-text">GOVERNANCE & STANDARDS</span>
            <h2 id="modal-legal-heading" className="modal-pinned-title">
              {isPrivacy ? 'Privacy & Data Governance' : 'Terms of Client Engagement'}
            </h2>
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
          <p className="modal-lead-summary">
            Codified Standards • AdSpark Independent Creative & Digital Studio (2026 Edition)
          </p>

          <div className="modal-copy-block">
            {isPrivacy ? (
              <>
                <h4 className="modal-section-label">1. DATA SOVEREIGNTY & PRIVACY</h4>
                <p>
                  All prospective client information, CRM records, and confidential project briefs shared with AdSpark remain the unconditional, exclusive property of the client. We do not sell, rent, monetize, or repurpose client information.
                </p>
                
                <h4 className="modal-section-label">2. ATTRIBUTION & TRACKING COMPLIANCE</h4>
                <p>
                  Our digital marketing and conversion tracking architectures adhere strictly to GDPR, CCPA, and Meta/Google consent frameworks, implementing privacy-preserving server-side Conversions API (CAPI) infrastructure.
                </p>

                <h4 className="modal-section-label">3. NON-DISCLOSURE COMMITMENT</h4>
                <p>
                  All client communications, creative concepts, strategic positioning, and launch timings are conducted under mutual non-disclosure obligations.
                </p>
              </>
            ) : (
              <>
                <h4 className="modal-section-label">1. INTELLECTUAL PROPERTY & CREATIVE OWNERSHIP</h4>
                <p>
                  Upon final settlement of engagement milestones, all bespoke visual assets, campaign copy, art direction toolkits, and web code become the exclusive intellectual property of the client.
                </p>

                <h4 className="modal-section-label">2. MEDIA BUYING TRANSPARENCY</h4>
                <p>
                  AdSpark operates strictly under transparent media buying terms. All advertising platform accounts (Google Ads, Meta Business Manager, TikTok Ads) remain owned by and registered directly under the client's corporate entities.
                </p>

                <h4 className="modal-section-label">3. PERFORMANCE BENCHMARKS & MARKET DYNAMICS</h4>
                <p>
                  While our campaigns are engineered with mathematical discipline and creative rigor, external auction dynamics remain subject to general market conditions.
                </p>
              </>
            )}
          </div>

          <div className="modal-action-row">
            <button 
              onClick={onClose} 
              className="btn-modal-secondary-cta"
            >
              CLOSE DOCUMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
