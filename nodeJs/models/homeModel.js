
const mongoose=require("mongoose")
const homeSchema=new mongoose.Schema({
    name:{type:String,default:null},
    date:{type:String,default:null},
    count:{type:Number,default:1},
    msg:{type:String,default:null},
    createdAt:{type:Date,default:Date.now()},
    
})

module.exports=new mongoose.model("home",homeSchema)