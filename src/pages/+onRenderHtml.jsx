import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import ScrollToTop from '../components/ScrollToTop';
import { NavProvider } from '../context/NavContext';
import { getSeoForPath } from '../utils/seo';
import taifaLogo from '../assets/taifa-logo.png';

export async function onRenderHtml(pageContext) {
  const { Page, urlPathname } = pageContext;
  const seo = getSeoForPath(urlPathname);
  const canonicalUrl = `https://taifamobile.co.ke${urlPathname === '/' ? '' : urlPathname}`;

  const appHtml = renderToString(
    <MemoryRouter initialEntries={[urlPathname]}>
      <ScrollToTop />
      <NavProvider>
        <Navbar />
        <main>
          <Page />
        </main>
        <Footer />
        <WhatsAppWidget />
      </NavProvider>
    </MemoryRouter>
  );

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${seo.title}</title>
        <meta name="description" content="${seo.description}" />
        <meta property="og:title" content="${seo.title}" />
        <meta property="og:description" content="${seo.description}" />
        <meta property="og:image" content="${taifaLogo}" />
        <meta name="twitter:image" content="${taifaLogo}" />
        <link rel="canonical" href="${canonicalUrl}" />
        <link rel="icon" type="image/png" href="${taifaLogo}" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
  };
}
