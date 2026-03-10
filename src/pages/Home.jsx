import { NavLink } from 'react-router-dom';
import { ArrowRight, Gem, Mountain, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  const marketData = [
    { metal: 'Gold', price: '2,045.30', change: '+1.2%', unit: 'USD/oz' },
    { metal: 'Copper', price: '8,450.00', change: '-0.4%', unit: 'USD/tonne' },
    { metal: 'Silver', price: '23.85', change: '+0.8%', unit: 'USD/oz' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background" style={{
          backgroundImage: 'linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(26, 42, 74, 0.9) 100%)'
        }} />
        <div className="hero-content">
          <h1 className="hero-title">
            Building a disciplined precious metals and minerals platform connecting Africa and global markets.
          </h1>
          <p className="hero-subtitle">
            BONDZE operates across mining development and precious metals trading with institutional discipline.
          </p>
          <div className="hero-actions">
            <NavLink to="/partnerships" className="btn btn-primary btn-lg">
              Partner With Us <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline-light btn-lg">
              Contact
            </NavLink>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Who We Are"
            subtitle="BONDZE Precious Metals and Mineral Trading LLC is an institutional-grade platform operating across the precious metals value chain. We combine mining development expertise with disciplined trading operations."
          />
          <div className="card-grid card-grid-3">
            <div className="feature-card card-gold-accent">
              <div className="feature-card-icon">
                <Gem size={24} />
              </div>
              <h3 className="feature-card-title">Precious Metals</h3>
              <p className="feature-card-text">
                Specialized in gold and silver trading with direct relationships across African mining regions.
              </p>
            </div>
            <div className="feature-card card-gold-accent">
              <div className="feature-card-icon">
                <Mountain size={24} />
              </div>
              <h3 className="feature-card-title">Mining Development</h3>
              <p className="feature-card-text">
                Strategic partnerships and SPVs for mine activation and concession development.
              </p>
            </div>
            <div className="feature-card card-gold-accent">
              <div className="feature-card-icon">
                <Globe2 size={24} />
              </div>
              <h3 className="feature-card-title">Global Reach</h3>
              <p className="feature-card-text">
                Bridging African mining operations with international markets through Dubai hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="What We Do"
            subtitle="Our operations span three core verticals that form an integrated precious metals platform."
          />
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
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
                <Gem size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Gold Mining & Asset Development</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                Mine activation through strategic partnerships and SPVs. Concession development 
                with responsible extraction practices.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
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
                <TrendingUp size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Gold Trading & Offtake</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                Doré sourcing from verified mining partners. Export logistics and refinery 
                sales to global markets.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
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
                <Mountain size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Minerals & Metals Trading</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                Copper and other industrial metals trading. Processing and value-addition 
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Geographic Focus</h2>
            <div className="divider-gold"></div>
            <p className="section-description" style={{ color: 'var(--color-gray-light)' }}>
              Strategic operations connecting African mining regions to global markets
            </p>
          </div>
          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                Africa
              </div>
              <p style={{ color: 'var(--color-gray-light)' }}>
                West and Central African mining operations
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                Dubai
              </div>
              <p style={{ color: 'var(--color-gray-light)' }}>
                Global headquarters and trading hub
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <NavLink to="/geography" className="btn btn-outline">
              Explore Our Footprint <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Governance & Compliance</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                We operate with the highest standards of corporate governance and compliance. 
                Our commitment to responsible sourcing, AML/CFT protocols, and ethical business 
                practices underpins every transaction.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>Responsible Sourcing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>AML/CFT Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>Board Oversight</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <NavLink to="/governance" className="btn btn-secondary btn-lg">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insight Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Market Insight"
            subtitle="Reference metal market prices (LME indicative values)"
          />
          <div className="table-container">
            <table className="table" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>Metal</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>24h Change</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item) => (
                  <tr key={item.metal}>
                    <td style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>
                      {item.metal}
                    </td>
                    <td>{item.price}</td>
                    <td>{item.unit}</td>
                    <td style={{ color: item.change.startsWith('+') ? 'var(--color-success)' : 'var(--color-error)' }}>
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-gray)', marginTop: '1.5rem' }}>
            * Market data for reference only. Not for trading purposes. Actual prices may vary.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
