import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import "../../styles/Home.scss";

// Assets
import heroPromoImage from "../../assets/optimized/happyhero.webp";

// Partners
import undp from "../../assets/undp.png";
import iebc from "../../assets/iebc.png";
import fke from "../../assets/fke.png";
import ngos from "../../assets/ngos.jpg";
import mutongoi from "../../assets/mutongoi.jpg";
import kiseb from "../../assets/kiseb.png";
import heroes from "../../assets/heroes.png";
import ntti from "../../assets/ntti.png";
import radiomlima from "../../assets/radiomlima.jpg";
import countyfm from "../../assets/countyfm.png";
import weru from "../../assets/weru.png";
import kaimosi from "../../assets/kaimosi.jpg";
import westtv from "../../assets/westtv.jpg";
import werutv from "../../assets/werutv.jpg";
import shinebet from "../../assets/shinebet.png";
import sasatv from "../../assets/Sasatv.jpg";
import radio_africa_group from "../../assets/radio_africa_group_logo.jpg";
import mumbofm from "../../assets/mumbofm.png";
import nationdt_logo from "../../assets/nationdt-logo.png";
import kwitu from "../../assets/kwitu.jpg";
import Kambatv from "../../assets/kambatv.png";
import grace_brook_academy from "../../assets/grace_brook_academy.jpg";
import ewama_properties from "../../assets/ewama_properties.png";
import dalafm from "../../assets/dalafm.jpg";
import busia_border_radio from "../../assets/busia_border_radio.png";
import aviationtv from "../../assets/aviationtv.jpg";
import aquila from "../../assets/aquila.png";
import zilojo from "../../assets/zilojo.png";
import Bandari_DT_Sacco from "../../assets/bandari_dt_sacco.png";
import cfao_motors_logo from "../../assets/cfao-motors-logo.jpg";
import cheletecredit from "../../assets/chelete_credit.jpg";
import namlolwe from "../../assets/namlolwe.png";
import netmtaani from "../../assets/netmtaani.jpg";
import enlight from "../../assets/enlight.png";
import vinicitubet from "../../assets/vinicitubet.jpg";

// Icons
import {
  FaArrowRight,
  FaEnvelope,
  FaDatabase,
  FaCode,
  FaHashtag,
  FaCreditCard,
  FaPhoneVolume,
  FaMoneyBillWave,
} from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: "Taifa Mobile | Bulk SMS, USSD, Payments, Voice and Airtime in Kenya" },
  {
    name: "description",
    content:
      "Taifa Mobile helps businesses in Kenya grow with Bulk SMS, USSD, payment integration, voice, shortcode, bulk data, and airtime solutions.",
  },
];

const ldJsonHome = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://taifamobile.co.ke/#organization",
      "name": "Taifa Mobile Ltd",
      "url": "https://taifamobile.co.ke",
      "logo": "https://taifamobile.co.ke/path-to-logo.png",
      "image": "https://taifamobile.co.ke/path-to-logo.png",
      "telephone": "+254707556633",
      "email": "info@taifamobile.co.ke",
      "description": "Provider of Bulk SMS, USSD, Short Code, Voice, Mobile Payments, Bulk Data, CRBT and Airtime solutions for businesses in Kenya.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Next-Gen Mall, 1st Floor",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Kenya"
      },
      "sameAs": [
        "https://www.linkedin.com/company/taifa-mobile",
        "https://twitter.com/taifamobileke",
        "https://facebook.com/taifamobileke"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "120"
      }
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/sms/#service",
      "name": "Bulk SMS",
      "url": "https://taifamobile.co.ke/sms",
      "serviceType": "Bulk SMS Messaging",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Scalable Bulk SMS messaging platform for alerts, marketing campaigns, OTPs, and transactional notifications across Kenyan networks."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/shortcode/#service",
      "name": "Short Code Services",
      "url": "https://taifamobile.co.ke/shortcode",
      "serviceType": "Short Code Provisioning",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Dedicated short codes for customer campaigns, notifications, and brand messaging."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/ussd/#service",
      "name": "USSD Services",
      "url": "https://taifamobile.co.ke/ussd",
      "serviceType": "USSD Application & Hosting",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Interactive USSD solutions for payments, banking, surveys, airtime purchase, and customer engagement."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/payment/#service",
      "name": "Payment Integration",
      "url": "https://taifamobile.co.ke/payment",
      "serviceType": "Mobile Payment APIs",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Mobile payment integration, alerts, and commerce solutions including M-Pesa API support."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/data/#service",
      "name": "Bulk Data",
      "url": "https://taifamobile.co.ke/data",
      "serviceType": "Business Data Services",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Access to reliable business data services for marketing, analytics, and customer engagement."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/voice/#service",
      "name": "Voice Services",
      "url": "https://taifamobile.co.ke/voice",
      "serviceType": "Business Voice Solutions",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Voice call solutions for customer service, notifications, and enterprise communication."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/call-back/#service",
      "name": "Call Ring Back Tones (CRBT / Skiza)",
      "url": "https://taifamobile.co.ke/call-back",
      "serviceType": "CRBT / Skiza Services",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Custom ring back tones and music-on-hold solutions for mobile subscribers in Kenya."
    },
    {
      "@type": "Service",
      "@id": "https://taifamobile.co.ke/airtime/#service",
      "name": "Airtime Services",
      "url": "https://taifamobile.co.ke/airtime",
      "serviceType": "Airtime Distribution",
      "provider": { "@id": "https://taifamobile.co.ke/#organization" },
      "description": "Airtime top-up services for businesses and bulk distribution to mobile customers."
    }
  ]
};

