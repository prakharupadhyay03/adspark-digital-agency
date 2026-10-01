import React, { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

export default function ServiceModal({ service, onClose, onInquire }) {
  useEffect(() => {
    if (!service) return;

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
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div 
      className="editorial-modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-service-heading"
    >
      <div className="editorial-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Pinned Header Bar */}
        <div className="modal-header-pinned">
          <div className="modal-header-meta">
            <span className="modal-eyebrow-text">CAPABILITY {service.number}</span>
            <h2 id="modal-service-heading" className="modal-pinned-title">{service.name || service.title}</h2>
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
          <p className="modal-lead-summary">{service.summary}</p>

          <div className="modal-copy-block">
            <h4 className="modal-section-label">SCOPE & SYSTEM DELIVERABLES</h4>
            <ul className="modal-deliverables-list">
              {service.deliverables && service.deliverables.map((item, idx) => (
                <li key={idx} className="deliverable-list-row">
                  <span className="deliverable-check-icon">
                    <Check size={14} />
                  </span>
                  <span className="deliverable-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-timeline-note">
            <strong>Standard Deployment Timeline:</strong> Initial sprint kickoff within 5 business days. Bi-weekly review cycles with direct partner oversight.
          </div>

          {/* Action Row */}
          <div className="modal-action-row">
            <button 
              onClick={() => {
                onClose();
                onInquire(service);
              }}
              className="btn-modal-primary-cta"
            >
              <span>INQUIRE ABOUT {service.name || service.title}</span>
              <ArrowRight size={15} />
            </button>
            <button 
              onClick={onClose} 
              className="btn-modal-secondary-cta"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
