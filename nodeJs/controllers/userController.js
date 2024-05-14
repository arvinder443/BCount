
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const saltround = 10

exports.register = (req, res) => {
    let validation = ""
    if (req.body.name == "") {
        validation += "Enter Your Name"
    }
    if (req.body.email == "") {
        validation += "Enter email"
    }
    if (req.body.password == "") {
        validation += "Enter password"
    }
    if (!!validation) {
        res.json({
            status: 400,
            success: false,
            msg: validation
        })
    }
    else {
        User.findOne({ email: req.body.email })
            .then(udata => {
                if (udata == null) {
                    let userobj = new User()
                    userobj.name = req.body.name
                    userobj.email = req.body.email
                    userobj.password = bcrypt.hashSync(req.body.password, saltround)
                    userobj.save()
                        .then(userdata => {
                            res.json({
                                status: 200,
                                success: true,
                                msg: "User register",

                            })
                        })


                }
                else {
                    res.json({
                        status: 409,
                        success: false,
                        msg: "User alreday exists"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 400,
                    success: false,
                    msg: String(err)
                })
            })

    }

}