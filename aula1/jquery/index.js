var http = require('http'),
    express = require('express');

var app = express();
app.use(express.static("jquery"));

http.createServer(app).listen(4200, function(){
    console.log('Start server for front-end ' + this.address().port);
})    