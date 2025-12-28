const express= require("express");
const app = express();
require('dotenv').config()


const {userRouter} = require("./Router/user");
const {courseRouter}=require("./Router/course");
const {adminRouter}=require("./Router/admin");

app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course" , courseRouter);
app.use("/api/v1/admin" , adminRouter);

const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

async function main() {
   await mongoose.connect(process.env.MONGO_URL)
   app.listen(3900);
   console.log("listening on port 3900");

}

main()

