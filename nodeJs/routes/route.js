
const Route=require("express").Router()
const userController=require("../controllers/userController")
const homeController=require("../controllers/homeController")

Route.post("/register",userController.register)
Route.post("/login",userController.login)


Route.use(require("../config/middleWare"))
Route.post("/home",homeController.home)





module.exports=Route