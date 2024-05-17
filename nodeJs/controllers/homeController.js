
const Home=require("../models/homeModel")

exports.home=(req,res)=>{
    Home.findOne({name:req.body.name})
    .then(homeObj=>{
        if(homeObj==null){
            let homeData=new Home()
            homeData.name=req.body.name
            homeData.date=req.body.date
            homeData.count=req.body.count
            homeData.msg=req.body.msg
            homeData.save()
            res.json({
                status:200,
                success:true,
                msg:homeData
            })
        }
        else{
            res.json({
                status:400,
                success:false,
                msg:"Name already exists"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            msg:String(err)
        })
    })
}