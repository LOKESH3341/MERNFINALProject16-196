const express = require("express");
const teacherRoute = new express.Router();

const teacherSchema = require("../model/teacherSchema");

teacherRoute.post("/create-work",(req,res)=>{
    teacherSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })
});



teacherRoute.get("/",(req,res)=>{
    teacherSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


teacherRoute.route("/update-work/:id")
.get((req,res)=>{
    teacherSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    teacherSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
      (err,data)=>{
             if(err)
                 return err;
             else
                 res.json(data);
         })
 });


 teacherRoute.delete("/delete-work/:id",(req,res)=>{
    teacherSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});




module.exports = teacherRoute;

//http://localhost:4000/teacherRoute/

//http://localhost:4000/teacherRoute/update-work/654e5db9d5112c12b914f4f9

//http://localhost:4000/teacherRoute/delete-work/654e5db9d5112c12b914f4f9