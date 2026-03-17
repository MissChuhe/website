const pageSeo = {
  '/': {
    title: 'Taifa Mobile Kenya | Bulk SMS, USSD, Shortcodes & Mobile Communication Solutions',
    description:
      "Taifa Mobile is Kenya's leading provider of Bulk SMS, Bulk Data, USSD, Shortcodes, Mobile Payments, Voice and Airtime solutions. Reliable APIs, instant delivery, secure infrastructure and 24/7 support to power your business communication.",
  },
  '/about': {
    title: 'About Us - Taifa Mobile',
    description:
      'Learn about Taifa Mobile, a leading Kenyan technology company specializing in secure and reliable mobile communication solutions.',
  },
  '/about-us': {
    title: 'About Us - Taifa Mobile',
    description:
      'Learn about Taifa Mobile, a leading Kenyan technology company specializing in secure and reliable mobile communication solutions.',
  },
  '/sms': {
    title: 'Reliable Bulk SMS Messaging for Businesses in Kenya | Taifa Mobile',
    description:
      'Deliver instant, high-uptime SMS alerts, notifications, and marketing messages across all major Kenyan mobile networks.',
  },
  '/solutions/sms': {
    title: 'Reliable Bulk SMS Messaging for Businesses in Kenya | Taifa Mobile',
    description:
      'Deliver instant, high-uptime SMS alerts, notifications, and marketing messages across all major Kenyan mobile networks.',
  },
  '/data': {
    title: 'Bulk Data Bundles Kenya | Reward & Promotional Data - Taifa Mobile',
    description:
      'Send instant data bundles to customers and staff in Kenya. Reward, loyalty, and promotional data programs on Safaricom with flexible volumes and API-driven fulfillment for businesses.',
  },
  '/solutions/data': {
    title: 'Bulk Data - Taifa Mobile',
    description:
      'Bulk data services for loyalty, rewards, and promotional campaigns with automated delivery and reporting.',
  },
  '/ussd': {
    title: 'USSD Services Kenya | Dedicated & Shared USSD Codes - Taifa Mobile',
    description:
      'Build secure USSD applications for payments, self-service, surveys, and onboarding in Kenya. Shared and dedicated USSD codes on Safaricom and Airtel with scalable API integration.',
  },
  '/solutions/ussd': {
    title: 'USSD Services - Taifa Mobile',
    description:
      'USSD application development and hosting with shared and dedicated codes for banking, payments, surveys, and customer self-service.',
  },
  '/shortcode': {
    title: 'Short Code Services Kenya | Shared & Dedicated Shortcodes - Taifa Mobile',
    description:
      'Get shared, dedicated, and premium short codes in Kenya with Taifa Mobile. Two-way SMS, subscriber campaigns, and feedback collection backed by 24/7 support on Safaricom and Airtel networks.',
  },
  '/solutions/shortcode': {
    title: 'Short Code Services - Taifa Mobile',
    description:
      'Short code services including shared, dedicated, CMS, and premium short codes for campaigns and two-way engagement.',
  },
  '/payment': {
    title: 'Mobile Payment Integration Kenya | M-PESA & Airtel Money API - Taifa Mobile',
    description:
      'Integrate M-PESA STK Push, Paybill, Till, and Airtel Money for collections and bulk disbursements in Kenya. Secure, real-time payment APIs for e-commerce, payroll, SACCOs, and enterprise.',
  },
  '/solutions/payment': {
    title: 'Mobile Payments - Taifa Mobile',
    description:
      'Mobile payment integration for M-PESA and Airtel Money including collections, disbursements, and real-time notifications.',
  },
  '/voice': {
    title: 'Voice Solutions Kenya | Robo Calls & IVR Systems - Taifa Mobile',
    description:
      'Deploy automated Robo Calls and IVR systems in Kenya with Taifa Mobile. Broadcast announcements, route customer support, and automate call flows on Safaricom networks for businesses of all sizes.',
  },
  '/solutions/voice': {
    title: 'Voice Solutions - Taifa Mobile',
    description:
      'Business voice solutions including robo-calls and IVR for announcements, support, and self-service experiences.',
  },
  '/call-back': {
    title: 'CRBT & SKIZA Services Kenya | Branded Ring-Back Tones - Taifa Mobile',
    description:
      'Turn caller waiting time into branded marketing with CRBT and SKIZA ring-back tones in Kenya. Custom jingles, voice-overs, and campaign audio on Safaricom networks for businesses and artists.',
  },
  '/solutions/crbt': {
    title: 'Call Back Tones - Taifa Mobile',
    description:
      'Caller Ring Back Tone (CRBT/SKIZA) services including standard catalog tones and custom branded productions.',
  },
  '/airtime': {
    title: 'Bulk Airtime Kenya | Retail & Bulk Airtime Distribution - Taifa Mobile',
    description:
      'Distribute airtime instantly across Safaricom, Airtel, and Telkom in Kenya. Retail commissions for resellers and bulk discounts for businesses. API-ready for automated airtime rewards and operations.',
  },
  '/solutions/airtime': {
    title: 'Airtime Services - Taifa Mobile',
    description:
      'Retail and bulk airtime services for businesses and resellers with instant delivery, commissions, discounts, and API support.',
  },
  '/contact': {
    title: 'Contact Us - Taifa Mobile',
    description: 'Get in touch with Taifa Mobile for inquiries, onboarding, and technical support.',
  },
  '/contact-us': {
    title: 'Contact Us - Taifa Mobile',
    description: 'Get in touch with Taifa Mobile for inquiries, onboarding, and technical support.',
  },
  '/pricing': {
    title: 'Pricing Plans - Taifa Mobile',
    description: 'Explore competitive pricing plans for Taifa Mobile communication and payment solutions.',
  },
  '/career': {
    title: 'Careers - Taifa Mobile',
    description: 'Explore open roles and career opportunities at Taifa Mobile.',
  },
  '/careers': {
    title: 'Careers - Taifa Mobile',
    description: 'Explore open roles and career opportunities at Taifa Mobile.',
  },
  '/login': {
    title: 'Sign In - Taifa Mobile',
    description: 'Sign in to access Taifa Mobile services and account tools.',
  },
  '/sign-in': {
    title: 'Sign In - Taifa Mobile',
    description: 'Sign in to access Taifa Mobile services and account tools.',
  },
};

