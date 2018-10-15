const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('port', process.env.PORT || 3000);

module.exports = app;
