import React, { useState } from 'react';
import {
  FaRocket, FaMobileAlt, FaChartLine, FaUsers,
  FaCheckCircle, FaPhoneAlt, FaMoneyBillWave, FaClock, FaShieldAlt
} from 'react-icons/fa';
import '../../styles/airtime.scss';
import airtimeSolution from '../../assets/optimized/airtime-solution.webp';

const ldJsonAirtime = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/airtime/#service",
      "name": "Airtime Services",
      "url": "https://taifamobile.co.ke/airtime",
      "serviceType": "Retail and Bulk Airtime",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Bulk and retail airtime distribution across Safaricom, Airtel, and Telkom with API-ready automation."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/airtime/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Retail and Bulk Airtime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Retail Airtime is for resellers earning commissions on individual sales. Bulk Airtime offers discounted rates for large purchases used for rewards, incentives, or internal distribution."
          }
        },
        {
          "@type": "Question",
          "name": "How are commissions/discounts determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is fully customized based on your volume, frequency, and business type. Higher volumes mean better rates — contact us for details."
          }
        },
        {
          "@type": "Question",
          "name": "Which networks do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We support Safaricom, Airtel, and Telkom with instant delivery across all networks."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum purchase or sales requirement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No strict minimums — flexible for businesses of all sizes. Custom packages are available."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate with my system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer API integration for automated sales and distribution."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Click 'Get Started' or contact our team. We'll set you up quickly and provide custom pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate airtime distribution into my mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our API supports automated airtime issuance directly from your app, platform, or loyalty system."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support Telkom Kenya airtime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we distribute airtime across all three major networks: Safaricom, Airtel, and Telkom Kenya."
          }
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Bulk Airtime Kenya | Retail & Bulk Airtime Distribution - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Distribute airtime instantly across Safaricom, Airtel, and Telkom in Kenya. Retail commissions for resellers and bulk discounts for businesses. API-ready for automated airtime rewards and operations.'
  }
];

