import React from 'react';
import PolicyPage from '../../components/PolicyPage';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Security - Taifa Mobile' },
  {
    name: 'description',
    content:
      'See how Taifa Mobile secures its platforms, APIs, and customer data with best-in-class practices.',
  },
];

const sections = [
  {
    heading: 'Security Approach',
    paragraphs: [
      'Taifa Mobile takes a practical, layered approach to protecting customer information, operational systems, APIs, and communication workflows. Security is built into service design, access control, monitoring, and issue response processes.',
    ],
  },
  {
    heading: 'Core Safeguards',
    items: [
      'Role-based access control for internal operational systems',
      'Controlled handling of customer data and inquiry submissions',
      'Monitoring and logging to support reliability and incident review',
      'Use of trusted providers and infrastructure partners where appropriate',
      'Regular updates, maintenance, and operational checks on key systems',
    ],
  },
  {
    heading: 'Customer Responsibilities',
    paragraphs: [
      'Customers also play an important role in security. We recommend using strong passwords, protecting account credentials, limiting internal access to authorized staff, and reporting suspicious activity promptly.',
    ],
  },
  {
    heading: 'Reporting Security Concerns',
    paragraphs: [
      'If you believe you have identified a security issue related to Taifa Mobile systems or communications, contact our team as soon as possible at info@taifamobile.co.ke with clear reproduction details and relevant timestamps.',
      'We review credible reports in good faith and work to triage, investigate, and resolve confirmed issues responsibly.',
    ],
  },
];

const SecurityPage = () => (
  <PolicyPage
    eyebrow="Security"
    title="Security"
    intro="This page outlines the security principles and operational controls Taifa Mobile uses to protect services, customer interactions, and platform integrity."
    lastUpdated="March 23, 2026"
    sections={sections}
  />
);

export default SecurityPage;
