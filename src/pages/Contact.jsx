import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Contact</h1>
          <p className="page-header-subtitle">
            Get in touch with our team for inquiries and partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Information</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                We welcome inquiries from potential partners, investors, and stakeholders. 
                Please use the contact form or reach out directly using the information below.
              </p>

              <div className="card" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: 'var(--color-gold)', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-primary-dark)'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Dubai Office</h4>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      BONDZE Precious Metals and Mineral Trading LLC<br />
                      Dubai Multi Commodities Centre (DMCC)<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: 'var(--color-gold)', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-primary-dark)'
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Email</h4>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      info@bondze.com<br />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-gray)' }}>
                        (General inquiries)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: 'var(--color-gold)', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-primary-dark)'
                  }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Business Hours</h4>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      Sunday - Thursday: 9:00 AM - 6:00 PM GST<br />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-gray)' }}>
                        Closed on weekends and UAE public holidays
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: 'var(--color-gold)', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-primary-dark)'
                  }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Phone</h4>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      +971 [Contact Number]<br />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-gray)' }}>
                        (By appointment only)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Send a Message</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Spam Protection Notice */}
      <section className="section section-light" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ 
            padding: '2rem', 
            backgroundColor: 'var(--color-bg-primary)', 
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>Spam Protection</h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              This contact form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. 
              We review all inquiries and aim to respond within 2-3 business days. For urgent matters, 
              please indicate priority in your message subject line.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', margin: 0 }}>
              <strong>Unsolicited marketing communications and sales solicitations will not be responded to.</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
