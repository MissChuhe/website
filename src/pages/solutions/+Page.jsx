import React from "react";
import { 
  FaSms, 
  FaHashtag, 
  FaMobileAlt, 
  FaPhoneAlt, 
  FaMusic,
  FaArrowRight,
  FaDatabase,
  FaMoneyBillAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../styles/Solutions.scss'
import groupPhoto from '../../assets/optimized/solution-hero.webp'

function SolutionsProfessional() {
  const navigate = useNavigate();

  const services = [
    { 
      id: "sms", 
      title: "Bulk SMS", 
      icon: <FaSms />, 
      description: "Reach thousands of customers instantly with our reliable bulk SMS service.",
      color: "#008c95", // Teal Blue
      route: "sms"
    },
    { 
      id: "shortcodes", 
      title: "Short Codes", 
      icon: <FaHashtag />, 
      description: "Memorable short numbers for premium SMS services and marketing campaigns.",
      color: "#e97525", // Bright Orange
      route: "shortcode"
    },
    { 
      id: "ussd", 
      title: "USSD", 
      icon: <FaMobileAlt />, 
      description: "Interactive menu systems for mobile users without internet connection.",
      color: "#91a2a1", // Muted Gray-Blue
      route: "ussd"
    },
    { 
      id: "voice", 
      title: "Voice API", 
      icon: <FaPhoneAlt />, 
      description: "High-quality voice solutions with advanced IVR and call routing features.",
      color: "#eac0a2", // Peach
      route: "voice"
    },
    { 
      id: "ringback", 
      title: "Ring-Back Tone", 
      icon: <FaMusic />, 
      description: "Customize call experiences with branded ring-back tones for your customers.",
      color: "#221e1e", // Charcoal Black
      route: "crbt"
    },
    { 
      id: "bulkdata", 
      title: "Bulk Data", 
      icon: <FaDatabase />, 
      description: "Affordable and reliable data bundles for businesses and individuals.",
      color: "#008c95", // Teal Blue
      route: "data"
    },
    { 
      id: "mobilepayment", 
      title: "Mobile Payment Integration", 
      icon: <FaMoneyBillAlt />, 
      description: "Seamless integration of mobile payment systems for your business.",
      color: "#e97525", // Bright Orange
      route: "payment"
    }
  ];

  return (
    <div className="solutions-professional">
      {/* Animated Hero Section */}
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
                Empowering businesses with cutting-edge communication technology 
                for over a decade. Our carrier-grade platform ensures reliability, 
                scalability, and compliance across all markets.
              </p>

              <button 
                className="cta-button" 
                onClick={() => navigate("/pricing")}
              >
                Explore Our Prices <FaArrowRight />
              </button>
            </div>
            
            <div className="hero-visual">
              <div className="main-image">
                <img 
                  src={groupPhoto}
                  alt="Business Communication" 
                  className="float-animation"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Services</span></h2>
            <p>
              We offer a robust suite of services built on a carrier-grade platform 
              designed for reliability, scalability, and regulatory compliance across markets.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--hover-color': service.color 
                }}
              >
                <div 
                  className="card-icon"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <div style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-hover-content">
                  <button 
                    className="card-button"
                    style={{ backgroundColor: service.color }}
                    onClick={() => navigate(service.route)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Choosing a Solution?</h2>
            <p>Our customer care team is ready to assist you in finding the perfect communication solution for your business.</p>
            
          <div className="contact-options">
       
            </div>
            
            <button 
              className="cta-button" 
              onClick={() => navigate("/contact")}
            >
              Contact Customer Care
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsProfessional;
