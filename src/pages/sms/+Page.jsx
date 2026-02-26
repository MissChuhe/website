import React, { useState } from 'react';
import {
  FaBullhorn, FaBell, FaRocket, FaCheckCircle,
  FaChartLine, FaUsers,
  FaDownload, FaEnvelope, FaTimes,
  FaBuilding, FaTag, FaInfoCircle, FaLightbulb
} from 'react-icons/fa';
import '../../styles/sms.scss';
import smsSolution from '../../assets/optimized/sms-solution.webp';
import SchemaMarkup, { generateServiceSchema } from '../../components/SchemaMarkup';

const ldJsonSms = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/solutions/sms/#service",
      "name": "Bulk SMS",
      "url": "https://taifamobile.co.ke/solutions/sms",
      "serviceType": "Bulk SMS Messaging",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Reliable Bulk SMS services with 99.9% delivery rate for businesses of all sizes in Kenya."
    },
    {
      "@type": "FAQPage",
      "@id": "https://taifamobile.co.ke/solutions/sms/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Promotional and Transactional SMS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotional SMS are marketing messages used for offers, events, or promotions. They can only be sent to customers who have opted in and are subject to DND restrictions. Transactional SMS are informational (e.g., OTPs, order updates, alerts) and can be sent 24/7, including holidays, with no DND restrictions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply for a custom Sender ID?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the \"Apply for Sender ID\" form above to generate the authorization document. Print it on your company letterhead, sign it, and email it with your KRA PIN and Certificate of Incorporation to loise.mueni@taifamobile.co.ke."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Sender ID approval take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approval is processed by the network operators only on Tuesdays and Thursdays."
          }
        },
        {
          "@type": "Question",
          "name": "Do you deliver to all Kenyan mobile networks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver to Safaricom and Airtel with 99.9% delivery rates."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum purchase requirement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No minimum purchase. You can buy as few or as many SMS as you need, with better rates at higher volumes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate Bulk SMS with my own system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide a robust API for seamless integration. Contact us for API documentation and support."
          }
        }
      ]
    }
  ]
};

export const meta = () => {
  return [
    { title: "Bulk SMS Services Kenya - Promotional & Transactional | Taifa Mobile" },
    { name: "description", content: "Reliable Bulk SMS provider in Kenya. Send promotional marketing SMS and transactional alerts (OTPs) with 99.9% delivery rates. Apply for your Sender ID today." },
  ];
};

