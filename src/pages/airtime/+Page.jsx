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
      "description": "Retail and bulk airtime services for businesses, including commission-based reseller options, discounted bulk purchases, and API integration."
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
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Retail and Bulk Airtime Services in Kenya | Taifa Mobile' },
  {
    name: 'description',
    content:
      'Sell or distribute airtime instantly with Taifa Mobile retail and bulk airtime services, including API integration and multi-network delivery.'
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
    { title: "Increase Revenue", description: "Earn commissions on every airtime sale or enjoy bulk discounts for your business needs.", icon: <FaChartLine className="benefit-icon" />, color: "#e97525" },
    { title: "Instant Delivery", description: "Airtime credited to phones in seconds — no delays, no complaints.", icon: <FaClock className="benefit-icon" />, color: "#008c95" },
    { title: "Secure & Reliable", description: "Fully encrypted transactions and direct integration with all major networks.", icon: <FaShieldAlt className="benefit-icon" />, color: "#91a2a1" }
  ];

  const keyFeaturesOverview = [
    { title: "Retail and Bulk Options", description: "Choose retail airtime for reseller commissions or bulk airtime for discounts at higher volumes.", icon: <FaMobileAlt className="benefit-icon" />, color: "#008c95" },
    { title: "Multi-Network Delivery", description: "Distribute airtime across Safaricom, Airtel, and Telkom from one service workflow.", icon: <FaPhoneAlt className="benefit-icon" />, color: "#e97525" },
    { title: "API-Ready Distribution", description: "Automate airtime issuance from your platform for rewards, operations, and customer programs.", icon: <FaCheckCircle className="benefit-icon" />, color: "#91a2a1" }
  ];

  const airtimeUseCases = [
    { title: "Staff and Agent Incentives", description: "Reward field teams, agents, and partners instantly with automated airtime top-ups.", icon: <FaUsers className="benefit-icon" />, color: "#e97525" },
    { title: "Promotional Campaigns", description: "Run acquisition and retention campaigns where users receive airtime for qualifying actions.", icon: <FaRocket className="benefit-icon" />, color: "#008c95" },
    { title: "Operational Distribution", description: "Purchase and disburse bulk airtime for internal communications, logistics, and support teams.", icon: <FaMoneyBillWave className="benefit-icon" />, color: "#91a2a1" }
  ];

  const handleGetStarted = () => window.location.href = '/contact';

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
              Sell or distribute airtime instantly with Taifa Mobile across Safaricom, Airtel, and Telkom.
              Our retail and bulk airtime services help Kenyan businesses run promotions, rewards,
              operations, and reseller programs efficiently.
            </p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={airtimeSolution} alt="Airtime Distribution" className="hero-image" />
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
            <h2>Key Features Overview</h2>
            <p>Primary airtime capabilities designed for distribution speed, control, and scale.</p>
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
              <h2>Why Choose Taifa Mobile for Airtime Solutions</h2>
              <p className="subheading">Deliver airtime quickly at scale with reliable network coverage and flexible distribution options.</p>
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
            <h2>Airtime Solutions Use Cases</h2>
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
              <h2>Transparent & Customized Pricing</h2>
              <p className="subheading">Pricing is tailored to your business volume and requirements.</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Airtime;
