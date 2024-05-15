
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function LOgin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handelForm = (e) => {
        e.preventDefault()
        let data={
            email:email,
            password:password
        }
        axios.post("http://localhost:3000/user/login",data)
        .then(res=>{
            if(res.data.success){
                toast.success("Login suucesfully!")
                sessionStorage.setItem("Token",res.data.token)
                console.log("Token",res.data.token);
            }
            else{
                toast.error("Error in login")
            }
        })
        .catch(err=>{
            toast.error("User does not exist ")
        })

    }
    return (
        <>
            <div className="register-container">
                <div className="register-card">
                    <h2 className="register-title">Login</h2>
                    <form onSubmit={handelForm}>
                        <div className="register-form-group">
                            <label className="register-label" htmlFor="email">Email</label>
                            <input className="register-input" type="email" id="email" value={email} onChange={changeEmail} placeholder="Enter your email" required />
                        </div>
                        <div className="register-form-group">
                            <label className="register-label" htmlFor="password">Password</label>
                            <input className="register-input" type="password" id="password" value={password} onChange={changePassword} placeholder="Enter your password" required />
                        </div>
                        <button className="register-button" type="submit">Login</button>
                    </form>
                    <p className="login-text">Or <Link to="/" className="login-link">Register</Link></p>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}