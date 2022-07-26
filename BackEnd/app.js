const express=require('express');
 var app= new express;

app.get('/',(req,res)=>{

    res.send("this is get");


});

 app.listen(3000, function(){
    console.log('listening to port 3000');
});