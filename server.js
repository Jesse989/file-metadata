var express = require("express");
var multer = require("multer");
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express();

app.use(express.static(__dirname + '/public'));


app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  res.send(JSON.stringify({'filesize': req.file.size}));
  
})


var port = (process.env.PORT || 3000);
app.listen(port, function(){
    console.log('listening on: '+port+'...');
})