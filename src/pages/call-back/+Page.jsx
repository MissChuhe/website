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
      "description": "SKIZA services for businesses and individual users, offering standard catalogue tones and custom SKIZA Business tones with full production services."
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
        }
      ]
    }
  ]
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'CRBT and SKIZA Services in Kenya | Taifa Mobile' },
  {
    name: 'description',
    content:
      'Launch CRBT and SKIZA services with Taifa Mobile, from standard catalogue tones to custom business ring-back tone production.'
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
      title: "No More Awkward Silence",
      description: "Dead air is dead boring. Fill it with music, jokes, or your brand message so callers don’t feel like they’re trapped in a void.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Brand in Their Ears",
      description: "Forget billboards—every caller hears your tune, promo, or tagline before you even say hello.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Set the Mood",
      description: "Upbeat vibes? Chill lounge? A cheeky jingle? CRBT lets you decide the vibe before the convo even begins.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    },
    {
      title: "Unforgettable Calls",
      description: "People may forget what you said on the call, but they’ll remember the tune that greeted them. Sticky branding at its best.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#eac0a2"
    }
  ];

  const keyFeaturesOverview = [
    {
      title: "Standard and Custom Tones",
      description: "Offer catalogue tones or develop custom branded ring-back audio for campaigns and promotions.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Brand Audio Placement",
      description: "Turn caller waiting time into awareness with consistent brand sounds and campaign messaging.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Reliable SKIZA Delivery",
      description: "Deploy ring-back experiences on supported networks with dependable activation workflows.",
      icon: <FaCheckCircle className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const crbtUseCases = [
    {
      title: "Brand Campaigns",
      description: "Promote launches, seasonal offers, and awareness campaigns through branded caller audio.",
      icon: <FaRocket className="benefit-icon" />,
      color: "#e97525"
    },
    {
      title: "Artist and Content Promotion",
      description: "Monetize and distribute music or branded sound content through SKIZA subscriptions.",
      icon: <FaMusic className="benefit-icon" />,
      color: "#008c95"
    },
    {
      title: "Corporate Announcements",
      description: "Share short branded messages with callers while they wait before connection.",
      icon: <FaUsers className="benefit-icon" />,
      color: "#91a2a1"
    }
  ];

  const handleGetStarted = () => window.location.href = 'https://pataskiza.co.ke/';

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
              Turn caller waiting time into a branded experience with Taifa Mobile CRBT and SKIZA services.
              Launch standard or custom ring-back tones for campaigns, announcements, and audience engagement
              on Safaricom networks.
            </p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
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
            <h2>Key Features Overview</h2>
            <p>Core CRBT and SKIZA capabilities for branded caller experiences.</p>
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
            <h2>Why Choose Taifa Mobile for CRBT and SKIZA</h2>
            <p>Convert caller wait time into branded engagement with reliable ring-back tone delivery.</p>
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
            <h2>CRBT and SKIZA Use Cases</h2>
            <p>Ways organizations use ring-back audio to engage audiences and reinforce brand identity.</p>
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
            <h2>Transparent Pricing</h2>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Callback;
