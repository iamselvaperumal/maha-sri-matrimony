import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/image copy.png';
import image from '../../assets/images/image.png';

import './Landing.css';

// Aesthetic mock data
const premiumMembers = [
  { id: 'MSD3133', name: 'R. Dhanapal', age: 37, education: '10th', profession: 'Business', location: 'Salem', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { id: 'MSD3132', name: 'S. Vishnupriya', age: 23, education: 'B.Sc', profession: 'Software Engineer', location: 'Chennai', image: 'https://images.unsplash.com/photo-1520695028448-f6ab635a8df2?auto=format&fit=crop&q=80&w=400' },
  { id: 'MSD3131', name: 'V. Gurumoorthi', age: 26, education: '12th', profession: 'Banking', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=400' },
  { id: 'MSD3128', name: 'S. Balaji', age: 29, education: 'B.E', profession: 'IT Professional', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
];

const packages = [
  {
    name: 'SILVER',
    icon: '✨',
    price: '₹250',
    duration: '3 Months',
    features: ['Unlimited Profile Views', '15 Express Interests', '3 Gallery Photos', 'Auto Match Profile'],
    highlight: false,
  },
  {
    name: 'PLATINUM',
    icon: '💎',
    price: '₹1,000',
    duration: '12 Months',
    features: ['Unlimited Profile Views', '90 Express Interests', '90 Contact Views', '9 Gallery Photos'],
    highlight: false,
  },
  {
    name: 'MANGALYA',
    icon: '🌹',
    price: '₹2,000',
    duration: '12 Months',
    features: ['Dedicated Relationship Manager', 'Premium Profile Badge', 'Unlimited Contacts', 'Priority Listing'],
    highlight: true, // stands out
  },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="modern-landing-container">
      
      {/* Decorative Blur Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      {/* --- Aesthetic Navbar --- */}
      <nav className={`modern-navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="brand-logo">
            <span className="logo-icon">♾️</span>
            <div className="brand-text">
              <h1>Sri Sakthi Devangar</h1>
              <p>Matrimony</p>
            </div>
          </div>
          
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#profiles" className="nav-link">Profiles</a>
            <a href="#packages" className="nav-link">Packages</a>
          </div>

          <div className="nav-actions">
            <Link to="/login" className="btn-login">Sign In</Link>
            <Link to="/register" className="btn-register">Register Free</Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="modern-hero" id="home">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Exclusively for Devangar Community
          </div>
          <h1 className="hero-title">
            Where Traditional Values<br />
            Meet <span className="text-gradient">Modern Love</span>
          </h1>
          <p className="hero-subtitle">
            Experience a curated journey to finding your soulmate. Let us help you discover a truly perfect match within your community.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary-large">Begin Your Journey</Link>
            <Link to="/login" className="btn-secondary-large">I'm Already a Member</Link>
          </div>
          
          {/* Quick Search Mockup */}
          <div className="quick-search-glass">
            <div className="search-field">
              <label>I'm looking for</label>
              <select><option>Bride</option><option>Groom</option></select>
            </div>
            <div className="field-divider"></div>
            <div className="search-field">
              <label>Age Range</label>
              <select><option>21 to 25</option><option>26 to 30</option><option>31 to 35</option></select>
            </div>
            <div className="field-divider"></div>
            <button className="btn-search-icon">🔍 Search</button>
          </div>
        </div>

        <div className="hero-image-grid">
           <img src={image} alt="Indian wedding" className="img-main" />
           <div className="img-stack">
              <img src={image1} alt="Jewelry" className="img-sub img-sub-1" />
           </div>
        </div>
      </section>

      {/* --- Rebranding Alert Card --- */}
      <section className="rebrand-section" id="about">
        <div className="rebrand-glass-card">
          <div className="rebrand-icon">🌟</div>
          <div className="rebrand-text">
            <h3>A New Era of Matchmaking</h3>
            <p><strong>Maha Sri Devangar Matrimony</strong> has been beautifully reimagined as <strong>Sri Sakthi Devangar Matrimony</strong>. Our name evolves, but our core mission—to unite hearts with trust and tradition—stands stronger than ever.</p>
          </div>
        </div>
      </section>

      {/* --- Featured Premium Profiles --- */}
      <section className="featured-profiles-section" id="profiles">
        <div className="section-header">
          <h2>Featured Profiles</h2>
          <p>Verified members genuinely seeking a partner</p>
        </div>

        <div className="profiles-grid">
          {premiumMembers.map(member => (
            <div className="profile-card" key={member.id}>
              <div className="profile-image-wrap">
                <img src={member.image} alt={member.name} />
                <div className="profile-overlay-info">
                  <span className="id-badge">{member.id}</span>
                </div>
              </div>
              <div className="profile-card-content">
                <h3>{member.name}</h3>
                <div className="profile-meta">
                  <span>{member.age} Yrs</span>
                  <span>•</span>
                  <span>{member.education}</span>
                </div>
                <div className="profile-details">
                  <p>💼 {member.profession}</p>
                  <p>📍 {member.location}</p>
                </div>
                <button className="btn-connect">Connect Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Packages Section --- */}
      <section className="packages-section-modern" id="packages">
        <div className="section-header">
          <h2>Premium Memberships</h2>
          <p>Choose a plan that accelerates your search</p>
        </div>

        <div className="packages-flex">
          {packages.map(pkg => (
            <div className={`package-card-modern ${pkg.highlight ? 'highlight-pkg' : ''}`} key={pkg.name}>
              {pkg.highlight && <div className="popular-tag">Most Popular</div>}
              <div className="pkg-icon">{pkg.icon}</div>
              <h3>{pkg.name}</h3>
              <div className="pkg-price-wrap">
                <span className="pkg-price">{pkg.price}</span>
                <span className="pkg-duration">/{pkg.duration}</span>
              </div>
              <ul className="pkg-features-list">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn-pkg ${pkg.highlight ? 'btn-pkg-primary' : 'btn-pkg-outline'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- Modern Footer --- */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon-large">♾️</span>
            <h2>Sri Sakthi Devangar</h2>
            <p>Creating eternal bonds for the Devangar community since 2010. We blend traditional astrology with modern technology to find your soulmate securely.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="/login">Sign In</a>
              <a href="/register">Register</a>
            </div>
            <div className="link-group">
              <h4>Legal & Privacy</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
            </div>
            <div className="link-group">
              <h4>Reach Us</h4>
              <p>📍 27/1, Trichy Main Road, Salem - 636006</p>
              <p>✉️ info@srisakthimatrimony.com</p>
              <p>📞 +91 93633 58156</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sri Sakthi Devangar Matrimony. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}