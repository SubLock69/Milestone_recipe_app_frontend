/**
 * Sets up the server for the client
 */

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index'));

module.exports = app;