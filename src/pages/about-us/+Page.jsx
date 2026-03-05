
import React from "react";
import "../../styles/AboutUs.scss";
import aboutImage from "../../assets/team-working.webp";
import bannerImage from "../../assets/optimized/nairobi.webp";

// Route modules export metadata alongside components.
// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: "About Taifa Mobile | 7+ Years of Communication Innovation" },
  {
    name: "description",
    content:
      "Discover who Taifa Mobile is, our 7+ year journey, the networks we collaborate with including Safaricom, Airtel, and Equitel, and why businesses across Kenya choose us.",
  },
];

const AboutUs = () => {
  const networkPartners = [
    { name: "Safaricom", detail: "Nationwide delivery coverage" },
    { name: "Airtel", detail: "Reliable campaign reach" },
    { name: "Equitel", detail: "Flexible customer engagement" },
  ];

  const storyMilestones = [
    {
      title: "Founded 7+ Years Ago",
      description:
        "We launched Taifa Mobile to simplify how Kenyan organizations communicate at scale.",
    },
    {
      title: "Built a Full Communication Stack",
      description:
        "Today we power Bulk SMS, USSD, Payments, Voice, Airtime, and API-led workflows.",
    },
    {
      title: "Focused on Growth",
      description:
        "We keep improving delivery quality, platform speed, and integration experience for every client.",
    },
  ];

  const whyChooseItems = [
    {
      title: "Proven Delivery Performance",
      description:
        "Engineered for high-deliverability campaigns and time-sensitive messaging across Kenyan mobile networks.",
    },
    {
      title: "Built for Scale",
      description:
        "Our platform supports both fast-growing startups and enterprise-level transaction volumes without complexity.",
    },
    {
      title: "Fast Onboarding & Integration",
      description:
        "Simple APIs, practical implementation guidance, and technical support that helps teams go live quickly.",
    },
    {
      title: "Security & Compliance Focus",
      description:
        "We prioritize secure communication workflows and operational standards businesses can trust.",
    },
    {
      title: "Flexible Product Suite",
      description:
        "Use one partner for SMS, USSD, Payments, Voice, Airtime, and campaign automation — all in one ecosystem.",
    },
    {
      title: "Local Market Expertise",
      description:
        "Our team understands Kenyan communication realities, helping you design campaigns that actually perform.",
    },
  ];

  const whyProofStats = [
    { label: "Years in Market", value: "7+" },
    { label: "Network Partners", value: "3" },
    { label: "Platform Focus", value: "Enterprise" },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description:
        "We continuously improve our products so Kenyan organizations can communicate faster and smarter.",
    },
    {
      title: "Reliability",
      description:
        "From campaign delivery to API performance, we prioritize consistency you can depend on.",
    },
    {
      title: "Customer Focus",
      description:
        "Every solution is shaped around real customer outcomes, usability, and long-term growth.",
    },
  ];

  return (
    <div className="about-v3">
      {/* Hero */}
      <section
        className="about-v3__hero"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="about-v3__hero-overlay" />
        <div className="about-v3__container about-v3__hero-inner">
          <h1>About Taifa Mobile</h1>
          <p>
            We are a Kenyan communication technology team with 7+ years of
            experience helping businesses connect, engage, and grow.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="about-v3__overview">
        <div className="about-v3__container">
          <div className="about-v3__overview-grid">
            <div className="about-v3__overview-content">
              <h2>Who Are We?</h2>
              <p>
                Taifa Mobile is a Kenyan communication technology partner
                helping organizations connect with customers through Bulk SMS,
                USSD, Payments, Voice, Airtime, and API-driven tools.
              </p>
              <p>
                We started this journey over <strong>7 years ago</strong> with
                one mission: make business communication in Kenya more reliable,
                more scalable, and easier to use. Today, we support teams of all
                sizes and continue building for the future.
              </p>
              <span className="about-v3__pill">
                <span className="about-v3__pill-dot" />
                7+ Years of Experience
              </span>
            </div>
            <div className="about-v3__overview-image">
              <img
                src={aboutImage}
                alt="Taifa Mobile communication platform"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-v3__story">
        <div className="about-v3__container">
          <div className="about-v3__card">
            <h3>Our Journey So Far</h3>
            <div className="about-v3__story-grid">
              {storyMilestones.map((item, i) => (
                <div key={item.title} className="about-v3__story-card">
                  <div className="about-v3__story-card-number">{i + 1}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-v3__card">
            <div className="about-v3__network-header">
              <span className="about-v3__network-icon">📡</span>
              <h3>Networks We Collaborate With</h3>
            </div>
            <p className="about-v3__subtitle">
              We work closely with leading mobile networks to ensure dependable
              nationwide communication delivery.
            </p>
            <div className="about-v3__network-grid">
              {networkPartners.map((partner) => (
                <div key={partner.name} className="about-v3__network-pill">
                  <strong>{partner.name}</strong>
                  <span>{partner.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Values + Stats */}
      <section className="about-v3__why">
        <div className="about-v3__container">
          <div className="about-v3__why-layout">
            {/* Left column */}
            <div className="about-v3__card">
              <h3>Why Choose Us?</h3>
              <p className="about-v3__subtitle">
                Built around performance, trust, and real business impact.
              </p>
              <div className="about-v3__why-list">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="about-v3__why-item">
                    <div className="about-v3__why-item-marker">✓</div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="about-v3__why-side">
              <div className="about-v3__card">
                <h3>Our Core Values</h3>
                <div className="about-v3__values-list">
                  {coreValues.map((item) => (
                    <div key={item.title} className="about-v3__value-item">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-v3__proof-card">
                <h4>Quick Proof</h4>
                <div className="about-v3__proof-grid">
                  {whyProofStats.map((item) => (
                    <div key={item.label} className="about-v3__proof-item">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <p>
                  We combine local market experience, strong network
                  collaborations, and practical support to help your
                  communication strategy perform consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
