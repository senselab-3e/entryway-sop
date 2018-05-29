var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable'); 

// viewed at http://localhost:8080
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
});

app.get('/listuploads', function(req, res) {
    res.json([
        {
            name:'Aaaa-01.jpg',
            xdepth: 9,
            ydepth: 12.00
        }, {
            name: 'Aaaa-02.jpg',
            xdepth: -13.0,
            ydepth: -24.00
        }] );
});

app.use(express.static('assets'))
app.listen(8080);