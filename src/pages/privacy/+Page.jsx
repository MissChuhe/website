import React from 'react';
import PolicyPage from '../../components/PolicyPage';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Privacy Policy - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Read Taifa Mobile’s privacy policy and learn how we collect, use, and protect your data.',
  },
];

const sections = [
  {
    heading: 'Information We Collect',
    paragraphs: [
      'We collect the information you choose to share with Taifa Mobile, including contact details submitted through our website forms, business inquiry information, and communications you send to our team.',
      'We may also collect limited technical information such as browser type, device information, referral pages, and general usage analytics to help us improve website performance and service delivery.',
    ],
  },
  {
    heading: 'How We Use Information',
    paragraphs: [
      'We use personal information to respond to inquiries, provide quotations, support onboarding, deliver requested services, and maintain business communication with customers and prospects.',
    ],
    items: [
      'Responding to contact requests and sales inquiries',
      'Providing product information, onboarding support, and service updates',
      'Improving website experience, reliability, and security',
      'Meeting legal, regulatory, and compliance requirements',
    ],
  },
  {
    heading: 'Data Sharing',
    paragraphs: [
      'Taifa Mobile does not sell personal information. We may share information with trusted service providers, network partners, or professional advisers when required to deliver services, maintain operations, or comply with applicable law.',
      'Where form submissions are sent to our team inboxes, internal copies may be routed to authorized Taifa Mobile staff for faster follow-up and support.',
    ],
  },
  {
    heading: 'Retention and Your Rights',
    paragraphs: [
      'We retain information only for as long as reasonably necessary for business, support, compliance, or legal purposes. You may contact us to request access, correction, or deletion of personal information where applicable under law.',
      'For privacy-related requests, email info@taifamobile.co.ke and include enough detail for us to identify and process your request responsibly.',
    ],
  },
];

const PrivacyPage = () => (
  <PolicyPage
    eyebrow="Privacy"
    title="Privacy Policy"
    intro="This policy explains how Taifa Mobile handles personal information collected through our website, communication channels, and related service interactions."
    lastUpdated="March 23, 2026"
    sections={sections}
  />
);

export default PrivacyPage;
