import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/business", label: "Our Business" },
    { path: "/geography", label: "Geography" },
    { path: "/governance", label: "Governance" },
    { path: "/partnerships", label: "Partnerships" },
    { path: "/investors", label: "Investors" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container" aria-label="Main navigation">
        <NavLink to="/" className="navbar-logo">
          <img
            src="/logo.svg"
            alt="Bondze Precious Metals"
            width="22"
            height="22"
          />
        </NavLink>

        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <div
        className={`navbar-mobile-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`navbar-mobile ${isMobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="navbar-mobile-header">
          <NavLink
            to="/"
            className="navbar-logo"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/logo.svg"
              alt="Bondze Precious Metals"
              width="48"
              height="48"
            />
          </NavLink>
          <button
            className="navbar-mobile-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="navbar-mobile-nav">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                end={link.path === "/"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