const Sms = () => {
  const serviceSchema = generateServiceSchema({
    name: "Bulk SMS Service",
    description: "Reliable bulk SMS services with 99.9% delivery rate for businesses of all sizes. Promotional and Transactional SMS options available.",
    url: "https://taifamobile.co.ke/solutions/sms"
  });

  const [activeTab, setActiveTab] = useState('promotional');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [senderId, setSenderId] = useState('');
  const [category, setCategory] = useState('Promotional');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const smsTypes = [
    {
      id: 'promotional',
      icon: <FaBullhorn className="icon" />,
      title: "Promotional SMS",
      tagline: "Make Some Noise",
      description: "Shout about your offers, events, or big news straight into your customer's pocket. Zero algorithm drama, just guaranteed eyeballs.",
      features: [
        "Reach only your opt-in subscribers (no spammy vibes)",
        "Schedule campaigns when they'll hit hardest",
        "Drive instant action and sales"
      ],
      example: "🔥 Exclusive Deal: 20% off today only! Don't snooze, shop now!",
      color: "#e97525"
    },
    {
      id: 'transactional',
      icon: <FaBell className="icon" />,
      title: "Transactional SMS",
      tagline: "Always On Time",
      description: "From OTPs to delivery updates, transactional SMS is the reliable friend who always shows up on time. Fast, secure, and drama-free.",
      features: [
        "Works 24/7, even on public holidays",
        "Secure OTPs & verifications",
        "Blazing fast delivery speeds"
      ],
      example: "📦 Your order #45678 is on the way! Track here: [link]",
      color: "#008c95"
    }
  ];

  const universalBenefits = [
    { title: "Engage Customers", description: "Send texts they'll actually read (unlike your emails). Keep them hooked, loyal, and ready to act.", icon: <FaUsers className="benefit-icon" />, color: "#e97525" },
    { title: "Save Time", description: "Automate reminders, alerts, and updates. More texting, less manual work, and no 'oops we forgot' moments.", icon: <FaChartLine className="benefit-icon" />, color: "#008c95" },
    { title: "Stay Reliable", description: "If it's important, like an OTP or bank alert, SMS delivers. No buffering, no Wi-Fi excuses.", icon: <FaCheckCircle className="benefit-icon" />, color: "#91a2a1" }
  ];

  const handleGetStarted = () => window.location.href = 'https://vas.taifamobile.co.ke/site/login';

  const mailtoLink = `mailto:loise.mueni@taifamobile.co.ke?subject=${encodeURIComponent('Sender ID Application')}&body=${encodeURIComponent('Please attach the following: 1. The filled and signed Sender ID authorization document, 2. KRA PIN certificate, 3. Certificate of Incorporation.')}`;

  const generateDOCX = () => {
    if (!companyName || !address || !senderId || !category) {
      alert('Please fill in all required fields before downloading.');
      return;
    }

    const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Sender ID Authorization</title>
        <style>
          body { 
            font-family: 'Times New Roman', serif; 
            font-size: 12pt; 
            line-height: 1; 
            margin: 1in; 
          }
          .right { text-align: right; }
          .bold { font-weight: bold; }
          .center { text-align: center; }
          .letterhead-note { 
            text-align: center; 
            font-style: italic; 
            color: #666; 
            margin-bottom: 8pt; 
          }
          
          /* Reduced and centered table styles */
          .table-container {
            display: flex;
            justify-content: center;
            margin: 5pt 0;
          }
          
          table.client-box { 
            width: 70%; 
            border-collapse: collapse; 
            border: 1.5pt solid #000;
            margin: 0 auto;
          }
          table.client-box td { 
            border: 1pt solid #000; 
            padding: 4pt 4pt;
            vertical-align: top; 
          }
          table.client-box .label { 
            font-weight: bold; 
            width: 35%; 
            background-color: #f5f5f5;
            border-right: 1pt solid #000;
          }
          table.client-box .value { 
            width: 65%; 
            background-color: #ffffff;
          }
          
          table.official { 
            width: 50%; 
            border: 1pt solid #000; 
            margin: 5pt auto 6pt auto;
            border-collapse: collapse;
          }
          table.official td { 
            border: 1pt solid #000; 
            padding: 3pt 3pt;
            vertical-align: top;
          }
          table.official .label { 
            font-weight: bold; 
            width: 50%; 
            background-color: #f5f5f5;
            border-right: 1pt solid #000;
          }
          table.official .value { 
            width: 50%; 
          }
          
          .signature-area { 
            margin-top: 20pt;
          }
          .spacer { 
            height: 80pt;
          }
          
          p {
            margin: 2pt 0;
          }
          
          br {
            line-height: 0.3;
          }
          
          .ref-heading {
            margin-bottom: 2pt;
          }
          
          .address-to-salutation {
            margin-bottom: 8pt;
          }
          
          .after-table {
            margin-top: 4pt;
          }
        </style>
      </head>
      <body>
        <div class="spacer"></div>
        <p class="letterhead-note"><strong>NOTE:</strong> Please print this document on your company's official letterhead paper. The space above is reserved for your company logo and letterhead details.</p>

        <p class="right">${currentDate}</p>
        <p>Safaricom Limited,</p>
        <p>Premium Rate Services VAS Department,</p>
        <p>P.O Box 66827 – 00800,</p>
        <p>Nairobi, Kenya.</p>
        <div class="address-to-salutation">
          <p>Dear Sir / Madam,</p>
        </div>
        <p class="bold ref-heading">REF: ${companyName.toUpperCase()} AUTHORIZATION FOR ALPHANUMERIC / SENDER ID APPLICATION.</p>
        <p>In compliance with sender ID requirements, we the undersigned, hereby authorize the service provider below to apply for Bulk SMS alphanumeric Sender ID listed below on our behalf.</p>

        <div class="table-container">
          <table class="client-box">
            <tr>
              <td class="label">CLIENTS NAME (COMPANY)</td>
              <td class="value">${companyName}</td>
            </tr>
            <tr>
              <td class="label">CLIENTS ADDRESS</td>
              <td class="value">${address.replace(/\n/g, '<br>')}</td>
            </tr>
            <tr>
              <td class="label">PREFERRED SENDER ID</td>
              <td class="value">${senderId.toUpperCase()}</td>
            </tr>
            <tr>
              <td class="label">CATEGORY</td>
              <td class="value">${category.toUpperCase()}</td>
            </tr>
          </table>
        </div>
        <div class="after-table">
          <p>This authorization shall be valid until otherwise revoked in notice</p>
          <p>Your assistance will be highly appreciated.</p>
          <p>Yours Sincerely,</p>
        </div>
        <div class="signature-area">
          <p>Sign: ……………..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date: ………………….</p>
        </div>

        <p class="bold">For Official Use (Service Provider Only)</p>
        <p class="bold">Service provider details</p>
        <div class="table-container">
          <table class="official">
            <tr>
              <td class="label">Name of Service provider company</td>
              <td class="value">Taifa Mobile Company</td>
            </tr>
            <tr>
              <td class="label">Approved By</td>
              <td class="value">Timon Wasilwa</td>
            </tr>
          </table>
        </div>
      </body>
      </html>
    `;

    try {
      const blob = new Blob([htmlContent], {
        type: 'application/msword;charset=utf-8'
      });

      const downloadLink = document.createElement('a');
      const url = URL.createObjectURL(blob);

      downloadLink.href = url;
      downloadLink.download = `Sender-ID-Authorization-${senderId}.doc`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setTimeout(() => URL.revokeObjectURL(url), 100);

      setIsModalOpen(false);

      alert('Document downloaded successfully!\n\nPlease:\n1. Open the file in Microsoft Word\n2. Print it on your company\'s official letterhead paper\n3. Sign and email to loise.mueni@taifamobile.co.ke');

    } catch (error) {
      console.error('Error generating document:', error);

      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();

        setTimeout(() => {
          newWindow.print();
          alert('If download didn\'t work:\n1. In the new window, go to File → Save As\n2. Save as Word document (.doc)\n3. Print on your company letterhead');
        }, 500);
      } else {
        alert('Download failed. Please allow pop-ups or try again.');
      }

      setIsModalOpen(false);
    }
  };

  return (
    <div className="sms-page">
      <SchemaMarkup schema={serviceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonSms) }}
      />

      {/* Hero Section */}
      <section className="sms-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Bulk SMS</h1>
            <p>In a world of digital clutter, Bulk SMS delivers clarity. Taifa Mobile ensures your message gets noticed fast, simple, and effective.</p>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <FaRocket /> Get Started
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={smsSolution} alt="SMS Communication" className="hero-image" />
          </div>
        </div>
      </section>

      {/* SMS Types Section */}
      <section className="sms-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Pick Your SMS Vibe</h2>
            <p>Want to shout promos or keep things official? Choose your flavor.</p>
          </div>
          <div className="tabs">
            {smsTypes.map((type) => (
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
          <div className="sms-type-card-wrapper">
            {smsTypes.filter((t) => t.id === activeTab).map((type) => (
              <div key={type.id} className="sms-type-card" style={{ borderColor: type.color }}>
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
            <h2>Why SMS Still Rules</h2>
            <p>Because people might ignore WhatsApp groups, but they'll open that text.</p>
          </div>
          <div className="benefits-grid">
            {universalBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index} style={{ borderColor: benefit.color, backgroundColor: `${benefit.color}10` }}>
                <div className="icon-container" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p className="description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sender ID Application Section */}
      <section className="sender-id-section">
        <div className="container">
          <div className="section-header">
            <h2>Apply for Sender ID</h2>
            <p>Follow these steps to obtain your custom Sender ID</p>
          </div>
          <div className="sender-id-content">
            <div className="steps-grid">
              <div className="step-card" style={{ borderColor: '#008c95', backgroundColor: '#008c9510' }}>
                <div className="icon-container" style={{ color: '#008c95' }}>
                  <FaLightbulb className="benefit-icon" />
                </div>
                <h3>Step 1: Prepare</h3>
                <p>Have your company documents ready: KRA PIN certificate and Certificate of Incorporation.</p>
              </div>
              <div className="step-card" style={{ borderColor: '#e97525', backgroundColor: '#e9752510' }}>
                <div className="icon-container" style={{ color: '#e97525' }}>
                  <FaDownload className="benefit-icon" />
                </div>
                <h3>Step 2: Fill & Download</h3>
                <p>Click the button below to open the form, complete it, and download the document.</p>
                <button className="cta-button secondary" onClick={() => setIsModalOpen(true)}>
                  <FaDownload /> Apply for Sender ID
                </button>
              </div>
              <div className="step-card" style={{ borderColor: '#91a2a1', backgroundColor: '#91a2a110' }}>
                <div className="icon-container" style={{ color: '#91a2a1' }}>
                  <FaEnvelope className="benefit-icon" />
                </div>
                <h3>Step 3: Submit via Email</h3>
                <p>Email all documents to: loise.mueni@taifamobile.co.ke</p>
                <a href={mailtoLink} className="cta-button secondary">
                  <FaEnvelope /> Submit Documents
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '98vh' }}>
            <div className="modal-header">
              <div>
                <h3>Apply for Sender ID</h3>
                <p className="modal-subtitle">Please complete the details below. We will generate a downloadable Word document for you.</p>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-guide">
                <FaInfoCircle />
                <p><strong>Important:</strong> This will generate a Word document that you MUST print on your company's official letterhead paper.</p>
              </div>
              <form className="sender-id-form" onSubmit={(e) => { e.preventDefault(); generateDOCX(); }}>
                <div className="form-section">
                  <h4><FaBuilding /> Company Details</h4>
                  <div className="form-group">
                    <label htmlFor="companyName">
                      Company Name *
                      <span className="hint">e.g., Taifa Mobile Ltd</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company's registered name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">
                      Company Address *
                      <span className="hint">Complete physical address including city and postal code</span>
                    </label>
                    <textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g., 123 Business Street, Westlands, Nairobi, P.O. Box 12345-00100"
                      className="form-input"
                      rows="3"
                      required
                    />
                  </div>
                </div>
                <div className="form-section">
                  <h4><FaTag /> Sender ID Details</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="senderId">
                        Preferred Sender ID *
                        <span className="hint">Max 11 characters, e.g., TAIFA</span>
                      </label>
                      <input
                        id="senderId"
                        type="text"
                        value={senderId}
                        onChange={(e) => setSenderId(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                        placeholder="e.g., TAIFA"
                        maxLength="11"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">
                        Category *
                        <span className="hint">Select based on intended SMS usage</span>
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-input"
                        required
                      >
                        <option value="Promotional">Promotional (Marketing messages)</option>
                        <option value="Transactional">Transactional (Alerts, OTPs, updates)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="cta-button secondary"
                onClick={generateDOCX}
              >
                <FaDownload /> Download Document (Word Format)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Section - Updated with actual pricing table */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Transparent Pricing</h2>
            <p>Volume-based rates for both Promotional and Transactional SMS </p>
          </div>
          <div className="pricing-content">
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Bundle</th>
                    <th>Range (SMS)</th>
                    <th>Safaricom (KES/SMS)</th>
                    <th>Airtel (KES/SMS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Taifa Bundle</td>
                    <td>0 – 19,999</td>
                    <td>0.50</td>
                    <td>0.80</td>
                  </tr>
                  <tr>
                    <td>Pro Bundle</td>
                    <td>20,000 – 49,999</td>
                    <td>0.40</td>
                    <td>0.80</td>
                  </tr>
                  <tr>
                    <td>Pro+ Bundle</td>
                    <td>50,000 – 99,999</td>
                    <td>0.30</td>
                    <td>0.70</td>
                  </tr>
                  <tr>
                    <td>Executive Bundle</td>
                    <td>100,000 – 4,000,000</td>
                    <td>0.25</td>
                    <td>0.60</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pricing-note">
              Prices are inclusive of 16% VAT. For volumes above 4 million SMS or custom requirements, please contact our sales team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about our Bulk SMS service.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the difference between Promotional and Transactional SMS?</summary>
              <div className="faq-answer">
                <p>Promotional SMS are marketing messages used for offers, events, or promotions. They can only be sent to customers who have opted in and are subject to DND restrictions.</p>
                <p>Transactional SMS are informational (e.g., OTPs, order updates, alerts) and can be sent 24/7, including holidays, with no DND restrictions.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I apply for a custom Sender ID?</summary>
              <div className="faq-answer">
                <p>Use the “Apply for Sender ID” form above to generate the authorization document. Print it on your company letterhead, sign it, and email it with your KRA PIN and Certificate of Incorporation to loise.mueni@taifamobile.co.ke.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How long does Sender ID approval take?</summary>
              <div className="faq-answer">
                <p>Approval is processed by the network operators only on Tuesdays and Thursdays.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Do you deliver to all Kenyan mobile networks?</summary>
              <div className="faq-answer">
                <p>We deliver to Safaricom and Airtel with 99.9% delivery rates.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is there a minimum purchase requirement?</summary>
              <div className="faq-answer">
                <p>No minimum purchase. You can buy as few or as many SMS as you need, with better rates at higher volumes.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Can I integrate Bulk SMS with my own system?</summary>
              <div className="faq-answer">
                <p>Yes, we provide a robust API for seamless integration. Contact us for API documentation and support.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sms;
