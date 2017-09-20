'use strict';

const EXPRESS = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

APP.get('*', function(request, response) {
  response.sendFile('404.html', {root: './public'});
});

APP.listen(PORT, function(){
  console.log(PORT);
}
);
