import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { WORK_PROCESS } from '../data/agencyData';

export default function Process({ onStartProject }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = WORK_PROCESS[activeStepIndex];

  return (
    <section id="process" className="editorial-section process-editorial-section">
      <div className="container">
        {/* Header */}
        <div className="process-header">
          <div className="eyebrow-label">OPERATING METHODOLOGY</div>
          <h2 className="editorial-section-title">
            HOW WE<br />
            <span className="serif-italic">WORK.</span>
          </h2>
          <p className="process-header-sub">
            A disciplined, four-phase engagement model designed to replace subjective opinion with market reality, creative precision, and measurable unit economics.
          </p>
        </div>

        {/* 4 Interactive Process Steps Bar */}
        <div className="process-steps-selector" role="tablist" aria-label="Methodology Steps">
          {WORK_PROCESS.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStepIndex(idx)}
                className={`step-tab-button ${isActive ? 'active' : ''}`}
              >
                <div className="step-tab-top">
                  <span className="step-tab-number">{item.step}</span>
                  <span className="step-tab-status"></span>
                </div>
                <span className="step-tab-name">{item.name}</span>
                <span className="step-tab-time">{item.timing}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Phase Display */}
        <div className="process-dynamic-stage">
          <div className="stage-content-grid">
            <div className="stage-left">
              <div className="stage-phase-tag">
                <span>PHASE {currentStep.step}</span>
                <span className="tag-sep">/</span>
                <span>{currentStep.name}</span>
              </div>

              <h3 className="stage-headline">{currentStep.headline}</h3>
              <p className="stage-description">{currentStep.description}</p>

              <div className="stage-deliverables-block">
                <span className="stage-subheading">CORE PHASE DELIVERABLES:</span>
                <ul className="stage-deliverables-list">
                  {currentStep.deliverables.map((deliv, index) => (
                    <li key={index} className="stage-deliv-item">
                      <Check size={16} className="deliv-check-icon" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stage-actions">
                <button onClick={onStartProject} className="btn-editorial-link">
                  <span>Inquire About Our Methodology</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="stage-right">
              <div className="stage-meta-card">
                <span className="meta-card-label">TYPICAL TIMELINE</span>
                <div className="meta-card-value">{currentStep.timing}</div>
                <div className="hairline-divider" style={{ margin: '18px 0' }} />
                <span className="meta-card-label">STAGE PHILOSOPHY</span>
                <p className="meta-card-quote">
                  "No creative flourishes without empirical foundation. We clarify before we craft."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
