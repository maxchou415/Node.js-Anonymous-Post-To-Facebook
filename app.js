var http = require('http')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var FB = require('fb')
var compression = require('compression');
var graph = require('fbgraph');
var json2html = require('node-json2html');


var app = express();
var server = http.createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compression());
server.listen(8080, '0.0.0.0', function() {
  console.log('Ready on http://localhost:8000');
}); //Run Server On port 8080


//Root Page
app.get('/', function(req, res) {
  res.render('index.ejs', {
    title: '{your facebook page name}' // Insert Your Facebook Page Name
  });

});

//Post Page
app.route('/post')
  .post(function(req, res, next) {
    res.render('post.ejs', {
      title: 'Post Success!',
      id: res.id,
      pagename: '{your page name}' // Insert Your Facebook Page Name
    });
    var message = req.body.anony.text;
    FB.setAccessToken(''); //Insert Your Acccess Token
    FB.api('{your facebook page id }/feed', 'post', { //Insert Your Facebook Page Id
      message: message
    }, function(res) {
      if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
      }
      console.log('Post Id: ' + res.id);

    });


  })
//Error Page
app.use(function(req, res) {
  res.send("404: Page not Found", 404);
  res.send("500: Service Unavailable", 500);
});
