import React, { useState } from 'react';
import { RESULTS_METRICS } from '../data/agencyData';

export default function Results() {
  const [activeVertical, setActiveVertical] = useState('d2c');

  const verticalBreakdowns = {
    d2c: {
      title: "Direct-to-Consumer & Culture Brands",
      roas: "4.4x",
      growth: "+215%",
      quote: "Achieved through editorial video scripting, Meta Advantage+ catalog scaling, and retention email flows.",
    },
    b2b: {
      title: "B2B SaaS & Enterprise Technology",
      roas: "3.6x",
      growth: "+180%",
      quote: "Driven by high-intent Google Search capture, LinkedIn content syndication, and intent-mapped landing pages.",
    },
    luxury: {
      title: "Spatial Design, Hospitality & Objects",
      roas: "4.1x",
      growth: "+165%",
      quote: "Positioned through high-fashion lookbook production, architectural photography, and targeted digital PR.",
    },
  };

  const currentVertical = verticalBreakdowns[activeVertical];

  return (
    <section className="editorial-section results-editorial-section">
      <div className="container">
        {/* Header */}
        <div className="results-header-block">
          <div className="eyebrow-label">MEASURABLE OUTCOMES</div>
          <h2 className="editorial-section-title">
            COMMERCIAL RIGOR IN<br />
            <span className="serif-italic">EVERY CAMPAIGN.</span>
          </h2>
          <div className="results-disclosure-tag">
            *Sample & illustrative portfolio benchmarks derived from studio projects
          </div>
        </div>

        {/* 4 Large Editorial Metric Columns */}
        <div className="results-large-numbers-grid">
          {RESULTS_METRICS.map((metric) => (
            <div key={metric.label} className="result-metric-column">
              <div className="metric-number-display">{metric.number}</div>
              <h3 className="metric-label-display">{metric.label}</h3>
              <p className="metric-subtext-display">{metric.subtext}</p>
            </div>
          ))}
        </div>

        <div className="hairline-divider" style={{ margin: '60px 0 40px 0' }} />

        {/* Interactive Vertical Benchmark Selector */}
        <div className="results-vertical-container">
          <div className="vertical-header-row">
            <span className="vertical-title-tag">EXPLORE BY CATEGORY:</span>
            <div className="vertical-button-group">
              <button
                onClick={() => setActiveVertical('d2c')}
                className={`vertical-toggle-btn ${activeVertical === 'd2c' ? 'active' : ''}`}
              >
                D2C & Consumer
              </button>
              <button
                onClick={() => setActiveVertical('b2b')}
                className={`vertical-toggle-btn ${activeVertical === 'b2b' ? 'active' : ''}`}
              >
                B2B & Tech
              </button>
              <button
                onClick={() => setActiveVertical('luxury')}
                className={`vertical-toggle-btn ${activeVertical === 'luxury' ? 'active' : ''}`}
              >
                Design & Luxury
              </button>
            </div>
          </div>

          <div className="vertical-detail-card">
            <div className="vertical-card-left">
              <h4 className="v-card-title">{currentVertical.title}</h4>
              <p className="v-card-desc">{currentVertical.quote}</p>
            </div>
            <div className="vertical-card-right">
              <div className="v-stat-box">
                <span className="v-stat-lbl">TYPICAL ROAS</span>
                <span className="v-stat-num">{currentVertical.roas}</span>
              </div>
              <div className="v-stat-box">
                <span className="v-stat-lbl">AVG REVENUE LIFT</span>
                <span className="v-stat-num">{currentVertical.growth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
