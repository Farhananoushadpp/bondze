import SectionTitle from "../components/SectionTitle";
import {
  Gem,
  TrendingUp,
  CircleDollarSign,
  Hammer,
  Zap,
  Factory,
  Battery,
  Cpu,
  Wrench,
  Shield,
  Scale,
  DollarSign,
  Star,
  Diamond,
  Target,
} from "lucide-react";

const Business = () => {
  return (
    <main>
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage: 'url("/images/image-02.webp")',
        }}
      >
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
                  color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                  color: "var(--text-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Primary focus on gold-bearing regions with established
                geological potential and developing infrastructure.
              </p>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--text-light)",
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
                  color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                  color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                    color: "var(--text-muted)",
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
                  color: "var(--text-light)",
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
                  color: "var(--text-light)",
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

      {/* Our Business Models */}
      <section className="section section-dark">
        <div className="container">
          <SectionTitle
            title="Our Business Models"
            subtitle="Integrated mining and trading operations creating value across the precious metals value chain"
          />

          {/* Business Models Visual Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "140px",
                  overflow: "hidden",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)",
                  border: "2px solid var(--bondze-gold)",
                  transform: "rotate(-2deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src="/images/image-05.webp"
                  alt="Business Model 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  width: "200px",
                  height: "140px",
                  overflow: "hidden",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)",
                  border: "2px solid var(--bondze-gold)",
                  transform: "rotate(2deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src="/images/image-06.webp"
                  alt="Business Model 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--text-light)",
                maxWidth: "600px",
                margin: "0 auto",
                fontStyle: "italic",
                opacity: 0.9,
              }}
            >
              Three interconnected pillars driving our sustainable value
              creation
            </p>
          </div>

          {/* Business Models Grid */}
          <div
            className="grid grid-3"
            style={{ gap: "2.5rem", marginTop: "2rem" }}
          >
            {/* Core Activities */}
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-white)",
                border: "2px solid var(--bondze-gold)",
                padding: "2.5rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--bondze-gold), var(--bondze-gold-light))",
                }}
              ></div>

              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, var(--bondze-blue), var(--bondze-blue-light))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Hammer size={36} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--bondze-charcoal)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Core Activities
              </h3>
              <div
                style={{
                  textAlign: "left",
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Acquisition
                  </strong>{" "}
                  of early-stage mining opportunities
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Development
                  </strong>{" "}
                  and operation of mining projects
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Trading
                  </strong>{" "}
                  of gold and minerals via Dubai and globally
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Future expansion
                  </strong>{" "}
                  into processing and refining
                </p>
              </div>
            </div>

            {/* Revenue Streams */}
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-white)",
                border: "2px solid var(--bondze-gold)",
                padding: "2.5rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--bondze-gold), var(--bondze-gold-light))",
                }}
              ></div>

              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, var(--bondze-blue), var(--bondze-blue-light))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem",
                  color: "var(--bondze-white)",
                }}
              >
                <CircleDollarSign size={36} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--bondze-charcoal)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Revenue Streams
              </h3>
              <div
                style={{
                  textAlign: "left",
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Mining production
                  </strong>{" "}
                  revenues
                </p>
                <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Trading margins
                  </strong>{" "}
                  from commodity sales
                </p>
                <p style={{ fontWeight: "500" }}>
                  <span
                    style={{
                      color: "var(--bondze-gold)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ◆
                  </span>
                  <strong style={{ color: "var(--bondze-charcoal)" }}>
                    Operational efficiencies
                  </strong>{" "}
                  and scale advantages
                </p>
              </div>
            </div>

            {/* Model Advantage */}
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-white)",
                border: "2px solid var(--bondze-gold)",
                padding: "2.5rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--bondze-gold), var(--bondze-gold-light))",
                }}
              ></div>

              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, var(--bondze-blue), var(--bondze-blue-light))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem",
                  color: "var(--bondze-white)",
                }}
              >
                <TrendingUp size={36} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--bondze-charcoal)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Model Advantage
              </h3>
              <div
                style={{
                  color: "var(--bondze-charcoal)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                  textAlign: "center",
                  fontStyle: "italic",
                  padding: "1rem",
                  backgroundColor: "var(--bondze-light)",
                  borderRadius: "var(--radius-md)",
                  borderLeft: "4px solid var(--bondze-gold)",
                }}
              >
                By Combining upstream mining with downstream trading, alongside
                geological explorations of new fields, BONDZE captures multiple
                layers of value while maintaining control over production flow.
              </div>
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

          {/* Trading Categories Visual Layout */}
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Trading Categories Grid */}
            <div
              className="grid grid-3"
              style={{ gap: "2rem", position: "relative", zIndex: "1" }}
            >
              {/* Critical Minerals */}
              <div
                className="card"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "var(--bondze-white)",
                  border: "2px solid var(--bondze-gold)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, var(--bondze-blue), var(--bondze-blue-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "var(--bondze-white)",
                  }}
                >
                  <Zap size={36} />
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--bondze-charcoal)",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Critical Minerals
                </h3>

                <p
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: "1.7",
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Strategic positioning in minerals essential for battery
                  technology and renewable energy infrastructure.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Zap
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Cobalt
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Battery
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Lithium
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Cpu
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Nickel
                  </div>
                </div>
              </div>

              {/* Industrial Metals */}
              <div
                className="card"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "var(--bondze-white)",
                  border: "2px solid var(--bondze-gold)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, var(--bondze-blue), var(--bondze-blue-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "var(--bondze-white)",
                  }}
                >
                  <Factory size={36} />
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--bondze-charcoal)",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Industrial Metals
                </h3>

                <p
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: "1.7",
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Trading operations in industrial metals supporting
                  infrastructure development and manufacturing.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Shield
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Zinc
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Scale
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Lead
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <DollarSign
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Tin
                  </div>
                </div>
              </div>

              {/* Precious Metals */}
              <div
                className="card"
                style={{
                  padding: "2.5rem",
                  backgroundColor: "var(--bondze-white)",
                  border: "2px solid var(--bondze-gold)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, var(--bondze-blue), var(--bondze-blue-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "var(--bondze-white)",
                  }}
                >
                  <Gem size={36} />
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--bondze-charcoal)",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Precious Metals
                </h3>

                <p
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: "1.7",
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Expanding precious metals portfolio beyond gold to include
                  other high-value metals.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Star
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Silver
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Diamond
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Platinum Group Metals
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--bondze-light)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "3px solid var(--bondze-gold)",
                      textAlign: "left",
                      fontWeight: "500",
                      color: "var(--bondze-charcoal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Target
                      size={18}
                      style={{ color: "var(--bondze-gold)", flexShrink: 0 }}
                    />
                    Strategic sourcing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Flowchart */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Business Model Structure"
            subtitle="Our integrated business operations and value chain processes"
          />
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              className="card"
              style={{
                padding: "2rem",
                backgroundColor: "var(--color-light)",
                border: "1px solid var(--color-gold)",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <img
                src="/business.png"
                alt="Business Model Flowchart"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "600px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "1.5rem" }}>
                <h4
                  style={{
                    fontSize: "1.125rem",
                    marginBottom: "0.5rem",
                    color: "var(--color-primary)",
                  }}
                >
                  Integrated Business Operations
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: "1.6",
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  Our business model integrates mining operations, trading
                  activities, and asset development to create value across the
                  precious metals supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section section-light" style={{ padding: "3rem 0" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "var(--text-dark)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <p
              style={{
                color: "var(--text-muted)",
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
