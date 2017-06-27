var express = require('express');
var app = express();
var birds = require('./birds');

app.set('port', (process.env.PORT || 3000));

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

app.listen(app.get('port'), function () {
  console.log('Example app listening on port!', app.get('port'));
});
