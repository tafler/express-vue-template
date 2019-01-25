const express = require('express');
const app = express();
const path = require('path');
const config = require('./config');
const pageRouter = require('./routes/index');
const apiRouter = require('./routes/api/index');

app.use(require('morgan')('dev')); //logging in console
// app.use(require('cors')); //iddleware for CORS queries
app.use(express.static(path.join(__dirname + '/public/dist')));

app.use('/', pageRouter);
app.use('/api', apiRouter);

app.listen(config.port, () => {
    console.log('Server has been started on http://localhost:' + config.port);
})