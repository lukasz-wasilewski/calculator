const express = require('express');
const { calc } = require('./service');
const api = express.Router();

api.post('/operation', (req, res) => {
  const { a, b, operation } = req.body;
  const result = calc(a, b, operation);
  res.send({ result });
});

module.exports = api;
