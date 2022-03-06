// Run this command to install express npm install express --save
// using express and starting the server
// code - https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

// ADD THESE TWO LINES
var businessLogic = require('./businessLogic');
app.use('/businessLogic', businessLogic);
module.exports = app;

