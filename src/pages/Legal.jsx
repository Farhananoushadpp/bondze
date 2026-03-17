import SectionTitle from '../components/SectionTitle';
import { FileText, AlertTriangle, Shield, Cookie, Scale } from 'lucide-react';

const Legal = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Legal & Policies</h1>
          <p className="page-header-subtitle">
            Important legal information and company policies.
          </p>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Legal Disclaimer"
            subtitle="Important notices regarding the use of this website"
          />
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
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
                <FileText size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>General Disclaimer</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                  The information contained on this website is provided for general informational 
                  purposes only and does not constitute professional advice. While we endeavor to 
                  keep the information up to date and correct, we make no representations or 
                  warranties of any kind, express or implied, about the completeness, accuracy, 
                  reliability, suitability, or availability of the information, products, services, 
                  or related graphics contained on this website.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                  Any reliance you place on such information is therefore strictly at your own risk. 
                  In no event will we be liable for any loss or damage arising from the use of this 
                  website or the information contained herein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Investment Solicitation */}
      <section className="section section-light">
        <div className="container">
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', borderLeft: '4px solid var(--color-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'var(--color-primary)', 
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: 'white'
              }}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No Investment Solicitation</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                  This website is for informational purposes only and does not constitute an offer 
                  to sell or a solicitation of an offer to buy any securities, commodities, or 
                  investment products. The information on this website is not intended for distribution 
                  to, or use by, any person or entity in any jurisdiction or country where such 
                  distribution or use would be contrary to local law or regulation.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                  Investment in precious metals, mining operations, and related activities involves 
                  substantial risks, including the possible loss of principal. Past performance is 
                  not indicative of future results.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                  Prospective investors should conduct their own due diligence and consult with their 
                  own legal, financial, and tax advisors before making any investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your information"
          />
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Shield size={28} color="var(--color-gold)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Data Collection</h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                We collect information that you voluntarily provide to us through our contact forms, 
                investor inquiries, and other interactions with our website. This may include your 
                name, email address, company information, and any messages or inquiries you submit.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                We also collect standard web analytics data through cookies and similar technologies 
                to understand how visitors use our website and to improve user experience.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Scale size={28} color="var(--color-gold)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Use of Information</h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                The information we collect is used to respond to your inquiries, process your requests, 
                and communicate with you about our services and opportunities. We may also use the 
                information to improve our website, services, and user experience.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                We do not sell, rent, or lease your personal information to third parties. We may share 
                information with trusted service providers who assist us in operating our website and 
                conducting our business, subject to confidentiality obligations.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Shield size={28} color="var(--color-gold)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Data Protection</h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                We retain your information only for as long as necessary to fulfill the purposes for 
                which it was collected or as required by applicable law.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Your Rights</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                You have the right to access, correct, update, or delete your personal information. 
                You may also have the right to object to or restrict certain processing of your data. 
                To exercise these rights, please contact us using the information provided on our 
                contact page.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                <strong>Last Updated:</strong> March 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="section section-light">
        <div className="container">
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Cookie size={28} color="var(--color-gold)" />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Cookie Policy</h3>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
              This website uses cookies and similar tracking technologies to enhance your browsing 
              experience, analyze website traffic, and understand where our visitors are coming from. 
              By continuing to use our website, you consent to our use of cookies.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We use the following types of cookies:
            </p>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Essential Cookies:</strong> Required for the website to function properly
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your preferences and settings
              </li>
            </ul>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
              You can control cookies through your browser settings. Please note that disabling 
              certain cookies may affect the functionality of this website.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Terms of Use"
            subtitle="Conditions for using this website"
          />
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Acceptance of Terms</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                By accessing and using this website, you accept and agree to be bound by these 
                Terms of Use and our Privacy Policy. If you do not agree with any part of these 
                terms, please do not use our website.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Intellectual Property</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of BONDZE Precious Metals and Mineral Trading LLC and is protected 
                by copyright, trademark, and other intellectual property laws. You may not reproduce, 
                distribute, or create derivative works from this content without our prior written consent.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Prohibited Activities</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                When using this website, you agree not to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Use the website for any unlawful purpose</li>
                <li style={{ marginBottom: '0.5rem' }}>Attempt to gain unauthorized access to any portion of the website</li>
                <li style={{ marginBottom: '0.5rem' }}>Interfere with or disrupt the website or its servers</li>
                <li style={{ marginBottom: '0.5rem' }}>Use automated means to access or scrape the website</li>
                <li>Transmit any viruses, malware, or harmful code</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Governing Law</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                These Terms of Use shall be governed by and construed in accordance with the laws 
                of the United Arab Emirates. Any disputes arising from these terms or your use of 
                this website shall be subject to the exclusive jurisdiction of the courts of Dubai, 
                United Arab Emirates.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Changes to Terms</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', margin: 0 }}>
                We reserve the right to modify these Terms of Use at any time. Changes will be 
                effective immediately upon posting to this website. Your continued use of the 
                website following any changes constitutes acceptance of those changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Matters */}
      <section className="section section-dark" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
              Questions About Our Legal Policies?
            </h3>
            <p style={{ color: 'var(--color-gray-light)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              If you have any questions about our legal policies or need clarification on any matter, 
              please contact us through our contact page.
            </p>
            <a href="/contact" className="btn btn-outline-light">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Legal;
