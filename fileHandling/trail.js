const http = require('http');
const fs = require('fs');

const mydata = fs.readFileSync('./data/data.json', 'utf-8');
const data = JSON.parse(mydata);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/') {
    const usersHtml = data.map(user => {
      return `
        <div>
          <h2>${user.name}</h2>
          <h3>Age: ${user.age}</h3>
          <h3>Emoji: ${user.emoji}</h3>
        </div>
      `;
    }).join(''); // Join the array of HTML strings into a single string

    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(
      `
      <html>
        <body>
          ${usersHtml}
        </body>
      </html>
      `
    );
  }
});

server.listen(9000, () => {
  console.log(`Server running at http://localhost:9000`);
});
