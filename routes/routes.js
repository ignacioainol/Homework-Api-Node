const express = require('express');
const app = express();

app.use('/v1/users', require('./users'));
app.use('/posts', require('./posts'));
app.use('/comments', require('./comments'));
app.use('/albums', require('./albums'));
app.use('/photos', require('./photos'));
app.use('/todos', require('./todos'));

module.exports = app;