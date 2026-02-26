import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCommentSms, faHashtag, faMobileAlt, faMoneyBillWave, 
  faDatabase, faPhone, faMusic, faChevronDown, faChevronUp,
  faCalculator, faXmark
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Pricing.scss';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('bulk-sms');
  const [showCalculator, setShowCalculator] = useState(null);
  const [smsCount, setSmsCount] = useState(5000);
  const [selectedCarrier, setSelectedCarrier] = useState('Safaricom');
  const [ussdPlan, setUssdPlan] = useState('shared');
  const [ussdSessions, setUssdSessions] = useState(1000);
  const [ussdPaymentType, setUssdPaymentType] = useState('post-paid');
  const [shortCodeEngagements, setShortCodeEngagements] = useState(1000);
  const [shortCodeSmsCost, setShortCodeSmsCost] = useState(5);
  const [animate, setAnimate] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({});

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Updated Pricing Data
  const smsPricing = {
    Safaricom: {
      'Taifa Bundle': { min: 0, max: 19999, price: 0.5 },
      'Pro Bundle': { min: 20000, max: 49999, price: 0.4 },
      'Pro+ Bundle': { min: 50000, max: 99999, price: 0.3 },
      'Executive Bundle': { min: 100000, max: 4000000, price: 0.25 }
    },
    Airtel: {
      'Taifa Bundle': { min: 0, max: 19999, price: 0.8 },
      'Pro Bundle': { min: 20000, max: 49999, price: 0.8 },
      'Pro+ Bundle': { min: 50000, max: 99999, price: 0.7 },
      'Executive Bundle': { min: 100000, max: 4000000, price: 0.6 }
    }
  };

  const ussdPricing = {
    setup: { 
      shared: 15000, 
      dedicatedAirtel: 174000, 
      dedicatedSafaricom: 290000 
    },
    monthly: { 
      shared: 5000, 
      dedicatedAirtel: 45000, 
      dedicatedSafaricom: 58000 
    },
    sessionPrePaid: { 
      Safaricom: 1.5, 
      Airtel: 3.0 
    },
    sessionPostPaid: {
      'Taifa Bundle': { min: 0, max: 19999, price: 1.5 },
      'Pro Bundle': { min: 20000, max: 49999, price: 1.3 },
      'Pro+ Bundle': { min: 50000, max: 99999, price: 1.2 },
      'Enterprise Bundle': { min: 100000, max: 4000000, price: 1.1 }
    }
  };

  const shortCodePricing = {
    setup: { 
      shared: 5000, 
      dedicated: 17400, 
      dedicatedCMS: 58000, 
      golden: 232000 
    },
    monthly: { 
      shared: 2000, 
      dedicated: 17400, 
      dedicatedCMS: 23200, 
      golden: 58000 
    }
  };

  const crbtPricing = {
    normal: { dailyRate: 1.5, description: 'Normal SKIZA tones (standard catalogue)' },
    business: { 
      description: 'Custom made SKIZA Business tones',
      note: 'Production charges apply based on requirements'
    }
  };

  // Calculators
  const calculateSmsCost = useMemo(() => {
    const carrierPricing = smsPricing[selectedCarrier];
    let bundleName = Object.entries(carrierPricing).find(([_, details]) => smsCount >= details.min && smsCount <= details.max)?.[0];
    if (!bundleName && smsCount > 4000000) bundleName = 'Executive Bundle';
    const pricePerSms = carrierPricing[bundleName]?.price || 0;
    const totalExclVat = smsCount * pricePerSms;
    return {
      totalExclVat: totalExclVat.toFixed(2),
      totalInclVat: (totalExclVat * 1.16).toFixed(2)
    };
  }, [smsCount, selectedCarrier]);

  const calculateUssdCost = useMemo(() => {
    const monthlyCost = ussdPricing.monthly[ussdPlan];
    let sessionCost = 0;
    let userSessionCost = 0;
    if (ussdPaymentType === 'post-paid') {
      const postPaidPricing = ussdPricing.sessionPostPaid;
      let bundle = Object.entries(postPaidPricing).find(([_, details]) => ussdSessions >= details.min && ussdSessions <= details.max);
      const pricePerSession = bundle ? bundle[1].price : postPaidPricing['Enterprise Bundle'].price;
      sessionCost = ussdSessions * pricePerSession;
    } else {
      userSessionCost = ussdSessions * ussdPricing.sessionPrePaid[selectedCarrier];
    }
    const totalClientExclVat = monthlyCost + sessionCost;
    return {
      userSessionCost: userSessionCost.toFixed(2),
      totalClientExclVat: totalClientExclVat.toFixed(2),
      totalClientInclVat: (totalClientExclVat * 1.16).toFixed(2)
    };
  }, [ussdPlan, ussdSessions, ussdPaymentType, selectedCarrier]);

  const calculateShortCodeCost = useMemo(() => {
    const cappedSmsCost = Math.min(shortCodeSmsCost, 60);
    const networkCost = 3.12;
    const distributorShare = 0.33;
    const clientSharePerSms = Math.max(cappedSmsCost - networkCost - distributorShare, 0);
    const totalClientShareExclVat = shortCodeEngagements * clientSharePerSms;
    return {
      cappedSmsCost,
      networkCost,
      distributorShare,
      clientSharePerSms: clientSharePerSms.toFixed(2),
      totalClientShareExclVat: totalClientShareExclVat.toFixed(2),
      totalClientShareInclVat: (totalClientShareExclVat * 1.16).toFixed(2)
    };
  }, [shortCodeSmsCost, shortCodeEngagements]);

  const services = [
    { id: 'bulk-sms', name: 'Bulk SMS', icon: faCommentSms },
    { id: 'ussd', name: 'USSD', icon: faMobileAlt },
    { id: 'short-code', name: 'Short Code', icon: faHashtag },
    { id: 'mobile-payment', name: 'Payment Integration', icon: faMoneyBillWave },
    { id: 'bulk-data', name: 'Bulk Data', icon: faDatabase },
    { id: 'voice', name: 'Voice', icon: faPhone },
    { id: 'crbt', name: 'Call Ring Back Tones', icon: faMusic }
  ];

  const shortCodePlans = [
    { name: 'Shared', setup: shortCodePricing.setup.shared, monthly: shortCodePricing.monthly.shared },
    { name: 'Dedicated', setup: shortCodePricing.setup.dedicated, monthly: shortCodePricing.monthly.dedicated },
    { name: 'Dedicated (CMS)', setup: shortCodePricing.setup.dedicatedCMS, monthly: shortCodePricing.monthly.dedicatedCMS },
    { name: 'Golden', setup: shortCodePricing.setup.golden, monthly: shortCodePricing.monthly.golden }
  ];

  const ussdPlans = [
    { name: 'Shared', setup: ussdPricing.setup.shared, monthly: ussdPricing.monthly.shared },
    { name: 'Dedicated Airtel', setup: ussdPricing.setup.dedicatedAirtel, monthly: ussdPricing.monthly.dedicatedAirtel },
    { name: 'Dedicated Safaricom', setup: ussdPricing.setup.dedicatedSafaricom, monthly: ussdPricing.monthly.dedicatedSafaricom }
  ];

  const ussdPostPaidBundles = [
    { name: 'Taifa Bundle', range: '0 - 19,999', price: 1.5 },
    { name: 'Pro Bundle', range: '20,000 - 49,999', price: 1.3 },
    { name: 'Pro+ Bundle', range: '50,000 - 99,999', price: 1.2 },
    { name: 'Enterprise Bundle', range: '100,000 - 4,000,000', price: 1.1 }
  ];

  const crbtOptions = [
    { 
      type: 'normal', 
      name: 'Normal SKIZA', 
      pricing: 'KES 1.5 per day', 
      description: 'Standard catalogue tones from music library' 
    },
    { 
      type: 'business', 
      name: 'SKIZA Business', 
      pricing: 'Custom pricing',
      description: 'Custom made tones with production services',
      note: 'Production charges apply based on requirements'
    }
  ];

  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <div className="container">
          <h1>Our Solutions Pricing</h1>
          <p>Explore flexible pricing plans tailored for your communication needs</p>
        </div>
      </header>

      <div className="container">
        <div className="tabs-container">
          {services.map(service => (
            <button
              key={service.id}
              className={`tab ${activeTab === service.id ? 'active' : ''}`}
              onClick={() => setActiveTab(service.id)}
              aria-label={`Select ${service.name} pricing`}
            >
              <FontAwesomeIcon icon={service.icon} /> {service.name}
            </button>
          ))}
        </div>

        <div className={`tab-content ${animate ? 'fade-in' : ''}`}>
          {activeTab === 'bulk-sms' && (
            <div className="pricing-section">
              <div className="section-header">
                <h2>Bulk SMS Pricing</h2>
                <button className="calc-button" onClick={() => setShowCalculator('sms')}>
                  <FontAwesomeIcon icon={faCalculator} /> Estimate Cost
                </button>
              </div>
              <div className="pricing-table-container">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Bundle</th>
                        <th>Range (SMS)</th>
                        <th>Safaricom (KES/SMS)</th>
                        <th>Airtel (KES/SMS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(smsPricing.Safaricom).map(([bundle, details]) => (
                        <tr key={bundle} className="slide-in">
                          <td data-label="Bundle">{bundle}</td>
                          <td data-label="Range">{details.min.toLocaleString()} - {details.max.toLocaleString()}</td>
                          <td data-label="Safaricom (KES/SMS)">{details.price}</td>
                          <td data-label="Airtel (KES/SMS)">{smsPricing.Airtel[bundle].price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ussd' && (
            <div className="pricing-section">
              <div className="section-header">
                <h2>USSD Pricing</h2>
                <button className="calc-button" onClick={() => setShowCalculator('ussd')}>
                  <FontAwesomeIcon icon={faCalculator} /> Estimate Cost
                </button>
              </div>
              <div className="pricing-table-container">
                <div className="collapsible-section">
                  <h3 onClick={() => toggleSection('ussd-setup')}>
                    Setup & Monthly Costs
                    <FontAwesomeIcon icon={collapsedSections['ussd-setup'] ? faChevronDown : faChevronUp} />
                  </h3>
                  {!collapsedSections['ussd-setup'] && (
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Plan</th>
                            <th>Setup (KES)</th>
                            <th>Monthly (KES)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ussdPlans.map(plan => (
                            <tr key={plan.name} className="slide-in">
                              <td data-label="Plan">{plan.name}</td>
                              <td data-label="Setup">{plan.setup.toLocaleString()}</td>
                              <td data-label="Monthly">{plan.monthly.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                <div className="collapsible-section">
                  <h3 onClick={() => toggleSection('ussd-prepaid')}>
                    Costs per USSD Session (Pre-paid)
                    <FontAwesomeIcon icon={collapsedSections['ussd-prepaid'] ? faChevronDown : faChevronUp} />
                  </h3>
                  {!collapsedSections['ussd-prepaid'] && (
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Carrier</th>
                            <th>Price (KES)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="slide-in">
                            <td data-label="Carrier">Safaricom</td>
                            <td data-label="Price">{ussdPricing.sessionPrePaid.Safaricom}</td>
                          </tr>
                          <tr className="slide-in">
                            <td data-label="Carrier">Airtel</td>
                            <td data-label="Price">{ussdPricing.sessionPrePaid.Airtel}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <p>Deducted from end-user's airtime.</p>
                </div>
                <div className="collapsible-section">
                  <h3 onClick={() => toggleSection('ussd-postpaid')}>
                    Costs per USSD Session (Post-paid)
                    <FontAwesomeIcon icon={collapsedSections['ussd-postpaid'] ? faChevronDown : faChevronUp} />
                  </h3>
                  {!collapsedSections['ussd-postpaid'] && (
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Bundle</th>
                            <th>Range (Sessions)</th>
                            <th>Price (KES)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ussdPostPaidBundles.map(bundle => (
                            <tr key={bundle.name} className="slide-in">
                              <td data-label="Bundle">{bundle.name}</td>
                              <td data-label="Range">{bundle.range}</td>
                              <td data-label="Price">{bundle.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <p>Covered by service provider.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'short-code' && (
            <div className="pricing-section">
              <div className="section-header">
                <h2>Short Code Pricing</h2>
                <button className="calc-button" onClick={() => setShowCalculator('short-code')}>
                  <FontAwesomeIcon icon={faCalculator} /> Estimate Cost
                </button>
              </div>
              <div className="pricing-table-container">
                <div className="collapsible-section">
                  <h3 onClick={() => toggleSection('short-code')}>
                    Setup & Monthly Costs
                    <FontAwesomeIcon icon={collapsedSections['short-code'] ? faChevronDown : faChevronUp} />
                  </h3>
                  {!collapsedSections['short-code'] && (
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Plan</th>
                            <th>Setup (KES)</th>
                            <th>Monthly (KES)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {shortCodePlans.map(plan => (
                            <tr key={plan.name} className="slide-in">
                              <td data-label="Plan">{plan.name}</td>
                              <td data-label="Setup">{plan.setup.toLocaleString()}</td>
                              <td data-label="Monthly">{plan.monthly.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crbt' && (
            <div className="pricing-section">
              <div className="section-header">
                <h2>Call Ring Back Tones (CRBT) Pricing</h2>
                {/* Removed the Estimate Cost button */}
              </div>
              <div className="pricing-table-container">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Pricing</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {crbtOptions.map(option => (
                        <tr key={option.type} className="slide-in">
                          <td data-label="Type">
                            <strong>{option.name}</strong>
                            {option.note && <div className="small-note">{option.note}</div>}
                          </td>
                          <td data-label="Pricing">
                            {option.pricing}
                          </td>
                          <td data-label="Description">{option.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="additional-info">
                  <h4>Key Information:</h4>
                  <ul>
                    <li>Normal SKIZA: KSH 1.5 per day charged to end-user</li>
                    <li>SKIZA Business: Custom made production available</li>
                    <li>Production charges apply based on requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'voice' && (
            <div className="pricing-section">
              <div className="section-header">
                <h2>Voice Pricing</h2>
                <p>Pricing details are under review. Contact our sales team for more information.</p>
              </div>
              <div className="coming-soon">
                <FontAwesomeIcon icon={faPhone} size="3x" />
                <h3>Pricing Details Under Review</h3>
                <button className="contact-button">Contact Sales</button>
              </div>
            </div>
          )}

          {['mobile-payment', 'bulk-data'].includes(activeTab) && (
            <div className="pricing-section">
              <div className="section-header">
                <h2>{services.find(s => s.id === activeTab).name} Pricing</h2>
                <p>Pricing details are under review. Contact our sales team for more information.</p>
              </div>
              <div className="coming-soon">
                <FontAwesomeIcon icon={services.find(s => s.id === activeTab).icon} size="3x" />
                <h3>Pricing Details Under Review</h3>
                <button className="contact-button">Contact Sales</button>
              </div>
            </div>
          )}
        </div>

        {/* Calculator Popups - Removed CRBT calculator */}
        {showCalculator && (
          <div className="calculator-popup">
            <div className="calculator-content">
              <button className="close-button" onClick={() => setShowCalculator(null)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              
              {showCalculator === 'sms' && (
                <>
                  <h2><FontAwesomeIcon icon={faCommentSms} /> SMS Cost Calculator</h2>
                  <div className="calculator-controls">
                    <div className="input-group">
                      <label>Number of SMS:</label>
                      <input
                        type="range"
                        value={smsCount}
                        onChange={(e) => setSmsCount(parseInt(e.target.value))}
                        min="0"
                        max="4000000"
                        step="100"
                        aria-label="Number of SMS"
                      />
                      <div className="input-value">
                        <span>{smsCount.toLocaleString()} SMS</span>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Select Carrier:</label>
                      <div className="carrier-buttons">
                        <button
                          className={selectedCarrier === 'Safaricom' ? 'active' : ''}
                          onClick={() => setSelectedCarrier('Safaricom')}
                          aria-label="Select Safaricom"
                        >
                          Safaricom
                        </button>
                        <button
                          className={selectedCarrier === 'Airtel' ? 'active' : ''}
                          onClick={() => setSelectedCarrier('Airtel')}
                          aria-label="Select Airtel"
                        >
                          Airtel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="calculator-result">
                    <h3>Cost Breakdown</h3>
                    <div className="result-item">
                      <span>Total Cost:</span>
                      <span>KES {calculateSmsCost.totalInclVat}</span>
                    </div>
                  </div>
                </>
              )}

              {showCalculator === 'ussd' && (
                <>
                  <h2><FontAwesomeIcon icon={faMobileAlt} /> USSD Cost Calculator</h2>
                  <div className="calculator-controls">
                    <div className="input-group">
                      <label>Number of Sessions:</label>
                      <input
                        type="range"
                        value={ussdSessions}
                        onChange={(e) => setUssdSessions(parseInt(e.target.value))}
                        min="0"
                        max="4000000"
                        step="100"
                        aria-label="Number of USSD sessions"
                      />
                      <div className="input-value">
                        <span>{ussdSessions.toLocaleString()} Sessions</span>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Select Plan:</label>
                      <select value={ussdPlan} onChange={(e) => setUssdPlan(e.target.value)} aria-label="Select USSD plan">
                        <option value="shared">Shared</option>
                        <option value="dedicatedAirtel">Dedicated Airtel</option>
                        <option value="dedicatedSafaricom">Dedicated Safaricom</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Payment Type:</label>
                      <div className="carrier-buttons">
                        <button
                          className={ussdPaymentType === 'pre-paid' ? 'active' : ''}
                          onClick={() => setUssdPaymentType('pre-paid')}
                          aria-label="Select Pre-paid"
                        >
                          Pre-paid
                        </button>
                        <button
                          className={ussdPaymentType === 'post-paid' ? 'active' : ''}
                          onClick={() => setUssdPaymentType('post-paid')}
                          aria-label="Select Post-paid"
                        >
                          Post-paid
                        </button>
                      </div>
                    </div>
                    {ussdPaymentType === 'pre-paid' && (
                      <div className="input-group">
                        <label>Select Carrier:</label>
                        <div className="carrier-buttons">
                          <button
                            className={selectedCarrier === 'Safaricom' ? 'active' : ''}
                            onClick={() => setSelectedCarrier('Safaricom')}
                            aria-label="Select Safaricom"
                          >
                            Safaricom
                          </button>
                          <button
                            className={selectedCarrier === 'Airtel' ? 'active' : ''}
                            onClick={() => setSelectedCarrier('Airtel')}
                            aria-label="Select Airtel"
                          >
                            Airtel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="calculator-result">
                    <h3>Cost Breakdown</h3>
                    {ussdPaymentType === 'pre-paid' && (
                      <div className="result-item">
                        <span>User Total Cost:</span>
                        <span>KES {calculateUssdCost.userSessionCost} (deducted from airtime)</span>
                      </div>
                    )}
                    <div className="result-item">
                      <span>Client Total Cost:</span>
                      <span>KES {calculateUssdCost.totalClientInclVat}</span>
                    </div>
                  </div>
                </>
              )}

              {showCalculator === 'short-code' && (
                <>
                  <h2><FontAwesomeIcon icon={faHashtag} /> Short Code Cost Calculator</h2>
                  <div className="calculator-controls">
                    <div className="input-group">
                      <label>Cost per SMS (KES, max 60):</label>
                      <input
                        type="range"
                        value={shortCodeSmsCost}
                        onChange={(e) => setShortCodeSmsCost(parseFloat(e.target.value))}
                        min="0"
                        max="60"
                        step="0.1"
                        aria-label="Cost per SMS"
                      />
                      <div className="input-value">
                        <span>KES {shortCodeSmsCost.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Number of Engagements:</label>
                      <input
                        type="range"
                        value={shortCodeEngagements}
                        onChange={(e) => setShortCodeEngagements(parseInt(e.target.value))}
                        min="0"
                        max="4000000"
                        step="100"
                        aria-label="Number of engagements"
                      />
                      <div className="input-value">
                        <span>{shortCodeEngagements.toLocaleString()} Engagements</span>
                      </div>
                    </div>
                  </div>
                  <div className="calculator-result">
                    <h3>Cost Breakdown (per SMS)</h3>
                    <div className="result-item">
                      <span>Cost per SMS:</span>
                      <span>KES {calculateShortCodeCost.cappedSmsCost}</span>
                    </div>
                    <div className="result-item">
                      <span>Network Operator Cost:</span>
                      <span>KES {calculateShortCodeCost.networkCost}</span>
                    </div>
                    <div className="result-item">
                      <span>Distributor Share (Taifa):</span>
                      <span>KES {calculateShortCodeCost.distributorShare}</span>
                    </div>
                    <div className="result-item">
                      <span>Client Share per SMS:</span>
                      <span>KES {calculateShortCodeCost.clientSharePerSms}</span>
                    </div>
                    <div className="result-item">
                      <span>Total Client Share:</span>
                      <span>KES {calculateShortCodeCost.totalClientShareInclVat}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;
