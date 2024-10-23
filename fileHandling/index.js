const fs = require('fs');

// Blocking, synchronous way
const textIn = fs.readFileSync('./text/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is about Abhishek: ${textIn}.\nCreated on ${Date.now().toLocaleString()}`
fs.writeFileSync('./text/output.txt', textOut)
console.log('File written successfully');

// Non-blocking, asynchronous way
/* 
fs.readFile('./text/input.txt', 'utf-8', (err, textIn) => {
  if (err) {
    err.message
  } 
  console.log(textIn);
})
*/

fs.readFile('./text/stadrt.txt', 'utf8', (err, data1) => {
  if (err) {
    return console.log('error🥵')
  }
  fs.readFile(`./text/${data1}.txt`, 'utf8', (err, data2) => {
    if (err) {
      console.log(err)
    }
    console.log(data2)
    fs.readFile('./text/append.txt', 'utf-8', (err, data3) => {
      if (err) {
        console.log(err)
      }
      console.log(data3)
      fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf8', err => err?console.log(err):'sb badhiya');
    })
  })
})