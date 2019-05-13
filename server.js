var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('app.use /');
    next();
});

app.use('/store', function(req, res, next){
    console.log('app.use /store');
    next();
});

app.get('/', function(req, res) {
    res.send('/main');
});

app.get('/store', function(req, res) {
    res.send('/store');
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('404');
});