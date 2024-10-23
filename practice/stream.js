const fs = require('fs');

const readable = fs.createReadStream('../text/final.txt');
readable.on('data', chunk => console.log(chunk.toString()));

