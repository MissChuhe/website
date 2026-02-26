import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import ScrollToTop from '../components/ScrollToTop';
import { NavProvider } from '../context/NavContext';
import { applyClientSeo } from '../utils/seo';
import '../styles/app.scss';

let root;

function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    applyClientSeo(location.pathname);
  }, [location.pathname]);

  return null;
}

export async function onRenderClient(pageContext) {
  const { Page } = pageContext;
  const container = document.getElementById('root');

  if (!container) {
    throw new Error('Root container #root not found');
  }

  const page = (
    <BrowserRouter>
      <RouteSeo />
      <ScrollToTop />
      <NavProvider>
        <Navbar />
        <main>
          <Page />
        </main>
        <Footer />
        <WhatsAppWidget />
      </NavProvider>
    </BrowserRouter>
  );

  if (!root) {
    root = createRoot(container);
  }

  root.render(page);
}