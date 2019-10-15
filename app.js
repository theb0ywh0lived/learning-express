var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressvalidator = require('express-validator');
var app = express();

//  var logger = function(req,res,next){
//      console.log('logging.....')
//      next();

//  }
//  app.use(logger);

//view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));




//body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//set static path
app.use(express.static(path.join(__dirname, 'public')))

var users = [
    {
        first_name: "Jeff",
        last_name:"Doe",
        email : "john@g.com"
    }, 
    {
        first_name: "Bob",
        last_name:"Smith",
        email : "bob@g.com"
    },
    {
        first_name: "Samuel",
        last_name:"Jill",
        email : "sj@g.com"
    },
    {
        first_name: "Kevin",
        last_name : "Trove",
        email:"kevin@g.com"
    }
]



app.get('/', function (req, res) {
    

    res.render('index',{
        title:'Customers',
        users:users
    });
 
});

app.post('/users/add', function(req,res){
     var newUser =  {
         first_name: req.body.first_name,
         last_name :req.body.last_name,
         email: req.body.email
     }

     console.log(newUser);

});


app.listen(3000, function () {
    console.log("Server has been started on port 3000...");
})

