const express = require("express");
const fs = require("fs");
const path = require('path');
//
const adminRoute = require("./route/adminRoute");
const userRoute = require("./route/userRoute");
const app = express();


//include public directory
app.use(express.static(path.join(__dirname, 'public')));
//to enable send data from html form
app.use(express.json());
//to use form
app.use(express.urlencoded({ extended: true }));


//use routes
app.use("/admin",adminRoute);
app.use("/api/v1",userRoute);
//
//run server
const port = 8000;
app.listen(port,()=>{
    console.log("server start at port ${port}")
});