const defaultSeo = {
  title: 'Taifa Mobile - Mobile Communication Solutions',
  description:
    'Taifa Mobile is a leading Kenyan technology company delivering reliable, innovative mobile communication solutions for businesses of all sizes. We provide secure, scalable services including Bulk SMS, Bulk Data, USSD, Shortcodes, Mobile Payments, Voice, and Airtime powered by strong partnerships with all major Kenyan mobile networks.',
};

const withPhoneInDescription = (description = '') => {
  const phone = '0707 55 66 33';
  if (!description) return `Call ${phone}.`;
  if (description.includes(phone)) return description;
  return `${description} Call ${phone}.`;
};

const normalizePath = (pathname = '/') => {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

export const getSeoForPath = (pathname = '/') => {
  const normalized = normalizePath(pathname);
  const seo = pageSeo[normalized] || defaultSeo;
  return {
    ...seo,
    description: withPhoneInDescription(seo.description),
  };
};

export const applyClientSeo = (pathname = '/') => {
  if (typeof document === 'undefined') return;

  const normalized = normalizePath(pathname);
  const { title, description } = getSeoForPath(pathname);
  const canonicalUrl = `https://taifamobile.co.ke${normalized === '/' ? '' : normalized}`;

  document.title = title;

  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', description);

  let ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (!ogTitleTag) {
    ogTitleTag = document.createElement('meta');
    ogTitleTag.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleTag);
  }
  ogTitleTag.setAttribute('content', title);

  let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (!ogDescriptionTag) {
    ogDescriptionTag = document.createElement('meta');
    ogDescriptionTag.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescriptionTag);
  }
  ogDescriptionTag.setAttribute('content', description);

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', canonicalUrl);
};
