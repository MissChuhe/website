import React from 'react';
import PolicyPage from '../../components/PolicyPage';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Cookie Policy - Taifa Mobile' },
  {
    name: 'description',
    content:
      'Learn how Taifa Mobile uses cookies and similar technologies on our websites.',
  },
];

const sections = [
  {
    heading: 'What Cookies Are',
    paragraphs: [
      'Cookies are small text files placed on your device when you visit a website. They help websites remember activity, improve user experience, and support analytics or security functions.',
    ],
  },
  {
    heading: 'How Taifa Mobile Uses Cookies',
    paragraphs: [
      'We may use cookies or similar technologies to keep the website functioning properly, understand how visitors interact with key pages, and improve usability, performance, and security over time.',
    ],
    items: [
      'Remembering basic website preferences or navigation state',
      'Measuring page visits and engagement trends',
      'Supporting service reliability, diagnostics, and fraud prevention',
      'Improving content structure and contact journey performance',
    ],
  },
  {
    heading: 'Third-Party Services',
    paragraphs: [
      'Some website features may rely on third-party tools such as maps, analytics, embedded media, or performance monitoring services. These providers may set their own cookies or process technical information according to their own policies.',
    ],
  },
  {
    heading: 'Managing Cookies',
    paragraphs: [
      'Most browsers allow you to manage, block, or delete cookies through browser settings. If you disable cookies, some parts of the website may not function as intended.',
      'By continuing to use the website, you acknowledge that reasonable technical cookies may be used for functionality, analytics, and security purposes.',
    ],
  },
];

const CookiesPage = () => (
  <PolicyPage
    eyebrow="Cookies"
    title="Cookie Policy"
    intro="This page explains how Taifa Mobile uses cookies and related technologies to support site functionality, analytics, and service reliability."
    lastUpdated="March 23, 2026"
    sections={sections}
  />
);

export default CookiesPage;
