import React, { useState } from 'react';
import { FaMobileAlt, FaMoneyCheckAlt, FaStore, FaGift, FaUsers, FaRocket, FaCheckCircle } from 'react-icons/fa';
import '../../styles/Payment.scss';
import paymentSolution from '../../assets/optimized/payment.webp';

const ldJsonPayment = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/payment/#service",
      "name": "Payment Integration",
      "url": "https://taifamobile.co.ke/solutions/payment",
      "serviceType": "Mobile Payment APIs",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Integration for M-PESA, Airtel Money, and mobile payment APIs for collections and disbursements."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/solutions/payment/#faq",
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
        }
      ]
    }
  ]
};

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
      title: "Friction-Free Payments",
      description: "No hoops, no drama — just quick, simple payments that go through the first time.",
      icon: <FaStore className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Instant Gratification",
      description: "Money moves in real time. Send it, get it, and keep life rolling without the awkward waiting.",
      icon: <FaGift className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Safe & Secure",
      description: "Your money’s protected with bank-level security — minus the long queues and sour-faced tellers.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';

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
            <h1>Payment Integrations</h1>
            <p>
              Payments should move you forward not slow you down. 
              Taifa Mobile’s Payment Integration makes collections 
              and disbursements seamless so your money moves with purpose not excuses.           
            </p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
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
                    <h4>Best For:</h4>
                    <p>{solution.example}</p>
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
            <h2>Why Payment Integrations Rock</h2>
            <p>Different industries, one simple truth: money should move fast and smooth.</p>
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

      {/* Pricing Section - Customized Approach */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent & Tailored Pricing</h2>
            <p>Pricing is customized based on your business volume, setup requirements, and specific needs.</p>
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
              <button className="cta-button primary" onClick={handleGetStarted}>
                Get Your Custom Quote
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
