var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var serverName = '192.168.43.9/';
var portNumber = 7000;
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url='mongodb://192.168.43.9:27017/details';


app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/home', function(req, res) {
  console.log("coming");
    res.sendFile(__dirname + "/public/views/index.html")
});

app.post("/feedback", function(req, res){
var t=req.body;
MongoClient.connect(url,function(err,db){
 var collection=db.collection('details');
collection.insert(t, function(err,res){
  if(err){
    console.log("error storing");
  }
  else{
    console.log("saved into database");
  }
})

db.close();

})
});
app.listen(portNumber, function() {
    console.log('server listening at ' + portNumber);
});
