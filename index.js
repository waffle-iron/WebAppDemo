const express = require('express');
const app = express();
var birds = require('./birds');

app.route('/')
  .get(function (req, res) {
    res.send('Hello World');
});

app.get('/secret', function (req, res) {
  console.log('Accessing the secret section ...');
  res.send(req.params);
});

app.use('/birds', birds);

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
  .delete(function (req, res) {
        res.send('Delete the book')
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
