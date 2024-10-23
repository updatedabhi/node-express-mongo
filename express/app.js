const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server", app: "Natours" });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint');
})

app.listen(9883, () => {
  console.log(`http://localhost:9883`);
});
