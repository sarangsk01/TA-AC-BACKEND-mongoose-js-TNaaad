var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sample'),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  };

var app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('server is listening on port 3k');
});