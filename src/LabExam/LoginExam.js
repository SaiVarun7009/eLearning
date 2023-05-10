// import React from 'react'

// const LoginExam = () => {
//   return (
//     <div>LoginExam</div>
//   )
// }

// export default LoginExam



import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginExam = () =>{
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const history = useNavigate()
    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:3001/Login", {
                username, password
            })
            .then(res=>{
                if (res.data === "notexist"){
                    alert("incorect details")
                }else{
                    localStorage.setItem("user",JSON.stringify(res.data))
                    alert("Login Sucessfull")
                    window.location.href="/"
                }
            })
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="Login">
            <div className="Loginhead">
                <h1>Have an Account!</h1>
            </div>
            <div className="Logindata">
                <form>
                    <div className="loginusname">
                    <input placeholder="Username" type="text" onChange={(e)=>{setusername(e.target.value)}} id="loginusname"></input>
                    </div>
                    <div className="loginpassword">
                    <input placeholder="Password" type="password" onChange={(e)=>{setpassword(e.target.value)}} id="loginpass"></input>
                    </div>
                    <div className="loginsubmit">
                    <button id="signin" onClick={submit}>SignIn</button>
                    </div>
                </form>
           </div>
        </div>
    );
}
export default LoginExam