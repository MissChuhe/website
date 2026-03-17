import express from 'express';
import { renderPage } from 'vike/server';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadDotEnv = () => {
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
};

loadDotEnv();

const app = express();
const port = 3000;

app.use(express.static('build/client'));
app.use(express.json());

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
      message: 'Please fill in all required fields before sending your message.',
    });
  }

  const parsedA = Number(captchaA);
  const parsedB = Number(captchaB);
  const parsedAnswer = Number(String(captchaAnswer).trim());
  const safeOp = captchaOp === '-' ? '-' : '+';

  if (!Number.isFinite(parsedA) || !Number.isFinite(parsedB) || !Number.isFinite(parsedAnswer)) {
    return res.status(400).json({
      message: 'Please complete the human check before sending your message.',
    });
  }

  const expectedAnswer = safeOp === '+' ? parsedA + parsedB : parsedA - parsedB;
  if (parsedAnswer !== expectedAnswer) {
    return res.status(400).json({
      message: 'Human check failed. Please try again.',
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
      message:
        'Contact form is not configured yet. Please set Gmail API environment variables.',
    });
  }

  const safeMessage = String(message);
  const emailText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    safeMessage,
  ].join('\n');

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
      message: 'Message sent successfully. Our team will contact you shortly.',
    });
  } catch (error) {
    const errorData = error?.response?.data || error;
    console.error('Contact API error:', errorData);

    const isDev = process.env.NODE_ENV !== 'production';
    const rawMessage =
      error?.response?.data?.error_description ||
      error?.response?.data?.error ||
      error?.message;
    const safeMessage = isDev && rawMessage
      ? `Contact API error: ${rawMessage}`
      : 'Unable to send message right now. Please try again in a few minutes.';

    return res.status(500).json({
      message: safeMessage,
    });
  }
});

app.use(async (req, res, next) => {
  try {
    const pageContextInit = { urlOriginal: req.originalUrl };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();
    res.status(httpResponse.statusCode).send(httpResponse.body);
  } catch (err) {
    // Log the error to the server console
    console.error('SSR Error:', err);
    // Show a generic error to the client
    res.status(500).send('<h1>SSR Error</h1><pre>' + (err && err.stack ? err.stack : String(err)) + '</pre>');
  }
});

app.listen(port, () => {
  console.log(`Vike SSR server running at http://localhost:${port}`);
});
