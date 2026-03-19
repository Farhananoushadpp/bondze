import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Gem,
  Mountain,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Clock,
  BarChart3,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  // Market data for reference prices - Updated for Vercel deployment
  const marketData = [
    { metal: "Gold", price: "2,045.30", change: "+1.2%", unit: "USD/oz" },
    { metal: "Copper", price: "8,450.00", change: "-0.4%", unit: "USD/tonne" },
    { metal: "Silver", price: "23.85", change: "+0.8%", unit: "USD/oz" },
  ];

  // Competitive advantages
  const advantages = [
    {
      icon: <Award size={32} />,
      title: "Institutional Excellence",
      description:
        "Bank-grade processes and compliance frameworks that meet global standards.",
    },
    {
      icon: <Users size={32} />,
      title: "Local Partnerships",
      description:
        "Deep relationships with African mining communities and stakeholders.",
    },
    {
      icon: <Clock size={32} />,
      title: "Market Agility",
      description:
        "Rapid response to market opportunities with flexible trading strategies.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and mitigation across all operations.",
    },
  ];

  // Latest insights and news
  const newsInsights = [
    {
      title: "Gold Market Outlook Q1 2024",
      excerpt:
        "Analysis of gold price trends and market dynamics affecting African mining operations.",
      date: "March 2024",
      category: "Market Analysis",
    },
    {
      title: "New Partnership in West Africa",
      excerpt:
        "BONDZE announces strategic partnership with leading gold mining operation in Ghana.",
      date: "February 2024",
      category: "Company News",
    },
    {
      title: "Responsible Sourcing Certification",
      excerpt:
        "Achievement of international responsible sourcing standards for all trading operations.",
      date: "January 2024",
      category: "Compliance",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="/homebanner.png"
            alt="BONDZE Precious Metals"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Connecting Africa's minerals to global markets
          </h1>
          <p className="hero-subtitle">
            BONDZE operates across mining development and precious metals
            trading with institutional discipline.
          </p>
          <div className="hero-actions">
            <NavLink to="/partnerships" className="btn btn-primary btn-lg">
              Partner with us{" "}
              <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
              <div className="feature-card-image">
                <img src="/who1.jpg" alt="Precious Metals" />
              </div>
              <h3 className="feature-card-title">Precious Metals</h3>
              <p className="feature-card-text">
                Specialized in gold and silver trading with direct relationships
                across African mining regions.
              </p>
            </div>
            <div className="feature-card card-gold-accent">
              <div className="feature-card-image">
                <img src="/who2.jpg" alt="Mining Development" />
              </div>
              <h3 className="feature-card-title">Mining Development</h3>
              <p className="feature-card-text">
                Strategic partnerships and SPVs for mine activation and
                concession development.
              </p>
            </div>
            <div className="feature-card card-gold-accent">
              <div className="feature-card-image">
                <img src="/who3.jpg" alt="Global Reach" />
              </div>
              <h3 className="feature-card-title">Global Reach</h3>
              <p className="feature-card-text">
                Bridging African mining operations with international markets
                through Dubai hub.
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
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            <div
              className="card"
              style={{ textAlign: "center", padding: "3rem" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--text-light)",
                }}
              >
                <Gem size={32} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Gold Mining & Asset Development
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
                Mine activation through strategic partnerships and SPVs.
                Concession development with responsible extraction practices.
              </p>
            </div>
            <div
              className="card"
              style={{ textAlign: "center", padding: "3rem" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--text-light)",
                }}
              >
                <TrendingUp size={32} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Gold Trading & Offtake
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
                Doré sourcing from verified mining partners. Export logistics
                and refinery sales to global markets.
              </p>
            </div>
            <div
              className="card"
              style={{ textAlign: "center", padding: "3rem" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--text-light)",
                }}
              >
                <Mountain size={32} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Minerals & Metals Trading
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
                Copper and other industrial metals trading. Processing and
                value-addition capabilities.
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
            <p
              className="section-description"
              style={{ color: "var(--text-light)" }}
            >
              Strategic operations connecting African mining regions to global
              markets
            </p>
          </div>
          <div
            className="grid grid-2"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  color: "var(--color-gold)",
                  marginBottom: "1rem",
                }}
              >
                Africa
              </div>
              <p style={{ color: "var(--text-light)" }}>
                West and Central African mining operations
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  color: "var(--color-gold)",
                  marginBottom: "1rem",
                }}
              >
                Dubai
              </div>
              <p style={{ color: "var(--text-light)" }}>
                Global headquarters and trading hub
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <NavLink to="/geography" className="btn btn-outline">
              Explore Our Footprint{" "}
              <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="section section-light">
        <div className="container">
          <div
            className="grid grid-2"
            style={{
              alignItems: "center",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Governance & Compliance
              </h2>
              <div className="divider-gold" style={{ margin: "1rem 0" }}></div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                We operate with the highest standards of corporate governance
                and compliance. Our commitment to responsible sourcing, AML/CFT
                protocols, and ethical business practices underpins every
                transaction.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>Responsible Sourcing</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>AML/CFT Compliant</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>Board Oversight</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
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
            <table
              className="table"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
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
                    <td
                      style={{ fontWeight: "600", color: "var(--text-dark)" }}
                    >
                      {item.metal}
                    </td>
                    <td>{item.price}</td>
                    <td>{item.unit}</td>
                    <td
                      style={{
                        color: item.change.startsWith("+")
                          ? "var(--color-success)"
                          : "var(--color-error)",
                      }}
                    >
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              marginTop: "1.5rem",
            }}
          >
            * Market data for reference only. Not for trading purposes. Actual
            prices may vary.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Why Choose BONDZE"
            subtitle="Our competitive advantages deliver superior value to partners and stakeholders"
          />
          <div className="grid grid-2" style={{ gap: "2rem" }}>
            {advantages.map((advantage, index) => (
              <div key={index} className="card" style={{ padding: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "var(--color-gold)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-light)",
                      flexShrink: 0,
                    }}
                  >
                    {advantage.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        color: "var(--text-dark)",
                      }}
                    >
                      {advantage.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <NavLink to="/about" className="btn btn-primary btn-lg">
              Learn More About Us{" "}
              <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Latest Insights"
            subtitle="Market analysis, company updates, and industry developments"
          />
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            {newsInsights.map((insight, index) => (
              <article key={index} className="card">
                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "var(--color-gold)",
                        color: "var(--text-light)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                      }}
                    >
                      {insight.category}
                    </span>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {insight.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                      color: "var(--text-dark)",
                      lineHeight: "1.4",
                    }}
                  >
                    {insight.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      lineHeight: "1.6",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {insight.excerpt}
                  </p>
                  <button
                    className="btn btn-outline"
                    style={{ width: "100%" }}
                    onClick={() => console.log("Read more:", insight.title)}
                  >
                    Read More{" "}
                    <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <NavLink to="/investors" className="btn btn-secondary">
              View All Insights{" "}
              <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
