const dotenv = require('dotenv');
const app = require('./app.js');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

/*
const testTour = new Tour({
  name: 'The Forest Hiker',
  rating: 4.9,
  price: 983,
});

testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log("Error⚠️: ", err));

*/

const port = process.env.PORT || 2100;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
