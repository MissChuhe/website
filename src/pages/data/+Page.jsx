import React, { useState } from 'react';
import { FaGift, FaRocket, FaCheckCircle, FaChartLine, FaMobileAlt, FaUsers } from 'react-icons/fa';
import '../../styles/BulkData.scss';
import dataSolution from '../../assets/optimized/hero-data.webp';

const ldJsonData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/data/#service",
      "name": "Bulk Data",
      "url": "https://taifamobile.co.ke/data",
      "serviceType": "Business Data Services",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Reward, loyalty, and promotional data bundles delivered instantly across Safaricom with API-driven fulfillment."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/data/#faq",
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
        },
        {
          "@type": "Question",
          "name": "Can I schedule recurring monthly data rewards for loyalty members?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, automated recurring rewards can be set up via our API or dashboard - ideal for monthly loyalty programs."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a difference between sponsored data and reward data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reward data is given to existing customers as loyalty incentives. Sponsored or promotional data is used to acquire new users by removing the data barrier for first-time interactions."
          }
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Bulk Data Bundles Kenya | Reward & Promotional Data - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Send instant data bundles to customers and staff in Kenya. Reward, loyalty, and promotional data programs on Safaricom with flexible volumes and API-driven fulfillment for businesses.'
  }
];

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
      title: "Direct Safaricom Integration",
      description: "Our direct network partnership ensures reliable, fast fulfillment - no middlemen, no delays.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Automated & Scalable",
      description: "API-driven delivery means your team sets it up once and the system runs campaigns automatically.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Flexible Packaging",
      description: "No minimum volumes and custom pricing - designed to fit startups, SMEs, and enterprise campaigns alike.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Dedicated Customer Support",
      description: "Our team helps you design and optimize data campaigns for maximum engagement and ROI.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "Reward & Loyalty Data",
      description: "Send personalized data bundles as loyalty rewards - from welcome MBs to milestone GBs - that keep customers engaged.",
      icon: <FaGift className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Promotional Campaigns",
      description: "Sponsor data for customers completing sign-ups, surveys, app downloads, or promotional actions.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Instant Fulfillment",
      description: "Data bundles delivered in real time with reliable processing built for high-volume business traffic.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "API Integration",
      description: "Trigger data delivery automatically from your CRM, onboarding flow, or marketing automation platform.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Flexible Bundle Sizes",
      description: "Send exactly the right amount - from small welcome packs to large monthly loyalty allocations.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Campaign Reporting",
      description: "Track delivery status, redemption rates, and campaign performance in one dashboard.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const dataUseCases = [
    {
      title: "Apps & Digital Platforms",
      description: "Onboarding incentives: reward new sign-ups with starter bundles to boost first-session engagement.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Telcos & ISPs",
      description: "Subscriber loyalty programs with recurring data rewards for long-tenure or high-spend customers.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Retail & FMCG",
      description: "Engagement campaigns where customers earn data for purchases, reviews, or referrals.",
      icon: <FaGift className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "NGOs & Development",
      description: "Sponsored data for survey respondents, beneficiary communication, and remote training.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "SACCOs & Banks",
      description: "Member appreciation programs and digital onboarding incentives for mobile banking adoption.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#008c95"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';
  const dataQuoteMailto = 'mailto:sales@taifamobile.co.ke?subject=Bulk%20Data%20Quote%20Request';

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
            <h1>Reliable Bulk Data Services for Businesses in Kenya</h1>
            <p>
              Deliver reward, loyalty, and promotional data bundles instantly to customers and staff - from welcome incentives
              to engagement campaigns - powered by Taifa Mobile's Safaricom integration. This bulk data Kenya service keeps teams connected.
            </p>
            <p className="hero-links">
              Explore related services: <a href="/airtime">Airtime Services</a> and <a href="/sms">Bulk SMS</a>.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <a className="cta-button primary" href={dataQuoteMailto}>
                <FaRocket /> Get a Data Quote
              </a>
              <a className="cta-link" href="/contact">Talk to Us</a>
            </div>
            <div
              className="hero-trust"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}
            >
              <span>Instant Delivery</span>
              <span>Safaricom Network</span>
              <span>API-Driven</span>
              <span>Flexible Bundle Sizes</span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={dataSolution} alt="Bulk data bundle delivery for Kenyan businesses" className="hero-image" />
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
            <h2>Bulk Data Capabilities Designed for Business</h2>
            <p>Automated, scalable data delivery for loyalty programs, promotional campaigns, and customer onboarding across bulk data Kenya initiatives.</p>
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
            <h2>Why Businesses Choose Taifa Mobile for Bulk Data</h2>
            <p>Bulk data Kenya delivery with direct Safaricom access, automation, and flexible packaging.</p>
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
            <h2>Business Use Cases for Bulk Data</h2>
            <p>Practical ways businesses use sponsored and reward bundles to drive growth.</p>
          </div>
          <div className="benefits-grid">
            {dataUseCases.map((useCase, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: useCase.color, backgroundColor: `${useCase.color}10` }}>
                <div className="icon-container" style={{ color: useCase.color }}>{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p className="description">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Customized */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Custom Bulk Data Pricing for Your Business</h2>
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

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Start Rewarding Your Customers with Data</h2>
            <p>Instant, automated data delivery that keeps customers connected, engaged, and loyal.</p>
          </div>
          <div
            className="cta-actions"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a className="cta-button primary" href={dataQuoteMailto}>
              <FaRocket /> Get a Data Quote
            </a>
            <a className="cta-link" href="/contact">Talk to Our Team</a>
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
            <details className="faq-item">
              <summary>Can I schedule recurring monthly data rewards for loyalty members?</summary>
              <div className="faq-answer">
                <p>Yes, automated recurring rewards can be set up via our API or dashboard - ideal for monthly loyalty programs.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is there a difference between sponsored data and reward data?</summary>
              <div className="faq-answer">
                <p>Reward data is given to existing customers as loyalty incentives. Sponsored or promotional data is used to acquire new users by removing the data barrier for first-time interactions.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Data;
