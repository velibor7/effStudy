"use strict";var express=require("express"),bodyParser=require("body-parser"),mongoose=require("mongoose"),userRoutes=require("./routes/user"),app=express();mongoose.connect("mongodb+srv://wony:H!F7QjybjpcfMCN@effstudy-epsrv.mongodb.net/effStudy?retryWrites=true&w=majority").then(function(){console.log("SUCCESSFUL DB CONNECTION")}).catch(function(){console.log("FAILED DB CONNECTION")}),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!1})),app.use(function(e,o,s){o.setHeader("Access-Control-Allow-Origin","*"),o.setHeader("Access-Control-Allow-Headers","Origin X-Requested-With, Content-Type, Accept, Authorization"),o.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS"),s()}),app.use("/api/user",userRoutes),module.exports=app;