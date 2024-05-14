
const express=require("express")
const index=express()
const cors = require("cors")
index.use(cors())
require("./config/db")
index.use(express.urlencoded({'extended':true}))
index.use(express.json({ limit:'500mb'}))

const userRoute=require("./routes/route")
index.use("/user",userRoute)
index.listen(3000,()=>{
    console.log("The port number is 3000")
})