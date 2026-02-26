import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

export const meta = () => {
  return [
    { title: "Taifa Mobile - Leading Mobile Communication Solutions Provider Class in Kenya" },
    { name: "description", content: "Taifa Mobile offers Bulk SMS, USSD, Shortcodes, Mobile Payments, and Data solutions for businesses in Kenya. Connect with your customers effectively." },
  ];
};

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faRocket,
  faLock,
  faFlag,
  faHeadset,
  faChartLine,
  faShieldAlt,
  faNetworkWired,
  faUsers,
  faLightbulb,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../../styles/AboutUs.scss'

// Image imports
import teamWorking from '../../assets/team-working.webp'
import aboutImage from '../../assets/optimized/about-image.webp'

// All 8 solution images - Check these are properly formatted and optimized
import smsSolution from '../../assets/optimized/sms-solution.webp'
import solution2 from '../../assets/optimized/data-solution.webp';
import solution3 from '../../assets/ussd-solution.jpg';
import solution4 from '../../assets/optimized/shortcode.webp';
import solution5 from '../../assets/optimized/payment.webp';
import voiceImage from '../../assets/optimized/voice-solution.webp';
import crbtImage from '../../assets/optimized/crbt-solution.webp';
import airtimeImage from '../../assets/optimized/airtime-solution.webp';

// Partners images (all original imports)
import undp from '../../assets/undp.png'
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
import westtv from '../../assets/westtv.jpg';
import werutv from '../../assets/werutv.jpg';
import shinebet from '../../assets/shinebet.png';
import sasatv from '../../assets/Sasatv.jpg';
import radio_africa_group from '../../assets/radio_africa_group_logo.jpg';
import mumbofm from '../../assets/mumbofm.png';
import nationdt_logo from '../../assets/nationdt-logo.png';
import kwitu from '../../assets/kwitu.jpg';
import Kambatv from '../../assets/kambatv.png';
import grace_brook_academy from '../../assets/grace_brook_academy.jpg';
import ewama_properties from '../../assets/ewama_properties.png';
import dalafm from '../../assets/dalafm.jpg';
import busia_border_radio from '../../assets/busia_border_radio.png';
import aviationtv from '../../assets/aviationtv.jpg';
import aquila from '../../assets/aquila.png';
import zilojo from '../../assets/zilojo.png';
import Bandari_DT_Sacco from '../../assets/bandari_dt_sacco.png';
import cfao_motors_logo from '../../assets/cfao-motors-logo.jpg';
import cheletecredit from '../../assets/chelete_credit.jpg';
import namlolwe from '../../assets/namlolwe.png';
import netmtaani from '../../assets/netmtaani.jpg';
import enlight from '../../assets/enlight.png';
import vinicitubet from '../../assets/vinicitubet.jpg';

