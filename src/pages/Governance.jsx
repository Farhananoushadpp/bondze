import SectionTitle from '../components/SectionTitle';
import { ShieldCheck, Users, FileCheck, Scale, Award } from 'lucide-react';

const Governance = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Governance & Compliance</h1>
          <p className="page-header-subtitle">
            Institutional standards for responsible precious metals operations.
          </p>
        </div>
      </section>

      {/* Corporate Governance Approach */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Corporate Governance Approach"
            subtitle="Building trust through institutional-grade governance and compliance frameworks"
          />
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                BONDZE operates with governance standards designed to meet institutional 
                investor expectations and regulatory requirements. Our framework emphasizes 
                transparency, accountability, and risk management across all operations.
              </p>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Scale size={20} color="var(--color-gold)" />
                  Transparency
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Clear documentation and reporting structures ensure stakeholders have 
                  visibility into operations and decision-making processes.
                </p>
              </div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={20} color="var(--color-gold)" />
                  Accountability
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Defined roles and responsibilities with clear lines of accountability 
                  from operations through to board level.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  Risk Management
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Comprehensive risk assessment and mitigation frameworks covering 
                  operational, financial, and compliance risks.
                </p>
              </div>
            </div>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              padding: '3rem',
              textAlign: 'center'
            }}>
              <Award size={64} style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Institutional Standards
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                Our governance framework is designed to meet the standards expected 
                by institutional investors, banks, and international trading partners.
              </p>
              <ul style={{ textAlign: 'left', color: 'var(--color-gray-light)', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Board oversight structure</li>
                <li style={{ marginBottom: '0.5rem' }}>Independent compliance function</li>
                <li style={{ marginBottom: '0.5rem' }}>Regular audit processes</li>
                <li>Documented policies & procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Board Oversight */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Board Oversight"
            subtitle="Strategic direction and oversight from experienced leadership"
          />
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
            <div className="grid grid-2">
              <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Strategic Direction</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  Board-level oversight of corporate strategy, major investments, and 
                  long-term business planning.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Risk Oversight</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  Regular review of risk exposures and mitigation strategies across 
                  operational and financial domains.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Compliance Monitoring</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  Board-level review of compliance performance and regulatory 
                  obligations across all jurisdictions.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Stakeholder Interests</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  Balancing the interests of investors, partners, employees, and 
                  communities in strategic decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AML / CFT Commitment */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-gold)', 
              color: 'var(--color-primary-dark)', 
              padding: '3rem',
              textAlign: 'center'
            }}>
              <FileCheck size={64} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
                AML / CFT Framework
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                Comprehensive anti-money laundering and countering the financing of 
                terrorism (AML/CFT) protocols aligned with FATF guidelines.
              </p>
              <ul style={{ textAlign: 'left', color: 'var(--color-primary)', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Customer due diligence (CDD)</li>
                <li style={{ marginBottom: '0.5rem' }}>Enhanced due diligence (EDD)</li>
                <li style={{ marginBottom: '0.5rem' }}>Transaction monitoring</li>
                <li>Suspicious activity reporting</li>
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>AML / CFT Commitment</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                We maintain rigorous anti-money laundering and counter-terrorist financing 
                protocols that meet or exceed international standards and local regulatory 
                requirements in all operating jurisdictions.
              </p>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Know Your Customer (KYC)</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Comprehensive verification procedures for all counterparties, including 
                  beneficial ownership identification and risk-based assessment.
                </p>
              </div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Transaction Monitoring</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Ongoing monitoring of all transactions for unusual patterns or red flags, 
                  with escalation procedures for suspicious activities.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Staff Training</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Regular AML/CFT training for all staff involved in trading and compliance 
                  functions, ensuring awareness of current threats and procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gold Sourcing */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Responsible Gold Sourcing</h2>
            <div className="divider-gold"></div>
            <p className="section-description" style={{ color: 'var(--color-gray-light)' }}>
              Commitment to ethical sourcing and supply chain integrity
            </p>
          </div>
          <div className="grid grid-2">
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Conflict-Free Assurance
              </h3>
              <p style={{ color: 'var(--color-gray-light)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We are committed to sourcing only conflict-free gold and minerals, in 
                compliance with OECD Due Diligence Guidance and relevant international 
                frameworks.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-gray-light)' }}>
                <li style={{ marginBottom: '0.75rem' }}>Supply chain mapping and traceability</li>
                <li style={{ marginBottom: '0.75rem' }}>Third-party audits of high-risk suppliers</li>
                <li style={{ marginBottom: '0.75rem' }}>Documentation of chain of custody</li>
                <li>Regular supplier re-assessment</li>
              </ul>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Environmental & Social Standards
              </h3>
              <p style={{ color: 'var(--color-gray-light)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Our sourcing practices consider environmental impact and social conditions 
                in mining communities, working toward continuous improvement.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-gray-light)' }}>
                <li style={{ marginBottom: '0.75rem' }}>Environmental compliance verification</li>
                <li style={{ marginBottom: '0.75rem' }}>Worker safety and conditions assessment</li>
                <li style={{ marginBottom: '0.75rem' }}>Community impact considerations</li>
                <li>Support for formalization of artisanal mining</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Standards */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Ethical Standards"
            subtitle="Code of conduct guiding all business activities"
          />
          <div className="card-grid card-grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card card-gold-accent" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Anti-Bribery & Corruption</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                Zero-tolerance approach to bribery and corruption in all forms. Clear 
                policies and procedures for gifts, hospitality, and third-party interactions.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                All staff and representatives required to acknowledge and comply with 
                anti-bribery policies.
              </p>
            </div>
            <div className="card card-gold-accent" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Confidentiality</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                Strict confidentiality regarding customer information, transaction details, 
                and commercially sensitive data.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                Information shared only on a need-to-know basis with appropriate confidentiality 
                agreements in place.
              </p>
            </div>
            <div className="card card-gold-accent" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Fair Dealing</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                Honest and fair dealing with all counterparties, avoiding misleading 
                representations or unfair contractual terms.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                Transparent pricing and terms, with clear documentation of all agreements.
              </p>
            </div>
            <div className="card card-gold-accent" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Whistleblowing</h4>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                Protected channels for reporting concerns about misconduct, with 
                non-retaliation guarantees for good-faith reports.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                Reports reviewed promptly and investigated thoroughly by appropriate 
                personnel or external advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certification */}
      <section className="section section-light" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', maxWidth: '700px', margin: '0 auto' }}>
              BONDZE is committed to continuous improvement of our governance and compliance 
              frameworks. We engage with industry associations, regulatory bodies, and 
              independent advisors to ensure our practices remain current with evolving 
              standards and expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Governance;
