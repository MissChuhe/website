import React, { useState } from 'react';
import { FaPhone, FaHeadset, FaUsers, FaChartLine, FaCheckCircle, FaRocket } from 'react-icons/fa';
import '../../styles/Voice.scss'
import voiceSolution from '../../assets/optimized/voice-solution.webp';

const ldJsonVoice = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/voice/#service",
      "name": "Voice Services",
      "url": "https://taifamobile.co.ke/voice",
      "serviceType": "Business Voice Solutions",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Robo Calls and IVR solutions for automated announcements, customer support, and scalable voice workflows in Kenya."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/voice/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Robo Calls and IVR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Robo Calls are one-way automated voice broadcasts for announcements. IVR is interactive, allowing callers to navigate menus and get responses (e.g., balance checks, support routing)."
          }
        },
        {
          "@type": "Question",
          "name": "How is pricing determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is customized based on volume, production requirements (especially for SKIZA tones), and whether you need Robo Calls, IVR, or both. Production charges apply for custom tones."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my own recorded voice or music?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! For SKIZA and Robo Calls, we support custom recordings and tones—production services available."
          }
        },
        {
          "@type": "Question",
          "name": "Which networks do Voice services work on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Voice solutions work on Safaricom networks with high reliability."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our team. We'll guide you through requirements and custom pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use IVR to collect payments over the phone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IVR can integrate with M-PESA and payment workflows to allow customers to initiate and confirm transactions by phone."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I launch a Robo Call campaign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once your audio is recorded and contacts are uploaded, campaigns can launch within the same day."
          }
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Voice Solutions Kenya | Robo Calls & IVR Systems - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Deploy automated Robo Calls and IVR systems in Kenya with Taifa Mobile. Broadcast announcements, route customer support, and automate call flows on Safaricom networks for businesses of all sizes.'
  }
];

