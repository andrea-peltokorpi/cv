import puppeteer from 'puppeteer';
import chokidar from 'chokidar';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3456;
const OUTPUT = path.join(__dirname, 'cv-andrea-peltokorpi.pdf');

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
};

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'cv.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT);

async function print() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: OUTPUT,
    format: 'A4',
    printBackground: true,
  });
  await browser.close();
  console.log(`PDF updated: ${OUTPUT}`);
}

if (process.argv.includes('--once')) {
  print()
    .then(() => server.close())
    .catch((e) => { console.error('PDF error:', e.message); process.exit(1); });
} else {
  chokidar.watch(['cv.html', 'cv.css', 'cv-data.js'], { ignoreInitial: false }).on('all', async () => {
    try {
      await print();
    } catch (e) {
      console.error('PDF error:', e.message);
    }
  });
  console.log('Watching for changes...');
}