const Airtime = () => {
  const [activeTab, setActiveTab] = useState('retail');

  const airtimeTypes = [
    {
      id: 'retail',
      icon: <FaMobileAlt className="icon" />,
      title: "Retail Airtime",
      tagline: "Top-Up Made Easy",
      description: "Sell airtime to your customers instantly. Perfect for shops, kiosks, and mobile money agents looking to boost revenue with zero stock risk.",
      features: [
        "Instant delivery to any network",
        "Competitive commissions on every sale",
        "No physical stock required"
      ],
      example: "Customer requests KSh 100 Safaricom airtime → You send instantly → Earn commission!",
      color: "#e97525"
    },
    {
      id: 'bulk',
      icon: <FaMoneyBillWave className="icon" />,
      title: "Bulk Airtime",
      tagline: "Buy Big, Save More",
      description: "Purchase airtime in bulk at discounted rates. Ideal for businesses, organizations, or resellers who need large volumes for incentives, rewards, or internal use.",
      features: [
        "Deep discounts on high volumes",
        "Flexible denominations and networks",
        "API integration available"
      ],
      example: "Buy KSh 500,000 airtime → Distribute to staff or customers as rewards",
      color: "#008c95"
    }
  ];

  const universalBenefits = [
    {
      title: "Competitive Commissions & Discounts",
      description: "Retail resellers earn market-leading commissions; bulk buyers access deep volume discounts.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Instant Credited Delivery",
      description: "Airtime reaches recipients' phones within seconds - no delays, no failed transactions.",
      icon: <FaClock className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Fully Automatable",
      description: "Set up automated campaigns once - airtime flows to recipients without manual intervention.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Flexible & Scalable",
      description: "No minimums, no maximums - start small and scale as your business grows, with custom packages available.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "Retail Airtime Sales",
      description: "Earn competitive commissions on every Safaricom, Airtel, and Telkom airtime sale - no stock, no risk.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Bulk Airtime Discounts",
      description: "Purchase at volume discounts for employee rewards, operational needs, or campaign distribution.",
      icon: <FaMoneyBillWave className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "API-Driven Distribution",
      description: "Automate airtime issuance from your CRM, loyalty platform, or business system via a clean REST API.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Multi-Network Coverage",
      description: "One account, three networks - Safaricom, Airtel, and Telkom - with instant credited delivery.",
      icon: <FaPhoneAlt className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Encrypted Transactions",
      description: "Every airtime transaction is fully encrypted and auditable for security and compliance.",
      icon: <FaShieldAlt className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Distribution Dashboard",
      description: "Monitor all sales, disbursements, and commission earnings from a single management view.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const airtimeUseCases = [
    {
      title: "Retail Shops & Agents",
      description: "Sell Safaricom, Airtel, and Telkom airtime with zero stock investment and earn per-sale commissions.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Field Teams & Logistics",
      description: "Distribute operational airtime to drivers, agents, and field staff automatically via API.",
      icon: <FaPhoneAlt className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Customer Loyalty Programs",
      description: "Reward customers with airtime for purchases, referrals, or milestone achievements.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "NGO & Development Programs",
      description: "Distribute communication airtime to beneficiaries, surveyors, and community volunteers.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Promotional Campaigns",
      description: "Run 'buy and get airtime' promotions or sign-up rewards to drive acquisition.",
      icon: <FaMoneyBillWave className="benefit-icon" />,
      color: "#008c95"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';
  const airtimeQuoteMailto = 'mailto:sales@taifamobile.co.ke?subject=Airtime%20Quote%20Request';

  return (
    <div className="airtime-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonAirtime) }}
      />
      {/* Hero Section */}
      <section className="airtime-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="heading-vertical-stack">
              <h1>Retail and Bulk Airtime Services in Kenya</h1>
              <p className="subheading">Instant Multi-Network Airtime for Teams and Customers</p>
            </div>
            <p>
              Distribute airtime instantly across Safaricom, Airtel, and Telkom for retail resale, bulk employee rewards,
              promotional campaigns, or automated API distribution. Competitive commissions and volume discounts power bulk airtime Kenya
              programs and airtime distribution Kenya workflows.
            </p>
            <p className="hero-links">
              Explore related services: <a href="/data">Bulk Data</a> and <a href="/sms">Bulk SMS</a>.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <button className="cta-button primary" onClick={handleGetStarted}>
                <FaRocket /> Start Distributing Airtime
              </button>
              <a className="cta-link" href={airtimeQuoteMailto}>Get a Custom Quote</a>
            </div>
            <div
              className="hero-trust"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}
            >
              <span>Safaricom, Airtel & Telkom</span>
              <span>Instant Delivery</span>
              <span>API-Ready</span>
              <span>Encrypted Transactions</span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={airtimeSolution} alt="Bulk airtime distribution across Kenyan networks" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Airtime Types Section */}
      <section className="airtime-types-section">
        <div className="container">
          <div className="section-header">
            <div className="heading-vertical-stack">
              <h2>Choose Your Airtime Solution</h2>
              <p className="subheading">Retail or bulk — we've got the perfect option for your needs.</p>
            </div>
          </div>
          <div className="tabs">
            {airtimeTypes.map((type) => (
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
          <div className="airtime-type-card-wrapper">
            {airtimeTypes.filter((t) => t.id === activeTab).map((type) => (
              <div key={type.id} className="airtime-type-card" style={{ borderColor: type.color }}>
                <div className="card-header" style={{ borderLeftColor: type.color }}>
                  <div className="icon-wrapper" style={{ color: type.color }}>{type.icon}</div>
                  <div>
                    <div className="heading-vertical-stack">
                      <h3>{type.title}</h3>
                      <p className="tagline">{type.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="description">{type.description}</p>
                  <div className="features-list">
                    <div className="heading-vertical-stack">
                      <h4>Key Features</h4>
                    </div>
                    <ul>
                      {type.features.map((feature, i) => (
                        <li key={i}><FaCheckCircle style={{ color: type.color }} /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="example">
                    <div className="heading-vertical-stack">
                      <h4>Use Case</h4>
                    </div>
                    <p>{type.example}</p>
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
            <h2>Airtime Distribution Features for Every Business Model</h2>
            <p>From individual retail sales to enterprise-scale automated distribution - all networks, instant delivery, and airtime distribution Kenya visibility.</p>
          </div>
          <div className="benefits-grid">
            {keyFeaturesOverview.map((feature, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: feature.color }}>
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
            <div className="heading-vertical-stack">
              <h2>Why Businesses Choose Taifa Mobile for Airtime</h2>
              <p className="subheading">bulk airtime Kenya reach with reliable network coverage and flexible distribution options.</p>
            </div>
          </div>
          <div className="benefits-grid">
            {universalBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: benefit.color }}>
                <div className="icon-container" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <div className="heading-vertical-stack">
                  <h3>{benefit.title}</h3>
                </div>
                <p className="description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Airtime Distribution Use Cases</h2>
            <p>How businesses use airtime to drive engagement, operations, and channel performance.</p>
          </div>
          <div className="benefits-grid">
            {airtimeUseCases.map((useCase, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: useCase.color }}>
                <div className="icon-container" style={{ color: useCase.color }}>{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p className="description">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <div className="heading-vertical-stack">
              <h2>Airtime Pricing Built Around Your Volume</h2>
              <p className="subheading">Retail pricing is commission-based - earn on every sale. Bulk pricing scales with volume - the larger your purchase, the better your rate. No hidden fees for bulk airtime Kenya and airtime distribution Kenya programs.</p>
            </div>
          </div>
          <div className="pricing-content">
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Pricing</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Retail Airtime</td>
                    <td>Commission-based</td>
                    <td>Earn competitive commissions on every sale. Rates customized based on your sales volume.</td>
                  </tr>
                  <tr className="bulk">
                    <td>Bulk Airtime</td>
                    <td>Custom pricing</td>
                    <td>Deep discounts on large volumes. Pricing tailored to your purchase size and frequency.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pricing-note">
              All pricing is customized to suit your business needs. Contact our team for a personalized quote and the best rates.
            </p>
            <div className="pricing-cta">
              <button className="cta-button primary" onClick={handleGetStarted}>
                Contact Us for Custom Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Start Distributing Airtime?</h2>
            <p>Join Kenyan businesses and retailers using Taifa Mobile to distribute airtime instantly - at competitive rates, on every major network.</p>
          </div>
          <div
            className="cta-actions"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Start Distributing Airtime
            </button>
            <a className="cta-link" href={airtimeQuoteMailto}>Get a Custom Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="heading-vertical-stack">
              <h2>Frequently Asked Questions</h2>
              <p className="subheading">Common questions about our Airtime solutions.</p>
            </div>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Retail and Bulk Airtime?</summary>
              <div className="faq-answer">
                <p>Retail Airtime is for resellers earning commissions on individual sales. Bulk Airtime offers discounted rates for large purchases used for rewards, incentives, or internal distribution.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How are commissions/discounts determined?</summary>
              <div className="faq-answer">
                <p>Pricing is fully customized based on your volume, frequency, and business type. Higher volumes mean better rates — contact us for details.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which networks do you support?</summary>
              <div className="faq-answer">
                <p>We support Safaricom, Airtel, and Telkom with instant delivery across all networks.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is there a minimum purchase or sales requirement?</summary>
              <div className="faq-answer">
                <p>No strict minimums — flexible for businesses of all sizes. Custom packages available.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I integrate with my system?</summary>
              <div className="faq-answer">
                <p>Yes! We offer API integration for automated sales and distribution.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I get started?</summary>
              <div className="faq-answer">
                <p>Click “Get Started” or contact our team. We’ll set you up quickly and provide custom pricing.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Can I integrate airtime distribution into my mobile app?</summary>
              <div className="faq-answer">
                <p>Yes, our API supports automated airtime issuance directly from your app, platform, or loyalty system.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Do you support Telkom Kenya airtime?</summary>
              <div className="faq-answer">
                <p>Yes, we distribute airtime across all three major networks: Safaricom, Airtel, and Telkom Kenya.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Airtime;
