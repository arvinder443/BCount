
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const saltround = 10
const jwt=require("jsonwebtoken")
const secretKey="0702"

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
                        .then(userData => {
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

exports.login = (req, res) => {
    let validation = "";
    if (req.body.email === "") {
        validation += "Enter email. ";
    }
    if (req.body.password === "") {
        validation += "Enter password. ";
    }
    if (!!validation) {
        return res.status(400).json({
            status: 400,
            success: false,
            msg: validation.trim()
        });
    } else {
        User.findOne({ email: req.body.email })
            .then(userData => {
                if (!userData) {
                    return res.status(400).json({
                        status: 400,
                        success: false,
                        msg: "User does not exist"
                    });
                } else {
                    bcrypt.compare(req.body.password, userData.password)
                        .then(passwordMatch => {
                            if (!passwordMatch) {
                                return res.status(400).json({
                                    status: 400,
                                    success: false,
                                    msg: "Invalid password"
                                });
                            } else {
                                const payload = {
                                    name: userData.name,
                                    email: userData.email
                                };
                                const token = jwt.sign(payload, secretKey, {
                                    expiresIn: '11h' 
                                });
                                return res.status(200).json({
                                    status: 200,
                                    success: true,
                                    msg: "Login Successful",
                                    data: userData,
                                    token: token
                                });
                            }
                        })
                        .catch(err => {
                            console.error("Error comparing passwords:", err);
                            return res.status(500).json({
                                status: 500,
                                success: false,
                                msg: "Internal server error"
                            });
                        });
                }
            })
            .catch(err => {
                console.error("Error finding user:", err);
                return res.status(500).json({
                    status: 500,
                    success: false,
                    msg: "Internal server error"
                });
            });
    }
};
