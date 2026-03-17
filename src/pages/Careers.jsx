import SectionTitle from '../components/SectionTitle';
import { Users, Target, Heart, Award, Globe, Briefcase } from 'lucide-react';

const Careers = () => {
  const openRoles = [
    {
      title: 'Mining Operations Manager',
      location: 'West Africa',
      type: 'Full-time',
      department: 'Operations'
    },
    {
      title: 'Compliance Officer',
      location: 'Dubai, UAE',
      type: 'Full-time',
      department: 'Governance'
    },
    {
      title: 'Trading Analyst',
      location: 'Dubai, UAE',
      type: 'Full-time',
      department: 'Trading'
    },
    {
      title: 'Logistics Coordinator',
      location: 'West Africa',
      type: 'Full-time',
      department: 'Operations'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue excellence in every aspect of our operations, from safety standards to stakeholder relationships.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with unwavering integrity, maintaining ethical standards even when no one is watching.'
    },
    {
      icon: Globe,
      title: 'Respect',
      description: 'We respect the communities, environments, and cultures where we operate, prioritizing sustainable development.'
    },
    {
      icon: Award,
      title: 'Accountability',
      description: 'We take ownership of our actions and their impacts, holding ourselves accountable to the highest standards.'
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Careers</h1>
          <p className="page-header-subtitle">
            Join a team building the future of responsible precious metals trading.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Company Culture"
            subtitle="Building a culture of excellence, integrity, and collaboration"
          />
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                At BONDZE, we are building more than a business—we are building a culture that 
                values excellence, integrity, and the contributions of every team member. Our 
                work spans continents and connects communities, offering unique opportunities 
                to make a meaningful impact.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                We believe that our people are our greatest asset. We invest in professional 
                development, foster an inclusive environment, and recognize outstanding 
                contributions that advance our mission.
              </p>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Professional Growth</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Continuous learning opportunities, mentorship programs, and clear career 
                  progression paths for high performers.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Global Exposure</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Work across multiple jurisdictions with exposure to international markets, 
                  diverse cultures, and complex operational challenges.
                </p>
              </div>
            </div>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              padding: '3rem',
              textAlign: 'center'
            }}>
              <Users size={64} style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Join Our Team
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                We are always interested in connecting with talented professionals who share 
                our commitment to excellence and ethical business practices.
              </p>
              <ul style={{ textAlign: 'left', color: 'var(--color-gray-light)', paddingLeft: '1.5rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Competitive compensation</li>
                <li style={{ marginBottom: '0.5rem' }}>Professional development</li>
                <li style={{ marginBottom: '0.5rem' }}>International exposure</li>
                <li>Meaningful work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our culture and conduct"
          />
          <div className="grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--color-gold)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'var(--color-primary-dark)'
                }}>
                  <value.icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{value.title}</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.875rem', margin: 0 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers at Bondze */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-gold)', 
              color: 'var(--color-primary-dark)', 
              padding: '3rem',
              textAlign: 'center'
            }}>
              <Briefcase size={64} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
                What We Look For
              </h3>
              <ul style={{ textAlign: 'left', color: 'var(--color-primary)', paddingLeft: '1.5rem', margin: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>Demonstrated integrity and ethical conduct</li>
                <li style={{ marginBottom: '0.75rem' }}>Relevant industry experience</li>
                <li style={{ marginBottom: '0.75rem' }}>Cross-cultural competence</li>
                <li style={{ marginBottom: '0.75rem' }}>Adaptability and resilience</li>
                <li>Commitment to excellence</li>
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Careers at Bondze</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                We offer career opportunities across trading, operations, compliance, and 
                corporate functions. Whether you are an experienced professional or emerging 
                talent, we provide a platform for growth and impact.
              </p>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Trading & Operations</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Roles in precious metals trading, logistics coordination, mining operations, 
                  and supply chain management.
                </p>
              </div>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Compliance & Governance</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Positions in AML/CFT compliance, risk management, legal affairs, and 
                  corporate governance.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Corporate Functions</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.875rem' }}>
                  Opportunities in finance, HR, IT, and administrative support that enable 
                  our core operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Open Positions"
            subtitle="Current opportunities to join our team"
          />
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {openRoles.map((role, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  marginBottom: '1rem', 
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{role.title}</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    {role.department} • {role.location} • {role.type}
                  </p>
                </div>
                <button className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
              Don't see a role that matches your skills?
            </p>
            <a href="/contact" className="btn btn-outline">
              Send Open Application
            </a>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Application Process"
            subtitle="What to expect when you apply"
          />
          <div className="grid grid-4">
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'var(--color-primary)', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: '600'
              }}>
                1
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Apply</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                Submit your application with CV and cover letter through our contact form.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'var(--color-primary)', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: '600'
              }}>
                2
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Review</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                Our HR team reviews applications and shortlists candidates matching our criteria.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'var(--color-primary)', 
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: '600'
              }}>
                3
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Interview</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                Selected candidates participate in interviews with hiring managers and team members.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'var(--color-gold)', 
                color: 'var(--color-primary-dark)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: '600'
              }}>
                4
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Decision</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                Successful candidates receive an offer and begin onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
