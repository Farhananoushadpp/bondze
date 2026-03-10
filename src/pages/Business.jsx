import SectionTitle from "../components/SectionTitle";
import { Gem, TrendingUp, CircleDollarSign, Hammer } from "lucide-react";

const Business = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Our Business</h1>
          <p className="page-header-subtitle">
            Integrated precious metals and minerals operations across the value
            chain.
          </p>
        </div>
      </section>

      {/* Gold Mining & Asset Development */}
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
                  <Hammer size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", margin: 0 }}>
                  Gold Mining & Asset Development
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
                We develop mining assets through strategic partnerships and
                Special Purpose Vehicles (SPVs), combining local operational
                expertise with institutional capital and governance standards.
              </p>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Mine Activation
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Reactivating dormant mining concessions through targeted
                  investment in equipment, infrastructure, and operational
                  teams. Focus on proven reserves with near-term production
                  potential.
                </p>
              </div>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  SPVs & Partnerships
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Structured joint ventures with local mining operators,
                  providing capital, equipment, and export capabilities while
                  maintaining local ownership and operational control.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Concession Development
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Systematic exploration and development of greenfield and
                  brownfield concessions, applying modern geological assessment
                  and responsible extraction practices.
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
              <Gem
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
                Mining Focus
              </h3>
              <p
                style={{
                  lineHeight: "1.7",
                  color: "var(--color-gray-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Primary focus on gold-bearing regions with established
                geological potential and developing infrastructure.
              </p>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--color-gray-light)",
                  paddingLeft: "1.5rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  West Africa gold belt
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Central African copper-gold zones
                </li>
                <li>Responsible extraction practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Trading & Offtake */}
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
              <TrendingUp size={64} style={{ marginBottom: "1.5rem" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                Trading Operations
              </h3>
              <p
                style={{
                  lineHeight: "1.7",
                  color: "var(--color-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                End-to-end trading infrastructure from doré sourcing to refinery
                delivery, with full compliance and documentation.
              </p>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--color-primary)",
                  paddingLeft: "1.5rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Verified supply chain
                </li>
                <li style={{ marginBottom: "0.5rem" }}>Secure logistics</li>
                <li>International refinery partnerships</li>
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
                  <TrendingUp size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", margin: 0 }}>
                  Gold Trading & Offtake
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
                We operate a comprehensive precious metals trading business,
                sourcing doré from verified mining partners and delivering to
                international refineries through secure, compliant channels.
              </p>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Doré Sourcing
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Direct offtake agreements with artisanal and small-scale
                  mining (ASM) cooperatives and mid-tier mining operations.
                  Rigorous due diligence on all supply chain partners.
                </p>
              </div>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Export Logistics
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Secure transport from mining regions to Dubai via established
                  logistics partners, with comprehensive insurance and
                  chain-of-custody documentation.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Refinery Sales
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Direct relationships with LBMA-approved refineries, ensuring
                  competitive pricing and efficient settlement for delivered
                  materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copper Mining */}
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
                  <CircleDollarSign size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", margin: 0 }}>Copper Mining</h2>
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
                Expanding into copper operations to diversify our metals
                portfolio and capitalize on growing global demand driven by
                energy transition and electrification trends.
              </p>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Processing & Value Addition
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Development of processing capabilities to upgrade raw
                  concentrates to higher-value products, capturing additional
                  margin in the value chain.
                </p>
              </div>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Concentrates Trading
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Trading copper concentrates from African mining operations to
                  international smelters and trading houses.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Semi-Processing
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Investment in semi-processing facilities to upgrade copper
                  materials before export, improving logistics efficiency and
                  product value.
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
              <CircleDollarSign
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
                Copper Focus
              </h3>
              <p
                style={{
                  lineHeight: "1.7",
                  color: "var(--color-gray-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Copper's critical role in the energy transition creates
                long-term demand tailwinds that align with our strategic
                development timeline.
              </p>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--color-gray-light)",
                  paddingLeft: "1.5rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Central African Copperbelt
                </li>
                <li style={{ marginBottom: "0.5rem" }}>Concentrate trading</li>
                <li>Value-addition opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Minerals & Metals Trading */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Other Minerals & Metals Trading"
            subtitle="Diversified trading operations across critical minerals"
          />
          <div className="card-grid card-grid-3">
            <div className="card" style={{ padding: "2rem" }}>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Critical Minerals
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Strategic positioning in minerals essential for battery
                technology and renewable energy infrastructure.
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>Cobalt</li>
                <li style={{ marginBottom: "0.5rem" }}>Lithium</li>
                <li>Nickel</li>
              </ul>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Industrial Metals
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Trading operations in industrial metals supporting
                infrastructure development and manufacturing.
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>Zinc</li>
                <li style={{ marginBottom: "0.5rem" }}>Lead</li>
                <li>Tin</li>
              </ul>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Precious Metals
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Expanding precious metals portfolio beyond gold to include other
                high-value metals.
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>Silver</li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Platinum Group Metals
                </li>
                <li>Strategic sourcing</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "var(--color-bg-primary)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <p
              style={{
                color: "var(--color-text-secondary)",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Note: Financial figures and specific contract values are
              confidential. Commercial terms available to qualified
              counterparties upon request.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Business;
