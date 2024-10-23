const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf8');
const dataObject = JSON.parse(data);
console.log(dataObject);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Overview</h1>');
  } else if (pathName === '/product') {
    res.end('Product');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  }
})

server.listen(4500, () => {
  console.log('Server is running on port http://localhost:4500');
});