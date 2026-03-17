import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { TrendingUp, Shield, Clock, ArrowRight, Send } from 'lucide-react';

const Investors = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'institutional',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Investors</h1>
          <p className="page-header-subtitle">
            Building long-term value through disciplined precious metals operations.
          </p>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Investment Strategy"
            subtitle="A disciplined approach to precious metals value creation"
          />
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                BONDZE offers investors exposure to precious metals through an integrated 
                platform combining mining development, trading operations, and strategic 
                partnerships. Our approach prioritizes sustainable value creation over 
                short-term gains.
              </p>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Diversified Exposure</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Multi-vertical operations spanning mining, trading, and value-addition 
                  provide diversified revenue streams and risk mitigation.
                </p>
              </div>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Geographic Focus</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Strategic positioning in African mining regions with direct market 
                  access through Dubai hub.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Institutional Standards</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Governance, compliance, and operational practices designed to meet 
                  institutional investor requirements.
                </p>
              </div>
            </div>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              padding: '3rem',
              textAlign: 'center'
            }}>
              <TrendingUp size={64} style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Growth Drivers
              </h3>
              <ul style={{ textAlign: 'left', color: 'var(--color-gray-light)', paddingLeft: '1.5rem', margin: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>Expanding mining concessions</li>
                <li style={{ marginBottom: '0.75rem' }}>Growing trading volumes</li>
                <li style={{ marginBottom: '0.75rem' }}>Value-addition capabilities</li>
                <li style={{ marginBottom: '0.75rem' }}>Strategic partnerships</li>
                <li>Favorable commodity demand outlook</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Philosophy */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--color-gold)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--color-primary-dark)'
              }}>
                <Clock size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Long-term Focus</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                We prioritize sustainable value creation through patient capital deployment 
                and relationship-building over short-term extraction.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--color-gold)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--color-primary-dark)'
              }}>
                <Shield size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Risk Management</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                Comprehensive risk framework covering operational, financial, regulatory, 
                and market risks with ongoing monitoring and mitigation.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--color-gold)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--color-primary-dark)'
              }}>
                <TrendingUp size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Scalable Platform</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                Infrastructure and partnerships designed for measured, capital-efficient 
                expansion as opportunities arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Request Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Investor Information</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <div style={{ 
                padding: '2rem', 
                backgroundColor: 'var(--color-bg-secondary)', 
                borderRadius: 'var(--radius-lg)',
                marginBottom: '2rem'
              }}>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                  <strong>Detailed investor materials available upon request.</strong>
                  <br /><br />
                  For qualified investors, we provide access to:
                </p>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', marginTop: '1rem', marginBottom: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>Corporate presentations</li>
                  <li style={{ marginBottom: '0.5rem' }}>Financial information</li>
                  <li style={{ marginBottom: '0.5rem' }}>Operational updates</li>
                  <li>Due diligence materials</li>
                </ul>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                Please complete the form to request investor information. All inquiries 
                are subject to verification and compliance review.
              </p>
            </div>

            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Request Information</h3>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: 'var(--color-success)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white'
                  }}>
                    <Send size={28} />
                  </div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Request Submitted</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                    We will review your inquiry and respond within 5 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company/Organization *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type" className="form-label">Investor Type</label>
                    <select
                      id="type"
                      name="type"
                      className="form-select"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="institutional">Institutional Investor</option>
                      <option value="family_office">Family Office</option>
                      <option value="private_equity">Private Equity</option>
                      <option value="strategic">Strategic Investor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Additional information about your inquiry..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Submit Request <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-gray)', marginTop: '1rem', textAlign: 'center' }}>
                    By submitting, you confirm you are a qualified investor and agree to our terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section section-light" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ 
            padding: '2rem', 
            backgroundColor: 'var(--color-bg-primary)', 
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>Important Notice</h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              This website is for informational purposes only and does not constitute an offer 
              to sell or a solicitation of an offer to buy any securities or investment products. 
              Investment involves risk, including the possible loss of principal.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', margin: 0 }}>
              Past performance is not indicative of future results. Prospective investors should 
              conduct their own due diligence and consult with their own legal, financial, and tax 
              advisors before making any investment decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Investors;
