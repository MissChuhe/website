import express from 'express';
import { renderPage } from 'vike/server';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

app.use(express.static('build/client'));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', phone = '', subject = '', message = '' } = req.body || {};

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return res.status(400).json({
      message: 'Please fill in all required fields before sending your message.',
    });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@taifamobile.co.ke';
  const fromEmail = process.env.SMTP_FROM || smtpUser || 'no-reply@taifamobile.co.ke';

  if (!smtpHost || !smtpUser || !smtpPass) {
    return res.status(500).json({
      message: 'Contact form is not configured yet. Please set SMTP environment variables.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safeMessage = String(message);

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Website Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        safeMessage,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({
      message: 'Message sent successfully. Our team will contact you shortly.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      message: 'Unable to send message right now. Please try again in a few minutes.',
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
