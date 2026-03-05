import React from 'react';
import {
  FaHeart, FaEnvelope, FaArrowRight,
  FaUsers, FaLightbulb, FaSmile, FaCoffee, FaCheckCircle
} from 'react-icons/fa';
import '../../styles/career.scss';
import careerHero from '../../assets/team-working.webp';

const Career = () => {
  return (
    <div className="career-page">
      {/* Hero Section – Clean magazine-style without badge for balanced look */}
      <section className="career-hero">
        <div className="hero-overlay"></div>
        <img src={careerHero} alt="Taifa Mobile Team" className="hero-bg-image" />
        <div className="container hero-content">
          <div className="heading-vertical-stack">
            <h1>Careers at Taifa Mobile</h1>
            <p className="subheading">Build Kenya&apos;s mobile future with a team that supports your growth</p>
          </div>
          <p className="hero-description">
            We build communication products that help businesses reach customers faster and better. If you care about meaningful work, collaboration, and learning, you will feel at home here.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">1</div>
              <div className="stat-label">Team, Shared Goals</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Growth Mindset</div>
            </div>
            <div className="stat">
              <div className="stat-number">Real</div>
              <div className="stat-label">Impact for Clients</div>
            </div>
          </div>

          <a href="#apply" className="cta-button primary">
            <FaArrowRight /> See How to Apply
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="perks-section">
        <div className="container">
          <div className="section-header">
            <div className="heading-vertical-stack">
              <h2>Why You'll Love It Here</h2>
              <p className="subheading">A workplace built on trust, ownership, and practical support</p>
            </div>
          </div>
          <div className="perks-grid">
            <div className="perk-card">
              <div className="perk-icon"><FaUsers /></div>
              <h3>Amazing Team</h3>
              <p>Work with people who share knowledge, communicate clearly, and help each other succeed.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon"><FaLightbulb /></div>
              <h3>Your Ideas Matter</h3>
              <p>Bring thoughtful ideas and see them become real solutions used by businesses across Kenya.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon"><FaSmile /></div>
              <h3>Healthy Culture</h3>
              <p>We value respect, accountability, and a balanced environment where people can do their best work.</p>
            </div>
            <div className="perk-card">
              <div className="perk-icon"><FaCoffee /></div>
              <h3>Great Perks</h3>
              <p>Competitive benefits, learning opportunities, and the tools you need to do excellent work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <div className="container">
          <div className="section-header">
            <div className="heading-vertical-stack">
              <h2>How to Submit a Strong Application</h2>
              <p className="subheading">A quick guide to help us review your profile faster</p>
            </div>
          </div>
          <div className="tips-grid">
            <div className="tip-card">
              <FaCheckCircle className="tip-icon" />
              <h3>Share Relevant Experience</h3>
              <p>Highlight projects and outcomes that match the role or skills you are targeting.</p>
            </div>
            <div className="tip-card">
              <FaCheckCircle className="tip-icon" />
              <h3>Include Contact Details</h3>
              <p>Add your current phone number, email, and location so we can reach you quickly.</p>
            </div>
            <div className="tip-card">
              <FaCheckCircle className="tip-icon" />
              <h3>Tell Us Your Motivation</h3>
              <p>Briefly explain why you want to join Taifa Mobile and the impact you want to make.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="status-section" id="apply">
        <div className="container">
          <div className="status-card">
            <div className="section-header">
              <div className="heading-vertical-stack">
                <h2>No Open Roles Right Now</h2>
              </div>
            </div>
            <div className="status-body">
              <p>We&apos;re not actively hiring today, but we are always interested in meeting strong candidates.</p>
              <p className="encourage">Send your CV and a short introduction. We keep qualified profiles on file and reach out when a matching role opens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="apply-section">
        <div className="container">
          <div className="apply-card">
            <FaHeart className="big-heart" />
            <div className="section-header">
              <div className="heading-vertical-stack">
                <h2>Submit Your CV</h2>
                <p className="subheading">We would be glad to hear from you</p>
              </div>
            </div>
            <div className="apply-body">
              <p>Developers, designers, marketers, and operations professionals are all welcome to apply.</p>
              <p>Share your CV and a brief note about your strengths and preferred role.</p>
              <div className="apply-actions">
                <a href="mailto:josephine.mueni@taifamobile.co.ke?subject=Spontaneous%20Application%20-%20[Your%20Name]" className="cta-button primary big-cta">
                  <FaEnvelope /> Email Your CV &amp; Introduction
                </a>
                <a href="/contact" className="cta-button secondary">
                  <FaArrowRight /> Contact Us Page
                </a>
              </div>
              
              <p className="small-note">Every application is reviewed by our team.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
