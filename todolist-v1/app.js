//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.send("Hello");
});

app.listen("/",function(){
    console.log("Server has started on localhost 3000");
});

