const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    res.send("Thanks for posting");
});

app.listen(3000,function(){
    console.log("server Started at port 3000");
});