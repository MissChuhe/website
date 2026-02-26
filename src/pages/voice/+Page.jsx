import React, { useState } from 'react';
import { FaPhone, FaHeadset, FaUsers, FaChartLine, FaCheckCircle, FaRocket } from 'react-icons/fa';
import '../../styles/Voice.scss'
import voiceSolution from '../../assets/optimized/voice-solution.webp';

const ldJsonVoice = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/voice/#service",
      "name": "Voice Services",
      "url": "https://taifamobile.co.ke/solutions/voice",
      "serviceType": "Business Voice Solutions",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Voice call solutions including Robo Calls and IVR for announcements, customer support, and SKIZA tones."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/solutions/voice/#faq",
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
        }
      ]
    }
  ]
};

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
      title: "Mass Outreach",
      description: "Why call one person when you can call a thousand at once? No airtime drama, no endless redialing.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Streamline Support",
      description: "IVR handles the FAQs so your agents can focus on real problems (like why Wi-Fi dies only during Zoom).",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Always Accessible",
      description: "Any phone, any network, any time. No apps, no bundles, just a simple call that works.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';

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
            <h1>Voice</h1>
            <p>
              Text can be missed. Apps can be ignored. But a voice? It connects.
              Taifa Sauti lets you automate voice messages that inform, engage, and resonate.
              Whether you're sending service updates, campaign jingles, or heartfelt reminders
            </p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
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
                    <h4>Example:</h4>
                    <p>"{solution.example}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Voice Wins</h2>
            <p>SMS is cool, but sometimes hearing it makes all the difference (even if it’s a robot).</p>
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

      {/* Pricing Section - Customized (SKIZA Business format) */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent & Customized Pricing</h2>
            <p>Pricing tailored to your specific voice solution needs.</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voice;
