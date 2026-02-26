import React from 'react';

/**
 * Reusable component to inject JSON-LD Schema Markup into the page head.
 * 
 * @param {Object} props
 * @param {Object} props.schema - The schema object to serialize (e.g. Organization, WebSite, Service)
 */
const SchemaMarkup = ({ schema }) => {
    if (!schema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />
    );
};

export default SchemaMarkup;

export const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taifa Mobile",
    "url": "https://taifamobile.co.ke",
    "logo": "https://taifamobile.co.ke/assets/logo.png", // Ensure this path is correct or updated
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254-700-000-000", // Update with actual generic contact if known, or placeholders
        "contactType": "customer service",
        "areaServed": "KE"
    },
    "sameAs": [
        "https://www.facebook.com/TaifaMobile",
        "https://twitter.com/TaifaMobile",
        "https://www.linkedin.com/company/taifa-mobile"
    ]
});

export const generateServiceSchema = ({ name, description, url }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
        "@type": "Organization",
        "name": "Taifa Mobile"
    },
    "description": description,
    "url": url
});

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
});
