import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/ContactUs.scss';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';
const CONTACT_FORM_DEPARTMENT = 'general';
const PUBLIC_CONTACT_EMAIL = 'info@taifamobile.co.ke';
const HIDDEN_CONTACT_EMAIL = 'mailto:info.taifam@gmail.com';
const TURNSTILE_BYPASS_LOCAL =
  String(import.meta.env.VITE_TURNSTILE_BYPASS_LOCAL || 'false').toLowerCase() === 'true';

const loadTurnstileScript = () =>
  new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Turnstile is only available in the browser.'));
      return;
    }

    if (window.turnstile) {
      resolve(window.turnstile);
      return;
    }

    const existingScript = document.querySelector('script[data-turnstile-script="true"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.turnstile), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Unable to load Turnstile.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.dataset.turnstileScript = 'true';
    script.onload = () => resolve(window.turnstile);
    script.onerror = () => reject(new Error('Unable to load Turnstile.'));
    document.head.appendChild(script);
  });

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Contact Taifa Mobile | Talk to Our Team in Kenya' },
  {
    name: 'description',
    content:
      'Contact Taifa Mobile for Bulk SMS, USSD, payment integration, voice, shortcode, and airtime support in Kenya. Reach us by phone, email, or contact form.'
  }
];

const ContactUs = ({ runtime = {} }) => {
  const requestHost =
    typeof window !== 'undefined'
      ? window.location.hostname.toLowerCase()
      : String(runtime.requestHost || '').toLowerCase();
  const isLocalHost = ['localhost', '127.0.0.1'].includes(requestHost);
  const shouldBypassTurnstile = isLocalHost && TURNSTILE_BYPASS_LOCAL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });
  
  // Create a ref for the form section
  const formSectionRef = useRef(null);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetTurnstile = () => {
    if (typeof window !== 'undefined' && window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setTurnstileToken('');
  };

  useEffect(() => {
    let isMounted = true;

    if (shouldBypassTurnstile || !TURNSTILE_SITE_KEY || !turnstileRef.current) {
      setTurnstileReady(false);
      return undefined;
    }

    loadTurnstileScript()
      .then((turnstile) => {
        if (!isMounted || !turnstileRef.current || widgetIdRef.current !== null) return;

        widgetIdRef.current = turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileError('');
          },
          'expired-callback': () => {
            setTurnstileToken('');
            setTurnstileError('Verification expired. Please complete the captcha again.');
          },
          'error-callback': () => {
            setTurnstileToken('');
            setTurnstileError('Captcha could not load properly. Please refresh and try again.');
          }
        });

        setTurnstileReady(true);
      })
      .catch(() => {
        if (!isMounted) return;
        setTurnstileReady(false);
        setTurnstileError('Captcha could not load properly. Please refresh and try again.');
      });

    return () => {
      isMounted = false;
    };
  }, [shouldBypassTurnstile]);

  const sendMessage = async () => {
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
          department: CONTACT_FORM_DEPARTMENT,
          turnstileToken
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
      setTurnstileError('');
      resetTurnstile();

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
      if (message.toLowerCase().includes('security check') || message.toLowerCase().includes('captcha')) {
        setTurnstileError(message);
        resetTurnstile();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitState({ type: '', message: '' });
    setTurnstileError('');

    if (!shouldBypassTurnstile && !TURNSTILE_SITE_KEY) {
      setSubmitState({
        type: 'error',
        message: 'Captcha is not configured yet. Please add the Turnstile site key.'
      });
      return;
    }

    if (!shouldBypassTurnstile && !turnstileReady) {
      setTurnstileError('Captcha is still loading. Please wait a moment and try again.');
      return;
    }

    if (!shouldBypassTurnstile && !turnstileToken) {
      setTurnstileError('Please complete the captcha before sending your message.');
      return;
    }

    await sendMessage();
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
                description: 'Send us an email anytime. This inbox is actively monitored by our team.',
                link: HIDDEN_CONTACT_EMAIL,
                text: PUBLIC_CONTACT_EMAIL,
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
                  {card.note && <span className="note">{card.note}</span>}
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

              <div className="turnstile-field">
                {shouldBypassTurnstile ? (
                  <div className="turnstile-dev-note">
                    Local Turnstile bypass is enabled for
                    <code> localhost</code>. Set <code>VITE_TURNSTILE_BYPASS_LOCAL=false</code> to
                    render the real widget here.
                  </div>
                ) : (
                  <>
                    <div className="turnstile-widget-shell">
                      <div ref={turnstileRef} className="turnstile-widget" />
                    </div>
                    {turnstileError && <p className="turnstile-error">{turnstileError}</p>}
                    {!TURNSTILE_SITE_KEY && (
                      <p className="turnstile-error">
                        Turnstile site key is missing. Add <code>VITE_TURNSTILE_SITE_KEY</code> to enable the form.
                      </p>
                    )}
                  </>
                )}
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
