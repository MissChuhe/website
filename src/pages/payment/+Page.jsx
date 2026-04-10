import React, { useState } from 'react';
import { FaMobileAlt, FaMoneyCheckAlt, FaStore, FaGift, FaUsers, FaRocket, FaCheckCircle } from 'react-icons/fa';
import '../../styles/Payment.scss';
import paymentSolution from '../../assets/optimized/payment.webp';

const ldJsonPayment = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/payment/#service",
      "name": "Payment Integration",
      "url": "https://taifamobile.co.ke/payment",
      "serviceType": "Mobile Payment APIs",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Mobile payment integration for M-PESA and Airtel Money collections, payouts, and real-time callbacks in Kenya."
    },
    {
      "@type": "Product",
      "@id": "https://taifamobile.co.ke/payment/#product",
      "name": "Taifa Mobile Payment API",
      "description": "Secure payment API for M-PESA and Airtel Money collections and disbursements in Kenya.",
      "brand": {
        "@type": "Brand",
        "name": "Taifa Mobile"
      },
      "url": "https://taifamobile.co.ke/payment"
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/payment/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What payment methods do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We support M-PESA (STK Push, Paybill, Till) and Airtel Money integrations. Collections (C2B) and disbursements (B2C) are fully covered."
          }
        },
        {
          "@type": "Question",
          "name": "How is pricing determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is customized based on your transaction volume, setup requirements (Paybill vs Till), and whether you need collections, disbursements, or both. We offer competitive rates with no hidden fees."
          }
        },
        {
          "@type": "Question",
          "name": "How long does setup take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paybill/Till setup typically takes 5-10 business days after documentation. API integration can be ready in days depending on your system."
          }
        },
        {
          "@type": "Question",
          "name": "Are there transaction limits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No limits on our side — you're only bound by M-PESA or network regulations. We handle high-volume traffic smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get real-time payment notifications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Instant C2B callbacks and B2C status updates via API/webhooks. You'll know the moment money moves."
          }
        },
        {
          "@type": "Question",
          "name": "How secure are the transactions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank-level encryption, PCI-compliant, and direct integration with Safaricom/Airtel systems. Your money and data are safe."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly are STK Push payments confirmed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "STK Push confirmations are delivered in real time via webhook callback, typically within seconds of successful payment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate payment collection into my mobile app or website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our RESTful API integrates with any web or mobile application. Developer documentation and sandbox testing are available."
          }
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Mobile Payment Integration Kenya | M-PESA & Airtel Money API - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Integrate M-PESA STK Push, Paybill, Till, and Airtel Money for collections and bulk disbursements in Kenya. Secure, real-time payment APIs for e-commerce, payroll, SACCOs, and enterprise.'
  }
];

