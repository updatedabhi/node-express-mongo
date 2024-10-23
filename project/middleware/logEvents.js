const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

console.log(__dirname);

const logEvents = async (message, fileName) => {
  const dateTime = `${format(new Date(), "yyMMdd\thh:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  const logDirPath = path.join(__dirname, "logs");
  if (!fs.existsSync(logDirPath)) {
    await fsPromises.mkdir(logDirPath); 
  }

  await fsPromises.appendFile(path.join(logDirPath, fileName), logItem, 'utf8');
};

const logger = (req, res, next)=> {
  const message = `${req.url}\t${req.headers.origin || 'No Origin'}\t${req.method}`;
  logEvents(message, 'server.log');
  next();
}

module.exports = {logEvents, logger};