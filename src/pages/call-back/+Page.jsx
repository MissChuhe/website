import React, { useState } from 'react';
import { FaMusic, FaRocket, FaCheckCircle, FaUsers } from 'react-icons/fa';
import '../../styles/Callback.scss';
import crbtSolution from '../../assets/optimized/crbt-solution.webp';

const ldJsonCrbt = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/call-back/#service",
      "name": "CRBT / SKIZA Services",
      "url": "https://taifamobile.co.ke/call-back",
      "serviceType": "Caller Ring Back Tones",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "CRBT and SKIZA services for branded ring-back tones, custom audio production, and Safaricom network activation."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/call-back/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Normal SKIZA and SKIZA Business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normal SKIZA offers standard catalogue tones (KES 1.5/day charged to the end-user). SKIZA Business provides custom-made tones with professional production services and custom pricing."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Normal SKIZA cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KES 1.5 per day, charged directly to the end-user's airtime. There is no cost to the business for standard catalogue tones."
          }
        },
        {
          "@type": "Question",
          "name": "What does SKIZA Business include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom tones (jingles, voice-overs, branded audio) with full production services. Pricing is customized based on your requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Which networks support SKIZA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SKIZA is available on Safaricom networks."
          }
        },
        {
          "@type": "Question",
          "name": "How long does setup take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normal SKIZA can be activated quickly."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit pataskiza.co.ke or contact our team for SKIZA Business custom quotes."
          }
        },
        {
          "@type": "Question",
          "name": "Can my business use SKIZA without a big production budget?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes - Normal SKIZA uses existing catalogue tones with no production cost. Only SKIZA Business with custom audio involves production charges."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a custom jingle produced for SKIZA Business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our team to discuss your brief. We handle scripting, recording, mixing, and Safaricom submission end-to-end."
          }
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'CRBT & SKIZA Services Kenya | Branded Ring-Back Tones - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Turn caller waiting time into branded marketing with CRBT and SKIZA ring-back tones in Kenya. Custom jingles, voice-overs, and campaign audio on Safaricom networks for businesses and artists.'
  }
];

