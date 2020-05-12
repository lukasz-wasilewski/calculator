const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api');

const app = express();
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3001);

app.use('/api', routes);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
