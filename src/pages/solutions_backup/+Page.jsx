import React, { useEffect, useRef } from "react";
import {
  FaSms,
  FaHashtag,
  FaMobileAlt,
  FaPhoneAlt,
  FaMusic,
  FaArrowRight,
  FaDatabase,
  FaMoneyBillAlt,
  FaSimCard
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../styles/Solutions.scss'
import groupPhoto from '../../assets/optimized/solution-hero.webp'

const routePrefetchers = {
  '/sms': () => import('../sms/+Page.jsx'),
  '/shortcode': () => import('../shortcode/+Page.jsx'),
  '/ussd': () => import('../ussd/+Page.jsx'),
  '/voice': () => import('../voice/+Page.jsx'),
  '/call-back': () => import('../call-back/+Page.jsx'),
  '/data': () => import('../data/+Page.jsx'),
  '/payment': () => import('../payment/+Page.jsx'),
  '/airtime': () => import('../airtime/+Page.jsx'),
  '/pricing': () => import('../pricing/+Page.jsx'),
  '/contact': () => import('../contact/+Page.jsx')
};

export const meta = () => [
  { title: 'Communication Solutions | SMS, USSD, Voice, Payments | Taifa Mobile' },
  {
    name: 'description',
    content: 'Discover Taifa Mobile communication solutions including Bulk SMS, USSD, short code, voice, CRBT, bulk data, and payment integration in Kenya.'
  }
];

function SolutionsProfessional() {
  const navigate = useNavigate();
  const prefetchedRoutesRef = useRef(new Set());

  const services = [
    { id: "sms", title: "Bulk SMS", icon: <FaSms />, description: "Reach thousands of customers instantly with our reliable bulk SMS service.", color: "#008c95", route: "/sms" },
    { id: "shortcodes", title: "Short Codes", icon: <FaHashtag />, description: "Memorable short numbers for premium SMS services and marketing campaigns.", color: "#e97525", route: "/shortcode" },
    { id: "ussd", title: "USSD", icon: <FaMobileAlt />, description: "Interactive menu systems for mobile users without internet connection.", color: "#91a2a1", route: "/ussd" },
    { id: "voice", title: "Voice API", icon: <FaPhoneAlt />, description: "High-quality voice solutions with advanced IVR and call routing features.", color: "#eac0a2", route: "/voice" },
    { id: "ringback", title: "Ring-Back Tone", icon: <FaMusic />, description: "Customize call experiences with branded ring-back tones for your customers.", color: "#b65f1f", route: "/call-back" },
    { id: "bulkdata", title: "Bulk Data", icon: <FaDatabase />, description: "Affordable and reliable data bundles for businesses and individuals.", color: "#008c95", route: "/data" },
    { id: "mobilepayment", title: "Mobile Payment Integration", icon: <FaMoneyBillAlt />, description: "Seamless integration of mobile payment systems for your business.", color: "#e97525", route: "/payment" },
    { id: "airtime", title: "Airtime", icon: <FaSimCard />, description: "Retail and bulk airtime distribution with instant multi-network delivery and API support.", color: "#008c95", route: "/airtime" }
  ];

  const prefetchRoute = (route) => {
    if (typeof window === 'undefined') return;
    if (prefetchedRoutesRef.current.has(route)) return;
    const prefetch = routePrefetchers[route];
    if (!prefetch) return;
    prefetchedRoutesRef.current.add(route);
    prefetch().catch(() => prefetchedRoutesRef.current.delete(route));
  };

  const handleNavigation = (route) => {
    prefetchRoute(route);
    navigate(route);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const primeCriticalRoutes = () => {
      prefetchRoute('/call-back');
      prefetchRoute('/airtime');
    };
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(primeCriticalRoutes, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timeoutId = window.setTimeout(primeCriticalRoutes, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="solutions-professional">
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="animate-text">
                Communication <span>Solutions</span> for Modern Businesses
              </h1>
              <p className="fade-in">
                Empowering businesses with cutting-edge communication technology for over a decade.
              </p>
              <button className="cta-button" onClick={() => navigate("/pricing")}>
                Explore Our Prices <FaArrowRight />
              </button>
            </div>
            <div className="hero-visual">
              <img src={groupPhoto} alt="Business Communication" className="float-animation" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Services</span></h2>
            <p>We offer a robust suite of services built on a carrier-grade platform.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => handleNavigation(service.route)}
                role="link"
                tabIndex={0}
              >
                <div className="card-icon" style={{ backgroundColor: `${service.color}20` }}>
                  <div style={{ color: service.color }}>{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="card-button" style={{ backgroundColor: service.color }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Choosing a Solution?</h2>
            <p>Our customer care team is ready to assist you.</p>
            <button className="cta-button" onClick={() => navigate("/contact")}>
              Contact Customer Care
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsProfessional;
