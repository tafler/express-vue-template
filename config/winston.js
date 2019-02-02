var appRoot = require('app-root-path');
const winston = require('winston');

const options = {
  file: {
    filename: `${appRoot}/logs/app.log`,
    level: 'info',
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 10,
    colorize: false
  },
  errorFile: {
    filename: `${appRoot}/logs/app-warn.log`,
    level: 'warn',
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 10,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.File(options.errorFile)
  ],
  exitOnError: false
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(options.console));
}

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
}

module.exports = logger;