const Home = () => {
  const navigate = useNavigate();
  const SALES_CONTACT_ENDPOINT = 'https://contact.taifamobile.co.ke/submit?department=sales';

  const heroHeadlineWords = [
    { text: "Promo Live.", className: "home__accent-orange" },
    { text: "Big Reach.", className: "" },
    { text: "Instant Results.", className: "home__accent-teal" },
  ];

  let letterCursor = 0;
  const animatedHeadlineWords = heroHeadlineWords.map((word, wordIndex) => {
    const letters = word.text.split("").map((letter, letterIndex) => {
      const delay = 0.12 + letterCursor * 0.045;
      letterCursor += 1;

      return {
        id: `${wordIndex}-${letterIndex}`,
        letter,
        delay,
      };
    });

    // Add a tiny beat between words so each chunk feels intentional.
    letterCursor += 1;

    return {
      ...word,
      letters,
    };
  });

  const getSolutionPath = (slug) => {
    const paths = {
      sms: "/sms",
      data: "/data",
      ussd: "/ussd",
      shortcode: "/shortcode",
      payment: "/payment",
      voice: "/voice",
      crbt: "/call-back",
      airtime: "/airtime",
    };
    return paths[slug] || "/";
  };

  const goToPath = (path) => {
    if (typeof window !== "undefined") {
      window.location.assign(path);
      return;
    }
    navigate(path);
  };

  const homeSolutions = [
    {
      id: 1,
      title: "Bulk SMS",
      description:
        "Send high-deliverability, instant SMS alerts, marketing messages, and notifications across all major mobile networks in Kenya.",
      cta: "Learn More",
      slug: "sms",
    },
    {
      id: 2,
      title: "Bulk Data",
      description:
        "Provide fast, reliable data bundles for your customers or internal teams with instant activation at scale.",
      cta: "View Packages",
      slug: "data",
    },
    {
      id: 3,
      title: "USSD Services",
      description:
        "Create secure, interactive USSD applications for payments, self-service, surveys, onboarding, and more.",
      cta: "Build Your USSD Code",
      slug: "ussd",
    },
    {
      id: 4,
      title: "Shortcodes",
      description:
        "Run campaigns, subscriptions, authentications, and customer workflows using reliable shortcodes.",
      cta: "Get a Shortcode",
      slug: "shortcode",
    },
    {
      id: 5,
      title: "Mobile Payments",
      description:
        "Enable secure, seamless mobile transactions with APIs built for high-volume processing.",
      cta: "Integrate Payments",
      slug: "payment",
    },
    {
      id: 6,
      title: "Voice Solutions",
      description:
        "Deliver enterprise-grade voice communication, automated calls, routing, and callback tones.",
      cta: "Explore Voice Services",
      slug: "voice",
    },
    {
      id: 7,
      title: "Airtime Solutions",
      description:
        "Send airtime instantly for promotions, rewards, customer engagement, or internal operations.",
      cta: "Send Airtime",
      slug: "airtime",
    },
    {
      id: 8,
      title: "Developer-Friendly APIs",
      description:
        "Integrate SMS, USSD, shortcodes, payments, and airtime using our clean, well-documented APIs.",
      cta: "View API Docs",
      path: "/docs",
    },
  ];

  const institutionalPartners = [
    { id: 1, name: "Kaimosi Friends University", logo: kaimosi },
    { id: 2, name: "Grace Brook Academy", logo: grace_brook_academy },
    { id: 3, name: "NTTI", logo: ntti },
    { id: 4, name: "Nation DT Sacco", logo: nationdt_logo },
    { id: 5, name: "Bandari DT Sacco", logo: Bandari_DT_Sacco },
    { id: 6, name: "Chelete Credit", logo: cheletecredit },
    { id: 7, name: "UNDP", logo: undp },
    { id: 8, name: "IEBC", logo: iebc },
    { id: 9, name: "Federation of Kenya Employers", logo: fke },
    { id: 10, name: "NGOs Foundation", logo: ngos },
    { id: 11, name: "KISEB", logo: kiseb },
    { id: 12, name: "HEROES for Change", logo: heroes },
    { id: 13, name: "Ewama Properties", logo: ewama_properties },
    { id: 14, name: "CFAO Motors", logo: cfao_motors_logo },
    { id: 15, name: "Aquila", logo: aquila },
    { id: 16, name: "Zilojo", logo: zilojo },
    { id: 17, name: "Enlight", logo: enlight },
    { id: 18, name: "NetMtaani", logo: netmtaani },
  ];

  const mediaPartners = [
    { id: 19, name: "Mutongoi FM", logo: mutongoi },
    { id: 20, name: "Radio Mlima", logo: radiomlima },
    { id: 21, name: "County FM 90.3", logo: countyfm },
    { id: 22, name: "WERU FM", logo: weru },
    { id: 23, name: "Mumbo FM", logo: mumbofm },
    { id: 24, name: "Dala FM", logo: dalafm },
    { id: 25, name: "Busia Border Radio", logo: busia_border_radio },
    { id: 26, name: "Namlolwe FM", logo: namlolwe },
    { id: 27, name: "Kwitu FM", logo: kwitu },
    { id: 28, name: "West TV", logo: westtv },
    { id: 29, name: "Weru TV", logo: werutv },
    { id: 30, name: "Sasa TV", logo: sasatv },
    { id: 31, name: "Kamba TV", logo: Kambatv },
    { id: 32, name: "Aviation TV", logo: aviationtv },
    { id: 33, name: "Radio Africa Group", logo: radio_africa_group },
    { id: 34, name: "ShineBet", logo: shinebet },
    { id: 35, name: "VinicituBet", logo: vinicitubet },
  ];

  return (
    <div className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonHome) }}
      />

      {/* ── Hero ── */}
      <section className="home__hero">
        <div className="home__hero-overlay" />

        <div className="home__hero-wrapper">
          {/* LEFT: Content */}
          <div className="home__hero-content">
            <span className="home__hero-kicker">
              <span className="home__live-dot" />
              ONGOING PROMO &bull; BULK SMS BOOST
            </span>

            <h1 className="home__hero-title" aria-label="Promo Live. Big Reach. Instant Results.">
              {animatedHeadlineWords.map((word, index) => (
                <span
                  key={`${word.text}-${index}`}
                  className={`home__hero-word ${word.className}`.trim()}
                >
                  {word.letters.map((item) => (
                    <span
                      key={item.id}
                      className="home__hero-letter"
                      style={{ "--letter-delay": `${item.delay}s` }}
                    >
                      {item.letter === " " ? "\u00A0" : item.letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="home__hero-subtitle">
              Kenya&rsquo;s trusted communication platform — powering SMS, USSD,
              payments, voice &amp; more for 7+ years.
            </p>

            <div className="home__hero-chips">
              <span>Promo Ongoing</span>
              <span>Nationwide Reach</span>
              <span>Instant Engagement</span>
            </div>

            <div className="home__hero-actions">
              <button
                className="home__btn home__btn--primary"
                onClick={async () => {
                  const email = prompt('Enter your email (for reply):', '');
                  if (!email) {
                    alert('Email is required.');
                    return;
                  }
                  const companyName = prompt('Enter your company name:', '');
                  if (!companyName) {
                    alert('Company name is required.');
                    return;
                  }
                  const subject = 'Request for Bulk SMS Promo Quotation';
                  const body = [
                    'Hello Taifa Mobile Sales Team,',
                    '',
                    `My name is [Your Name] from ${companyName}.`,
                    'I would like more information about your ongoing Bulk SMS promotion.',
                    'Please share a quotation and the next steps to get started.',
                    '',
                    `Reply email: ${email}`,
                    '',
                    'Thank you.'
                  ].join('\n');

                  try {
                    const response = await fetch(SALES_CONTACT_ENDPOINT, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                      body: JSON.stringify({
                        email,
                        subject,
                        body
                      })
                    });

                    if (!response.ok) {
                      throw new Error('Failed to send your request.');
                    }

                    alert('Your request was sent successfully. Our sales team will contact you shortly.');
                  } catch (error) {
                    alert('We could not send your request right now. Please try again in a moment.');
                  }
                }}
              >
                Start Sending <FaArrowRight />
              </button>
              <button
                className="home__btn home__btn--ghost"
                onClick={() => goToPath("/pricing")}
              >
                View Plans
              </button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="home__hero-visual">
            <img
              src={heroPromoImage}
              alt="Kenyan businesses connecting with customers via mobile"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="home__solutions">
        <div className="home__container">
          <div className="home__section-header">
            <h2>Our Communication Solutions</h2>
            <p>
              Powerful, scalable tools designed to help Kenyan businesses
              connect, transact, and grow.
            </p>
          </div>

          <div className="home__solutions-grid">
            {homeSolutions.map((product) => (
              <div
                key={product.id}
                className="home__solution-card"
                onClick={() =>
                  goToPath(product.path || getSolutionPath(product.slug))
                }
              >
                <div className="home__solution-icon">
                  {getIcon(product.title)}
                </div>
                <div className="home__solution-body">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <span className="home__solution-cta">
                    {product.cta} <FaArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="home__partners">
        <div className="home__container">
          <div className="home__section-header">
            <h2>Partners We&rsquo;ve Worked With</h2>
            <p>Trusted by organizations and media across Kenya.</p>
          </div>

          <div className="home__partners-block">
            <h3 className="home__partners-cat-title">
              Institutional, Educational &amp; Corporate Partners
            </h3>
            <p className="home__partners-cat-sub">
              Collaborating with schools, universities, saccos, credit
              providers, government bodies, NGOs, and corporate organizations.
            </p>
            <PartnerCarousel partnersList={institutionalPartners} />
          </div>

          <div className="home__partners-block">
            <h3 className="home__partners-cat-title">
              Media &amp; Other Partners
            </h3>
            <p className="home__partners-cat-sub">
              Partnering with leading radio stations, TV channels, media groups,
              and betting platforms nationwide.
            </p>
            <PartnerCarousel partnersList={mediaPartners} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home__cta">
        <div className="home__container">
          <div className="home__cta-inner">
            <h2>Ready to Transform Your Business Communication?</h2>
            <p>
              Get started with our enterprise-grade mobile solutions today.
            </p>
            <button
              className="home__btn home__btn--cta"
              onClick={() => goToPath("/contact")}
            >
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ── Icon Mapper ──
const getIcon = (title) => {
  const map = {
    "Bulk SMS": <FaEnvelope />,
    "Bulk Data": <FaDatabase />,
    "USSD Services": <FaCode />,
    "Shortcodes": <FaHashtag />,
    "Mobile Payments": <FaCreditCard />,
    "Voice Solutions": <FaPhoneVolume />,
    "Airtime Solutions": <FaMoneyBillWave />,
    "Developer-Friendly APIs": <FaCode />,
  };
  return map[title] || <FaEnvelope />;
};

// ── Partner Carousel ──
const PartnerCarousel = ({ partnersList }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    const speed = 0.5;
    let raf;

    const animate = () => {
      pos -= speed;
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="home__carousel-wrap">
      <div className="home__carousel-track" ref={trackRef}>
        {partnersList.concat(partnersList).map((p, i) => (
          <div key={`${p.id}-${i}`} className="home__partner-item">
            <img src={p.logo} alt={p.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
