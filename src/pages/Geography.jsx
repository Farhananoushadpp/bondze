import SectionTitle from '../components/SectionTitle';
import MapSection from '../components/MapSection';
import { MapPin, Building, Factory } from 'lucide-react';

const Geography = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Geographic Footprint</h1>
          <p className="page-header-subtitle">
            Strategic operations connecting African mining regions with global markets through Dubai.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Presence"
            subtitle="Operations spanning key mining regions and trading hubs"
          />
          <MapSection />
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-gray)' }}>
              * Map is illustrative. Exact locations are not disclosed for operational security.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {/* West Africa */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--color-gold)', 
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--color-primary-dark)'
              }}>
                <MapPin size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>West Africa</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Primary mining operations across the West African gold belt, with focus on 
                established and emerging mining jurisdictions.
              </p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  Focus Areas
                </h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  <li style={{ marginBottom: '0.25rem' }}>Gold mining concessions</li>
                  <li style={{ marginBottom: '0.25rem' }}>Doré sourcing networks</li>
                  <li>Logistics corridors</li>
                </ul>
              </div>
            </div>

            {/* Central Africa */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--color-gold)', 
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--color-primary-dark)'
              }}>
                <Factory size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Central Africa</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Copper and gold operations in the Central African Copperbelt, leveraging 
                geological endowment and developing infrastructure.
              </p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  Focus Areas
                </h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  <li style={{ marginBottom: '0.25rem' }}>Copper concentrate trading</li>
                  <li style={{ marginBottom: '0.25rem' }}>Gold operations</li>
                  <li>Value-addition facilities</li>
                </ul>
              </div>
            </div>

            {/* UAE (Dubai HQ) */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--color-gold)', 
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--color-primary-dark)'
              }}>
                <Building size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>UAE (Dubai HQ)</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Global headquarters in Dubai Multi Commodities Centre (DMCC), serving as 
                the central hub for trading, logistics, and corporate functions.
              </p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  HQ Functions
                </h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  <li style={{ marginBottom: '0.25rem' }}>Global trading operations</li>
                  <li style={{ marginBottom: '0.25rem' }}>Refinery partnerships</li>
                  <li>Corporate governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Detail */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Operational Infrastructure</h2>
              <div className="divider-gold" style={{ margin: '1rem 0' }}></div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                Our geographic footprint is supported by a network of operational infrastructure 
                that ensures secure, efficient, and compliant movement of materials from mine 
                to market.
              </p>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Logistics Network</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Established relationships with logistics providers across African mining regions, 
                  with secure transport routes to export hubs.
                </p>
              </div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Export Gateways</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Strategic positioning near major African ports with established customs 
                  and export documentation processes.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Dubai Hub</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  DMCC-licensed operations with direct access to global precious metals 
                  markets and refinery networks.
                </p>
              </div>
            </div>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              padding: '3rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>
                Security & Compliance
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                All geographic operations are conducted with strict adherence to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-gray-light)', margin: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>Local mining regulations and licensing</li>
                <li style={{ marginBottom: '0.75rem' }}>International AML/CFT standards</li>
                <li style={{ marginBottom: '0.75rem' }}>Responsible sourcing frameworks</li>
                <li style={{ marginBottom: '0.75rem' }}>Environmental compliance</li>
                <li>Export/import documentation requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Strategy */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Expansion Strategy</h2>
            <div className="divider-gold"></div>
            <p className="section-description" style={{ color: 'var(--color-gray-light)' }}>
              Measured geographic expansion aligned with operational capabilities and market opportunities
            </p>
          </div>
          <div className="grid grid-3">
            <div style={{ padding: '2rem', borderLeft: '2px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Near-term
              </h3>
              <p style={{ color: 'var(--color-gray-light)', lineHeight: '1.7' }}>
                Deepening presence in existing West and Central African operations 
                through additional concessions and trading partnerships.
              </p>
            </div>
            <div style={{ padding: '2rem', borderLeft: '2px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Medium-term
              </h3>
              <p style={{ color: 'var(--color-gray-light)', lineHeight: '1.7' }}>
                Selective expansion to adjacent mining jurisdictions with proven geological 
                potential and stable operating conditions.
              </p>
            </div>
            <div style={{ padding: '2rem', borderLeft: '2px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Long-term
              </h3>
              <p style={{ color: 'var(--color-gray-light)', lineHeight: '1.7' }}>
                Evaluation of opportunities in emerging mining regions, balanced against 
                risk management and institutional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ 
            padding: '2rem', 
            backgroundColor: 'var(--color-bg-secondary)', 
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.875rem', lineHeight: '1.7' }}>
              <strong>Operational Note:</strong> Specific mine locations, concession boundaries, 
              and detailed operational sites are confidential for security and commercial reasons. 
              All operations are conducted with proper licensing and regulatory compliance in each 
              jurisdiction. For partnership inquiries, please contact our team.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Geography;
