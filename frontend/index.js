let express = require('express');
let app = express();


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3002, function(){
    console.log('frontend started');
 });
