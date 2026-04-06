import SectionTitle from "../components/SectionTitle";
import {
  MapPin,
  Building2,
  Users,
  TrendingUp,
  Calendar,
  Target,
} from "lucide-react";

const Projects = () => {
  return (
    <main>
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage: 'url("/images/image-11.webp")',
        }}
      >
        <div className="container">
          <h1 className="page-header-title">Projects</h1>
          <p className="page-header-subtitle">
            Current and developing mining projects across strategic African
            regions.
          </p>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Current Projects"
            subtitle="Active mining operations and development projects"
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
                  <MapPin size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Ghana Gold Project
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Ghana • Operational
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Established gold mining operation with proven reserves and
                steady production capacity. Currently producing doré for
                international markets.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  50,000 oz/year
                </span>
                <span
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Open Pit
                </span>
                <span
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Since 2020
                </span>
              </div>
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
                  <MapPin size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Mali Gold Project
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    Mali • Operational
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Joint venture mining operation with focus on sustainable mining
                practices and community development initiatives.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  30,000 oz/year
                </span>
                <span
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Underground
                </span>
                <span
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Since 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Projects */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Development Projects"
            subtitle="Projects in development and pre-production phases"
          />
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            <div className="card" style={{ padding: "2rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                <Target size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Burkina Faso Exploration
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                  textAlign: "center",
                }}
              >
                Advanced exploration project with promising drill results and
                initial resource estimates.
              </p>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                  }}
                >
                  Feasibility Study
                </span>
              </div>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                <Building2 size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                DRC Copper Project
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                  textAlign: "center",
                }}
              >
                Copper concentrate development project in Central African
                Copperbelt with infrastructure planning underway.
              </p>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                  }}
                >
                  Pre-Development
                </span>
              </div>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                <TrendingUp size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Processing Facility
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  fontSize: "0.875rem",
                  textAlign: "center",
                }}
              >
                Regional processing facility development to support multiple
                mining operations and value-addition.
              </p>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.75rem",
                  }}
                >
                  Planning Phase
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Pipeline */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Project Pipeline</h2>
            <div className="divider-gold"></div>
            <p
              className="section-description"
              style={{ color: "var(--text-light)" }}
            >
              Strategic project development timeline and milestones
            </p>
          </div>
          <div className="grid grid-4" style={{ gap: "1.5rem" }}>
            <div style={{ textAlign: "center", padding: "1.5rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  color: "var(--bondze-white)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontWeight: "600",
                }}
              >
                1
              </div>
              <h4
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Exploration
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Geological assessment and initial drilling programs
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "1.5rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  color: "var(--bondze-white)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontWeight: "600",
                }}
              >
                2
              </div>
              <h4
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Feasibility
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Technical studies and economic evaluation
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "1.5rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  color: "var(--bondze-white)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontWeight: "600",
                }}
              >
                3
              </div>
              <h4
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Development
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Construction and infrastructure development
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "1.5rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  color: "var(--bondze-white)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontWeight: "600",
                }}
              >
                4
              </div>
              <h4
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  color: "var(--bondze-gold)",
                }}
              >
                Production
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Commercial production and operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Project Highlights"
            subtitle="Key achievements and operational excellence"
          />
          <div className="grid grid-2" style={{ gap: "2rem" }}>
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <Users
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
                Local Impact
              </h3>
              <p
                style={{
                  lineHeight: "1.6",
                  color: "var(--color-gray-light)",
                  marginBottom: "1rem",
                }}
              >
                Creating employment opportunities and supporting local
                communities through our mining operations.
              </p>
              <ul
                style={{
                  textAlign: "left",
                  color: "var(--color-gray-light)",
                  paddingLeft: "1.5rem",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  500+ local jobs created
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Community development programs
                </li>
                <li>Skills training and education support</li>
              </ul>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-primary-dark)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <Calendar size={48} style={{ marginBottom: "1rem" }} />
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                  color: "var(--color-primary-dark)",
                }}
              >
                Production Milestones
              </h3>
              <p
                style={{
                  lineHeight: "1.6",
                  color: "var(--color-primary)",
                  marginBottom: "1rem",
                }}
              >
                Consistent production growth and operational achievements across
                our project portfolio.
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
                  80,000+ ounces produced
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  3 years consecutive production
                </li>
                <li>Zero lost-time incidents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry */}
      <section className="section section-light" style={{ padding: "3rem 0" }}>
        <div className="container">
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-bg-primary)",
              borderRadius: "var(--radius-lg)",
              borderLeft: "4px solid var(--color-gold)",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>Partnership Opportunities</h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              We actively seek partnerships with local communities, governments,
              and investors for project development and expansion opportunities.
            </p>
            <a href="/contact" className="btn btn-primary">
              Discuss Partnership
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
