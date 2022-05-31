var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sample'),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  };

var app = express();
