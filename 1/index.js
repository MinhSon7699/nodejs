var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

var port = 3003;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function(req, res){ //request -> req, response -> res
    res.render('index', {
        name: 'Sơn'
    });
});

app.use('/users', userRoute);

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});

//"start": "nodemon index.js", //thêm vào để k bị reset liên tục
//npm install --save-dev nodemon để k bị rs liên tục