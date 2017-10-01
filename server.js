'use strict';

const PG = require('pg');
const FS = require('fs');
const EXPRESS = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const conString = `${process.env.DATABASE_URL}`;
const client = new PG.Client(conString);
client.connect();
client.on('error', err => console.error(err));

const APP = EXPRESS();

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({extended: true}));
APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

APP.get('/about', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

APP.get('/interests', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

APP.get('/portfolio', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

APP.get('/github/*', proxyGitHub);

APP.get('*', function(request, response) {
  response.sendFile('404.html', {root: './public'});
});


APP.listen(PORT, function(){
  console.log(PORT);
}
);

function proxyGitHub(req, res, next){
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}