const Callback = () => {
  const [activeTab, setActiveTab] = useState('crbt');

  const crbtSolutions = [
    {
      id: 'crbt',
      icon: <FaMusic className="icon" />,
      title: "Call Ring-Back Tones (CRBT)",
      tagline: "Turn Waiting Into a Show",
      description: "Nobody likes awkward silence. With CRBT, your callers get music, messages, or even your brand’s jingle while they wait. It’s like holding, but with style.",
      features: [
        "Custom audio (jingles, promos, voice-overs)",
        "Simple setup, no tech headaches",
        "Keeps callers entertained while waiting",
        "Turns every call into a branding moment"
      ],
      example: "🎶 'Don’t go breaking my heart…' plays until the call connects.",
      color: "#e97525"
    }
  ];

  const universalBenefits = [
    {
      title: "Guaranteed Impressions",
      description: "Every incoming call plays your audio - a brand touchpoint that costs nothing extra per impression.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Fully Branded Experience",
      description: "Your tone, your message, your voice - no generic hold music that belongs to no one.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Campaign Amplification",
      description: "Use SKIZA alongside SMS or Robo Call campaigns to reinforce messaging across multiple touchpoints.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "SKIZA Partner Expertise",
      description: "Our team knows the Safaricom SKIZA system inside out - setup, compliance, and production covered.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#e97525"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "Standard SKIZA Catalogue",
      description: "Access thousands of pre-approved tones from the Safaricom SKIZA library - quick activation at KES 1.5/day.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Custom SKIZA Business Tones",
      description: "Commission professionally produced jingles, voice-overs, and branded audio tailored to your campaign.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Brand Audio Placement",
      description: "Every caller hears your message, jingle, or promotion before you even say hello - consistent brand exposure.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Artist & Content Monetization",
      description: "Distribute music or branded content through SKIZA subscriptions and earn from every activation.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Full Production Services",
      description: "End-to-end audio production - scriptwriting, recording, mixing, and delivery included in SKIZA Business.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Simple Activation",
      description: "Standard tones activate quickly; SKIZA Business has a guided setup process with full team support.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const crbtUseCases = [
    {
      title: "Retail & Brand Campaigns",
      description: "Seasonal promotions, launch announcements, and loyalty program audio played to every caller.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Music Artists & Labels",
      description: "Monetize and distribute music through SKIZA subscriptions for fan engagement and revenue.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Corporates & Enterprises",
      description: "Professional branded audio that communicates quality and trustworthiness before the call connects.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "NGOs & Public Services",
      description: "Campaign messaging and awareness content delivered to callers during government or NGO outreach.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Media & Radio Stations",
      description: "Jingles, show teasers, and programming promos as ring-back tones for listeners and advertisers.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#008c95"
    }
  ];

  const handleGetStarted = () => window.location.href = 'https://pataskiza.co.ke/';
  const skizaQuoteMailto = 'mailto:sales@taifamobile.co.ke?subject=SKIZA%20Business%20Quote%20Request';

  return (
    <div className="callback-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonCrbt) }}
      />
      {/* Hero Section */}
      <section className="callback-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>CRBT and SKIZA Services for Businesses in Kenya</h1>
            <p>
              Transform every incoming call into a branded moment - play custom jingles, promotional messages, or artist content
              while callers wait. CRBT Kenya and SKIZA Kenya solutions on Safaricom for businesses of all sizes.
            </p>
            <p className="hero-links">
              Explore related services: <a href="/voice">Voice Solutions</a> and <a href="/shortcode">Short Codes</a>.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <button className="cta-button primary" onClick={handleGetStarted}>
                <FaRocket /> Get Started with SKIZA
              </button>
              <a className="cta-link" href="/contact">Enquire About SKIZA Business</a>
            </div>
            <div
              className="hero-trust"
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}
            >
              <span>Safaricom SKIZA Partner</span>
              <span>Custom Production Available</span>
              <span>Brand-Safe Audio</span>
              <span>Simple Setup</span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={crbtSolution} alt="CRBT Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* CRBT Solutions Section */}
      <section className="callback-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Pick Your CRBT Style</h2>
            <p>From funky jingles to smooth promos — make waiting time your stage.</p>
          </div>
          <div className="tabs">
            {crbtSolutions.map((solution) => (
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
          <div className="callback-type-card-wrapper">
            {crbtSolutions.filter((s) => s.id === activeTab).map((solution) => (
              <div key={solution.id} className="callback-type-card" style={{ borderColor: solution.color }}>
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
            <h2>CRBT & SKIZA Features That Make Every Call Count</h2>
            <p>From catalogue tones to custom produced audio - branded caller experiences made simple across CRBT Kenya and SKIZA Kenya campaigns.</p>
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
            <h2>Why Brands Choose SKIZA Business with Taifa Mobile</h2>
            <p>SKIZA Kenya expertise with reliable setup, production support, and campaign amplification.</p>
          </div>
          <div className="benefits-grid">
            {universalBenefits.map((benefit, index) => (
              <div
                className="benefit-card"
                key={index}
                style={{ borderColor: benefit.color, backgroundColor: `${benefit.color}10` }}
              >
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
            <h2>SKIZA & CRBT Use Cases</h2>
            <p>Ways organizations use CRBT Kenya and SKIZA Kenya audio to engage audiences and reinforce brand identity.</p>
          </div>
          <div className="benefits-grid">
            {crbtUseCases.map((useCase, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: useCase.color, backgroundColor: `${useCase.color}10` }}>
                <div className="icon-container" style={{ color: useCase.color }}>{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p className="description">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - SKIZA Format */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>SKIZA Tone Pricing - Simple & Transparent</h2>
            <p>Normal SKIZA is charged directly to end-users (KES 1.5/day). SKIZA Business pricing is customized based on production scope and campaign requirements.</p>
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
                    <td>Normal SKIZA</td>
                    <td>KES 1.5 per day</td>
                    <td>Standard catalogue tones from music library (charged to end-user)</td>
                  </tr>
                  <tr className="business">
                    <td>SKIZA Business</td>
                    <td>Custom pricing</td>
                    <td>Custom made tones with production services. Production charges apply based on requirements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
              <p className="pricing-note">
                <strong>Key Information:</strong>
                - Normal SKIZA: KES 1.5 per day charged to end-user<br />
                - SKIZA Business: Custom made production available — production charges apply based on requirements.
              </p>
            <div className="pricing-cta">
              <button className="cta-button primary" onClick={handleGetStarted}>
                Get Started with SKIZA
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Make Every Call a Brand Moment</h2>
            <p>Stop letting callers hear silence - use SKIZA to turn wait time into your best marketing channel.</p>
          </div>
          <div
            className="cta-actions"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started with SKIZA
            </button>
            <a className="cta-link" href={skizaQuoteMailto}>Request SKIZA Business Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about Call Ring-Back Tones (SKIZA).</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Normal SKIZA and SKIZA Business?</summary>
              <div className="faq-answer">
                <p>Normal SKIZA offers standard catalogue tones (KES 1.5/day charged to the end-user). SKIZA Business provides custom-made tones with professional production services and custom pricing.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How much does Normal SKIZA cost?</summary>
              <div className="faq-answer">
                <p>KES 1.5 per day, charged directly to the end-user’s airtime. No cost to the business for standard catalogue tones.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What does SKIZA Business include?</summary>
              <div className="faq-answer">
                <p>Custom tones (jingles, voice-overs, branded audio) with full production services. Pricing is customized based on your requirements.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which networks support SKIZA?</summary>
              <div className="faq-answer">
                <p>SKIZA is available on Safaricom networks. </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How long does setup take?</summary>
              <div className="faq-answer">
                <p>Normal SKIZA can be activated quickly. </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I get started?</summary>
              <div className="faq-answer">
                <p>Visit pataskiza.co.keor contact our team for SKIZA Business custom quotes.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Can my business use SKIZA without a big production budget?</summary>
              <div className="faq-answer">
                <p>Yes - Normal SKIZA uses existing catalogue tones with no production cost. Only SKIZA Business with custom audio involves production charges.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I get a custom jingle produced for SKIZA Business?</summary>
              <div className="faq-answer">
                <p>Contact our team to discuss your brief. We handle scripting, recording, mixing, and Safaricom submission end-to-end.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Callback;
