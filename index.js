const mongoose = require("mongoose");
const express = require("express");

const app = express();

const teacherRoute = require("./controller/teacherRoute");


const cors = require("cors");
const bodyParser = require("body-parser");




mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://lokesh:1234@cluster0.kutlejd.mongodb.net/trial1");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());





app.use("/teacherRoute",teacherRoute);

app.listen(4000,()=>{
    console.log("Server connected at 4000");
})


//http://localhost:4000/teacherRoute/
