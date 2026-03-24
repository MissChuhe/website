// src/ssr-server.mjs

import express from 'express';
import { renderPage } from 'vike/server';
import { google } from 'googleapis';
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

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
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

// ────────────────────────────────────────────────
// Static files (FIXED 🔥)
// ────────────────────────────────────────────────
const clientPath = path.resolve(__dirname, '../dist/client');

// Serve assets explicitly (CRITICAL FIX)
app.use('/assets', express.static(path.join(clientPath, 'assets')));

// Serve other static files (robots.txt, etc.)
app.use(express.static(clientPath));

console.log('Serving static from:', clientPath);

// ────────────────────────────────────────────────
// Middleware
// ────────────────────────────────────────────────
app.use(express.json());

// ────────────────────────────────────────────────
// Contact API
// ────────────────────────────────────────────────
const buildRawMessage = ({ to, from, replyTo, subject, text }) => {
  const headers = [
    `To: ${to}`,
    `From: ${from}`,
    replyTo ? `Reply-To: ${replyTo}` : null,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 7bit',
    `Subject: ${subject}`,
  ].filter(Boolean);

  const message = `${headers.join('\n')}\n\n${text}`;

  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

app.post('/api/contact', async (req, res) => {
  const {
    name = '',
    email = '',
    phone = '',
    subject = '',
    message = '',
    captchaAnswer = '',
    captchaA = '',
    captchaB = '',
    captchaOp = ''
  } = req.body || {};

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return res.status(400).json({
      message: 'Please fill in all required fields.',
    });
  }

  const parsedA = Number(captchaA);
  const parsedB = Number(captchaB);
  const parsedAnswer = Number(String(captchaAnswer).trim());
  const safeOp = captchaOp === '-' ? '-' : '+';

  if (!Number.isFinite(parsedA) || !Number.isFinite(parsedB) || !Number.isFinite(parsedAnswer)) {
    return res.status(400).json({
      message: 'Invalid human check.',
    });
  }

  const expectedAnswer = safeOp === '+' ? parsedA + parsedB : parsedA - parsedB;

  if (parsedAnswer !== expectedAnswer) {
    return res.status(400).json({
      message: 'Human check failed.',
    });
  }

  const gmailClientId = process.env.GMAIL_CLIENT_ID;
  const gmailClientSecret = process.env.GMAIL_CLIENT_SECRET;
  const gmailRefreshToken = process.env.GMAIL_REFRESH_TOKEN;
  const gmailRedirectUri =
    process.env.GMAIL_REDIRECT_URI || 'https://developers.google.com/oauthplayground';

  const toEmail = process.env.CONTACT_TO_EMAIL || 'info.taifam@gmail.com';
  const fromEmail =
    process.env.GMAIL_SENDER ||
    process.env.GMAIL_USER ||
    process.env.SMTP_USER ||
    'info.taifam@gmail.com';

  if (!gmailClientId || !gmailClientSecret || !gmailRefreshToken) {
    return res.status(500).json({
      message: 'Email service not configured.',
    });
  }

  const emailText = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}
`;

  try {
    const oauth2Client = new google.auth.OAuth2(
      gmailClientId,
      gmailClientSecret,
      gmailRedirectUri
    );

    oauth2Client.setCredentials({ refresh_token: gmailRefreshToken });

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const rawMessage = buildRawMessage({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `Website Contact: ${subject}`,
      text: emailText,
    });

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: rawMessage },
    });

    return res.status(200).json({
      message: 'Message sent successfully.',
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      message: 'Failed to send message.',
    });
  }
});

// ────────────────────────────────────────────────
// SSR handler (SAFE 🔥)
// ────────────────────────────────────────────────
app.get('*', async (req, res) => {
  // 🚫 NEVER SSR assets
  if (req.originalUrl.startsWith('/assets')) {
    return res.status(404).end();
  }

  try {
    const pageContextInit = { urlOriginal: req.originalUrl };
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
