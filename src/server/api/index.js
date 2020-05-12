const express = require('express');
const calculator = require('./calculator');
const api = express.Router();

api.use('/calculator', calculator);

module.exports = api;
