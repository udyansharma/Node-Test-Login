var express=require('express');
var app=express();
var route = require('./routes.js')
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/logindb';
    mongoose.connect(mongoDB);


//setting the engine to ejs
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',route)

app.listen(8080);
console.log('Stuff at 8080');