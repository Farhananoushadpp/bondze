import SectionTitle from "../components/SectionTitle";
import {
  Leaf,
  Users,
  Shield,
  Award,
  Target,
  Globe,
  Heart,
  Recycle,
} from "lucide-react";

const ESG = () => {
  return (
    <main>
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage: 'url("/images/image-05.webp")',
        }}
      >
        <div className="container">
          <h1 className="page-header-title">ESG Commitment</h1>
          <p className="page-header-subtitle">
            Environmental, Social, and Governance principles guiding our
            sustainable mining operations.
          </p>
        </div>
      </section>

      {/* ESG Overview */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our ESG Framework"
            subtitle="Comprehensive approach to sustainable and responsible mining"
          />
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            {/* Environmental Card */}
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-white)",
                border: "2px solid var(--bondze-gold)",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
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
                  margin: "0 auto 1.5rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Leaf size={40} />
              </div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "var(--bondze-charcoal)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Environmental
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                Minimizing environmental impact through sustainable mining
                practices, biodiversity conservation, and responsible resource
                management.
              </p>
            </div>

            {/* Social Card */}
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-white)",
                border: "2px solid var(--bondze-gold)",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
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
                  margin: "0 auto 1.5rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Users size={40} />
              </div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "var(--bondze-charcoal)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Social
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                Creating positive social impact through community development,
                employee welfare, and inclusive growth opportunities.
              </p>
            </div>

            {/* Governance Card */}
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-white)",
                border: "2px solid var(--bondze-gold)",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
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
                  margin: "0 auto 1.5rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Shield size={40} />
              </div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "var(--bondze-charcoal)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Governance
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                Upholding highest standards of corporate governance,
                transparency, and ethical business practices across all
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Environmental Stewardship"
            subtitle="Protecting our planet through responsible mining"
          />
          <div className="grid grid-2" style={{ gap: "2rem" }}>
            <div className="card" style={{ padding: "2rem" }}>
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
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  <Leaf size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Biodiversity Conservation
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Protecting local ecosystems
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Implementing comprehensive biodiversity programs to protect and
                restore local ecosystems, including wildlife corridors and
                habitat preservation.
              </p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
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
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  <Recycle size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Water Management
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Sustainable water usage
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Advanced water recycling and treatment systems to minimize
                consumption and ensure responsible water stewardship in mining
                operations.
              </p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
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
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  <Globe size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Climate Action
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Reducing carbon footprint
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Implementing renewable energy solutions and carbon reduction
                strategies to minimize our environmental impact and combat
                climate change.
              </p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
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
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  <Target size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Land Rehabilitation
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Progressive mine closure
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Comprehensive land rehabilitation programs to restore mining
                areas for sustainable post-mining land use and community
                benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Social Impact</h2>
            <div className="divider-gold"></div>
            <p
              className="section-description"
              style={{ color: "var(--text-light)" }}
            >
              Creating positive change in communities where we operate
            </p>
          </div>
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Heart size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Community Development
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                }}
              >
                Investing in education, healthcare, and infrastructure
                development in local communities to create lasting positive
                impact.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Users size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Employee Welfare
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                }}
              >
                Ensuring safe working conditions, fair wages, and professional
                development opportunities for all our employees.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Award size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Local Employment
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                }}
              >
                Prioritizing local hiring and skills development to create
                sustainable employment opportunities in mining regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Excellence */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Governance Excellence"
            subtitle="Upholding highest standards of corporate governance"
          />
          <div className="grid grid-2" style={{ gap: "2rem" }}>
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "2rem",
              }}
            >
              <Shield
                size={48}
                style={{ color: "var(--color-gold)", marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                  color: "white",
                }}
              >
                Compliance & Ethics
              </h3>
              <p
                style={{
                  lineHeight: "1.6",
                  color: "var(--color-gray-light)",
                  marginBottom: "1rem",
                }}
              >
                Strict adherence to international standards, local regulations,
                and ethical business practices across all operations.
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "var(--color-gray-light)",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Anti-corruption policies
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Regular compliance audits
                </li>
                <li>Ethics training programs</li>
              </ul>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-primary-dark)",
                padding: "2rem",
              }}
            >
              <Target size={48} style={{ marginBottom: "1rem" }} />
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                Transparency & Reporting
              </h3>
              <p
                style={{
                  lineHeight: "1.6",
                  color: "var(--color-primary)",
                  marginBottom: "1rem",
                }}
              >
                Regular ESG reporting and stakeholder engagement to ensure
                accountability and continuous improvement.
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "var(--color-primary)",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>Annual ESG reports</li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Stakeholder consultations
                </li>
                <li>Third-party certifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Metrics */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Our Impact"
            subtitle="Measurable progress towards sustainability goals"
          />
          <div className="grid grid-4" style={{ gap: "2rem" }}>
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                85%
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Local Employment
              </p>
            </div>
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                40%
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Water Recycling
              </p>
            </div>
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                500+
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Community Projects
              </p>
            </div>
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                0
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Lost-Time Incidents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Commitment */}
      <section className="section section-dark" style={{ padding: "3rem 0" }}>
        <div className="container">
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--bondze-charcoal)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--bondze-gold)",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "1rem", color: "var(--bondze-gold)" }}>
              Our ESG Pledge
            </h3>
            <p
              style={{
                color: "var(--text-light)",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              We are committed to conducting our business responsibly and
              sustainably, creating long-term value for our stakeholders while
              protecting the environment and contributing positively to society.
            </p>
            <a href="/contact" className="btn btn-primary">
              Learn More About Our ESG
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ESG;
