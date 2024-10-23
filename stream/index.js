const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  /*
  const readable = fs.createReadStream("../text/input.txt", "utf-8");
  readable.on("data", (chunk) => res.write(chunk));
  
  readable.on("end", () => {
    res.end();
  });

  readable.on("error", (err) => {
    res.statusCode(500)
    console.log('File not found');
    console.log(err);
  });

  */

  const readable = fs.createReadStream("../text/inpuut.txt");
  // readable.on("data", (data) => console.log(data.toString()));

  readable.on("error", (err) => {
    if (err) {
      res.statusCode = 404;
      res.end("Invalid file name");
    }
  });

  readable.pipe(res);
});

server.listen(5500, () => {
  console.log(`http://localhost:5500`);
});
