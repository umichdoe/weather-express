// server.js
// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  // server.js
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('views/index.html', {root: __dirname});
  console.log(__dirname);
})

app.get('/api/albums', function(req, res) {
  res.json(albums);
})

var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

//connects to local host or production port
app.listen(process.env.PORT || 3500, function() {
  console.log('Listening on port 3500');
})
