// Task1

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');

//   switch (req.url) {
//     case '/':
//       res.statusCode = 200;
//       res.end('Welcome to the new Server!');
//       break;

//     case '/about':
//       res.statusCode = 200;
//       res.end('This is a simple http Node.js server');
//       break;

//     case '/contact':
//       res.statusCode = 200;
//       res.end('Contact us at contact@newserver.com');
//       break;

//     default:
//       res.statusCode = 404;
//       res.end('Page not found!');
//   }
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`Server is running at http://127.0.0.1:${PORT}`);
// });

// Task2 (previous process has to be killed via terminal)

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/file' && query.name) {
    const filePath = path.join(__dirname, query.name);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('File not found!');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid route!');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
