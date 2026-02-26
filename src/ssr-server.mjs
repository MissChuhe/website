import express from 'express';
import { renderPage } from 'vike/server';

const app = express();
const port = 3000;

app.use(express.static('build/client'));

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
