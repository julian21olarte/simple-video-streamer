const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = process.env.port | 3000;

const indexRouter = require('./routes/index.route');
const videoRouter  = require('./routes/video.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/views')));

app.use('/', indexRouter);
app.use('/video', videoRouter);

const server = app.listen(port, () => {
    console.log("Server listening on " + port);
});

module.exports = app;
