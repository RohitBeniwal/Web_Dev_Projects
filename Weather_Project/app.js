const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const query = req.body.cityName;
    const apikey = "e852999505072bff53cbe0725e9593e1";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit+""
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
         const weatherData = JSON.parse(data)
         const desc = weatherData.weather[0].description;
         const temp = weatherData.main.temp;
         const icon =weatherData.weather[0].icon
         const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        //  console.log(temp);
        res.write("<p>The description is "+desc+"</p>")
         res.write("<h1>The temperature of "+query+" is "+temp+" degree Celcius</h1>")
         res.write("<img src="+imageURL+">")
         res.send()
        //     console.log(weatherData);

         })
        // const object = {
        //     name : "Rohit",
        //     branch: "EEE"
        // }
        // console.log(JSON.stringify(object));
    })
})


app.listen(3000,function(){
    console.log("Server is running on port 3000");
})