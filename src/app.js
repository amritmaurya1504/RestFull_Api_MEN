// whole crud operations using REST API 

const mongoose = require("mongoose");
require("./db/conn");
const express = require("express");
const Student = require("./models/students");
const studentRouter = require("./routers/student");


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);



app.listen(port , () =>{
    console.log(`connection is setup at ${port}`);
})