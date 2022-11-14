const express = require("express");
const bodyparser = require("body-parser");
const Port = 4100;
const api = require("./Routes/api");
const app =express();
app.use(bodyparser.json());
app.use('/api',api);
app.get ('/',function(req,res){
  res.send("Hello This Message is from Server");
});
app.listen(Port,function(){
  console.log("Server is Running at Port Number is : "+Port);
});
