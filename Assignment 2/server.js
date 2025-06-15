const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const FILE_DIR = path.join(__dirname, 'files');

if (!fs.existsSync(FILE_DIR)) {
  fs.mkdirSync(FILE_DIR);
}

const sendResponse = (res, statusCode, message) => {
  res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  res.end(message);
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  const filename = query.filename;
  const filepath = path.join(FILE_DIR, filename || '');

  if (pathname === '/create') {
    if (!filename || !query.content) {
      return sendResponse(res, 400, 'Missing filename or content');
    }
    fs.writeFile(filepath, query.content, (err) => {
      if (err) return sendResponse(res, 500, 'Error creating file');
      sendResponse(res, 200, `File '${filename}' created successfully`);
    });

  } else if (pathname === '/read') {
    if (!filename) return sendResponse(res, 400, 'Missing filename');
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) return sendResponse(res, 404, 'File not found');
      sendResponse(res, 200, `Content of '${filename}':\n\n${data}`);
    });

  } else if (pathname === '/delete') {
    if (!filename) return sendResponse(res, 400, 'Missing filename');
    fs.unlink(filepath, (err) => {
      if (err) return sendResponse(res, 404, 'File not found');
      sendResponse(res, 200, `File '${filename}' deleted successfully`);
    });

  } else {
    sendResponse(res, 404, 'Available endpoints: /create, /read, /delete');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
