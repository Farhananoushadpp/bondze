import SectionTitle from "../components/SectionTitle";
import MapSection from "../components/MapSection";
import { MapPin, Building, Factory } from "lucide-react";

const Geography = () => {
  return (
    <main>
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage: 'url("/images/image-13.webp")',
        }}
      >
        <div className="container">
          <h1 className="page-header-title">Geographic Footprint</h1>
          <p className="page-header-subtitle">
            Strategic operations connecting African mining regions with global
            markets through Dubai.
          </p>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="section">
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
      </section> */}

      {/* Regional Breakdown */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {/* West Africa */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                <MapPin size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                West Africa
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                Primary mining operations across the West African gold belt,
                with focus on established and emerging mining jurisdictions.
              </p>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--color-bg-secondary)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Focus Areas
                </h4>
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "0.25rem" }}>
                    Gold mining concessions
                  </li>
                  <li style={{ marginBottom: "0.25rem" }}>
                    Doré sourcing networks
                  </li>
                  <li>Logistics corridors</li>
                </ul>
              </div>
            </div>

            {/* Central Africa */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                <Factory size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Central Africa
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                Copper and gold operations in the Central African Copperbelt,
                leveraging geological endowment and developing infrastructure.
              </p>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--color-bg-secondary)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Focus Areas
                </h4>
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "0.25rem" }}>
                    Copper concentrate trading
                  </li>
                  <li style={{ marginBottom: "0.25rem" }}>Gold operations</li>
                  <li>Value-addition facilities</li>
                </ul>
              </div>
            </div>

            {/* UAE (Dubai HQ) */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                <Building size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                UAE (Dubai HQ)
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                Global headquarters in Dubai Multi Commodities Centre (DMCC),
                serving as the central hub for trading, logistics, and corporate
                functions.
              </p>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--color-bg-secondary)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  HQ Functions
                </h4>
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "0.25rem" }}>
                    Global trading operations
                  </li>
                  <li style={{ marginBottom: "0.25rem" }}>
                    Refinery partnerships
                  </li>
                  <li>Corporate governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Geographic Coverage</h2>
            <div className="divider-gold"></div>
          </div>

          {/* Geographic Coverage Visual Layout */}
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Primary Regions - 3 Column Layout */}
            <div style={{ marginBottom: "3rem" }}>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--bondze-gold)",
                  marginBottom: "2.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Primary Operations
              </h3>

              <div className="grid grid-3" style={{ gap: "2.5rem" }}>
                {/* West Africa */}
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
                  {/* Top Border Accent */}
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

                  {/* Icon */}
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
                    <MapPin size={40} />
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
                    West Africa
                  </h3>

                  <div
                    style={{
                      textAlign: "left",
                      color: "var(--text-muted)",
                      lineHeight: "1.8",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Primary Focus:
                      </strong>{" "}
                      Gold mining operations
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Key Regions:
                      </strong>{" "}
                      Ghana, Mali, Burkina Faso
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Activities:
                      </strong>{" "}
                      Mine development, doré sourcing
                    </div>
                    <div
                      style={{
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Advantage:
                      </strong>{" "}
                      Established mining infrastructure
                    </div>
                  </div>
                </div>

                {/* Central Africa */}
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
                  {/* Top Border Accent */}
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

                  {/* Icon */}
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
                    <Factory size={40} />
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
                    Central Africa
                  </h3>

                  <div
                    style={{
                      textAlign: "left",
                      color: "var(--text-muted)",
                      lineHeight: "1.8",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Primary Focus:
                      </strong>{" "}
                      Copper and gold operations
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Key Regions:
                      </strong>{" "}
                      DRC, Zambia, Congo
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Activities:
                      </strong>{" "}
                      Copper trading, processing
                    </div>
                    <div
                      style={{
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Advantage:
                      </strong>{" "}
                      Rich mineral deposits
                    </div>
                  </div>
                </div>

                {/* Middle East Hub */}
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
                  {/* Top Border Accent */}
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

                  {/* Icon */}
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
                    <Building size={40} />
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
                    Middle East Hub
                  </h3>

                  <div
                    style={{
                      textAlign: "left",
                      color: "var(--text-muted)",
                      lineHeight: "1.8",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Primary Focus:
                      </strong>{" "}
                      Global trading operations
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Location:
                      </strong>{" "}
                      Dubai DMCC
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Activities:
                      </strong>{" "}
                      Trading, logistics, finance
                    </div>
                    <div
                      style={{
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Advantage:
                      </strong>{" "}
                      Strategic global hub
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Regions - 2 Column Layout */}
            <div>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--bondze-gold)",
                  marginBottom: "2.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Expansion & Global Reach
              </h3>

              <div className="grid grid-2" style={{ gap: "2.5rem" }}>
                {/* East Africa */}
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
                  {/* Top Border Accent */}
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

                  {/* Icon */}
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
                    <MapPin size={40} />
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
                    East Africa
                  </h3>

                  <div
                    style={{
                      textAlign: "left",
                      color: "var(--text-muted)",
                      lineHeight: "1.8",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Primary Focus:
                      </strong>{" "}
                      Exploration and development
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Key Regions:
                      </strong>{" "}
                      Tanzania, Kenya, Ethiopia
                    </div>
                    <div
                      style={{
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Status:
                      </strong>{" "}
                      Emerging opportunities
                    </div>
                  </div>
                </div>

                {/* Global Markets */}
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
                  {/* Top Border Accent */}
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

                  {/* Icon */}
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
                    <Building size={40} />
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
                    Global Markets
                  </h3>

                  <div
                    style={{
                      textAlign: "left",
                      color: "var(--text-muted)",
                      lineHeight: "1.8",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Trading Partners:
                      </strong>{" "}
                      Asia, Europe, Americas
                    </div>
                    <div
                      style={{
                        marginBottom: "1rem",
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Refinery Network:
                      </strong>{" "}
                      LBMA-approved facilities
                    </div>
                    <div
                      style={{
                        padding: "0.75rem",
                        backgroundColor: "var(--bondze-light)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: "3px solid var(--bondze-gold)",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--bondze-gold)",
                          marginRight: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      <strong style={{ color: "var(--bondze-charcoal)" }}>
                        Market Access:
                      </strong>{" "}
                      Through Dubai hub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Detail */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                Operational Infrastructure
              </h2>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--color-text-secondary)",
                  marginBottom: "2rem",
                }}
              >
                Our geographic footprint is supported by a network of
                operational infrastructure that ensures secure, efficient, and
                compliant movement of materials from mine to market.
              </p>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Logistics Network
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Established relationships with logistics providers across
                  African mining regions, with secure transport routes to export
                  hubs.
                </p>
              </div>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Export Gateways
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Strategic positioning near major African ports with
                  established customs and export documentation processes.
                </p>
              </div>
              <div className="card">
                <h4 style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
                  Dubai Hub
                </h4>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  DMCC-licensed operations with direct access to global precious
                  metals markets and refinery networks.
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "3rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "white",
                }}
              >
                Security & Compliance
              </h3>
              <p
                style={{
                  lineHeight: "1.7",
                  color: "var(--color-gray-light)",
                  marginBottom: "1.5rem",
                }}
              >
                All geographic operations are conducted with strict adherence
                to:
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "var(--color-gray-light)",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.75rem" }}>
                  Local mining regulations and licensing
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  International AML/CFT standards
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  Responsible sourcing frameworks
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  Environmental compliance
                </li>
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
            <p
              className="section-description"
              style={{ color: "var(--color-gray-light)" }}
            >
              Measured geographic expansion aligned with operational
              capabilities and market opportunities
            </p>
          </div>
          <div className="grid grid-3">
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--color-gold)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "var(--color-text-light)",
                  marginBottom: "1rem",
                }}
              >
                Near-term
              </h3>
              <p
                style={{ color: "var(--color-gray-light)", lineHeight: "1.7" }}
              >
                Deepening presence in existing West and Central African
                operations through additional concessions and trading
                partnerships.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--color-gold)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "var(--color-text-light)",
                  marginBottom: "1rem",
                }}
              >
                Medium-term
              </h3>
              <p
                style={{ color: "var(--color-gray-light)", lineHeight: "1.7" }}
              >
                Selective expansion to adjacent mining jurisdictions with proven
                geological potential and stable operating conditions.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--color-gold)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "var(--color-text-light)",
                  marginBottom: "1rem",
                }}
              >
                Long-term
              </h3>
              <p
                style={{ color: "var(--color-gray-light)", lineHeight: "1.7" }}
              >
                Evaluation of opportunities in emerging mining regions, balanced
                against risk management and institutional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section" style={{ padding: "3rem 0" }}>
        <div className="container">
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-secondary)",
              borderRadius: "var(--radius-lg)",
              borderLeft: "4px solid var(--color-gold)",
            }}
          >
            <p
              style={{
                color: "var(--color-text-secondary)",
                margin: 0,
                fontSize: "0.875rem",
                lineHeight: "1.7",
              }}
            >
              <strong>Operational Note:</strong> Specific mine locations,
              concession boundaries, and detailed operational sites are
              confidential for security and commercial reasons. All operations
              are conducted with proper licensing and regulatory compliance in
              each jurisdiction. For partnership inquiries, please contact our
              team.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Geography;
