import SectionTitle from "../components/SectionTitle";
import { Target, Compass, Lightbulb, Globe, Building2 } from "lucide-react";

const About = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">About BPMM</h1>
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
                BONDZE Precious Metals and Mineral Trading LLC (BPMM) is a
                corporate platform operating across the precious metals value
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

      {/* Mission */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Our Mission"
            subtitle="To build a disciplined precious metals platform that connects African mining operations with global markets through responsible sourcing, institutional governance, and long-term value creation."
          />
          <div className="card-grid card-grid-3" style={{ marginTop: "3rem" }}>
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
                <Globe size={28} />
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Connection
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                Bridging African mining operations with global markets through
                reliable trading infrastructure.
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

      {/* Long-term Vision */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Long-term Vision"
            subtitle="Building a lasting institutional platform for precious metals"
          />
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
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
            </p>
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
    </main>
  );
};

export default About;
