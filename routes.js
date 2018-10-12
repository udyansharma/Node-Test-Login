var express=require('express');
var app=express();
var User = require('./models/User.js');

app.get('/',(req,res)=>{
    res.render('pages/index.ejs');
})
app.post('/verify',(req,res)=>{
    console.log("In verify "+JSON.stringify(req.params));
    var body=JSON.stringify(req.body);
    console.log("Getting body in verify"+JSON.stringify(req.body));
    User.find({user:body.username,pass:body.password},function(err,User){
        if(err){
            res.render('/login.ejs',{message:"Invalid Credentials"});
        }
       /*  else
            res.render('/welcome.ejs',{
            
            }) */
    });
})
app.get('/login',(req,res)=>{
    
    res.render('pages/login.ejs');
})
app.get('/signup',(req,res)=>{
    res.render('pages/signup.ejs');
})
/*app.post('/api/photo', function(req,res){
    var newItem= new ValidateSchema();
    newItem.img.data=fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType='image/png';
    newItem.save();
});*/
module.exports= app