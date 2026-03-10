import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/about', label: 'About' },
    { path: '/business', label: 'Our Business' },
    { path: '/geography', label: 'Geography' },
    { path: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { path: '/legal', label: 'Legal Disclaimer' },
    { path: '/legal', label: 'Privacy Policy' },
    { path: '/legal', label: 'Terms of Use' },
  ];

  const governanceLinks = [
    { path: '/governance', label: 'Governance' },
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/investors', label: 'Investors' },
    { path: '/careers', label: 'Careers' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <NavLink to="/" className="footer-brand">
              <img 
                src="/logo.svg" 
                alt="Bondze Precious Metals" 
                width="48"
                height="48"
              />
            </NavLink>
            <p className="footer-description">
              BONDZE Precious Metals and Mineral Trading LLC operates across mining development 
              and precious metals trading with institutional discipline, connecting Africa 
              and global markets.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path + link.label}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Governance</h3>
            <ul className="footer-links">
              {governanceLinks.map((link) => (
                <li key={link.path + link.label}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} BONDZE PRECIOUS METALS AND MINERAL TRADING LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
