import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/ContactUs.scss';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Contact Taifa Mobile | Talk to Our Team in Kenya' },
  {
    name: 'description',
    content:
      'Contact Taifa Mobile for Bulk SMS, USSD, payment integration, voice, shortcode, and airtime support in Kenya. Reach us by phone, email, or contact form.'
  }
];

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createCaptcha = () => {
  const op = Math.random() > 0.5 ? '+' : '-';
  let a = randomInt(10, 99);
  let b = randomInt(1, 99);
  if (op === '-' && b > a) {
    [a, b] = [b, a];
  }
  return { a, b, op, answer: '' };
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [captcha, setCaptcha] = useState(() => createCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });
  
  // Create a ref for the form section
  const formSectionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaAnswer(e.target.value);
  };

  const refreshCaptcha = () => {
    setCaptcha(createCaptcha());
    setCaptchaAnswer('');
    setCaptchaError('');
  };

  const sendMessage = async (verifiedAnswer) => {
    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaAnswer: verifiedAnswer,
          captchaA: captcha.a,
          captchaB: captcha.b,
          captchaOp: captcha.op
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      let payload = null;
      if (contentType.includes('application/json')) {
        payload = await response.json();
      } else {
        await response.text();
      }

      if (!response.ok) {
        throw new Error(
          payload?.message || 'Unable to send message right now. Please try again in a few minutes.'
        );
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setCaptcha(createCaptcha());
      setCaptchaAnswer('');

      setSubmitState({
        type: 'success',
        message: 'Message sent successfully. Our team will contact you shortly.'
      });
    } catch (error) {
      const message = error?.message || 'Unable to send message right now. Please try again in a few minutes.';
      setSubmitState({
        type: 'error',
        message
      });
      if (message.toLowerCase().includes('human check')) {
        setIsCaptchaOpen(true);
        refreshCaptcha();
        setCaptchaError(message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitState({ type: '', message: '' });
    setCaptchaError('');
    setIsCaptchaOpen(true);
  };

  const handleCaptchaVerify = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const expectedAnswer = captcha.op === '+' ? captcha.a + captcha.b : captcha.a - captcha.b;
    const providedAnswer = Number(String(captchaAnswer).trim());

    if (!Number.isFinite(providedAnswer) || providedAnswer !== expectedAnswer) {
      setCaptchaError('Human check failed. Please try again.');
      refreshCaptcha();
      return;
    }

    setCaptchaError('');
    setIsCaptchaOpen(false);
    await sendMessage(String(providedAnswer));
  };

  // Function to scroll to form section
  const scrollToForm = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Optional: Focus on the first input field after scrolling
      setTimeout(() => {
        const firstInput = document.querySelector('.contact-form input[name="name"]');
        if (firstInput) {
          firstInput.focus();
        }
      }, 700);
    }
  };

  const cardVariants = {
    hover: { transform: 'translateY(-5px)', boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)' },
    initial: { transform: 'translateY(0)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)' }
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content animate-fade-in-up"
          >
            <h1>Let's Connect</h1>
            <p>Reach out to Taifa Mobile for tailored mobile solutions</p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="contact-hero-button"
              onClick={scrollToForm}  // Changed to scroll to form
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="section-header animate-fade-in-up"
          >
            <h2>Get in Touch</h2>
            <p>We're here to assist you through multiple channels</p>
          </motion.div>

          <div className="contact-grid">
            {[
              {
                icon: <FaEnvelope className="icon" />,
                title: 'Email Us',
                description: 'Send us an email anytime',
                text: 'info.taifam@gmail.com'
              },
              {
                icon: <FaPhone className="icon" />,
                title: 'Call Us',
                description: 'Speak with our team directly',
                link: 'tel:0707 55 66 33',
                text: '0707 55 66 33'
              },
              {
                icon: <FaMapMarkerAlt className="icon" />,
                title: 'Visit Us',
                description: (
                  <span className="address">
                    Nextgen Mall, 1st Floor, Suite 3, Mombasa Road, Nairobi, Kenya
                  </span>
                )
              },
              {
                icon: <FaClock className="icon" />,
                title: 'Opening Hours',
                description: (
                  <div className="opening-hours">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Mon - Fri:</span>
                      <span className="text-teal-600">8:30am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Saturday:</span>
                      <span className="text-teal-600">9:30am - 1:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-red-500">Closed</span>
                    </div>
                  </div>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="contact-card"
              >
                <div className="icon-container">{card.icon}</div>
                <h3>{card.title}</h3>
                <div className="description">
                  {card.description}
                  {card.text && (
                    card.link ? (
                      <a href={card.link}>{card.text}</a>
                    ) : (
                      <span className="text">{card.text}</span>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Added ref here */}
      <section ref={formSectionRef} className="contact-form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="form-container animate-fade-in-up"
          >
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill in your details below and we'll get back to you shortly</p>
              <p>All form submissions are sent directly to info.taifam@gmail.com.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Full Name *', type: 'text', name: 'name', required: true },
                  { label: 'Email Address *', type: 'email', name: 'email', required: true }
                ].map((field) => (
                  <div key={field.name} className="form-group">
                    <label>{field.label}</label>
                    <motion.input
                      whileFocus={{ borderColor: '#008c95', boxShadow: '0 0 0 3px rgba(0, 140, 149, 0.2)' }}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Phone Number', type: 'tel', name: 'phone' },
                  { label: 'Subject *', type: 'text', name: 'subject', required: true }
                ].map((field) => (
                  <div key={field.name} className="form-group">
                    <label>{field.label}</label>
                    <motion.input
                      whileFocus={{ borderColor: '#008c95', boxShadow: '0 0 0 3px rgba(0, 140, 149, 0.2)' }}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>

              <div className="form-group">
                <label>Message *</label>
                <motion.textarea
                  whileFocus={{ borderColor: '#008c95', boxShadow: '0 0 0 3px rgba(0, 140, 149, 0.2)' }}
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitState.message && (
                <p className={`form-status ${submitState.type}`}>{submitState.message}</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {isCaptchaOpen && (
        <div className="captcha-backdrop" role="dialog" aria-modal="true">
          <div className="captcha-modal">
            <h3>Quick human check</h3>
            <p>
              {captcha.a} {captcha.op} {captcha.b} = ?
            </p>
            <form className="captcha-form" onSubmit={handleCaptchaVerify}>
              <input
                type="number"
                value={captchaAnswer}
                onChange={handleCaptchaChange}
                inputMode="numeric"
                autoComplete="off"
                placeholder="Answer"
                required
              />
              <div className="captcha-actions">
                <button type="button" className="captcha-link" onClick={refreshCaptcha}>
                  New question
                </button>
                <button type="submit" className="captcha-submit" disabled={isSubmitting}>
                  Verify &amp; Send
                </button>
              </div>
              {captchaError && <p className="captcha-error">{captchaError}</p>}
            </form>
          </div>
        </div>
      )}

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="section-header animate-fade-in-up"
          >
            <h2>Find Us</h2>
            <p>Visit our office at The Nextgen Mall</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="map-container"
          >
            <iframe
              src="https://www.google.com/maps?q=The%20Nextgen%20Mall%2C%201st%20Floor%2C%20Suite%203%2C%20Mombasa%20Road%2C%20Nairobi%2C%20Kenya&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taifa Mobile Location"
            />
            <p className="map-fallback">
              <a href="https://www.google.com/maps/search/?api=1&query=The+Nextgen+Mall%2C+1st+Floor%2C+Suite+3%2C+Mombasa+Road%2C+Nairobi%2C+Kenya" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
