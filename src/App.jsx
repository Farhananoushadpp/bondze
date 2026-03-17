import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Geography from "./pages/Geography";
import Governance from "./pages/Governance";
import Partnerships from "./pages/Partnerships";
import Investors from "./pages/Investors";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
