const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('./config/winston');

const pageRouter = require('./routes/index');
const apiRouter = require('./routes/api/index');
const config = require('./config');

app.use(cors()); //iddleware for CORS queries
app.use(morgan('combined', { stream: winston.stream }));
app.options('*', cors());
app.use(require('morgan')('dev')); //logging in console
app.use(express.static(path.join(__dirname + '/public/dist')));
app.use('/api', apiRouter);
app.use('/*', pageRouter);

app.listen(config.port, () => {
    console.log('Server has been started on http://127.0.0.1:' + config.port);
})

module.exports = app;
