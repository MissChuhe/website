import React, { useState } from 'react';
import { FaGift, FaRocket, FaCheckCircle, FaChartLine, FaMobileAlt, FaUsers } from 'react-icons/fa';
import '../../styles/BulkData.scss';
import dataSolution from '../../assets/optimized/hero-data.webp';

const ldJsonData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/data/#service",
      "name": "Bulk Data",
      "url": "https://taifamobile.co.ke/solutions/data",
      "serviceType": "Business Data Services",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Data services for loyalty, promotions, and marketing campaigns with automated delivery across Safaricom networks."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/solutions/data/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Reward and Promotional Data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reward Data is for loyalty programs and customer appreciation (e.g., free bundles for sign-ups or milestones). Promotional Data is sponsored by brands to remove barriers for new users (e.g., free data to try an app)."
          }
        },
        {
          "@type": "Question",
          "name": "How is pricing determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is fully customized based on your data volume, frequency, target audience, and specific use case. We have flexible packages, contact customer care for a tailored quote."
          }
        },
        {
          "@type": "Question",
          "name": "Can I schedule automated data rewards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Automate rewards for events like birthdays, milestones, or recurring loyalty programs via our dashboard or API."
          }
        },
        {
          "@type": "Question",
          "name": "Which networks do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver data bundles across Safaricom networks with reliable, real-time fulfillment."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum purchase requirement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No strict minimum — packages are flexible. Contact us to find the right fit for your needs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For custom packages and pricing, our customer care team is ready to assist."
          }
        }
      ]
    }
  ]
};

const Data = () => {
  const [activeTab, setActiveTab] = useState('reward');

  const dataTypes = [
    {
      id: 'reward',
      icon: <FaGift className="icon" />,
      title: "Reward Data",
      tagline: "The gift everyone actually wants",
      description: "Loyalty isn’t built with mugs, umbrellas, or keychains. It’s built with bundles. Reward Data lets you hand out MBs that make users smile, stay, and keep coming back for more.",
      features: [
        "Personalized rewards that feel thoughtful",
        "Flexible data sizes (from snack-size MBs to feast-size GBs)",
        "Boosts loyalty and engagement instantly"
      ],
      example: "Sign up today → Boom! 100MB free. Better than a free t-shirt, right?",
      color: "#e97525"
    },
    {
      id: 'promotional',
      icon: <FaRocket className="icon" />,
      title: "Promotional Data",
      tagline: "When brands pick up the tab",
      description: "New users shouldn’t worry about ‘Balance: 0.00.’ Promotional Data lets businesses cover the cost so people can explore freely, while brands earn love and attention in return.",
      features: [
        "Smooth onboarding with zero friction",
        "Breaks down accessibility barriers",
        "Boosts conversions faster than you can say ‘loading…’"
      ],
      example: "Download our app → Enjoy 50MB on us → Explore without excuses.",
      color: "#008c95"
    }
  ];

  const universalBenefits = [
    {
      title: "Engage Users",
      description: "Give data, and watch customers stick around longer than a WhatsApp family group chat.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Streamline Operations",
      description: "Automate top-ups so your team stops looking like secret airtime resellers.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Ensure Reliability",
      description: "Real-time, reliable data delivery. None of that ‘where did my bundles go?’ drama.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';

  return (
    <div className="bulk-data-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
      />
      {/* Hero Section */}
      <section className="bulk-data-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Bulk Data</h1>
            <p>
              From remote staff to social circles, data keeps people in sync. Taifa Mobile’s
              Bulk Data ensures smooth collaboration and nonstop connection at work and after hours.
            </p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={dataSolution} alt="Data Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="bulk-data-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Data Strategy</h2>
            <p>Pick the option that makes your users say: “Eh, they really thought about us.”</p>
          </div>
          <div className="tabs">
            {dataTypes.map((type) => (
              <button
                key={type.id}
                className={`tab ${activeTab === type.id ? 'active' : ''}`}
                onClick={() => setActiveTab(type.id)}
                style={{ backgroundColor: activeTab === type.id ? type.color : '' }}
              >
                {type.icon} {type.title}
              </button>
            ))}
          </div>
          <div className="bulk-data-type-card-wrapper">
            {dataTypes.filter((t) => t.id === activeTab).map((type) => (
              <div key={type.id} className="bulk-data-type-card" style={{ borderColor: type.color }}>
                <div className="card-header" style={{ borderLeftColor: type.color }}>
                  <div className="icon-wrapper" style={{ color: type.color }}>{type.icon}</div>
                  <div>
                    <h3>{type.title}</h3>
                    <p className="tagline">{type.tagline}</p>
                  </div>
                </div>
                <div className="card-body">
                  <p className="description">{type.description}</p>
                  <div className="features-list">
                    <h4>Key Features:</h4>
                    <ul>
                      {type.features.map((feature, i) => (
                        <li key={i}><FaCheckCircle style={{ color: type.color }} /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="example" style={{ backgroundColor: `${type.color}20` }}>
                    <h4>Example:</h4>
                    <p>"{type.example}"</p>
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
            <h2>Why Use Data Solutions?</h2>
            <p>Because nothing says “we value you” like free MBs.</p>
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

      {/* Pricing Section - Customized */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent & Customized Pricing</h2>
            <p>We tailor Bulk Data packages to your exact needs — volume, frequency, and use case.</p>
          </div>
          <div className="pricing-content">
            <div className="custom-pricing-message">
              <p>We offer flexible packages for Reward and Promotional Data, customized based on your business requirements.</p>
              <p>For detailed pricing and the best package for you, please contact our customer care team — they’ll guide you and redirect you to the right solution.</p>
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
            <p>Common questions about our Bulk Data services.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Reward and Promotional Data?</summary>
              <div className="faq-answer">
                <p>Reward Data is for loyalty programs and customer appreciation (e.g., free bundles for sign-ups or milestones). Promotional Data is sponsored by brands to remove barriers for new users (e.g., free data to try an app).</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How is pricing determined?</summary>
              <div className="faq-answer">
                <p>Pricing is fully customized based on your data volume, frequency, target audience, and specific use case. We have flexible packages, contact customer care for a tailored quote.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I schedule automated data rewards?</summary>
              <div className="faq-answer">
                <p>Yes! Automate rewards for events like birthdays, milestones, or recurring loyalty programs via our dashboard or API.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which networks do you support?</summary>
              <div className="faq-answer">
                <p>We deliver data bundles across Safaricom networks with reliable, real-time fulfillment.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is there a minimum purchase requirement?</summary>
              <div className="faq-answer">
                <p>No strict minimum — packages are flexible. Contact us to find the right fit for your needs.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I get started?</summary>
              <div className="faq-answer">
                <p>For custom packages and pricing, our customer care team is ready to assist.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Data;
