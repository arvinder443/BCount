import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handelForm = (e) => {
        e.preventDefault()
        let data={
            name:name,
            email:email,
            password:password
        }
        axios.post("http://localhost:3000/user/register",data)
        .then(res=>{
            if(res.data.success){
                toast.success("You are registered suucesfully!")
            }
            else{
                toast.error("Error registring user")
            }
        })

    }
    return (
        <>
            <div className="register-container">
                <div className="register-card">
                    <h2 className="register-title">Register</h2>
                    <form onSubmit={handelForm}>
                        <div className="register-form-group">
                            <label className="register-label" htmlFor="name">Name</label>
                            <input className="register-input" type="text" id="name" value={name} onChange={changeName} placeholder="Enter your name" required />
                        </div>
                        <div className="register-form-group">
                            <label className="register-label" htmlFor="email">Email</label>
                            <input className="register-input" type="email" id="email" value={email} onChange={changeEmail} placeholder="Enter your email" required />
                        </div>
                        <div className="register-form-group">
                            <label className="register-label" htmlFor="password">Password</label>
                            <input className="register-input" type="password" id="password" value={password} onChange={changePassword} placeholder="Enter your password" required />
                        </div>
                        <button className="register-button" type="submit">Register</button>
                    </form>
                    <p className="login-text">Already have an account? <Link to="/login" className="login-link">Login</Link></p>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}