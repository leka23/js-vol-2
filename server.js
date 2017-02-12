
var express = require('express'); // dev webserver
var path = require('path');
var open = require('open'); // open browser
var port = 3000;
var app = express();


// Required for static files (public folder)
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(port, function(err) {
if (err){
  console.log(err);
  } else {
  open('http://localhost:' + port);
  }
});

