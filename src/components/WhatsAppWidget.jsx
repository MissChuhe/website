import React, { useEffect, useState } from "react";
import { 
  FaWhatsapp, 
  FaCircle, 
  FaRegCircle,
  FaComments,
  FaSms,
  FaCode,
  FaMobileAlt,
  FaCreditCard,
  FaDatabase,
  FaPhoneVolume,
  FaMusic,
  FaSimCard
} from "react-icons/fa";
import "../styles/WhatsAppWidget.scss";

const WhatsAppWidget = () => {
  const [visible, setVisible] = useState(false);
  const [isWorkingHours, setIsWorkingHours] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [step, setStep] = useState("welcome"); // welcome → products → selected

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);

    const now = new Date();
    const hours = now.getHours();
    setIsWorkingHours(hours >= 9 && hours < 18);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "254707556633";

  const products = [
    { name: "Bulk SMS", icon: FaSms, message: "Hi! I'm interested in Bulk SMS services. Can you share pricing and how it works?" },
    { name: "Short Codes", icon: FaCode, message: "Hello! I'd like to know more about Short Codes and how to get one." },
    { name: "USSD Services", icon: FaMobileAlt, message: "Hi! I'm looking for USSD (*XXX#) solutions. Please send details." },
    { name: "Payment Integration", icon: FaCreditCard, message: "Hello! I need Payment Integration (M-Pesa, etc.) for my business." },
    { name: "Bulk Data", icon: FaDatabase, message: "Hi! Interested in Bulk Data bundles for resale or campaigns." },
    { name: "Voice Services", icon: FaPhoneVolume, message: "Hello! Tell me about your Voice (IVR, robo-calls) services." },
    { name: "SKIZA Tunes", icon: FaMusic, message: "Hi! I want to upload or manage SKIZA (Caller Ringback Tones)." },
    { name: "Airtime", icon: FaSimCard, message: "Hello! I'm inquiring about bulk Airtime distribution or API." },
  ];

  const openWhatsApp = (message) => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleProductSelect = (product) => {
    setStep("selected");
    setTimeout(() => {
      openWhatsApp(product.message);
    }, 800);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) setStep("welcome");
  };

  if (!visible) return null;

  return (
    <div className="whatsapp-widget">
      {isExpanded && (
        <div className="chat-bubble">
          {/* Header */}
          <div className="bubble-header">
            <div className="status">
              <div className={`status-dot ${isWorkingHours ? 'online' : 'offline'}`}>
                {isWorkingHours ? <FaCircle /> : <FaRegCircle />}
              </div>
              <span className="status-text">
                {isWorkingHours ? "Online • Ready to assist" : "We'll reply soon"}
              </span>
            </div>
            <h3>Hi there! 👋</h3>
            <p className="subtitle">
              {step === "welcome" && "What service are you interested in today?"}
              {step === "selected" && "Connecting you to our team..."}
            </p>
          </div>

          {/* Welcome / Product Selection */}
          {step === "welcome" && (
            <div className="products-grid">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <button
                    key={index}
                    className="product-btn"
                    onClick={() => handleProductSelect(product)}
                  >
                    <Icon className="product-icon" />
                    <span className="product-name">{product.name}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Thank you / redirecting state */}
          {step === "selected" && (
            <div className="redirecting-state">
              <FaComments className="chat-icon" />
              <p>Great choice! Opening WhatsApp now...</p>
              <button 
                className="hello-btn"
                onClick={() => openWhatsApp("Hi! I have a general inquiry about your services.")}
              >
                Or just say "Hello"
              </button>
            </div>
          )}

          {/* Fallback Hello */}
          {step === "welcome" && (
            <div className="hello-prompt">
              <p>Or simply <button onClick={() => openWhatsApp("Hello! 👋")}>say "Hello"</button></p>
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        className={`whatsapp-button ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpand}
      >
        <FaWhatsapp className="wa-icon" />
        {isExpanded ? <span>Close</span> : <span>Chat with us</span>}
      </button>
    </div>
  );
};

export default WhatsAppWidget;