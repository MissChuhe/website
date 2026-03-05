import { Links, Scripts } from "react-router";
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import { NavProvider } from './context/NavContext';
import appStyles from './styles/app.scss?url';
import logo from './assets/logo.png';

// Page title mapping
const pageTitles = {
  '/': 'Taifa Mobile - Mobile Communication Solutions',
  '/about': 'About Us - Taifa Mobile',
  '/solutions/sms': 'Bulk SMS - Taifa Mobile',
  '/solutions/data': 'Bulk Data - Taifa Mobile',
  '/solutions/ussd': 'USSD Services - Taifa Mobile',
  '/solutions/shortcode': 'Short Code - Taifa Mobile',
  '/solutions/payment': 'Mobile Payments - Taifa Mobile',
  '/solutions/voice': 'Voice Solutions - Taifa Mobile',
  '/solutions/crbt': 'Call Back Tones - Taifa Mobile',
  '/solutions/airtime': 'Airtime - Taifa Mobile',
  '/pricing': 'Pricing Plans - Taifa Mobile',
  '/contact': 'Contact Us - Taifa Mobile',
  '/career': 'Careers - Taifa Mobile',
  '/docs': 'API Documentation - Taifa Mobile',
  '/partners': 'Our Partners - Taifa Mobile',
  '/privacy': 'Privacy Policy - Taifa Mobile',
  '/terms': 'Terms of Service - Taifa Mobile',
  '/cookies': 'Cookie Policy - Taifa Mobile',
  '/security': 'Security - Taifa Mobile',
};

// Meta descriptions
const metaDescriptions = {
  '/': 'Taifa Mobile offers Bulk SMS, USSD, Shortcodes, Mobile Payments, and Data solutions for businesses in Kenya.',
  '/about': 'Learn about Taifa Mobile, a leading Kenyan technology company specializing in mobile communication solutions.',
  '/solutions/sms': 'Bulk SMS services in Kenya for promotional and transactional messaging with 99.9% delivery rates, custom sender IDs, and API integration.',
  '/solutions/data': 'Bulk data services for loyalty, rewards, and promotional campaigns with automated delivery across Safaricom networks.',
  '/solutions/ussd': 'USSD application development and hosting, offering shared and dedicated codes for banking, payments, surveys, and customer self-service.',
  '/solutions/shortcode': 'Short code services including shared, dedicated, CMS, and premium short codes for marketing campaigns and two-way customer engagement.',
  '/solutions/payment': 'Mobile payment integrations for M-PESA and Airtel Money, covering C2B collections, B2C disbursements, and real-time payment notifications.',
  '/solutions/voice': 'Business voice solutions including robo calls and IVR for announcements, customer support, and self-service experiences.',
  '/solutions/crbt': 'Caller Ring Back Tone (CRBT/SKIZA) services with standard catalogue tones and custom SKIZA Business production for branded audio.',
  '/solutions/airtime': 'Retail and bulk airtime services for businesses and resellers, with instant delivery, commissions, discounts, and API integration.',
  '/pricing': 'Check our competitive pricing plans for mobile communication solutions.',
  '/contact': 'Get in touch with Taifa Mobile. Contact us for inquiries and support.',
  '/career': 'Join our team at Taifa Mobile. Explore career opportunities.',
  '/docs': 'Access our comprehensive API documentation for developers.',
  '/partners': 'Discover the institutions, media houses, and technology partners that work with Taifa Mobile.',
  '/privacy': 'Read Taifa Mobile’s privacy policy and learn how we collect, use, and protect your data.',
  '/terms': 'Review Taifa Mobile’s terms of service for using our platforms and solutions.',
  '/cookies': 'Learn how Taifa Mobile uses cookies and similar technologies on our websites.',
  '/security': 'See how Taifa Mobile secures its platforms, APIs, and customer data with best-in-class practices.',
};

const getDynamicTitle = (pathname) => {
  if (pageTitles[pathname]) {
    return pageTitles[pathname];
  }
  for (const [route, title] of Object.entries(pageTitles)) {
    if (pathname.startsWith(route) && route !== '/') {
      return title;
    }
  }
  return 'Taifa Mobile - Leading Mobile Communication Solutions Provider';
};

const getDynamicDescription = (pathname) => {
  if (metaDescriptions[pathname]) {
    return metaDescriptions[pathname];
  }
  return 'Taifa Mobile is a leading Kenyan mobile communication solutions provider.';
};

export function links() {
  return [{ rel: 'stylesheet', href: appStyles }];
}

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getDynamicTitle(location.pathname);
    document.title = pageTitle;

    const description = getDynamicDescription(location.pathname);
    let metaTag = document.querySelector('meta[name="description"]');
    
    if (metaTag) {
      metaTag.setAttribute('content', description);
    } else {
      metaTag = document.createElement('meta');
      metaTag.name = 'description';
      metaTag.content = description;
      document.head.appendChild(metaTag);
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Taifa Mobile</title>
        <link rel="icon" type="image/png" href={logo} />
        <meta property="og:image" content={logo} />
        <Links />
      </head>
      <body>
        <ScrollToTop />
        <NavProvider>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
          <WhatsAppWidget />
        </NavProvider>
        <Scripts />
      </body>
    </html>
  );
}
