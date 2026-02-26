import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import '../../styles/Home.scss';

// Assets
import solution1 from '../../assets/optimized/sms-solution.webp';
import solution2 from '../../assets/optimized/data-solution.webp';
import solution3 from '../../assets/ussd-solution.jpg';
import solution4 from '../../assets/optimized/shortcode-solution.webp';
import solution5 from '../../assets/optimized/payment.webp';
import voiceImage from '../../assets/optimized/voice-solution.webp';
import crbtImage from '../../assets/optimized/crbt-solution.webp';
import airtimeImage from '../../assets/optimized/airtime-solution.webp';
import aboutImage from '../../assets/optimized/about-image.webp';

// Partners
import undp from '../../assets/undp.png';
import iebc from '../../assets/iebc.png';
import fke from '../../assets/fke.png';
import ngos from '../../assets/ngos.jpg';
import mutongoi from '../../assets/mutongoi.jpg';
import kiseb from '../../assets/kiseb.png';
import heroes from '../../assets/heroes.png';
import ntti from '../../assets/ntti.png';
import radiomlima from '../../assets/radiomlima.jpg';
import countyfm from '../../assets/countyfm.png';
import weru from '../../assets/weru.png';
import kaimosi from '../../assets/kaimosi.jpg';

// Icons
import { FaArrowRight, FaEnvelope, FaDatabase, FaCode, FaHashtag, FaCreditCard, FaPhoneVolume, FaMusic, FaMoneyBillWave } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const partnersTrackRef = useRef(null);
  const [sectionsInView, setSectionsInView] = useState({});

  const getSolutionPath = (slug) => {
    if (slug === 'crbt') return '/call-back';
    return `/${slug}`;
  };

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      image: solution1,
      title: "Bulk SMS",
      subtitle: "Enterprise Messaging",
      description: "Reliable bulk SMS services with 99.9% delivery rate for businesses of all sizes.",
      slug: "sms",
    },
    {
      id: 2,
      image: solution2,
      title: "Bulk Data",
      subtitle: "Data Solutions",
      description: "Affordable data bundles with instant delivery to keep your customers connected.",
      slug: "data",
    },
    {
      id: 3,
      image: solution3,
      title: "USSD",
      subtitle: "Interactive Services",
      description: "Interactive USSD menus for seamless customer engagement and data collection.",
      slug: "ussd",
    },
    {
      id: 4,
      image: solution4,
      title: "Shortcode",
      subtitle: "Premium Codes",
      description: "Premium shortcode services for effective marketing and customer support.",
      slug: "shortcode",
    },
    {
      id: 5,
      image: solution5,
      title: "Mobile Payments",
      subtitle: "Payment Integration",
      description: "Secure mobile payment integrations with multiple payment options.",
      slug: "payment",
    },
    {
      id: 6,
      image: voiceImage,
      title: "Voice",
      subtitle: "Voice Services",
      description: "High-quality voice services and IVR systems, scalable for your business needs.",
      slug: "voice",
    },
    {
      id: 7,
      image: crbtImage,
      title: "Call Ring Back Tones",
      subtitle: "CRBT Solutions",
      description: "Customizable ring back tones to engage callers with music or branded messages.",
      slug: "crbt",
    },
    {
      id: 8,
      image: airtimeImage,
      title: "Airtime",
      subtitle: "Airtime Services",
      description: "Convenient airtime top-up and distribution services for your customers.",
      slug: "airtime",
    },
  ];

  // Partners
  const partners = [
    { id: 1, name: "UNDP", logo: undp },
    { id: 2, name: "IEBC", logo: iebc },
    { id: 3, name: "Federation of Kenya Employers", logo: fke },
    { id: 4, name: "NGOs Foundation", logo: ngos },
    { id: 5, name: "Mutongoi FM", logo: mutongoi },
    { id: 6, name: "KISEB", logo: kiseb },
    { id: 7, name: "HEROES for Change", logo: heroes },
    { id: 8, name: "NTTI", logo: ntti },
    { id: 9, name: "Radio Mlima", logo: radiomlima },
    { id: 10, name: "County FM 90.3", logo: countyfm },
    { id: 11, name: "WERU FM", logo: weru },
    { id: 12, name: "Kaimosi Friends University", logo: kaimosi },
  ];

  // Auto-scroll partners
  useEffect(() => {
    const track = partnersTrackRef.current;
    if (!track) return;
    let animation;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animation = requestAnimationFrame(animate);
    };

    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsInView((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animated-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <CompactCarousel featuredProducts={featuredProducts} navigate={navigate} />
      </section>

      {/* About Us Section */}
      <section className="about-section animated-section" id="about">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img
              src={aboutImage}
              alt="About Taifa Mobile"
              className="about-image"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">About Taifa Mobile</h2>
            <p>
              Taifa Mobile Ltd is a licensed Mobile Content Service Provider in
              Kenya. We deliver secure, innovative mobile communication services
              including SMS, USSD, Short Codes, and Payment Solutions to empower
              businesses with cutting-edge mobile-first solutions.
            </p>
            <p>
              With 7+ years of experience, we've helped hundreds of businesses
              streamline communication and payments.
            </p>
            <button className="cta-button" onClick={() => navigate("/about")}>
              Discover More <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section animated-section" id="solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Solutions</h2>
            <p className="section-subtitle">
              Tailored mobile solutions for your business needs
            </p>
          </div>

          <div className="solutions-grid">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="solution-card"
                onClick={() => navigate(getSolutionPath(product.slug))}
              >
                <div className="card-icon">
                  {getIcon(product.title)}
                </div>
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <span className="cta-link">
                    Learn More <FaArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section animated-section" id="partners">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted By Industry Leaders</h2>
            <p className="section-subtitle">
              We partner with organizations across various sectors
            </p>
          </div>

          <div className="partners-container">
            <div className="partners-track" ref={partnersTrackRef}>
              {partners.concat(partners).map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="partner-item">
                  <img src={partner.logo} alt={partner.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animated-section" id="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business Communication?</h2>
            <p>Get started with our enterprise-grade mobile solutions today</p>
            <button className="cta-button" onClick={() => navigate("/contact")}>
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icon Mapper
const getIcon = (title) => {
  switch (title) {
    case "Bulk SMS":
      return <FaEnvelope />;
    case "Bulk Data":
      return <FaDatabase />;
    case "USSD":
      return <FaCode />;
    case "Shortcode":
      return <FaHashtag />;
    case "Mobile Payments":
      return <FaCreditCard />;
    case "Voice":
      return <FaPhoneVolume />;
    case "Call Ring Back Tones":
      return <FaMusic />;
    case "Airtime":
      return <FaMoneyBillWave />;
    default:
      return <FaEnvelope />;
  }
};

// Compact Carousel - Fast auto-play, images always visible with smooth fade
const CompactCarousel = ({ featuredProducts, navigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fast auto-advance: 4 seconds per slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const currentProduct = featuredProducts[currentIndex];

  return (
    <div className="compact-carousel">
      <div className="carousel-container">
        {/* Image Background */}
        <div className="image-background">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="background-image"
            loading="eager"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Content Overlay */}
        <div className="content-overlay">
          <div className="content-wrapper">
            <div className="subtitle-badge">
              <span>{currentProduct.subtitle}</span>
            </div>

            <h1 className="main-title">{currentProduct.title}</h1>

            <p className="description">{currentProduct.description}</p>

            <button
              className="explore-button"
              onClick={() => navigate(getSolutionPath(currentProduct.slug))}
            >
              <span>Explore Solution</span>
              <FaArrowRight className="arrow-icon" />
            </button>

            {/* Dots Indicator */}
            <div className="dots-indicator">
              {featuredProducts.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
