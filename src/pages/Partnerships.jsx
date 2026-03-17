import SectionTitle from "../components/SectionTitle";
import { Users, Truck, GraduationCap, Building2 } from "lucide-react";

const Partnerships = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Partnerships</h1>
          <p className="page-header-subtitle">
            Strategic relationships across the precious metals value chain.
          </p>
        </div>
      </section>

      {/* Mining Partners */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  <Building2 size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", margin: 0 }}>Mining Partners</h2>
              </div>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--color-text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                We partner with local mining operators, cooperatives, and
                concession holders across African mining regions. Our
                partnerships combine local operational expertise with capital,
                equipment, and export capabilities.
              </p>
              <div className="card" style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Joint Venture Structure
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  SPV-based partnerships that maintain local ownership while
                  providing access to international markets and institutional
                  standards.
                </p>
              </div>
              <div className="card" style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Technical Support
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Provision of mining equipment, processing technology, and
                  technical advisory to improve operational efficiency.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Market Access
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Direct export channels and refinery relationships that capture
                  better pricing for mining partners.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <Users
                size={64}
                style={{ color: "var(--color-gold)", marginBottom: "1.5rem" }}
              />
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "white",
                }}
              >
                Partnership Benefits
              </h3>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--color-gray-light)",
                  paddingLeft: "1.5rem",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.75rem" }}>
                  Fair pricing and transparent terms
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  Equipment and technical support
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  Compliance and governance assistance
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  Secure payment and settlement
                </li>
                <li>Long-term relationship focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Refiners */}
      <section className="section section-light">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-primary-dark)",
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <Truck size={64} style={{ marginBottom: "1.5rem" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                Logistics Network
              </h3>
              <p
                style={{
                  lineHeight: "1.7",
                  color: "var(--color-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Secure, compliant transport and refining relationships ensure
                efficient movement of materials from mine to market.
              </p>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--color-primary)",
                  paddingLeft: "1.5rem",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Licensed logistics providers
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Comprehensive insurance coverage
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Chain of custody documentation
                </li>
                <li>Secure transport protocols</li>
              </ul>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "var(--radius-lg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Truck size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", margin: 0 }}>
                  Logistics & Refiners
                </h2>
              </div>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--color-text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                Our logistics and refinery partnerships form the critical link
                between African mining operations and international markets. We
                work with established, licensed providers that meet our
                compliance and security standards.
              </p>
              <div className="card" style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Refinery Relationships
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Direct relationships with LBMA-approved refineries ensure
                  competitive pricing and reliable settlement.
                </p>
              </div>
              <div className="card" style={{ marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Secure Transport
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  End-to-end logistics management with comprehensive insurance,
                  tracking, and chain-of-custody documentation.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Assaying Services
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  Independent assay verification at multiple points in the
                  supply chain to ensure accuracy and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Advisors"
            subtitle="Expert guidance across technical, legal, and strategic domains"
          />
          <div className="grid grid-3">
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--bondze-white)",
                }}
              >
                <GraduationCap size={28} />
              </div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                Technical Advisors
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                }}
              >
                Geological and mining engineering expertise for project
                evaluation, operational optimization, and resource estimation.
              </p>
            </div>
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Building2 size={28} />
              </div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                Legal & Compliance
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                }}
              >
                Specialized legal counsel for mining law, international trade,
                compliance, and corporate governance matters.
              </p>
            </div>
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Users size={28} />
              </div>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                Strategic Advisors
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                }}
              >
                Industry veterans providing guidance on market dynamics,
                partnership strategy, and institutional investor relations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Placeholder */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Our Partner Network
            </h3>
            <div className="divider-gold"></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                style={{
                  width: "180px",
                  height: "100px",
                  backgroundColor: "var(--color-bg-primary)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{ color: "var(--color-gray)", fontSize: "0.875rem" }}
                >
                  Partner Logo
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--color-gray)",
              fontSize: "0.75rem",
              marginTop: "2rem",
            }}
          >
            * Partner logos displayed with permission. Specific partner
            identities available upon request for qualified counterparties.
          </p>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
          >
            <h2
              style={{ fontSize: "2rem", marginBottom: "1rem", color: "white" }}
            >
              Become a Partner
            </h2>
            <div className="divider-gold" style={{ margin: "1rem auto" }}></div>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "var(--color-gray-light)",
                marginBottom: "2rem",
              }}
            >
              We are always interested in exploring partnerships with
              responsible mining operators, logistics providers, and strategic
              advisors who share our commitment to institutional standards and
              ethical practices.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partnerships;
