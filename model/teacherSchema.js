const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    "school":{type:String},
    "phoneNo":{type:Number},
    "link":{type:String},
    "subName":{type:String},
    "teacherEmail":{type:String}   
},{
    collection: "one"
});

module.exports = mongoose.model("teacherSchema",teacherSchema);