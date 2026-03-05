import React, { useState } from 'react';
import { FaInbox, FaHandsHelping, FaMobileAlt, FaUsers, FaChartLine, FaCheckCircle, FaRocket, FaCode } from 'react-icons/fa';
import '../../styles/ShortCode.scss';
import shortcodeSolution from '../../assets/optimized/shortcode-solution.webp';

const ldJsonShortcode = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/shortcode/#service",
      "name": "Short Code Services",
      "url": "https://taifamobile.co.ke/solutions/shortcode",
      "serviceType": "Short Code Provisioning",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Dedicated short codes for marketing campaigns, notifications, and brand messaging across Kenya."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/solutions/shortcode/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Shared and Dedicated Short Codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shared Short Codes are cost-effective and shared among multiple businesses. Dedicated Short Codes are exclusive to your brand for full control and branding. Dedicated (CMS) includes a content management system, while Golden Short Codes feature premium, memorable digits."
          }
        },
        {
          "@type": "Question",
          "name": "What are Inbox & Feedback vs Premium Short Codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inbox & Feedback Short Codes are ideal for two-way communication like surveys, support, and feedback collection. Premium Short Codes are designed for subscription-based or billed services (e.g., content, games) with revenue sharing."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to activate a Short Code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approval and activation depend on the availability of the shortcode. The shortcode must first be available before it can be approved. Approvals are processed only on Tuesdays and Thursdays, and depending on the day of application, the process typically takes about 2-3 days."
          }
        },
        {
          "@type": "Question",
          "name": "Do Short Codes work on all Kenyan networks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Short Codes are supported on Safaricom and Airtel with high delivery rates."
          }
        },
        {
          "@type": "Question",
          "name": "Is there revenue sharing for premium services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for Premium Short Codes used in subscription services, we offer revenue sharing based on successfully billed volumes each month."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started or apply for a Short Code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our sales team. We'll guide you through the application, documentation, and setup process."
          }
        }
      ]
    }
  ]
};

const ShortCode = () => {
  const [activeTab, setActiveTab] = useState('inbox');

  const shortcodeTypes = [
    {
      id: 'inbox',
      icon: <FaInbox className="icon" />,
      title: "Inbox & Feedback",
      tagline: "Let Them Talk Back",
      description: "Customers love to be heard (sometimes loudly). Short codes give them a quick way to complain, praise, or drop their two cents and you get real-time feedback to actually act on.",
      features: [
        "Instant customer feedback collection",
        "Two-way SMS conversations, not monologues",
        "Perfect for surveys and quick polls",
        "Boosts response time and satisfaction"
      ],
      example: "Text FEEDBACK to 12345 to share your thoughts (we promise we’ll read it).",
      color: "#e97525"
    },
    {
      id: 'premium',
      icon: <FaMobileAlt className="icon" />,
      title: "Premium Short Codes",
      tagline: "Designed for Subscription-Based Services",
      description: "Perfect for subscription-based services where you bill users at set rates without the hassle. Get customized pricing for your unique app or solution, and share revenue based on what actually gets billed each month fair and square.",
      features: [
        "Support billing of services at predetermined rates",
        "Customized pricing based on the app/solution being developed",
        "Revenue share based on volumes successfully billed monthly"
      ],
      example: "TEXT GAMES / NEWS to 12345 at 10/= daily",
      color: "#008c95"
    }
  ];

  const universalBenefits = [
    {
      title: "Boost Engagement",
      description: "Short codes are like open mics for your customers easy, instant, and sometimes brutally honest. But hey, that’s gold for your business.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Simplify Support",
      description: "No more endless ‘Press 1 for this, 2 for that’. Just simple SMS menus that get customers what they need minus the rage.",
      icon: <FaHandsHelping className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Reach Everyone",
      description: "From kabambes to smartphones, if it can text, it can use short codes. No internet, no drama, just pure reach.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';

  return (
    <div className="short-code-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonShortcode) }}
      />
      {/* Hero Section */}
      <section className="short-code-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Short Codes</h1>
            <p>
              Taifa Mobile’s Short Codes cut through
              the clutter, giving your customers a direct line for support, surveys, alerts, and more.
            </p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={shortcodeSolution} alt="Short Code Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Shortcode Types Section */}
      <section className="short-code-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Pick Your Short Code Superpower</h2>
            <p>Because one size doesn’t fit all choose the flavour that matches your vibe</p>
          </div>
          <div className="tabs">
            {shortcodeTypes.map((type) => (
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
          <div className="short-code-type-card-wrapper">
            {shortcodeTypes.filter((t) => t.id === activeTab).map((type) => (
              <div key={type.id} className="short-code-type-card" style={{ borderColor: type.color }}>
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
            <h2>Why Bother With Short Codes?</h2>
            <p>Because sometimes the simplest tools pack the biggest punch</p>
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

      {/* Pricing Section - Updated with actual table */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent Pricing</h2>
            <p>Setup & Monthly Costs (VAT Inclusive)</p>
          </div>
          <div className="pricing-content">
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Setup (KES)</th>
                    <th>Monthly (KES)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shared</td>
                    <td>5,000</td>
                    <td>2,000</td>
                  </tr>
                  <tr>
                    <td>Dedicated</td>
                    <td>17,400</td>
                    <td>17,400</td>
                  </tr>
                  <tr>
                    <td>Dedicated (CMS)</td>
                    <td>58,000</td>
                    <td>23,200</td>
                  </tr>
                  <tr className="golden">
                    <td>Golden</td>
                    <td>232,000</td>
                    <td>58,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pricing-note">
              All prices are VAT inclusive. For premium/subscription services, revenue share applies based on billed volumes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our Short Code services answered.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Shared and Dedicated Short Codes?</summary>
              <div className="faq-answer">
                <p>Shared Short Codes are cost-effective and shared among multiple businesses. Dedicated Short Codes are exclusive to your brand for full control and branding. Dedicated (CMS) includes a content management system, while Golden Short Codes feature premium, memorable digits.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What are Inbox & Feedback vs Premium Short Codes?</summary>
              <div className="faq-answer">
                <p>Inbox & Feedback Short Codes are ideal for two-way communication like surveys, support, and feedback collection. Premium Short Codes are designed for subscription-based or billed services (e.g., content, games) with revenue sharing.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How long does it take to activate a Short Code?</summary>
              <div className="faq-answer">
                <p>Approval and activation depend on the availability of the shortcode. The shortcode must first be available before it can be approved. Approvals are processed 
                  only on Tuesdays and Thursdays, and depending on the day of application, the process typically takes about 2–3 days</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Do Short Codes work on all Kenyan networks?</summary>
              <div className="faq-answer">
                <p>Yes, our Short Codes are supported on Safaricom and Airtel with high delivery rates.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is there revenue sharing for premium services?</summary>
              <div className="faq-answer">
                <p>Yes, for Premium Short Codes used in subscription services, we offer revenue sharing based on successfully billed volumes each month.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I get started or apply for a Short Code?</summary>
              <div className="faq-answer">
                <p>Contact our sales team. We’ll guide you through the application, documentation, and setup process.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortCode;
