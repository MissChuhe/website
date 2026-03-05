import React from 'react';
import '../styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 - Logo + Tagline */}
          <div className="footer-col">
            <a href="/" aria-label="Go to home page">
              <img src={logo} alt="Taifa Mobile Logo" className="footer-logo" />
            </a>
          </div>

          {/* Column 2 - Solutions */}
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/sms">Bulk SMS</a></li>
              <li><a href="/data">Bulk Data</a></li>
              <li><a href="/ussd">USSD Services</a></li>
              <li><a href="/shortcode">Short Code</a></li>
              <li><a href="/payment">Mobile Payments</a></li>
              <li><a href="/voice">Voice Solutions</a></li>
              <li><a href="/call-back">Call Back Tones</a></li>
              <li><a href="/airtime">Airtime</a></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/pricing">Pricing Plans</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/docs">API Documentation</a></li>
            </ul>
          </div>

          {/* Column 2 - Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                info@taifamobile.co.ke
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                0707 55 66 33
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                The Next-Gen Mall<br />1st Floor, Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Taifa Mobile Ltd. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/security">Security</a>
          </div>
          <button className="back-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
}

