import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
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

  // Video carousel state
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [logoAnimated, setLogoAnimated] = useState(false);

  const videos = [
    {
      src: "/images/1.webm",
      duration: 5000,
    },
    {
      src: "/images/2.webm",
      duration: 5000,
    },
    {
      src: "/images/3.webm",
      duration: 5000,
    },
    {
      src: "/images/4.webm",
      duration: 5000,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setNextVideo((prev) => (prev + 2) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  // Logo animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoAnimated(true);
    }, 800); // Start animation after 800ms

    return () => clearTimeout(timer);
  }, []);
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
          {/* Current video layer */}
          <video
            key={currentVideo}
            src={videos[currentVideo].src}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video video-fade-in"
          />
          {/* Next video layer for smooth transition */}
          <video
            key={nextVideo}
            src={videos[nextVideo].src}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video video-top video-fade-out"
          />

          {/* Video Indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentVideo) {
                    setCurrentVideo(index);
                    setNextVideo((index + 1) % videos.length);
                  }
                }}
                className={`w-3 h-3 rounded-full border-2 border-white border-opacity-50 cursor-pointer transition-all duration-300 ${
                  currentVideo === index
                    ? "bg-white bg-opacity-80"
                    : "bg-transparent"
                }`}
                aria-label={`Go to scene ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="flex justify-center items-center mb-4 md:mb-8">
            <img
              src="/logo1.svg"
              alt="BONDZE Logo"
              className={`w-24 md:w-40 h-auto max-w-full transition-all duration-[1200ms] ease-out ${
                logoAnimated
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-80 -translate-y-5"
              }`}
            />
          </div>
          <img
            src="/title.svg"
            alt="Connecting Africa's minerals to global markets"
            className="hero-title w-full max-w-4xl h-auto min-w-[300px] md:min-w-[600px] mobile-img-responsive"
          />
          <p className="hero-subtitle text-mobile-sm">
            Gold, Copper and Bauxite Mining - Trading - Strategic Development
          </p>
          <div className="hero-actions mobile-btn-stack">
            <a
              href="/BONDZE.pdf"
              download="BONDZE-Company-Profile.pdf"
              className="btn btn-outline-light btn-lg inline-flex items-center gap-2 no-underline mobile-btn-full touch-target"
            >
              <Download size={18} />
              View Company Profile
            </a>
            <NavLink
              to="/partnerships"
              className="btn btn-primary btn-lg inline-flex items-center gap-2 mobile-btn-full touch-target"
            >
              Partner with us <ArrowRight size={18} />
            </NavLink>
            {/* <NavLink to="/contact" className="btn btn-outline-light btn-lg">
              Contact
            </NavLink> */}
          </div>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Who We Are"
            subtitle="BONDZE Precious Metals and Mineral Trading LLC is an institutional-grade platform operating across the precious metals value and minerals chain. We combine mining development expertise with disciplined trading operations."
          />
          <div className="card-grid card-grid-3 mobile-grid-gap-sm">
            <div className="feature-card card-gold-accent mobile-card-full mobile-card-padded">
              <div className="feature-card-image">

                
                <img
                  src="/who1.jpg"
                  alt="Precious Metals"
                  className="mobile-img-cover"
                />
              </div>
              <h3 className="feature-card-title text-mobile-lg">
                Precious Metals
              </h3>
              <p className="feature-card-text text-mobile-sm mobile-line-height">
                Specialized in gold and silver trading with direct relationships
                across African mining regions.
              </p>
            </div>
            <div className="feature-card card-gold-accent mobile-card-full mobile-card-padded">
              <div className="feature-card-image">
                <img
                  src="/who2.jpg"
                  alt="Mining Development"
                  className="mobile-img-cover"
                />
              </div>
              <h3 className="feature-card-title text-mobile-lg">
                Mining Development
              </h3>
              <p className="feature-card-text text-mobile-sm mobile-line-height">
                Strategic partnerships and SPVs for mine activation and
                concession development.
              </p>
            </div>
            <div className="feature-card card-gold-accent mobile-card-full mobile-card-padded">
              <div className="feature-card-image">
                <img
                  src="/who3.jpg"
                  alt="Global Reach"
                  className="mobile-img-cover"
                />
              </div>
              <h3 className="feature-card-title text-mobile-lg">
                Global Reach
              </h3>
              <p className="feature-card-text text-mobile-sm mobile-line-height">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center p-12">
              <div className="w-16 h-16 bg-bondze-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Gem size={32} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-bondze-blue">
                Gold Mining & Asset Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mine activation through strategic partnerships and SPVs.
                Concession development with responsible extraction practices.
              </p>
            </div>
            <div className="card text-center p-12">
              <div className="w-16 h-16 bg-bondze-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-bondze-blue">
                Gold Trading & Offtake
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Doré sourcing from verified mining partners. Export logistics
                and refinery sales to global markets.
              </p>
            </div>
            <div className="card text-center p-12">
              <div className="w-16 h-16 bg-bondze-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Mountain size={32} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-bondze-blue">
                Minerals & Metals Trading
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Copper and other industrial metals trading. Processing and
                value-addition capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Executive Search Section */}
      <section className="section section-dark">
        <div className="container">
          <SectionTitle
            title="Executive Search"
            subtitle="Building leadership teams with expertise in precious metals and mining sectors"
            light={true}
          />
          <div className="card bg-white border-2 border-bondze-gold p-12 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div>
                <div className="rounded-lg overflow-hidden border-2 border-bondze-gold">
                  <img
                    src="/executive.jpg"
                    alt="Executive Summary"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <h3 className="text-3xl font-bold text-bondze-charcoal mb-8 uppercase tracking-wide">
                  Company Overview
                </h3>

                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-bondze-gold p-8 mb-6 rounded-r-lg shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong className="text-bondze-charcoal">
                      BONDZE PRECIOUS METALS AND MINERAL TRADING LLC
                    </strong>{" "}
                    is a corporate platform operating across the precious metals
                    value and minerals chain. Founded with a commitment to
                    institutional discipline, we bridge African mining
                    operations with      
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-bondze-gold p-8 mb-6 rounded-r-lg shadow-sm">
                  <h4 className="font-semibold text-bondze-charcoal mb-3 text-lg">
                    Our Operations
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our operations span mining development, gold and copper
                    trading, and strategic partnerships that create value for
                    all stakeholders. We operate with transparency, compliance,
                    and a long-term vision for sustainable growth.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-bondze-gold p-8 mb-6 rounded-r-lg shadow-sm">
                  <h4 className="font-semibold text-bondze-charcoal mb-3 text-lg">
                    Strategic Focus
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We focus on building a scalable platform across Africa's
                    most resource-rich regions while maintaining the highest
                    standards of corporate governance and operational
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/careers"
              className="btn btn-primary btn-lg inline-flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Opportunities <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Geographic Focus"
            subtitle="Strategic operations connecting African mining regions to global markets"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-bondze-gold mb-4">
                Africa
              </div>
              <p className="text-gray-600">
                West and Central African mining operations
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-bondze-gold mb-4">
                Dubai
              </div>
              <p className="text-gray-600">
                Global headquarters and trading hub
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <NavLink
              to="/geography"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              Explore Our Footprint <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
      {/* Governance Section */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            title="Governance & Compliance"
            subtitle="We operate with the highest standards of corporate governance and compliance. Our commitment to responsible sourcing, AML/CFT protocols, and ethical business practices underpins every transaction."
            light={false}
          />
          <div className="divider-gold my-4"></div>
          {/* Centered Compliance Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-bondze-gold shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-bondze-gold rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <span className="font-semibold text-bondze-charcoal text-lg">
                Responsible Sourcing
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-bondze-gold shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-bondze-gold rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <span className="font-semibold text-bondze-charcoal text-lg">
                AML/CFT Compliant
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-bondze-gold shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-bondze-gold rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <span className="font-semibold text-bondze-charcoal text-lg">
                Board Oversight
              </span>
            </div>
          </div>

          {/* Centered Button */}
          <div className="text-center mt-12">
            <NavLink
              to="/governance"
              className="btn btn-secondary btn-lg inline-flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
              <ArrowRight size={18} />
            </NavLink>
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-bondze-gold">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bondze-blue text-white">
                      <th className="px-6 py-4 text-left font-semibold">
                        Metal
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Unit
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        24h Change
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData.map((item, index) => (
                      <tr
                        key={item.metal}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 font-semibold text-bondze-charcoal">
                          {item.metal}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.unit}</td>
                        <td
                          className={`px-6 py-4 font-medium ${
                            item.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {item.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-bondze-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bondze-charcoal mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink
              to="/about"
              className="btn btn-primary btn-lg inline-flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn More About Us <ArrowRight size={18} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsInsights.map((insight, index) => (
              <article
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-bondze-gold text-white py-1 px-3 rounded-full text-xs font-semibold">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-600">{insight.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-bondze-charcoal mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {insight.excerpt}
                </p>
                <button
                  className="btn btn-outline w-full inline-flex items-center justify-center gap-2 hover:bg-bondze-blue hover:text-white hover:border-bondze-blue transition-colors duration-300"
                  onClick={() => console.log("Read more:", insight.title)}
                >
                  Read More <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink
              to="/investors"
              className="btn btn-secondary inline-flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Insights <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
