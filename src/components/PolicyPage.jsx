import React from 'react';
import '../styles/PolicyPage.scss';

const PolicyPage = ({ eyebrow, title, intro, lastUpdated, sections }) => {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container">
          <span className="policy-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="policy-meta">Last updated: {lastUpdated}</div>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          {sections.map((section) => (
            <article className="policy-card" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items?.length ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
