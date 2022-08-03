
const path=require('path');

const express=require('express');
const Bookdata = require('./src/model/booklist');
const Userdata =require('./src/model/UserData');
const mongoose=require('mongoose');
const cors=require('cors');
const jwt=require('jsonwebtoken');
var bodyParser=require('body-parser');

const port = process.env.PORT || 4000;
//   username='admin';
//   password='1234';


var db=mongoose.connect('mongodb://localhost:27017/Libraryapp',function(err,res){
    if(err){console.log(err);}
    else{
        console.log('connected to'+db);
    }
});

app.use(express.static('./dist/libraryapp'))
 var app= new express();
 app.use(cors());
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/booklist',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Method: GET ,POST, PATCH,PUT,DELETE,OPTIONS")
    Bookdata.find()

                .then(function(booklist){
                    
                    res.send(booklist);
                   
              });  
});
// ADDBOOK
app.post('/api/addbook',function(req,res){
       
    console.log(req.body);
     
    var booklist = {       
        bookId : req.body.booklist.bookId,
        bookName : req.body.booklist.bookName,
        author:req.body.booklist.author,
        description : req.body.booklist.description,
        price : req.body.booklist.price,
        starRating : req.body.booklist.starRating,
       
   }       
   var booklist = new Bookdata(booklist);
   booklist.save();
   console.log(booklist);
});

//  SIGN UP

app.post('/api/signup',function(req,res){

    console.log(req.body);
    
    var userdata={
        name:req.body.userdata.name,
        username:req.body.userdata.username,
        password:req.body.userdata.password,
    }
    var userdata =new Userdata(userdata);
    userdata.save();
    console.log(userdata);

})

// LOGIN

app.post('/api/login', (req, res) => {
    let userdata = req.body
         
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userdata.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })



app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      Bookdata.findOne({"_id":id})
      .then((booklist)=>{
          res.send(booklist);
      });
  })


//   UPDATE PAGE

  app.put('/api/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    bookId= req.body.bookId,
    bookName = req.body.bookName,
    author=req.body.author,
    description = req.body.description,
    price = req.body.price,
    starRating = req.body.starRating,
    
   Bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"bookId":bookId,
                                "bookName":bookName,
                                "author":author,
                                "description":description,
                                "price":price,
                                "starRating":starRating
                                }})
   .then(function(){
       res.send();
   })
 })

// DELETE
app.delete('/api/remove/:id',(req,res)=>{
   
    id = req.params.id;
    
    Bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        windows.alert("Successfully deleted Data");
        console.log('success')
        res.send();
    })
  })

// 


 app.listen(port, function(){
    console.log('listening to port 3000');
});