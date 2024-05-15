
const Route=require("express").Router()
const userController=require("../controllers/userController")

Route.post("/register",userController.register)
Route.post("/login",userController.login)





module.exports=Route