var express = require('express');
var morgan = require('morgan');
var path = require('path');

var crypto= require('crypto');



var config={
    user:'gunu77',
    database:'gunu77',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:'db-gunu77-64332'
};

var app = express();
app.use(morgan('combined'));






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'gs.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'main.js'));
});

app.get('/coderider.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'coderider.js'));
});

function hash(input, salt) {
    var hashed=crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return['pbkdf2','10000',salt, hashed.toString('hex')].join('$');
    
}

app.get('/hash/:input', function (req, res) {
   var hashedString= hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
});







app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'about.html'));
});



app.get('/meetthefamily.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'meetthefamily.html'));
});

app.get('/creatures.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'creatures.html'));
});

app.get('/exorcism1.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'exorcism1.html'));
});



app.get('/exorcism2.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'exorcism2.html'));
});

app.get('/episodes.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'episodes.html'));
});

app.get('/ui/log.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'log.html'));
});

app.get('/ui/signup.html', function (req, res) { res.sendFile(path.join(__dirname, 'ui', 'signup.html')); });

app.get('/ui/style.css', function (req, res) { res.sendFile(path.join(__dirname, 'ui', 'style.css')); });


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

