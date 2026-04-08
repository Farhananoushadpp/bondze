import SectionTitle from "../components/SectionTitle";
import {
  Target,
  Compass,
  Lightbulb,
  Globe,
  Building2,
  Users,
  Award,
  Calendar,
  TrendingUp,
  Shield,
} from "lucide-react";

const About = () => {
  // Leadership team data
  const leadershipTeam = [
    {
      name: "NGALIM LOUIS NZDE",
      position: "CEO/CHAIRMAN OF THE BOARD OF DIRECTORS",
      image: "/images/image-29.webp",
    },
    {
      name: "PRAKASAN KAPPANAKKAL",
      position: "Middle East & Asia Market Advisor",
      image: "/images/image-30.webp",
    },
    {
      name: "KITTY ZHOU HAIOU",
      position:
        "Vice Chairlady, Director Of International Relations and Global Logistics Advisor",
      image: "/images/image-32.webp",
    },
    {
      name: "ADAMO NJIENE NKUMBO",
      position:
        "African Business PRO Advisor and Middle East Market Development",

      image: "/images/image-31.webp",
    },
    {
      name: "Hon WIDJILOWU MARTIN",
      position: "Group Strategic Advisor",
      image: "/images/image-33.webp",
    },
    {
      name: "EDDY N. FRU",
      position: "Group Financial Advisor WALL STREET/Dallas USA",
      image: "/images/image-34.webp",
    },
    {
      name: "SHAKIR KHAN",
      position: "Market Advisor",
      image: "/images/image-35.webp",
    },
  ];

  // Company milestones
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "BONDZE established in Dubai DMCC with focus on African precious metals",
      icon: <Building2 size={24} />,
    },
    {
      year: "2021",
      title: "First Trading Operations",
      description:
        "Commenced gold doré trading from West African mining partners",
      icon: <Target size={24} />,
    },
    {
      year: "2022",
      title: "Strategic Expansion",
      description:
        "Expanded operations to Central Africa and established copper trading vertical",
      icon: <Globe size={24} />,
    },
    {
      year: "2023",
      title: "Institutional Recognition",
      description:
        "Achieved key compliance certifications and institutional partnerships",
      icon: <Award size={24} />,
    },
    {
      year: "2024",
      title: "Platform Growth",
      description:
        "Scaled trading volumes and expanded mining development partnerships",
      icon: <Calendar size={24} />,
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage: 'url("/images/image-01.webp")',
        }}
      >
        <div className="container">
          <h1 className="page-header-title">About BONDZE</h1>
          <p className="page-header-subtitle">
            Building institutional-grade precious metals operations across
            Africa and global markets.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
                Company Overview
              </h2>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                BONDZE Precious Metals and Mineral Trading LLC is a corporate
                platform operating across the precious metals value and minerals
                chain. Founded with a commitment to institutional discipline, we
                bridge African mining operations with international markets
                through our Dubai headquarters.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--text-muted)",
                }}
              >
                Our operations span mining development, gold and copper trading,
                and strategic partnerships that create value for all
                stakeholders. We operate with transparency, compliance, and a
                long-term vision for sustainable growth.
              </p>
            </div>
            <div className="company-overview-image">
              <img src="/overview.jpg" alt="Company Overview" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Leadership Team"
            subtitle="Experienced professionals guiding our strategic vision and operational excellence"
          />
          <div style={{ marginBottom: "3rem" }}>
            {/* CEO Card - Full Width First Row */}
            <div
              className="card ceo-highlight"
              style={{
                padding: "0",
                overflow: "hidden",
                border: "2px solid var(--bondze-gold)",
                boxShadow: "0 8px 32px rgba(212, 175, 55, 0.2)",
                transform: "scale(1.02)",
                transition: "all 0.3s ease",
                maxWidth: "280px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: "var(--bondze-light)",
                    backgroundImage: `url(${leadershipTeam[0].image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      width: "48px",
                      height: "48px",
                      backgroundColor: "var(--bondze-gold)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--bondze-white)",
                    }}
                  >
                    <Users size={24} />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: "var(--bondze-gold)",
                      color: "var(--bondze-white)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    CEO
                  </div>
                  
                </div>
                <div style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                      color: "var(--bondze-charcoal)",
                      textAlign: "center",
                    }}
                  >
                    {leadershipTeam[0].name}
                  </h3>
                  <p
                    style={{
                      color: "var(--bondze-gold)",
                      fontWeight: "500",
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {leadershipTeam[0].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members - Grid Layout */}
          <div className="grid grid-4" style={{ gap: "1.5rem" }}>
            {leadershipTeam.slice(1).map((member, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "0", overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      backgroundColor: "var(--bondze-light)",
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        width: "48px",
                        height: "48px",
                        backgroundColor: "var(--bondze-gold)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--bondze-white)",
                      }}
                    >
                      <Users size={24} />
                    </div>
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "var(--bondze-charcoal)",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--bondze-gold)",
                        fontWeight: "500",
                        marginBottom: "1rem",
                      }}
                    >
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Our Mission"
            subtitle="To identify and develop high-potential mineral assets,operate efficiently and responsibly.Creating sustainable value for Investors,Partners and Host Communities."
          />
          <div
            className="grid grid-2"
            style={{ gap: "2rem", marginTop: "3rem" }}
          >
            <div
              className="card"
              style={{ textAlign: "center", padding: "2.5rem" }}
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
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Discipline
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                Operating with institutional discipline in every transaction,
                partnership, and decision.
              </p>
            </div>
            <div
              className="card"
              style={{ textAlign: "center", padding: "2.5rem" }}
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
                <Lightbulb size={28} />
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Value Creation
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                Creating sustainable value for mining partners, investors, and
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Core Values</h2>
            <div className="divider-gold"></div>
          </div>
          <div
            className="grid grid-3"
            style={{ gap: "1.5rem", maxWidth: "1200px", margin: "0 auto" }}
          >
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Target size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "var(--bondze-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Integrity
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                Transparent and ethical operations in all business activities.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
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
                  fontWeight: "600",
                  color: "var(--bondze-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Discipline
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                Structured execution and financial prudence in decision-making.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Globe size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "var(--bondze-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Sustainability
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                Responsible environmental and social practices.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Lightbulb size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "var(--bondze-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Long-Term Value
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                Building enduring assets and relationships for sustainable
                growth.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <Shield size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "var(--bondze-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Responsibility
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                Accountability and commitment to ethical business practices.
              </p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "var(--bondze-charcoal)",
                border: "1px solid var(--bondze-gold)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "var(--bondze-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--bondze-white)",
                }}
              >
                <TrendingUp size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "var(--bondze-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Excellence
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                Pursuit of highest standards in all operational aspects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Long-term Vision"
            subtitle="To become a leading African-focused mining and commodities group,delivering long-term value through responsible resource development and strategic global trading."
          />
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* <p
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.8",
                color: "var(--text-dark)",
                marginBottom: "2rem",
              }}
            >
              We envision BONDZE as a leading institutional platform for
              precious metals, recognized for our integrity, operational
              excellence, and sustainable impact on the communities and markets
              we serve.
            </p> */}
            <div className="grid grid-2">
              <div className="card card-gold-accent">
                <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Strategic Growth
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                  Measured expansion of mining assets, trading volumes, and
                  geographic footprint through organic growth and strategic
                  partnerships.
                </p>
              </div>
              <div className="card card-gold-accent">
                <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Institutional Standards
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                  Continuous improvement of governance, compliance, and
                  operational standards to meet institutional investor
                  requirements.
                </p>
              </div>
              <div className="card card-gold-accent">
                <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Sustainable Impact
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                  Positive contribution to local mining communities through
                  responsible sourcing, job creation, and environmental
                  stewardship.
                </p>
              </div>
              <div className="card card-gold-accent">
                <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Market Recognition
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                  Establishing BONDZE as a trusted counterparty for
                  international refiners, trading houses, and institutional
                  investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Strategic Focus</h2>
            <div className="divider-gold"></div>
          </div>

          {/* Strategic Focus Visual Header */}
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
                  src="/images/image-07.webp"
                  alt="Strategic Focus 1"
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
                  src="/images/image-08.webp"
                  alt="Strategic Focus 2"
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
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                fontStyle: "italic",
              }}
            >
              Our three-phase strategic approach drives sustainable growth and
              market leadership
            </p>
          </div>

          {/* Strategic Phases Timeline */}
          <div
            style={{
              position: "relative",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                right: "0",
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--bondze-gold), var(--bondze-gold-light))",
                zIndex: "1",
              }}
            ></div>

            <div
              className="grid grid-3"
              style={{ gap: "2rem", position: "relative", zIndex: "2" }}
            >
              {/* Current Phase */}
              <div
                className="card"
                style={{
                  backgroundColor: "var(--bondze-white)",
                  border: "2px solid var(--bondze-gold)",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, var(--bondze-gold), var(--bondze-gold-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "var(--bondze-white)",
                    boxShadow: "0 5px 15px rgba(212, 175, 55, 0.3)",
                    position: "relative",
                  }}
                >
                  <Target size={36} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "30px",
                      height: "30px",
                      backgroundColor: "var(--bondze-gold)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      color: "var(--bondze-white)",
                      border: "3px solid var(--bondze-white)",
                    }}
                  >
                    1
                  </div>
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
                  CURRENT PHASE
                </h3>
                <div
                  style={{
                    textAlign: "left",
                    color: "var(--text-muted)",
                    lineHeight: "1.8",
                    fontSize: "0.95rem",
                  }}
                >
                  <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Mining Operations
                  </p>
                  <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Trading Infrastructure
                  </p>
                  <p style={{ fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Partnership Development
                  </p>
                </div>
              </div>

              {/* Expansion Phase */}
              <div
                className="card"
                style={{
                  backgroundColor: "var(--bondze-white)",
                  border: "2px solid var(--bondze-gold)",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, var(--bondze-gold), var(--bondze-gold-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "var(--bondze-white)",
                    boxShadow: "0 5px 15px rgba(212, 175, 55, 0.3)",
                    position: "relative",
                  }}
                >
                  <TrendingUp size={36} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "30px",
                      height: "30px",
                      backgroundColor: "var(--bondze-gold)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      color: "var(--bondze-white)",
                      border: "3px solid var(--bondze-white)",
                    }}
                  >
                    2
                  </div>
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
                  EXPANSION PHASE
                </h3>
                <div
                  style={{
                    textAlign: "left",
                    color: "var(--text-muted)",
                    lineHeight: "1.8",
                    fontSize: "0.95rem",
                  }}
                >
                  <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Copper Operations
                  </p>
                  <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Processing Facilities
                  </p>
                  <p style={{ fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Market Expansion
                  </p>
                </div>
              </div>

              {/* Diversification Phase */}
              <div
                className="card"
                style={{
                  backgroundColor: "var(--bondze-white)",
                  border: "2px solid var(--bondze-gold)",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, var(--bondze-gold), var(--bondze-gold-light))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "var(--bondze-white)",
                    boxShadow: "0 5px 15px rgba(212, 175, 55, 0.3)",
                    position: "relative",
                  }}
                >
                  <Globe size={36} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "30px",
                      height: "30px",
                      backgroundColor: "var(--bondze-gold)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      color: "var(--bondze-white)",
                      border: "3px solid var(--bondze-white)",
                    }}
                  >
                    3
                  </div>
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
                  DIVERSIFICATION PHASE
                </h3>
                <div
                  style={{
                    textAlign: "left",
                    color: "var(--text-muted)",
                    lineHeight: "1.8",
                    fontSize: "0.95rem",
                  }}
                >
                  <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Critical Minerals
                  </p>
                  <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Vertical Integration
                  </p>
                  <p style={{ fontWeight: "500" }}>
                    <span style={{ color: "var(--bondze-gold)" }}>●</span>{" "}
                    Technology Integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Business Philosophy</h2>
            <div className="divider-gold"></div>
            <p
              className="section-description"
              style={{ color: "var(--text-light)" }}
            >
              Our approach is built on core principles that guide every decision
            </p>
          </div>
          <div
            className="grid grid-2"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--text-light)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Trust Through Transparency
              </h3>
              <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
                We build lasting relationships through honest communication,
                clear documentation, and consistent execution. Every transaction
                reflects our commitment to integrity.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--text-light)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Partnership, Not Extraction
              </h3>
              <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
                We view our mining partners as long-term collaborators, working
                together to develop sustainable operations that benefit all
                parties.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--text-light)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Institutional Discipline
              </h3>
              <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
                We apply rigorous standards to compliance, risk management, and
                operational excellence—meeting the expectations of institutional
                partners.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                borderLeft: "2px solid var(--text-light)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Long-term Focus
              </h3>
              <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
                We prioritize sustainable value creation over short-term gains,
                investing in relationships and infrastructure for lasting
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Africa */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                Why Africa
              </h2>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                Africa holds some of the world's richest mineral reserves, with
                significant untapped potential in precious metals and industrial
                minerals. The continent offers a unique combination of
                geological endowment and growing infrastructure development.
              </p>
              <ul
                style={{
                  margin: "0",
                  padding: "0 0 0 1.5rem",
                  listStyle: "none",
                }}
              >
                {[
                  "Rich endowment of gold, copper, and critical minerals",
                  "Growing regulatory frameworks supporting responsible mining",
                  "Developing infrastructure connecting mining regions to ports",
                  "Local partnerships creating shared value",
                  "Long-term growth potential as global demand increases",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "0.75rem 0",
                      borderBottom: "1px solid var(--color-border)",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "var(--text-light)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-africa-image">
              <img src="/why.jpg" alt="Why Africa" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section className="section section-light">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div className="why-dubai-image">
              <img src="/whydubai.jpg" alt="Why Dubai" />
            </div>
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                Why Dubai
              </h2>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                Dubai Multi Commodities Centre (DMCC) is one of the world's
                leading commodities trading hubs, offering a world-class
                infrastructure for precious metals trading, refining, and
                logistics.
              </p>
              <ul
                style={{
                  margin: "0",
                  padding: "0 0 0 1.5rem",
                  listStyle: "none",
                }}
              >
                {[
                  "Strategic location connecting East and West",
                  "World-class refinery and logistics infrastructure",
                  "Strong regulatory environment (DMCC, DMCCA)",
                  "Access to global trading networks",
                  "Tax-efficient operational base",
                  "Established precious metals ecosystem",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "0.75rem 0",
                      borderBottom: "1px solid var(--color-border)",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "var(--text-light)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-light">Company Milestones</h2>
            <div className="divider-gold"></div>
            <p
              className="section-description"
              style={{ color: "var(--text-light)" }}
            >
              Our journey of growth and achievement in the precious metals
              sector
            </p>
          </div>

          {/* Milestones Timeline */}
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "3px",
                background:
                  "linear-gradient(180deg, var(--bondze-gold), var(--bondze-gold-light))",
                transform: "translateX(-50%)",
                zIndex: "1",
              }}
            ></div>

            {/* Milestone Cards */}
            <div style={{ position: "relative", zIndex: "2" }}>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                    marginBottom: "3rem",
                    position: "relative",
                  }}
                >
                  {/* Milestone Card */}
                  <div
                    className="card"
                    style={{
                      width: "45%",
                      padding: "2.5rem",
                      backgroundColor: "var(--bondze-white)",
                      border: "2px solid var(--bondze-gold)",
                      boxShadow: "0 15px 35px rgba(212, 175, 55, 0.2)",
                      transform:
                        index % 2 === 0
                          ? "translateX(10px)"
                          : "translateX(-10px)",
                      transition: "all 0.3s ease",
                      position: "relative",
                    }}
                  >
                    {/* Year Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-15px",
                        left: index % 2 === 0 ? "auto" : "-15px",
                        right: index % 2 === 0 ? "-15px" : "auto",
                        width: "60px",
                        height: "60px",
                        background:
                          "linear-gradient(135deg, var(--bondze-gold), var(--bondze-gold-light))",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--bondze-white)",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        boxShadow: "0 5px 15px rgba(212, 175, 55, 0.4)",
                        border: "3px solid var(--bondze-white)",
                      }}
                    >
                      {milestone.year}
                    </div>

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
                        margin: "1rem auto 1.5rem",
                        color: "var(--bondze-white)",
                        boxShadow: "0 8px 20px rgba(27, 31, 59, 0.3)",
                      }}
                    >
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <h3
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: "700",
                        marginBottom: "1rem",
                        color: "var(--bondze-charcoal)",
                        textAlign: "center",
                        lineHeight: "1.3",
                      }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        lineHeight: "1.7",
                        fontSize: "1rem",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      {milestone.description}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "2.5rem",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "var(--bondze-gold)",
                      borderRadius: "50%",
                      border: "4px solid var(--bondze-white)",
                      boxShadow: "0 0 0 4px var(--bondze-gold-light)",
                      zIndex: "3",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
