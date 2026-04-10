import React, { useState } from 'react';
import { FaInbox, FaHandsHelping, FaMobileAlt, FaUsers, FaChartLine, FaCheckCircle, FaRocket, FaCode } from 'react-icons/fa';
import '../../styles/ShortCode.scss';
import shortcodeSolution from '../../assets/optimized/shortcode-solution.webp';

const ldJsonShortcode = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/shortcode/#service",
      "name": "Short Code Services",
      "url": "https://taifamobile.co.ke/shortcode",
      "serviceType": "Short Code Provisioning",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Shared, dedicated, and premium short code services for two-way messaging, subscriptions, and feedback across Kenya."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/shortcode/#faq",
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
        },
        {
          "@type": "Question",
          "name": "Can I use a short code for two-way WhatsApp-style SMS conversations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Inbox and Feedback short codes support two-way conversations with full keyword routing for replies, surveys, and customer support."
          }
        },
        {
          "@type": "Question",
          "name": "What industries use short codes most in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Finance, retail, media, education, and government organizations all use short codes for structured customer communication."
          }
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Short Code Services Kenya | Shared & Dedicated Shortcodes - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Get shared, dedicated, and premium short codes in Kenya with Taifa Mobile. Two-way SMS, subscriber campaigns, and feedback collection backed by 24/7 support on Safaricom and Airtel networks.'
  }
];

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
      title: "Fast Activation",
      description: "Shared codes ready in days. Dedicated codes processed every Tuesday and Thursday - clear timelines, no surprises.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Proven Network Partnerships",
      description: "Direct relationships with Safaricom and Airtel ensure your campaigns get priority routing and reliable delivery.",
      icon: <FaHandsHelping className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Full Campaign Visibility",
      description: "Track message volumes, delivery rates, and subscriber actions from a centralized dashboard.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "End-to-End Setup Support",
      description: "From application and documentation to go-live, our team guides you through every step.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "Two-Way Messaging",
      description:
        "Collect replies, run surveys, and drive real-time customer conversations through short code interactions - not one-way broadcasts.",
      icon: <FaInbox className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Dedicated & Shared Options",
      description:
        "Choose a shared code for a cost-effective fast launch, or a dedicated code for exclusive brand ownership and complex user journeys.",
      icon: <FaCode className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Campaign Flexibility",
      description:
        "Run support, surveys, subscription, and promotional workflows with full control over messaging logic and keyword routing.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Nationwide Network Coverage",
      description: "Reach audiences on Safaricom and Airtel with dependable message delivery and high uptime.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Premium Revenue Sharing",
      description: "Monetize subscription services with a transparent revenue share model based on successfully billed volumes.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Secure & Compliant",
      description:
        "Fully compliant with Kenya's communications regulations, ensuring your campaigns meet all operator and regulatory requirements.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const shortCodeUseCases = [
    {
      title: "Banks & SACCOs",
      description: "Customer alerts, balance inquiries, loan notifications, and two-way support.",
      icon: <FaHandsHelping className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Retailers & E-Commerce",
      description: "Promotional campaigns, order confirmations, and loyalty subscription programs.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Media & Content Providers",
      description: "Premium content subscriptions, vote-in campaigns, and news alerts.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "NGOs & Government",
      description: "Public awareness campaigns, beneficiary feedback, and mass notifications.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Schools & Universities",
      description: "Fee payment alerts, exam results, and parent communication.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#e97525"
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
            <h1>Short Code Services for Businesses in Kenya</h1>
            <p>
              Launch branded two-way SMS campaigns, subscription services, and customer feedback workflows on shared
              or dedicated short code Kenya options - backed by Taifa Mobile's reliable network partnerships across Kenya.
            </p>
            <p className="hero-links">
              Explore related services: <a href="/ussd">USSD Services</a> and <a href="/sms">Bulk SMS</a>.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <button className="cta-button primary" onClick={handleGetStarted}>
                <FaRocket /> Apply for a Short Code
              </button>
              <a className="cta-link" href="#shortcode-pricing">View Pricing</a>
            </div>
            <div
              className="hero-trust"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}
            >
              <span>Safaricom & Airtel Supported</span>
              <span>Licensed & Regulated</span>
              <span>24/7 Support</span>
            </div>
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
                    <h4>Use Case:</h4>
                    <p>"{type.example}"</p>
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
            <h2>Everything Your Short Code Campaign Needs</h2>
            <p>From two-way conversations to premium subscription services - built for reliability and scale across short code Kenya campaigns.</p>
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
            <h2>Why Businesses Choose Taifa Mobile for Short Codes</h2>
            <p>Short code Kenya activation, visibility, and support that keep campaigns compliant and reliable.</p>
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
            <h2>Who Uses Short Codes?</h2>
            <p>Industries using short codes to engage, support, and monetize customer interactions across Kenya.</p>
          </div>
          <div className="benefits-grid">
            {shortCodeUseCases.map((useCase, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: useCase.color, backgroundColor: `${useCase.color}10` }}>
                <div className="icon-container" style={{ color: useCase.color }}>{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p className="description">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Updated with actual table */}
      <section className="pricing-section" id="shortcode-pricing">
        <div className="container">
          <div className="section-header">
            <h2>Short Code Pricing - Transparent & VAT-Inclusive</h2>
            <p>All short code Kenya plans include setup support, network liaison, and ongoing technical assistance. VAT inclusive.</p>
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
              All prices are VAT inclusive. For premium subscription services, revenue share applies based on billed volumes.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Launch Your Short Code?</h2>
            <p>Join hundreds of Kenyan businesses using short code Kenya services to engage customers, run campaigns, and grow revenue.</p>
          </div>
          <div
            className="cta-actions"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Apply for a Short Code
            </button>
            <a className="cta-link" href="/contact">Talk to Sales</a>
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
            <details className="faq-item">
              <summary>Can I use a short code for two-way WhatsApp-style SMS conversations?</summary>
              <div className="faq-answer">
                <p>Yes. Inbox and Feedback short codes support two-way conversations with full keyword routing.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What industries use short codes most in Kenya?</summary>
              <div className="faq-answer">
                <p>Finance, retail, media, education, and government organizations use short codes for structured customer communication.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortCode;
