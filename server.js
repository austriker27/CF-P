'use strict';

const EXPRESS = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

APP.get('*', function(request, response) {
  response.sendFile('404.html', {root: './public'});
});

APP.get('/github/*', proxyGitHub);

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
