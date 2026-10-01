import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/agencyData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="compact-section faq-compact-section">
      <div className="container container-faq">
        <div className="section-eyebrow">QUESTIONS & ANSWERS</div>
        <h2 className="section-title-clean" style={{ marginBottom: '40px' }}>FAQ</h2>

        <div className="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const itemNumber = `0${idx + 1}`;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-btn-${idx}`;

            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                {/* TOP ROW: [number] [question] [plus] in consistent grid */}
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question-row"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq-col-num">{itemNumber}</span>
                  <span className="faq-col-question">{faq.question}</span>
                  <span className="faq-col-icon" aria-hidden="true">
                    <Plus size={18} className="faq-plus-symbol" />
                  </span>
                </button>

                {/* BOTTOM: Answer only when expanded, smoothly animated */}
                <div 
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}
                >
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>

                {/* ONE divider at the very bottom of the FAQ ITEM container */}
                <div className="faq-item-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
