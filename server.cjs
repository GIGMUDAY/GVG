const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const distDir = path.join(__dirname, '.next');
const publicDir = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

const sendResponse = (res, statusCode, body, headers = {}) => {
  res.writeHead(statusCode, headers);
  res.end(body);
};

const serveFile = async (filePath, res) => {
  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    sendResponse(res, 200, data, { 'Content-Type': contentType });
    return true;
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Error serving file:', err);
      sendResponse(res, 500, 'Internal Server Error');
      return true;
    }
    return false;
  }
};

// Ensure public assets are present in .next (helps when deploy process misses copying static files)
const syncPublicToDist = async () => {
  try {
    await fs.cp(publicDir, distDir, { recursive: true, force: false, errorOnExist: false });
  } catch (err) {
    console.error('Warning: could not sync public assets to .next:', err.message);
  }
};

syncPublicToDist();

const server = http.createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0] || '/');
  const normalizedPath = path.normalize(urlPath);
  const safePath = normalizedPath
    .replace(/^(\.\.[/\\])+/, '')
    .replace(/^[/\\]+/, ''); // strip leading slashes so we stay within distDir

  // Try .next first
  let filePath = path.join(distDir, safePath);
  if (!filePath.startsWith(distDir)) {
    sendResponse(res, 403, 'Forbidden');
    return;
  }

  let served = false;
  try {
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    served = await serveFile(filePath, res);
  } catch {
    served = false;
  }

  // Fall back to public/ if not found in .next
  if (!served) {
    const publicPath = path.join(publicDir, safePath);
    if (publicPath.startsWith(publicDir)) {
      served = await serveFile(publicPath, res);
    }
  }

  // SPA fallback
  if (!served) {
    await serveFile(path.join(distDir, 'index.html'), res);
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
