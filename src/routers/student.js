const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// 2: we need to register our router 

// CREATE A NEW STUDENT-Data using promises
// app.post("/students" , (req,res) =>{
//     const user = new Student(req.body);
//     console.log(user);
//     user.save().then(()=>{
//         res.send("Hello From the student Side .");
//         // res.status(msg);
//     }).catch((err)=>{
//         res.send(err);
//         // res.status(msg);
//     })
   
// })

router.post("/students" , async (req,res) =>{
    try{
        const user = new Student(req.body);

    const createUser = await user.save();
    res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }

})

// GET REQUEST ...GETTING DATA OF STUDENTS...
router.get("/students" , async (req,res) =>{
    try{
        const getData = await Student.find();
        res.status(200).send(getData);
    }catch(e){
        res.status(400).send(e);
    }
})

//GET STUDENTS INDIVISUAL DATA USING ID 
router.get("/students/:name" , async (req,res)=>{
     try{
        const name = req.params.name;
        const studentData = await Student.findById(name);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }

        res.send(studentData);
     }catch(e){
        res.status(400).send(e);
     }
})


// PUT OR PATCH IN DATABASE

router.patch("/students/:id" , async (req,res) =>{
    try{
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id , req.body ,{
            new : true
        });
        console.log(updateData);
        res.status(200).send(updateData);

    }catch(e){
        res.status(404).send(e);
    }
})


// DELETE REQUEST IN RESTFUL API.....

router.delete("/students/:id" , async(req,res) =>{
    try{
        const _id = req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id , req.body);
        res.status(200).send(deleteData);
    }catch(e){
        res.status(404).send(e);
    }
})









module.exports = router;