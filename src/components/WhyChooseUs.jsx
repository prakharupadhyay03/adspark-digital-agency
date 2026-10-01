import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Layers, 
  RefreshCw, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agencyData';

const ICON_MAP = {
  Cpu,
  Sparkles,
  ShieldCheck,
  Target,
  Layers,
  RefreshCw,
};

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Award size={14} />
            <span>The Agency Difference</span>
          </div>
          <h2 className="section-title">
            Why Brands Choose <span className="accent-text">AdSpark</span>
          </h2>
          <p className="section-subtitle">
            We operate as an uncompromising extension of your executive growth team. No vanity metrics, no bloated agency retainers—just proven business outcomes.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || CheckCircle2;
            return (
              <div key={item.title} className="why-card agency-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <IconComponent size={22} className="why-icon" />
                  </div>
                  <span className="why-highlight-pill">{item.highlight}</span>
                </div>

                <div className="why-card-index">0{index + 1}</div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Bottom Bar */}
        <div className="why-trust-bar agency-card">
          <div className="trust-bar-item">
            <span className="trust-bar-num">100%</span>
            <span className="trust-bar-label">In-House Talent & Strategy</span>
          </div>
          <div className="trust-bar-divider" />
          <div className="trust-bar-item">
            <span className="trust-bar-num">24h</span>
            <span className="trust-bar-label">Avg. Campaign Response Time</span>
          </div>
          <div className="trust-bar-divider" />
          <div className="trust-bar-item">
            <span className="trust-bar-num">$0</span>
            <span className="trust-bar-label">Hidden Markups or Platform Surcharges</span>
          </div>
          <div className="trust-bar-divider" />
          <div className="trust-bar-item">
            <span className="trust-bar-num">4.9/5</span>
            <span className="trust-bar-label">Client Net Promoter Score</span>
          </div>
        </div>
      </div>
    </section>
  );
}