const Voice = () => {
  const [activeTab, setActiveTab] = useState('robo-calls');

  const voiceSolutions = [
    {
      id: 'robo-calls',
      icon: <FaPhone className="icon" />,
      title: "Robo Calls",
      tagline: "Talk to Thousands Instantly",
      description: "Record once, reach everyone. Perfect for when you’ve got big news and zero patience for one-on-one calls.",
      features: [
        "Blast out mass announcements",
        "Automated delivery (no finger cramps)",
        "Reach thousands in minutes",
        "Cheaper than hiring interns to cold-call"
      ],
      example: "Hello! Our mega sale is on. Pop into our store for 25% off everything today!",
      color: "#e97525"
    },
    {
      id: 'ivr',
      icon: <FaHeadset className="icon" />,
      title: "Interactive Voice Response (IVR)",
      tagline: "Self-Service, No Stress",
      description: "Let callers press buttons instead of pressing your patience. Interactive menus = fewer queues, happier customers.",
      features: [
        "24/7 support (yes, even at 3am)",
        "Custom menus for any use case",
        "Cuts down call center chaos",
        "Keeps customers smiling (mostly)"
      ],
      example: "Press 1 to check balance, 2 for support, or 3 if you just miss human contact.",
      color: "#008c95"
    }
  ];

  const universalBenefits = [
    {
      title: "Works on Every Phone",
      description: "No apps, no internet - voice reaches every customer on any handset, on any network.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Built for Scale",
      description: "From 100 to 100,000 calls - our platform handles high-volume voice campaigns without degradation.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Fully Customizable",
      description: "Custom IVR flows, branded audio, and tailored call journeys designed around your business logic.",
      icon: <FaHeadset className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "End-to-End Support",
      description: "Our team assists with call flow design, recording, testing, and ongoing campaign optimization.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "Robo Call Broadcasting",
      description: "Record once, reach thousands. Deliver announcements, reminders, and promotions to large call lists automatically.",
      icon: <FaPhone className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Interactive IVR Menus",
      description: "Build multi-level call menus that let customers self-serve - balance checks, support routing, and account status.",
      icon: <FaHeadset className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Custom Call Flows",
      description: "Design branching logic that matches your support, sales, and service workflows - no generic menus.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Custom Voice Recording",
      description: "Use professional recordings or your own branded audio for Robo Calls, IVR prompts, and SKIZA tones.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Campaign Reporting",
      description: "Track call delivery, answer rates, and IVR path analytics to optimize campaigns and support flows.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "High-Volume Delivery",
      description: "Predictable, reliable outreach at enterprise scale - designed for thousands of concurrent call sessions.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const voiceUseCases = [
    {
      title: "Retail & E-Commerce",
      description: "Promotional announcements, order confirmations, and delivery alerts via automated outbound calls.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Finance & Banking",
      description: "Payment reminders, fraud alerts, and account status notifications through secure IVR.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Healthcare",
      description: "Appointment reminders, prescription notifications, and health campaign broadcasts.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Government & NGOs",
      description: "Public awareness campaigns, beneficiary outreach, and community notification systems.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Education",
      description: "School announcements, exam results notifications, and parent communication campaigns.",
      icon: <FaHeadset className="benefit-icon" />,
      color: "#008c95"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';
  const voiceQuoteMailto = 'mailto:sales@taifamobile.co.ke?subject=Voice%20Solutions%20Quote%20Request';

  return (
    <div className="voice-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonVoice) }}
      />
      {/* Hero Section */}
      <section className="voice-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Voice Solutions for Businesses in Kenya</h1>
            <p>
              Automate customer communication with robo calls Kenya broadcasts and IVR Kenya menus - reach thousands instantly,
              route support efficiently, and reduce call centre load on Safaricom networks.
            </p>
            <p className="hero-links">
              Explore related services: <a href="/call-back">CRBT & SKIZA</a> and <a href="/ussd">USSD Services</a>.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <button className="cta-button primary" onClick={handleGetStarted}>
                <FaRocket /> Explore Voice Solutions
              </button>
              <a className="cta-link" href={voiceQuoteMailto}>Get a Custom Quote</a>
            </div>
            <div
              className="hero-trust"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}
            >
              <span>Safaricom Network</span>
              <span>Custom IVR Flows</span>
              <span>Mass Broadcast Capable</span>
              <span>24/7 Support</span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={voiceSolution} alt="Voice Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Voice Solutions Section */}
      <section className="voice-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Pick Your Voice Strategy</h2>
            <p>Go big with robo calls or keep it smooth with IVR — either way, your voice gets heard.</p>
          </div>
          <div className="tabs">
            {voiceSolutions.map((solution) => (
              <button
                key={solution.id}
                className={`tab ${activeTab === solution.id ? 'active' : ''}`}
                onClick={() => setActiveTab(solution.id)}
                style={{ backgroundColor: activeTab === solution.id ? solution.color : '' }}
              >
                {solution.icon} {solution.title}
              </button>
            ))}
          </div>
          <div className="voice-type-card-wrapper">
            {voiceSolutions.filter((s) => s.id === activeTab).map((solution) => (
              <div key={solution.id} className="voice-type-card" style={{ borderColor: solution.color }}>
                <div className="card-header" style={{ borderLeftColor: solution.color }}>
                  <div className="icon-wrapper" style={{ color: solution.color }}>{solution.icon}</div>
                  <div>
                    <h3>{solution.title}</h3>
                    <p className="tagline">{solution.tagline}</p>
                  </div>
                </div>
                <div className="card-body">
                  <p className="description">{solution.description}</p>
                  <div className="features-list">
                    <h4>Key Features:</h4>
                    <ul>
                      {solution.features.map((feature, i) => (
                        <li key={i}><FaCheckCircle style={{ color: solution.color }} /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="example" style={{ backgroundColor: `${solution.color}20` }}>
                    <h4>Use Case:</h4>
                    <p>"{solution.example}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Voice Platform Features for Enterprise Communication</h2>
            <p>One platform for mass outreach, interactive menus, and automated call management with robo calls Kenya and IVR Kenya capabilities.</p>
          </div>
          <div className="benefits-grid">
            {keyFeaturesOverview.map((feature, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: feature.color, backgroundColor: `${feature.color}10` }}>
                <div className="icon-container" style={{ color: feature.color }}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Businesses Choose Taifa Mobile for Voice</h2>
            <p>Robo calls Kenya reach and IVR Kenya control with reliable delivery and end-to-end support.</p>
          </div>
          <div className="benefits-grid">
            {universalBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: benefit.color, backgroundColor: `${benefit.color}10` }}>
                <div className="icon-container" style={{ color: benefit.color }}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p className="description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Voice Solutions Across Industries</h2>
            <p>Business scenarios where automated and interactive calls deliver the most value.</p>
          </div>
          <div className="benefits-grid">
            {voiceUseCases.map((useCase, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: useCase.color, backgroundColor: `${useCase.color}10` }}>
                <div className="icon-container" style={{ color: useCase.color }}>{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p className="description">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Customized (SKIZA Business format) */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Custom Voice Pricing for Robo Calls & IVR</h2>
            <p>Pricing is tailored to your call volume, IVR complexity, and production requirements. Contact our team for a transparent, volume-based quote.</p>
          </div>
          <div className="pricing-content">
            <div className="custom-pricing-message">
              <h3>Voice Business</h3>
              <p>Production charges apply based on requirements.</p>
              <p><strong>Custom pricing</strong> — Custom made tones with production services.</p>
              <p>For detailed pricing and a package that fits your Robo Calls or IVR needs, please contact our customer care team.</p>
            </div>
            <div className="pricing-cta">
              <button className="cta-button primary" onClick={handleGetStarted}>
                Contact Us for Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Start Reaching Thousands with Automated Voice</h2>
            <p>Reduce manual outreach costs and improve customer reach with scalable Robo Calls and IVR solutions.</p>
          </div>
          <div
            className="cta-actions"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Explore Voice Solutions
            </button>
            <a className="cta-link" href={voiceQuoteMailto}>Get a Custom Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our Voice services (Robo Calls & IVR).</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Robo Calls and IVR?</summary>
              <div className="faq-answer">
                <p>Robo Calls are one-way automated voice broadcasts for announcements. IVR is interactive, allowing callers to navigate menus and get responses (e.g., balance checks, support routing).</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How is pricing determined?</summary>
              <div className="faq-answer">
                <p>Pricing is customized based on volume, production requirements (especially for SKIZA tones), and whether you need Robo Calls, IVR, or both. Production charges apply for custom tones.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I use my own recorded voice or music?</summary>
              <div className="faq-answer">
                <p>Yes! For SKIZA and Robo Calls, we support custom recordings and tones-production services available.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which networks do Voice services work on?</summary>
              <div className="faq-answer">
                <p>Our Voice solutions work on Safaricom networks with high reliability.</p>
              </div>
            </details>


            <details className="faq-item">
              <summary>How do I get started?</summary>
              <div className="faq-answer">
                <p>Contact our team. We’ll guide you through requirements and custom pricing.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Can I use IVR to collect payments over the phone?</summary>
              <div className="faq-answer">
                <p>Yes, IVR can integrate with M-PESA and payment workflows to allow customers to initiate and confirm transactions by phone.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How quickly can I launch a Robo Call campaign?</summary>
              <div className="faq-answer">
                <p>Once your audio is recorded and contacts are uploaded, campaigns can launch within the same day.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Voice;
