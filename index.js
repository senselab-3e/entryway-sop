const SocketServer = require('ws').Server;
var express = require('express');
var app = express();

var path = require('path');
var fs = require('fs');
var formidable = require('formidable');
var shuffle = require('shuffle-array');

var connectedUsers = [];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/fileupload', function(req, res) {
    var form = new formidable.IncomingForm();
    res.sendFile(path.join(__dirname + '/index.html'));
    
      form.parse(req);

      form.on('fileBegin', function (name, file){
          file.path = __dirname + '/assets/uploads/' + file.name;
      });
  
      form.on('file', function (name, file){
          console.log('Uploaded ' + file.name);
      });
  
      res.sendFile(__dirname + '/index.html');
      wss.broadcast('A new file has been uploaded by another user!')
});

function getMeRandom() {
    var ran = Math.floor(Math.random() * Math.floor(50));
    return Math.random() < 0.5 ? -1 * ran : ran;
}

app.get('/listuploads', function(req, res) {

    fs.readdir(__dirname + '/assets/uploads/', function(err, items) {
        console.log(items);
        shuffle(items);
        var rarray = items.slice(0, 3);
        var response = [];
        for (var i=0; i<rarray.length; i++) {
            response.push({
                name: rarray[i],
                xdepth: getMeRandom(),
                ydepth: getMeRandom()
            });
        }
        res.json(response);
    });
});

app.use(express.static('assets'))

console.log("Server Listening on port http://localhost:8080.")

var server = app.listen(8080);
const wss = new SocketServer({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        connectedUsers.push(message);
    });
});

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);client.send(data);
    });
  };