const Payments = () => {
  const [activeTab, setActiveTab] = useState('collections');

  const paymentSolutions = [
    {
      id: 'collections',
      icon: <FaMobileAlt className="icon" />,
      title: "Seamless Collections",
      tagline: "Let the Money Flow In",
      description: "Skip the awkward ‘ *send to this number* ’ texts. With STK Push, Paybill, and Till, customers pay you in two taps — no excuses.",
      features: [
        "STK Push for instant payments",
        "Dedicated Paybill and Till numbers",
        "Real-time confirmations (no ghosting)",
        "Works on M-PESA and other wallets"
      ],
      example: "Perfect for online shops, subscriptions, donations, or any hustle that needs quick cash-ins.",
      color: "#008c95"
    },
    {
      id: 'disbursements',
      icon: <FaMoneyCheckAlt className="icon" />,
      title: "Bulk Disbursements",
      tagline: "Spray Payments Like a Boss",
      description: "Whether it’s salaries, refunds, or bonuses — send money to thousands at once. One click, zero drama.",
      features: [
        "Process bulk payments easily",
        "Automate recurring payouts",
        "Bank-level security (but faster)",
        "Detailed reports you’ll actually read"
      ],
      example: "Spot on for payroll, commissions, rewards, and refunds.",
      color: "#e97525"
    }
  ];

  const universalBenefits = [
    {
      title: "Fast API Setup",
      description: "Payment API integration ready in days - our developer documentation guides your team step by step.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "High-Volume Ready",
      description: "Handle unlimited transaction volume - no rate caps on our side, only network-level limits apply.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Automated Reconciliation",
      description: "Real-time callbacks eliminate manual reconciliation - your systems stay in sync automatically.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Dedicated Technical Support",
      description: "Our payment specialists are on hand for integration support, testing, and ongoing troubleshooting.",
      icon: <FaStore className="benefit-icon" />,
      color: "#008c95"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "STK Push Collections",
      description: "Trigger instant M-PESA payment prompts directly to customers' phones - no USSD navigation needed.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Paybill & Till Integration",
      description: "Set up dedicated Paybill or Till numbers for seamless over-the-counter and online payment collection.",
      icon: <FaStore className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Bulk B2C Disbursements",
      description: "Send salaries, commissions, refunds, and agent payouts to thousands of recipients in one operation.",
      icon: <FaMoneyCheckAlt className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Real-Time Notifications",
      description: "Receive instant C2B callbacks and B2C status updates via webhooks for automated reconciliation.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption with PCI-compliant architecture and direct Safaricom and Airtel integration.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Transaction Reporting",
      description: "Access comprehensive reports for all inbound and outbound transactions with full audit trail.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const paymentUseCases = [
    {
      title: "E-Commerce & Retail",
      description: "One-click mobile checkout, subscription billing, and order payment confirmations.",
      icon: <FaStore className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "SACCOs & Cooperatives",
      description: "Member contribution collection, loan repayments, and dividend disbursements.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "NGOs & Charities",
      description: "Donation collection, grant disbursements, and beneficiary payments.",
      icon: <FaGift className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Payroll & HR Systems",
      description: "Automated salary disbursements and commission payouts across mobile wallets.",
      icon: <FaMoneyCheckAlt className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Schools & Institutions",
      description: "Fee collection, exam fee payments, and bursary disbursements.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#008c95"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';
  const paymentQuoteMailto = 'mailto:sales@taifamobile.co.ke?subject=Payment%20Integration%20Quote%20Request';

  return (
    <div className="payments-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonPayment) }}
      />
      {/* Hero Section */}
      <section className="payments-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Mobile Payment Integration for Businesses in Kenya</h1>
            <p>
              Accept M-PESA and Airtel Money payments and send bulk payouts through a single, secure payment API.
              STK Push, Paybill, Till numbers, and B2C disbursements with real-time transaction notifications.
              This M-PESA integration Kenya platform is built for scale.
            </p>
            <p className="hero-links">
              Explore related services: <a href="/ussd">USSD Services</a> and <a href="/sms">Bulk SMS</a>.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <button className="cta-button primary" onClick={handleGetStarted}>
                <FaRocket /> Integrate Payments Now
              </button>
              <a className="cta-link" href={paymentQuoteMailto}>Get a Custom Quote</a>
            </div>
            <div
              className="hero-trust"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}
            >
              <span>PCI-Compliant Security</span>
              <span>M-PESA & Airtel Money</span>
              <span>Real-Time Callbacks</span>
              <span>No Hidden Fees</span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={paymentSolution} alt="Payment Integration Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Payment Solutions Section */}
      <section className="payments-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Pick Your Money Move</h2>
            <p>Collect it, send it, or both. We’ve got you covered.</p>
          </div>
          <div className="tabs">
            {paymentSolutions.map((solution) => (
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
          <div className="payments-type-card-wrapper">
            {paymentSolutions.filter((s) => s.id === activeTab).map((solution) => (
              <div key={solution.id} className="payments-type-card" style={{ borderColor: solution.color }}>
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
                    <ul style={{ listStyleType: 'none' }}>
                      {solution.features.map((feature, i) => (
                        <li key={i}>
                          <FaCheckCircle style={{ color: solution.color }} /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="example">
                    <h4>Use Case:</h4>
                    <p>{solution.example}</p>
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
            <h2>Complete Mobile Money Infrastructure for Your Business</h2>
            <p>Collect payments, send bulk payouts, and reconcile transactions - from one integrated API.</p>
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
            <h2>Why Businesses Trust Taifa Mobile for Payment Integration</h2>
            <p>M-PESA integration Kenya support with fast setup, automated reconciliation, and high-volume readiness.</p>
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
            <h2>Payment Integration Across Sectors</h2>
            <p>How organizations use M-PESA integration Kenya APIs to move money efficiently.</p>
          </div>
          <div className="benefits-grid">
            {paymentUseCases.map((useCase, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: useCase.color, backgroundColor: `${useCase.color}10` }}>
                <div className="icon-container" style={{ color: useCase.color }}>{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p className="description">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Customized Approach */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent, Volume-Based Payment Pricing</h2>
            <p>No hidden fees. Pricing scales with your transaction volume - the more you process, the better the rate. Custom quotes available for high-volume businesses.</p>
          </div>
          <div className="pricing-content">
            <div className="custom-pricing-grid">
              <div className="pricing-block">
                <h3>C2B Collections</h3>
                <p><strong>Paybill & Till Numbers</strong></p>
                <ul className="pricing-features" style={{ listStyleType: 'none' }}>
                  <li>Dedicated Paybill or Till setup</li>
                  <li>STK Push integration</li>
                  <li>Real-time payment notifications</li>
                  <li>Custom transaction rates based on volume</li>
                </ul>
                <p className="pricing-note">Setup and rates tailored to your expected transaction volume.</p>
              </div>
              <div className="pricing-block">
                <h3>B2C Disbursements</h3>
                <p><strong>Bulk Payouts to Wallets/Banks</strong></p>
                <ul className="pricing-features" style={{ listStyleType: 'none' }}>
                  <li>Send to thousands instantly</li>
                  <li>Automated recurring payments</li>
                  <li>Comprehensive reporting</li>
                  <li>Competitive per-transaction fees</li>
                </ul>
                <p className="pricing-note">Pricing scales with volume, the more you send, the lower the rate.</p>
              </div>
            </div>
            <div className="pricing-cta">
              <p>No hidden fees. Real-time reconciliation. Full transparency.</p>
              <a className="cta-button primary" href={paymentQuoteMailto}>
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Accept and Send Mobile Payments?</h2>
            <p>Join Kenyan businesses using Taifa Mobile's M-PESA integration Kenya payment API to process millions in transactions monthly - securely and in real time.</p>
          </div>
          <div
            className="cta-actions"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Integrate Payments Now
            </button>
            <a className="cta-link" href={paymentQuoteMailto}>Get a Custom Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Got questions about payment integrations? We’ve got answers.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What payment methods do you support?</summary>
              <div className="faq-answer">
                <p>We support M-PESA (STK Push, Paybill, Till) and Airtel Money integrations. Collections (C2B) and disbursements (B2C) are fully covered.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How is pricing determined?</summary>
              <div className="faq-answer">
                <p>Pricing is customized based on your transaction volume, setup requirements (Paybill vs Till), and whether you need collections, disbursements, or both. We offer competitive rates with no hidden fees.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How long does setup take?</summary>
              <div className="faq-answer">
                <p>Paybill/Till setup typically takes 5–10 business days after documentation. API integration can be ready in days depending on your system.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Are there transaction limits?</summary>
              <div className="faq-answer">
                <p>No limits on our side — you’re only bound by M-PESA or network regulations. We handle high-volume traffic smoothly.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I get real-time payment notifications?</summary>
              <div className="faq-answer">
                <p>Yes! Instant C2B callbacks and B2C status updates via API/webhooks. You’ll know the moment money moves.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How secure are the transactions?</summary>
              <div className="faq-answer">
                <p>Bank-level encryption, PCI-compliant, and direct integration with Safaricom/Airtel systems. Your money and data are safe.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>How quickly are STK Push payments confirmed?</summary>
              <div className="faq-answer">
                <p>STK Push confirmations are delivered in real time via webhook callback - typically within seconds of successful payment.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I integrate payment collection into my mobile app or website?</summary>
              <div className="faq-answer">
                <p>Yes, our RESTful API integrates with any web or mobile application. Developer documentation and sandbox testing are available.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
