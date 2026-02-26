import React, { useState } from 'react';
import { FaMobileAlt, FaStore, FaRocket, FaCheckCircle, FaChartLine, FaUsers } from 'react-icons/fa';
import '../../styles/Ussd.scss';
import ussdSolution from '../../assets/optimized/ussd-solution.webp';

const ldJsonUssd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/ussd/#service",
      "name": "USSD Services",
      "url": "https://taifamobile.co.ke/solutions/ussd",
      "serviceType": "USSD Application & Hosting",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Interactive USSD solutions for banking, payments, surveys, airtime purchase, and customer engagement."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/solutions/ussd/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Shared and Dedicated USSD codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shared USSD codes are cost-effective with quick setup (e.g., *456*01#) and shared infrastructure. Dedicated codes give you a unique short code (e.g., *123#) with full branding and control, ideal for large-scale or branded services."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to set up a USSD service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shared USSD is instant and ready for setup. Dedicated codes, however, depend on the network operator's approval process, and the setup timeline varies accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "What are Pre-paid vs Post-paid USSD sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-paid sessions are charged directly to the user's airtime. Post-paid sessions are billed to the business with volume-based discounts for higher usage."
          }
        },
        {
          "@type": "Question",
          "name": "Does USSD work on all networks in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our USSD services work seamlessly on Safaricom and Airtel networks."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate USSD with my existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide a robust RESTful API for easy integration with your CRM, payment systems, or custom applications."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with USSD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our team. We'll guide you through choosing the right plan, setup, and deployment."
          }
        }
      ]
    }
  ]
};

const Ussd = () => {
  const [activeTab, setActiveTab] = useState('dedicated');

  const ussdSolutions = [
    {
      id: 'dedicated',
      icon: <FaMobileAlt className="icon" />,
      title: "Dedicated USSD Codes",
      tagline: "Your Brand, Your Code",
      description: "Get a unique short code (e.g., *123#) with full control over the customer journey.",
      features: [
        "Fully branded customer experience",
        "Ideal for financial services and telcos",
        "Supports complex menu structures",
        "Maximum flexibility and customization"
      ],
      example: "Perfect for banking services, mobile money, and customer support systems",
      color: "#008c95"
    },
    {
      id: 'shared',
      icon: <FaStore className="icon" />,
      title: "Shared USSD Codes",
      tagline: "Affordable, Quick Setup",
      description: "Quick setup with a shared code and your own dedicated menu slot (e.g., *456*01#).",
      features: [
        "Quick setup within 48 hours",
        "Perfect for surveys and promotions",
        "Private experience on shared infrastructure",
        "Cost-effective solution"
      ],
      example: "Ideal for short-term campaigns, surveys, and small business applications",
      color: "#e97525"
    }
  ];

  const universalBenefits = [
    {
      title: "Always Accessible",
      description: "Works on any phone, from a kabambe to the fanciest smartphone. No app stores, no data bundles — just dial and go.",
      icon: <FaMobileAlt className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Faster Service",
      description: "Skip the call centre queues. Customers get answers instantly, businesses save hours of manual work.",
      icon: <FaChartLine className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Built for Trust",
      description: "Secure, reliable, and real-time. Because when money or services are involved, ‘network unavailable’ is not an option.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const handleGetStarted = () => window.location.href = '/contact';

  return (
    <div className="ussd-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonUssd) }}
      />
      {/* Hero Section */}
      <section className="ussd-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>USSD</h1>
            <p>Taifa Mobile gives you a smarter way to engage mobile users with intuitive
               USSD menus that work on any phone, anytime, whether they’re on Prepaid or Postpaid.</p>          
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={ussdSolution} alt="USSD Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* USSD Solutions Section */}
      <section className="ussd-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your USSD Strategy</h2>
            <p>Pick the USSD solution that best fits your needs</p>
          </div>
          <div className="tabs">
            {ussdSolutions.map((solution) => (
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
          <div className="ussd-type-card-wrapper">
            {ussdSolutions.filter((s) => s.id === activeTab).map((solution) => (
              <div key={solution.id} className="ussd-type-card" style={{ borderColor: solution.color }}>
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
            <h2>Why Use USSD?</h2>
            <p>Discover the unique advantages of USSD for your business</p>
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

      {/* Pricing Section - Updated with three tables */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent Pricing</h2>
          </div>

          {/* Setup & Monthly Costs */}
          <div className="pricing-block">
            <h3 className="pricing-subtitle">Setup & Monthly Costs</h3>
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
                    <td>15,000</td>
                    <td>5,000</td>
                  </tr>
                  <tr>
                    <td>Dedicated Airtel</td>
                    <td>174,000</td>
                    <td>45,000</td>
                  </tr>
                  <tr>
                    <td>Dedicated Safaricom</td>
                    <td>290,000</td>
                    <td>69,600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pre-paid Session Costs */}
          <div className="pricing-block">
            <h3 className="pricing-subtitle">Costs per USSD Session (Pre-paid)</h3>
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Carrier</th>
                    <th>Price (KES)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Safaricom</td>
                    <td>1.5</td>
                  </tr>
                  <tr>
                    <td>Airtel</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Post-paid Session Costs */}
          <div className="pricing-block">
            <h3 className="pricing-subtitle">Costs per USSD Session (Post-paid)</h3>
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Bundle</th>
                    <th>Range (Sessions)</th>
                    <th>Price (KES)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Taifa Bundle</td>
                    <td>0 – 19,999</td>
                    <td>1.5</td>
                  </tr>
                  <tr>
                    <td>Pro Bundle</td>
                    <td>20,000 – 49,999</td>
                    <td>1.3</td>
                  </tr>
                  <tr>
                    <td>Pro+ Bundle</td>
                    <td>50,000 – 99,999</td>
                    <td>1.2</td>
                  </tr>
                  <tr className="enterprise">
                    <td>Enterprise Bundle</td>
                    <td>100,000 – 4,000,000</td>
                    <td>1.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="pricing-note">
            All prices are exclusive of VAT unless otherwise stated. Contact sales for custom requirements or higher volumes.
          </p>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our USSD services answered.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Shared and Dedicated USSD codes?</summary>
              <div className="faq-answer">
                <p>Shared USSD codes are cost-effective with quick setup (e.g., *456*01#) and shared infrastructure. Dedicated codes give you a unique short code (e.g., *123#) with full branding and control, ideal for large-scale or branded services.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How long does it take to set up a USSD service?</summary>
              <div className="faq-answer">
                <p>Shared USSD is instant and ready for setup. Dedicated codes, however, depend on the network operator’s approval process, and the setup timeline varies accordingly.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What are Pre-paid vs Post-paid USSD sessions?</summary>
              <div className="faq-answer">
                <p>Pre-paid sessions are charged directly to the user's airtime. Post-paid sessions are billed to the business with volume-based discounts for higher usage.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Does USSD work on all networks in Kenya?</summary>
              <div className="faq-answer">
                <p>Yes, our USSD services work seamlessly on Safaricom and Airtel networks.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I integrate USSD with my existing systems?</summary>
              <div className="faq-answer">
                <p>Yes, we provide a robust RESTful API for easy integration with your CRM, payment systems, or custom applications.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I get started with USSD?</summary>
              <div className="faq-answer">
                <p>Contact our team. We’ll guide you through choosing the right plan, setup, and deployment.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ussd;
