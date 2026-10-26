import React, { useState } from 'react';
import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import { SERVICES, SOLUTIONS } from '../data/agencyData';

export default function Contact({ selectedRequirement, onClearRequirement }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    requirements: '',
  });

  const [prevRequirement, setPrevRequirement] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync state if a service or solution was selected from another component
  if (selectedRequirement && selectedRequirement !== prevRequirement) {
    setPrevRequirement(selectedRequirement);
    setFormData((prev) => ({
      ...prev,
      service: selectedRequirement.name || selectedRequirement.title || '',
      requirements: prev.requirements || `Inquiring about ${selectedRequirement.name || selectedRequirement.title}. Focused on scaling our brand growth.`,
    }));
  }

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Name is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Valid business email is required.';
    }
    if (!formData.company.trim()) {
      errs.company = 'Company name is required.';
    }
    if (!formData.service) {
      errs.service = 'Please select a service.';
    }
    if (!formData.budget) {
      errs.budget = 'Please select a budget range.';
    }
    if (!formData.requirements.trim() || formData.requirements.trim().length < 10) {
      errs.requirements = 'Please tell us briefly about your goals (at least 10 chars).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
      if (onClearRequirement) onClearRequirement();
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      requirements: '',
    });
    setErrors({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="compact-section contact-compact-section">
      <div className="container">
        <div className="contact-compact-layout">
          {/* Left Column: Bold Headline & Direct Info */}
          <div className="contact-left-headline-block">
            <div className="section-eyebrow">START A PROJECT</div>
            <h2 className="contact-bold-title">
              LET'S MAKE<br />
              SOMETHING<br />
              <span className="serif-italic-brand">WORTH NOTICING.</span>
            </h2>
            <p className="contact-sub-paragraph">
              Tell us what you're building, what you're trying to solve, and where you want to go.
            </p>

            <div className="contact-fast-details">
              <div className="fast-detail-item">
                <span className="f-label">DIRECT EMAIL</span>
                <a href="mailto:hello@adspark.com" className="f-val">hello@adspark.com</a>
              </div>
              <div className="fast-detail-item">
                <span className="f-label">LOCATION</span>
                <span className="f-val">India • Global Engagements</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Form */}
          <div className="contact-right-form-block">
            {isSuccess ? (
              <div className="compact-success-view">
                <div className="success-icon-square">
                  <Check size={24} />
                </div>
                <h3 className="success-title">Project Inquiry Received.</h3>
                <p className="success-desc">
                  Thank you, <strong>{submittedData?.name}</strong>. We have logged the brief for <strong>{submittedData?.company}</strong>. Our senior partners will review your goals and reach out to <strong>{submittedData?.email}</strong> within 24 hours.
                </p>

                <div className="success-recap">
                  <div><span>Selected Discipline:</span> <strong>{submittedData?.service}</strong></div>
                  <div><span>Budget:</span> <strong>{submittedData?.budget}</strong></div>
                </div>

                <button onClick={handleReset} className="btn-secondary-clean">
                  <RotateCcw size={14} />
                  <span>Send Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="compact-inquiry-form">
                <div className="form-two-cols">
                  <div className="compact-field">
                    <label htmlFor="name" className="field-title">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`form-input-line ${errors.name ? 'has-error' : ''}`}
                    />
                    {errors.name && <span className="error-note">{errors.name}</span>}
                  </div>

                  <div className="compact-field">
                    <label htmlFor="email" className="field-title">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="business@company.com"
                      className={`form-input-line ${errors.email ? 'has-error' : ''}`}
                    />
                    {errors.email && <span className="error-note">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-two-cols">
                  <div className="compact-field">
                    <label htmlFor="company" className="field-title">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Brand or company name"
                      className={`form-input-line ${errors.company ? 'has-error' : ''}`}
                    />
                    {errors.company && <span className="error-note">{errors.company}</span>}
                  </div>

                  <div className="compact-field">
                    <label htmlFor="service" className="field-title">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`form-select-line ${errors.service ? 'has-error' : ''}`}
                    >
                      <option value="">Select a service...</option>
                      <optgroup label="Capabilities">
                        {SERVICES.map((s) => (
                          <option key={s.number} value={s.name}>{s.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Solutions">
                        {SOLUTIONS.map((sol) => (
                          <option key={sol.number} value={sol.title}>{sol.title} Solution</option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.service && <span className="error-note">{errors.service}</span>}
                  </div>
                </div>

                <div className="compact-field">
                  <label htmlFor="budget" className="field-title">Estimated Monthly Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`form-select-line ${errors.budget ? 'has-error' : ''}`}
                  >
                    <option value="">Select budget range...</option>
                    <option value="₹25,000 – ₹50,000 / month">₹25,000 – ₹50,000 / month (Pilot / Launch)</option>
                    <option value="₹50,000 – ₹1,50,000 / month">₹50,000 – ₹1,50,000 / month (Growth)</option>
                    <option value="₹1,50,000 – ₹3,00,000 / month">₹1,50,000 – ₹3,00,000 / month (Scale)</option>
                    <option value="₹3,00,000+ / month">₹3,00,000+ / month (Enterprise)</option>
                  </select>
                  {errors.budget && <span className="error-note">{errors.budget}</span>}
                </div>

                <div className="compact-field">
                  <label htmlFor="requirements" className="field-title">Project Requirements</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="3"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, challenges, and timeline..."
                    className={`form-textarea-line ${errors.requirements ? 'has-error' : ''}`}
                  ></textarea>
                  {errors.requirements && <span className="error-note">{errors.requirements}</span>}
                </div>

                <div className="form-submit-block">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-start-conversation"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>SENDING BRIEF...</span>
                    ) : (
                      <>
                        <span>START A CONVERSATION</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                  <span className="submit-disclaimer">Zero spam. Mutual preliminary NDA protected.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
