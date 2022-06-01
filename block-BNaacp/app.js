var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');

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

app.post('/users', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
    res.json(user);
  });
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err, user);
    res.json({ users: users });
  });
});

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id),
    (err, deletedUser) => {
      res.send(`${deletedUser.name} was deleted`);
    };
});

app.listen(3000, () => {
  console.log('server is listening on port 3k');
});
