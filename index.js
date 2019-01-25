const express = require('express');
const app = express();
const path = require('path');
const config = require('./config');
const cors = require('cors');
const pageRouter = require('./routes/index');
const apiRouter = require('./routes/api/index');

app.use(cors()); //iddleware for CORS queries
app.options('*', cors());
app.use(require('morgan')('dev')); //logging in console
app.use(express.static(path.join(__dirname + '/public/dist')));
app.use('/', pageRouter);
app.use('/api', apiRouter);

app.listen(config.port, () => {
    console.log('Server has been started on http://localhost:' + config.port);
})