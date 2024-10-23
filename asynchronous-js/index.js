const superagent = require('superagent');
const fs = require('fs');
const { resolve } = require('path');
const { reject } = require('superagent/lib/request-base');

/*
fs.readFile('../text/dog.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) {
        console.log(err.message);
      }
      fs.appendFile('../text/dog-img.txt', `${res.body.message}\n`, (err) => {
        if (err) {
          console.log(err.message);
        }
        console.log('Kam ho gya')
      });
    }); 
  });
*/

/*
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject('File not found⚠️');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Something went wrong!');
      resolve('Success');
    });
  });
};

readFilePro(`../text/dog.txt`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('../text/dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Kaam ho gya hai');
  })
  .catch((err) => console.log(err.message));

*/

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject('File not found⚠️');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Something went wrong!');
      resolve('Success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro('../text/dog.txt');
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await readFilePro('../text/dog-img.txt', res.body.message);
    console.log('kaam ho gya');
  } catch (err) {
    console.log(err.message);
  }
};

getDogPic();
