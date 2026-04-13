import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/ContactUs.scss';

const CONTACT_EMAIL = 'info@taifamobile.co.ke';
const CONTACT_SUBMIT_ENDPOINT = 'https://contact.taifamobile.co.ke/submit?department=general';
const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const TURNSTILE_FALLBACK_SITE_KEY = '0x4AAAAAACu74ponLFqyjsUs';

export const meta = () => [
  { title: 'Contact Taifa Mobile | Talk to Our Team in Kenya' },
  { name: 'description', content: 'Contact Taifa Mobile for Bulk SMS, USSD, payment integration, voice, shortcode, and airtime support in Kenya.' }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState('');
  const formSectionRef = useRef(null);
  const turnstileContainerRef = useRef(null);
  const turnstileWidgetIdRef = useRef(null);
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || TURNSTILE_FALLBACK_SITE_KEY;

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileContainerRef.current) return;

    let isUnmounted = false;
    let scriptLoadWatchdog = null;

    const renderTurnstile = () => {
      if (isUnmounted || !window.turnstile || !turnstileContainerRef.current) return;
      if (turnstileWidgetIdRef.current !== null) return;

      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: 'light',
        callback: (token) => {
          setTurnstileToken(token);
          setTurnstileError('');
        },
        'expired-callback': () => {
          setTurnstileToken('');
          setTurnstileError('Captcha expired. Please verify again.');
        },
        'error-callback': () => {
          setTurnstileToken('');
          setTurnstileError('Captcha failed to load. Refresh and try again.');
        }
      });
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      const existingScript = document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`);
      if (existingScript) {
        existingScript.addEventListener('load', renderTurnstile, { once: true });
      } else {
        const script = document.createElement('script');
        script.src = TURNSTILE_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.onload = renderTurnstile;
        script.onerror = () => {
          setTurnstileError('Captcha script failed to load. Please refresh or check Cloudflare Turnstile domain settings.');
        };
        document.body.appendChild(script);
      }

      scriptLoadWatchdog = window.setTimeout(() => {
        if (!window.turnstile && !isUnmounted) {
          setTurnstileError('Captcha did not initialize. Verify Turnstile site key domain configuration.');
        }
      }, 5000);
    }

    return () => {
      isUnmounted = true;
      if (scriptLoadWatchdog) window.clearTimeout(scriptLoadWatchdog);
      if (window.turnstile && turnstileWidgetIdRef.current !== null) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
      }
      turnstileWidgetIdRef.current = null;
    };
  }, [turnstileSiteKey]);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!turnstileToken) {
      setSubmitState({ type: 'error', message: 'Please complete the captcha before submitting.' });
      return;
    }
    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    try {
      const emailBody = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || 'Not provided'}`,
        `Subject: ${formData.subject}`,
        `Captcha Token: ${turnstileToken}`,
        '',
        'Message:',
        formData.message
      ].join('\n');

      const res = await fetch(CONTACT_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          body: emailBody
        })
      });

      if (!res.ok) {
        throw new Error(`Contact API request failed with status ${res.status}`);
      }
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTurnstileToken('');
      if (window.turnstile && turnstileWidgetIdRef.current !== null) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
      setSubmitState({ type: 'success', message: 'Message sent successfully. We will reply shortly!' });
    } catch (err) {
      const isApiDown = String(err?.message || '').includes('status 5');
      setSubmitState({
        type: 'error',
        message: isApiDown
          ? 'Our contact service is temporarily unavailable. Please try again shortly or email info@taifamobile.co.ke.'
          : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-content">
            <h1>Let's Connect</h1>
            <p>Reach out to Taifa Mobile for tailored mobile solutions</p>
            <motion.button
              className="contact-hero-button"
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-header">
            <h2>Get in Touch</h2>
            <p>We're here to assist you through multiple channels</p>
          </motion.div>
          <div className="contact-grid">
            {/* 4 cards here - Email, Call, Visit, Hours - using your SCSS classes */}
            {[
              { icon: <FaEnvelope className="icon" />, title: 'Email Us', description: 'Send us an email anytime...', link: `mailto:${CONTACT_EMAIL}`, text: CONTACT_EMAIL },
              { icon: <FaPhone className="icon" />, title: 'Call Us', description: 'Speak with our team directly', link: 'tel:0707 55 66 33', text: '0707 55 66 33' },
              { icon: <FaMapMarkerAlt className="icon" />, title: 'Visit Us', description: <span>Nextgen Mall, 1st Floor, Suite 3, Mombasa Road, Nairobi, Kenya</span> },
              { icon: <FaClock className="icon" />, title: 'Opening Hours', description: 'Mon-Fri 8:30am-5pm, Sat 9:30am-1pm, Sun Closed' }
            ].map((card, i) => (
              <motion.div key={i} className="contact-card" whileHover={{ y: -5 }}>
                <div className="icon-container">{card.icon}</div>
                <h3>{card.title}</h3>
                <div className="description">{card.description}{card.text && <a href={card.link}>{card.text}</a>}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={formSectionRef} className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill in your details below and we'll get back to you shortly</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group"><label>Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required /></div>
                <div className="form-group"><label>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} /></div>
                <div className="form-group"><label>Subject *</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} required /></div>
              </div>
              <div className="form-group"><label>Message *</label><textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell us how we can help you..." /></div>
              <div className="turnstile-field">
                <label>Security Check *</label>
                <div className="turnstile-widget-shell">
                  <div ref={turnstileContainerRef} className="turnstile-widget" />
                </div>
                {turnstileError && <p className="turnstile-error">{turnstileError}</p>}
              </div>
              <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
              {submitState.message && <p className={`form-status ${submitState.type}`}>{submitState.message}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-header"><h2>Find Us</h2><p>Visit our office at The Nextgen Mall</p></div>
          <div className="map-container">
            <iframe src="https://www.google.com/maps?q=The+Nextgen+Mall%2C+1st+Floor%2C+Suite+3%2C+Mombasa+Road%2C+Nairobi%2C+Kenya&output=embed" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title="Location" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