// Icons
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://taifamobile.co.ke/#organization",
      "name": "Taifa Mobile Ltd",
      "url": "https://taifamobile.co.ke",
      "logo": "https://taifamobile.co.ke/path-to-logo.png",
      "image": "https://taifamobile.co.ke/path-to-logo.png",
      "telephone": "+254707556633",
      "email": "info@taifamobile.co.ke",
      "description": "Provider of Bulk SMS, USSD, Short Code, Voice, Mobile Payments, Bulk Data, CRBT and Airtime solutions for businesses in Kenya.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Next-Gen Mall, 1st Floor",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Kenya"
      },
      "sameAs": [
        "https://www.linkedin.com/company/taifa-mobile",
        "https://twitter.com/taifamobileke",
        "https://facebook.com/taifamobileke"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "120"
      }
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/sms/#service",
      "name": "Bulk SMS",
      "url": "https://taifamobile.co.ke/solutions/sms",
      "serviceType": "Bulk SMS Messaging",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Scalable Bulk SMS messaging platform for alerts, marketing campaigns, OTPs, and transactional notifications across Kenyan networks."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/shortcode/#service",
      "name": "Short Code Services",
      "url": "https://taifamobile.co.ke/solutions/shortcode",
      "serviceType": "Short Code Provisioning",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Dedicated short codes for customer campaigns, notifications, and brand messaging."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/ussd/#service",
      "name": "USSD Services",
      "url": "https://taifamobile.co.ke/solutions/ussd",
      "serviceType": "USSD Application & Hosting",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Interactive USSD solutions for payments, banking, surveys, airtime purchase, and customer engagement."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/payment/#service",
      "name": "Payment Integration",
      "url": "https://taifamobile.co.ke/solutions/payment",
      "serviceType": "Mobile Payment APIs",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Mobile payment integration, alerts, and commerce solutions including M-Pesa API support."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/data/#service",
      "name": "Bulk Data",
      "url": "https://taifamobile.co.ke/solutions/data",
      "serviceType": "Business Data Services",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Access to reliable business data services for marketing, analytics, and customer engagement."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/voice/#service",
      "name": "Voice Services",
      "url": "https://taifamobile.co.ke/solutions/voice",
      "serviceType": "Business Voice Solutions",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Voice call solutions for customer service, notifications, and enterprise communication."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/crbt/#service",
      "name": "Call Ring Back Tones (CRBT / Skiza)",
      "url": "https://taifamobile.co.ke/solutions/crbt",
      "serviceType": "CRBT / Skiza Services",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Custom ring back tones and music-on-hold solutions for mobile subscribers in Kenya."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/airtime/#service",
      "name": "Airtime Services",
      "url": "https://taifamobile.co.ke/solutions/airtime",
      "serviceType": "Airtime Distribution",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Airtime top-up services for businesses and bulk distribution to mobile customers."
    }
  ]
};

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="feature-card"
  >
    <div className="feature-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{description}</p>
  </motion.div>
);

// All 8 solutions
const featuredProducts = [
  {
    id: 1,
    image: smsSolution,
    title: "Bulk SMS",
    description: "Reliable bulk SMS services with 99.9% delivery rate for businesses of all sizes.",
    slug: "sms",
  },
  {
    id: 2,
    image: solution2,
    title: "Bulk Data",
    description: "Affordable data bundles with instant delivery to keep your customers connected.",
    slug: "data",
  },
  {
    id: 3,
    image: solution3,
    title: "USSD",
    description: "Interactive USSD menus for seamless customer engagement and data collection.",
    slug: "ussd",
  },
  {
    id: 4,
    image: solution4,
    title: "Shortcode",
    description: "Premium shortcode services for effective marketing and customer support.",
    slug: "shortcode",
  },
  {
    id: 5,
    image: solution5,
    title: "Mobile Payments",
    description: "Secure mobile payment integrations with multiple payment options.",
    slug: "payment",
  },
  {
    id: 6,
    image: voiceImage,
    title: "Voice",
    description: "High-quality voice services and IVR systems, scalable for your business needs.",
    slug: "voice",
  },
  {
    id: 7,
    image: crbtImage,
    title: "Call Ring Back Tones",
    description: "Customizable ring back tones to engage callers with music or branded messages.",
    slug: "crbt",
  },
  {
    id: 8,
    image: airtimeImage,
    title: "Airtime",
    description: "Convenient airtime top-up and distribution services for your customers.",
    slug: "airtime",
  },
];

