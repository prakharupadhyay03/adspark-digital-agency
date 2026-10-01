import React, { useState } from 'react';
import { 
  GitCommit, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CAMPAIGN_STEPS } from '../data/agencyData';

export default function CampaignProcess({ onStartProject }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = CAMPAIGN_STEPS[activeStepIndex];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <GitCommit size={14} />
            <span>Interactive Campaign Framework</span>
          </div>
          <h2 className="section-title">
            From Strategy <span className="accent-text">to Results</span>
          </h2>
          <p className="section-subtitle">
            A proven four-phase engine engineered to eliminate wasted ad spend and scale customer acquisition predictably. Click through each step to explore our methodology.
          </p>
        </div>

        {/* 4 Interactive Process Steps Tracker */}
        <div className="process-nav-tracker" role="tablist" aria-label="Campaign Process Steps">
          {CAMPAIGN_STEPS.map((stepItem, idx) => {
            const isSelected = activeStepIndex === idx;
            const isPast = activeStepIndex > idx;
            return (
              <button
                key={stepItem.step}
                role="tab"
                aria-selected={isSelected}
                className={`process-step-tab ${isSelected ? 'active' : ''} ${isPast ? 'past' : ''}`}
                onClick={() => setActiveStepIndex(idx)}
              >
                <div className="step-tab-top">
                  <span className="step-number">{stepItem.step}</span>
                  <span className="step-indicator-dot"></span>
                </div>
                <div className="step-title-text">{stepItem.title}</div>
                <div className="step-tagline-preview">{stepItem.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Detail Display Card */}
        <div className="process-display-card agency-card">
          <div className="process-card-grid">
            {/* Left Content Area */}
            <div className="process-card-content">
              <div className="process-phase-badge">
                <span className="phase-num">PHASE {activeStep.step}</span>
                <span className="phase-name">{activeStep.title}</span>
              </div>

              <h3 className="process-headline">{activeStep.tagline}</h3>
              <p className="process-summary">{activeStep.summary}</p>

              <div className="process-details-block">
                <h4 className="block-title">Key Phase Execution Modules:</h4>
                <ul className="details-list">
                  {activeStep.details.map((detail, index) => (
                    <li key={index} className="details-item">
                      <CheckCircle2 size={16} className="detail-check-icon" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="process-deliverable-bar">
                <div className="deliverable-tag">CORE DELIVERABLE</div>
                <div className="deliverable-name">{activeStep.deliverable}</div>
              </div>
            </div>

            {/* Right Meta & Simulation Area */}
            <div className="process-card-meta">
              <div className="meta-box duration-box">
                <div className="meta-box-header">
                  <Clock size={16} className="meta-icon" />
                  <span>Execution Timeline</span>
                </div>
                <div className="meta-box-val">{activeStep.duration}</div>
              </div>

              <div className="meta-box tools-box">
                <div className="meta-box-header">
                  <Layers size={16} className="meta-icon" />
                  <span>Technology & Intelligence Stack</span>
                </div>
                <div className="tools-pills-wrap">
                  {activeStep.tools.map((tool) => (
                    <span key={tool} className="tool-pill">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="meta-box kpi-box">
                <div className="meta-box-header">
                  <Sparkles size={16} className="meta-icon" />
                  <span>Phase Benchmark Outcome</span>
                </div>
                <div className="kpi-sample-text">"{activeStep.kpiSample}"</div>
                <div className="sample-data-badge">*Simulated performance benchmark</div>
              </div>

              {/* Step Navigation Controls */}
              <div className="process-step-nav-buttons">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="btn btn-secondary btn-sm"
                  aria-label="Previous step"
                >
                  Previous Phase
                </button>
                <button
                  disabled={activeStepIndex === CAMPAIGN_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(CAMPAIGN_STEPS.length - 1, prev + 1))}
                  className="btn btn-primary btn-sm"
                  aria-label="Next step"
                >
                  <span>Next Phase</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {onStartProject && (
                <button
                  onClick={onStartProject}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  Apply This Framework To Your Brand
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
