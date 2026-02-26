const pageSeo = {
  '/': {
    title: 'Home - Taifa Mobile',
    description:
      'Taifa Mobile offers Bulk SMS, USSD, Shortcodes, Mobile Payments, Voice, Airtime and Data solutions for businesses in Kenya.',
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
    title: 'Bulk SMS - Taifa Mobile',
    description:
      'Bulk SMS services in Kenya for promotional and transactional messaging with high delivery rates, custom sender IDs, and API integration.',
  },
  '/solutions/sms': {
    title: 'Bulk SMS - Taifa Mobile',
    description:
      'Bulk SMS services in Kenya for promotional and transactional messaging with high delivery rates, custom sender IDs, and API integration.',
  },
  '/data': {
    title: 'Bulk Data - Taifa Mobile',
    description:
      'Bulk data services for loyalty, rewards, and promotional campaigns with automated delivery and reporting.',
  },
  '/solutions/data': {
    title: 'Bulk Data - Taifa Mobile',
    description:
      'Bulk data services for loyalty, rewards, and promotional campaigns with automated delivery and reporting.',
  },
  '/ussd': {
    title: 'USSD Services - Taifa Mobile',
    description:
      'USSD application development and hosting with shared and dedicated codes for banking, payments, surveys, and customer self-service.',
  },
  '/solutions/ussd': {
    title: 'USSD Services - Taifa Mobile',
    description:
      'USSD application development and hosting with shared and dedicated codes for banking, payments, surveys, and customer self-service.',
  },
  '/shortcode': {
    title: 'Short Code Services - Taifa Mobile',
    description:
      'Short code services including shared, dedicated, CMS, and premium short codes for campaigns and two-way engagement.',
  },
  '/solutions/shortcode': {
    title: 'Short Code Services - Taifa Mobile',
    description:
      'Short code services including shared, dedicated, CMS, and premium short codes for campaigns and two-way engagement.',
  },
  '/payment': {
    title: 'Mobile Payments - Taifa Mobile',
    description:
      'Mobile payment integration for M-PESA and Airtel Money including collections, disbursements, and real-time notifications.',
  },
  '/solutions/payment': {
    title: 'Mobile Payments - Taifa Mobile',
    description:
      'Mobile payment integration for M-PESA and Airtel Money including collections, disbursements, and real-time notifications.',
  },
  '/voice': {
    title: 'Voice Solutions - Taifa Mobile',
    description:
      'Business voice solutions including robo-calls and IVR for announcements, support, and self-service experiences.',
  },
  '/solutions/voice': {
    title: 'Voice Solutions - Taifa Mobile',
    description:
      'Business voice solutions including robo-calls and IVR for announcements, support, and self-service experiences.',
  },
  '/call-back': {
    title: 'Call Back Tones - Taifa Mobile',
    description:
      'Caller Ring Back Tone (CRBT/SKIZA) services including standard catalog tones and custom branded productions.',
  },
  '/solutions/crbt': {
    title: 'Call Back Tones - Taifa Mobile',
    description:
      'Caller Ring Back Tone (CRBT/SKIZA) services including standard catalog tones and custom branded productions.',
  },
  '/airtime': {
    title: 'Airtime Services - Taifa Mobile',
    description:
      'Retail and bulk airtime services for businesses and resellers with instant delivery, commissions, discounts, and API support.',
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
    'Taifa Mobile offers Bulk SMS, USSD, Shortcodes, Mobile Payments, Voice, Airtime and Data solutions for businesses in Kenya.',
};

const normalizePath = (pathname = '/') => {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

export const getSeoForPath = (pathname = '/') => {
  const normalized = normalizePath(pathname);
  return pageSeo[normalized] || defaultSeo;
};

export const applyClientSeo = (pathname = '/') => {
  if (typeof document === 'undefined') return;

  const { title, description } = getSeoForPath(pathname);

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
};