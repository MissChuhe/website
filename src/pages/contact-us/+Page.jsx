import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../../styles/ContactUs.scss';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    const { name, email, phone, subject, message } = formData;

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Contact form is not configured yet. Please set EmailJS environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          phone,
          subject,
          message,
          to_email: 'info@taifamobile.co.ke'
        },
        { publicKey }
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setSubmitState({
        type: 'success',
        message: 'Message sent successfully. Our team will contact you shortly.'
      });
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: error?.message || 'Unable to send message right now. Please try again in a few minutes.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
                link: 'mailto:info@taifamobile.co.ke',
                text: 'info@taifamobile.co.ke'
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
