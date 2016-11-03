var express = require('express');
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('port',(process.env.PORT||3000));
app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});
http.listen (app.get('port'),function() {
  console.log("listening to port number "+app.get('port'));
});
