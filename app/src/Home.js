
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
export default function Home() {
    const [name, setName] = useState()
    const [count, setCount] =useState()
    const [date, setDate] =useState()
    const [msg, setMsg] =useState()
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeDate= (e) => {
        setDate(e.target.value)
    }
    const changeCount= (e) => {
        setCount(e.target.value)
    }
    const changeMsg= (e) => {
        setMsg(e.target.value)
    }
    const handelForm = (e) => {
        e.preventDefault()
        let data={
            name:name,
            date:date,
            count:count,
            msg:msg
        }
        const token = sessionStorage.getItem("Token")
        console.log(token)
        const header = {
            Accept: "application/json",
            Authorization: sessionStorage.getItem("Token")
        }
        axios.post("http://localhost:3000/user/home",data,{headers:header})
        .then(res=>{
            if(res.data.success){
                toast.success("Name added") 
            }
            else{
                toast.error("Error encountered")
            }
        })
        .catch(err=>{
            toast.error("Server error")
        })

    }
    return (
        <>
            <div class="banner">
                <h1>Count,It does matter</h1>
            </div>
            <div className="home-form-container">
            <h2>Add Your New Member</h2>
                <form onSubmit={handelForm}>
                    <div className="home-form-group">
                        <label htmlFor="home-name">Name:</label>
                        <input type="text" id="home-name" name="name" value={name} onChange={changeName} required/>
                    </div>
                    <div className="home-form-group">
                        <label htmlFor="home-date">Date:</label>
                        <input type="date" id="home-date" name="date" value={date} onChange={changeDate} required/>
                    </div>
                    <div className="home-form-group">
                        <label htmlFor="home-count">Count:</label>
                        <input type="number" id="home-count" name="count" value={count} onChange={changeCount} required/>
                    </div>
                    <div className="home-form-group">
                        <label htmlFor="home-msg">Message:</label>
                        <textarea id="home-msg" name="msg" value={msg} onChange={changeMsg} required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
            <ToastContainer/>
        </>
    )
}