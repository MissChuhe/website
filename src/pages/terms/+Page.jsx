import React from 'react';
import PolicyPage from '../../components/PolicyPage';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Terms of Service - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Review Taifa Mobile’s terms of service for using our platforms and solutions.',
  },
];

const sections = [
  {
    heading: 'Use of the Website',
    paragraphs: [
      'By accessing this website, you agree to use it lawfully and in a way that does not harm Taifa Mobile, our customers, or other users. Website content is provided for general business information and service inquiry purposes.',
    ],
  },
  {
    heading: 'Service Discussions and Quotations',
    paragraphs: [
      'Information published on the website does not by itself create a binding service agreement. Pricing, availability, onboarding requirements, network approvals, and implementation timelines may vary depending on the product and customer use case.',
      'Any final service relationship is governed by the applicable proposal, contract, onboarding documents, and operational policies agreed between Taifa Mobile and the customer.',
    ],
  },
  {
    heading: 'Acceptable Use',
    paragraphs: [
      'Customers and prospects must not use Taifa Mobile services or website channels for unlawful, abusive, misleading, fraudulent, infringing, or harmful activity.',
    ],
    items: [
      'Sending spam, deceptive communications, or unauthorized marketing',
      'Violating network, regulatory, or data protection requirements',
      'Attempting to interfere with platform stability or website security',
      'Misrepresenting identity, business authority, or usage intentions',
    ],
  },
  {
    heading: 'Liability and Changes',
    paragraphs: [
      'Taifa Mobile works to keep website information accurate and services reliable, but we do not guarantee uninterrupted availability of the website at all times. To the fullest extent permitted by law, Taifa Mobile is not liable for indirect or consequential losses arising from website use alone.',
      'We may update these terms from time to time. Continued use of the website after updates take effect constitutes acceptance of the revised terms.',
    ],
  },
];

const TermsPage = () => (
  <PolicyPage
    eyebrow="Terms"
    title="Terms of Service"
    intro="These terms govern access to the Taifa Mobile website and provide the general framework for how users engage with our online content and service inquiry channels."
    lastUpdated="March 23, 2026"
    sections={sections}
  />
);

export default TermsPage;