// Partner Carousel - Optimized for immediate color display
const PartnerCarousel = ({ partnersList }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5;
    let animation;

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

  return (
    <div className="partners-container">
      <div className="partners-track" ref={trackRef}>
        {partnersList.concat(partnersList).map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="partner-item">
            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className="partner-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Institutional Partners
const institutionalPartners = [
  { id: 1, name: "Kaimosi Friends University", logo: kaimosi },
  { id: 2, name: "Grace Brook Academy", logo: grace_brook_academy },
  { id: 3, name: "NTTI", logo: ntti },
  { id: 4, name: "Nation DT Sacco", logo: nationdt_logo },
  { id: 5, name: "Bandari DT Sacco", logo: Bandari_DT_Sacco },
  { id: 6, name: "Chelete Credit", logo: cheletecredit },
  { id: 7, name: "UNDP", logo: undp },
  { id: 8, name: "IEBC", logo: iebc },
  { id: 9, name: "Federation of Kenya Employers", logo: fke },
  { id: 10, name: "NGOs Foundation", logo: ngos },
  { id: 11, name: "KISEB", logo: kiseb },
  { id: 12, name: "HEROES for Change", logo: heroes },
  { id: 13, name: "Ewama Properties", logo: ewama_properties },
  { id: 14, name: "CFAO Motors", logo: cfao_motors_logo },
  { id: 15, name: "Aquila", logo: aquila },
  { id: 16, name: "Zilojo", logo: zilojo },
  { id: 17, name: "Enlight", logo: enlight },
  { id: 18, name: "NetMtaani", logo: netmtaani },
];

// Media Partners
const mediaPartners = [
  { id: 19, name: "Mutongoi FM", logo: mutongoi },
  { id: 20, name: "Radio Mlima", logo: radiomlima },
  { id: 21, name: "County FM 90.3", logo: countyfm },
  { id: 22, name: "WERU FM", logo: weru },
  { id: 23, name: "Mumbo FM", logo: mumbofm },
  { id: 24, name: "Dala FM", logo: dalafm },
  { id: 25, name: "Busia Border Radio", logo: busia_border_radio },
  { id: 26, name: "Namlolwe FM", logo: namlolwe },
  { id: 27, name: "Kwitu FM", logo: kwitu },
  { id: 28, name: "West TV", logo: westtv },
  { id: 29, name: "Weru TV", logo: werutv },
  { id: 30, name: "Sasa TV", logo: sasatv },
  { id: 31, name: "Kamba TV", logo: Kambatv },
  { id: 32, name: "Aviation TV", logo: aviationtv },
  { id: 33, name: "Radio Africa Group", logo: radio_africa_group },
  { id: 34, name: "ShineBet", logo: shinebet },
  { id: 35, name: "VinicituBet", logo: vinicitubet },
];

// Optimized Carousel with fast image loading
const SimpleCarousel = ({ featuredProducts, navigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const timerRef = useRef(null);
  const imagesRef = useRef({});

  const getSolutionPath = (slug) => {
    if (slug === 'crbt') return '/call-back';
    return `/${slug}`;
  };

  // Preload all images immediately
  useEffect(() => {
    const loadImage = (src, id) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          imagesRef.current[id] = true;
          setLoadedImages(prev => new Set([...prev, id]));
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          resolve();
        };
      });
    };

    // Preload all images in parallel
    const preloadAllImages = async () => {
      const promises = featuredProducts.map(product =>
        loadImage(product.image, product.id)
      );
      await Promise.all(promises);
    };

    preloadAllImages();
  }, [featuredProducts]);

  // Auto-rotation
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(timerRef.current);
  }, [isHovered, featuredProducts.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const currentProduct = featuredProducts[currentIndex];
  const isImageLoaded = loadedImages.has(currentProduct.id);

  return (
    <div
      className="simple-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slide-container">
        {/* Image with progressive loading */}
        <div className="image-wrapper">
          {isImageLoaded ? (
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="carousel-image loaded"
              loading="eager"
            />
          ) : (
            <div className="image-placeholder">
              <div className="loading-spinner"></div>
            </div>
          )}
          <div className="image-overlay"></div>
        </div>

        {/* Content */}
        <div className="carousel-content">
          <div className="content-wrapper">
            <h1 className="main-title">{currentProduct.title}</h1>
            <p className="description">{currentProduct.description}</p>
            <button
              className="explore-button"
              onClick={() => navigate(getSolutionPath(currentProduct.slug))}
            >
              <span>Explore Solution</span>
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="carousel-dots">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-nav prev" onClick={handlePrev} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="carousel-nav next" onClick={handleNext} aria-label="Next slide">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <SimpleCarousel featuredProducts={featuredProducts} navigate={navigate} />
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <FontAwesomeIcon icon={faUsers} className="section-icon" />
            <h2 className="section-title">Our Story</h2>
          </motion.div>
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-image-container"
            >
              <img
                src={aboutImage}
                alt="Taifa Mobile team collaborating"
                className="about-image"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <p className="paragraph">
                Taifa Mobile is a leading Kenyan technology company specializing in mobile communication solutions.
                Since our founding, we've been committed to delivering innovative, reliable services that meet the
                evolving needs of businesses and individuals across Kenya.
              </p>
              <div className="badge">
                <FontAwesomeIcon icon={faShieldAlt} className="badge-icon" />
                <span>Fully Licensed & Regulated</span>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="values-container"
          >
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {[
                { icon: faLightbulb, title: 'Innovation', description: 'Continuously developing cutting-edge solutions to meet market needs' },
                { icon: faHandshake, title: 'Reliability', description: 'Consistent performance and uptime you can depend on' },
                { icon: faUsers, title: 'Customer Focus', description: 'Putting our clients at the center of everything we do' }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <FontAwesomeIcon icon={value.icon} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Network Partners */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="network-partners-container"
          >
            <h3 className="network-title">Network Partners</h3>
            <p className="network-description">
              We maintain partnerships with all major Kenyan mobile networks:
            </p>
            <div className="network-partners">
              {['Safaricom', 'Airtel', 'Telkom', 'Equitel'].map((operator, index) => (
                <motion.div
                  key={index}
                  className="network-badge"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FontAwesomeIcon icon={faNetworkWired} className="network-icon" />
                  {operator}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="solutions-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <div className="section-divider gradient-divider"></div>
            <h2 className="section-title">Our Competitive Advantage</h2>
          </motion.div>
          <div className="features-grid">
            {[
              { icon: faCogs, title: 'Robust API Integration', description: 'Comprehensive, well-documented APIs for seamless implementation into your systems' },
              { icon: faRocket, title: 'High-Performance Platform', description: 'Scalable infrastructure capable of handling millions of transactions with exceptional uptime' },
              { icon: faLock, title: 'Enterprise-Grade Security', description: 'Advanced security measures to protect your data and transactions' },
              { icon: faFlag, title: 'Regulatory Compliance', description: 'Full compliance with all Kenyan communication regulations and standards' },
              { icon: faHeadset, title: 'Dedicated Support', description: '24/7 customer support from knowledgeable technical experts' },
              { icon: faChartLine, title: 'Scalable Solutions', description: 'Services that grow with your business, from startups to enterprise' }
            ].map((item, index) => (
              <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" id="partners">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted By Industry Leaders</h2>
          </div>

          <div className="partners-categories">
            <div className="partners-category">
              <h3 className="category-title">Institutional, Educational & Corporate Partners</h3>
              <p className="category-subtitle">
                Collaborating with schools, universities, saccos, credit providers, government bodies, NGOs, and corporate organizations.
              </p>
              <PartnerCarousel partnersList={institutionalPartners} />
            </div>

            <div className="partners-category">
              <h3 className="category-title">Media & Other Partners</h3>
              <p className="category-subtitle">
                Partnering with leading radio stations, TV channels, media groups, and betting platforms nationwide.
              </p>
              <PartnerCarousel partnersList={mediaPartners} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="cta-section"
      >
        <div className="container">
          <h3 className="cta-title">
            Ready to enhance your <span className="cta-highlight">mobile communication</span> strategy?
          </h3>
          <p className="cta-text">
            Connect with our team to discuss how our solutions can support your business goals.
          </p>
          <div className="button-group">
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
