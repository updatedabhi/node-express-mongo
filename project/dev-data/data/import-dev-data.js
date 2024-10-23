const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');
const fs = require('fs');
const path = require('path');

console.log(__dirname);
dotenv.config({ path: path.join(__dirname, '..', 'config.env') });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const tour = JSON.parse(
  fs.readFileSync(path.join('./tours-simple.json'), 'utf8')
);

const importData = async () => {
  try {
    await Tour.create(tour);
    console.log('Data successfully imported');
  } catch (err) {
    console.log(err.message);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Deleted successfully');
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
