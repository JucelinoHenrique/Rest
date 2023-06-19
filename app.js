const express = require('express');
const app = express();

const rotaProdutos = require('./produtos');

app.use('/produtos', rotaProdutos)

module.exports = app;