const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require('../Model/user');
const db = 'mongodb+srv://RAGHAVA:RAGHAVA@cluster0.4qbpgja.mongodb.net/?retryWrites=true&w=majority'
router.get('/',(req,res)=>{
  res.send("This is from Api Routes")
});

mongoose.connect(db,err =>{
  if(err) {
    console.log("Error occurred while connecting to Mongodb:"+err);
  }
  else{
    console.log("Connection Established Successfully....");
  }
});
router.post('/signup',(req,res)=>{
  let userData = req.body;
  let user =new User(userData);
  user.save((error,registeredUser)=>{
    if(error){
    console.log("Error occoured while storing Data in db :" +error);
    }
    else{
      res.status(200).send(registeredUser)
    }
  });
});
router.post('/login',(req,res)=>{
  let userData = req.body;
  User.findone({username:userData.username},
    (error,user)=>{
      if(error){
        console.log("Error:"+error);
      }
      else{
        if(!user){
          res.status(401).send("Invalid User Name");
        }
        else if(user.password!==userData.password){
          res.status(401).send("Invalid Password");

        }
        else{
          res.status(200).send(User);
        }
      }
    })
})
module.exports = router;
