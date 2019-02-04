var appRoot = require('app-root-path');
const winston = require('winston');

const CustomLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red',
  },
}

winston.addColors(CustomLevels.colors)

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
    level: CustomLevels.levels,
    handleExceptions: true,
    json: false,
    colorize: true,
    timestamp: true
  }
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.errorFile)
  ],
  exitOnError: false
});

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  logger.add(new winston.transports.Console(options.console));
}
if (process.env.NODE_ENV !== 'test') {
  logger.add(new winston.transports.File(options.file));
}

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
}

module.exports = logger;