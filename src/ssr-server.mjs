// src/ssr-server.mjs
import express from 'express';
import { renderPage } from 'vike/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ────────────────────────────────────────────────
// Load .env file
// ────────────────────────────────────────────────
function loadDotEnv() {
  const envPath = path.resolve(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) return;
    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  });
}
loadDotEnv();

// ────────────────────────────────────────────────
// Express setup
// ────────────────────────────────────────────────
const app = express();
const port = 3000;
const CONTACT_SUBMIT_ENDPOINT = 'https://contact.taifamobile.co.ke/submit';
const DEFAULT_CONTACT_DEPARTMENT = 'general';
const TURNSTILE_BYPASS_LOCAL =
  String(process.env.TURNSTILE_BYPASS_LOCAL || 'false').toLowerCase() === 'true';

// ────────────────────────────────────────────────
// Static files
// ────────────────────────────────────────────────
const clientPath = path.resolve(__dirname, '../dist/client');

// Serve assets explicitly
app.use('/assets', express.static(path.join(clientPath, 'assets')));
// Serve all other static files (CSS, JS, images, etc.)
app.use(express.static(clientPath));

console.log('Serving static from:', clientPath);

// ────────────────────────────────────────────────
// Middleware
// ────────────────────────────────────────────────
app.use(express.json());

// ────────────────────────────────────────────────
// Contact API
// ────────────────────────────────────────────────
const sanitizeDepartment = (value) => {
  const normalized = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return normalized || DEFAULT_CONTACT_DEPARTMENT;
};

app.post('/api/contact', async (req, res) => {
  const {
    name = '',
    email = '',
    phone = '',
    subject = '',
    message = '',
    department = DEFAULT_CONTACT_DEPARTMENT,
    turnstileToken = ''
  } = req.body || {};

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const requestHost = String(req.hostname || req.headers.host || '')
    .split(':')[0]
    .trim()
    .toLowerCase();

  const isLocalRequest = ['localhost', '127.0.0.1', '::1'].includes(requestHost);
  const shouldBypassTurnstile = isLocalRequest && TURNSTILE_BYPASS_LOCAL;

  const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  const safeTurnstileToken = String(turnstileToken).trim();

  if (!shouldBypassTurnstile && !turnstileSecret) {
    return res.status(500).json({ message: 'Captcha is not configured yet.' });
  }
  if (!shouldBypassTurnstile && !safeTurnstileToken) {
    return res.status(400).json({ message: 'Please complete the captcha.' });
  }

  // Turnstile verification
  if (!shouldBypassTurnstile) {
    try {
      const verificationBody = new URLSearchParams({
        secret: turnstileSecret,
        response: safeTurnstileToken,
      });

      const remoteIp = String(req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || '')
        .split(',')[0]
        .trim();

      if (remoteIp) verificationBody.set('remoteip', remoteIp);

      const verificationResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: verificationBody.toString(),
        }
      );

      const verificationResult = await verificationResponse.json();
      if (!verificationResponse.ok || !verificationResult.success) {
        return res.status(400).json({ message: 'Captcha verification failed.' });
      }
    } catch (error) {
      console.error('Turnstile error:', error);
      return res.status(500).json({ message: 'Unable to verify captcha.' });
    }
  }

  const safeDepartment = sanitizeDepartment(department);
  const endpointUrl = `${CONTACT_SUBMIT_ENDPOINT}?department=${encodeURIComponent(safeDepartment)}`;

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    String(message),
  ].join('\n');

  try {
    const endpointResponse = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: String(email).trim(),
        subject: String(subject).trim(),
        body: emailBody,
      }),
    });

    const contentType = endpointResponse.headers.get('content-type') || '';
    let responsePayload = contentType.includes('application/json')
      ? await endpointResponse.json()
      : { message: await endpointResponse.text() };

    if (!endpointResponse.ok) {
      return res.status(endpointResponse.status).json({
        message: responsePayload?.message || 'Unable to send message.',
      });
    }

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ message: 'Unable to send message right now.' });
  }
});

// ────────────────────────────────────────────────
// Vike SSR Handler (Compatible with Express 5)
// ────────────────────────────────────────────────
app.use(async (req, res, next) => {
  // Skip API routes and assets
  if (req.path.startsWith('/api/') || req.originalUrl.startsWith('/assets')) {
    return next();
  }

  try {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      requestHost: String(req.hostname || req.headers.host || '').split(':')[0].toLowerCase()
    };

    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
      return res.status(404).send('Not found');
    }

    res.status(httpResponse.statusCode).send(httpResponse.body);
  } catch (err) {
    console.error('SSR error:', req.originalUrl, err);
    res.status(500).send('<h1>Server Error</h1><pre>' + (err.stack || String(err)) + '</pre>');
  }
});

// ────────────────────────────────────────────────
// Global error handler
// ────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Express error:', req.originalUrl, err);
  res.status(500).send('<h1>Server Error</h1>');
});

// ────────────────────────────────────────────────
// Start server
// ────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
