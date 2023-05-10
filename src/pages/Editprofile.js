import { useState } from "react";
import axios from "axios";
import React from 'react';

// eslint-disable-next-line
import { useNavigate,Link} from "react-router-dom";

export const Editprofile= () =>{
    var passrefd = /(?=.*[0-9])/
    var passrefC = /(?=.*[A-Z])/
    var passrefS = /(?=.*[a-z])/
    var passrefSC = /(?=.*[!@#$%^&*])/
    const user = JSON.parse(localStorage.getItem("user"));
    const [id,setid] = useState(user._id)
    const [occupation,setoccupation] = useState(user.occupation)
    const [name,setname] = useState(user.name)
    const [username,setusname] = useState(user.username)
    const [collagename,setcollagename] = useState(user.collagename)
    const [YearOfPassOut,setyear] = useState(user.YearOfPassOut)
    const [emailid,setemail] = useState(user.emailid)
    const [phonenum,setphone] = useState(user.phonenum)
    const [password,setpass] = useState('')
    const [newpassword,setcnfpass] = useState('')
    const history = useNavigate();
    async function submit(e){
        setusname(user.username);
        setid(user._id);
        setoccupation(user.occupation);
        var error = "False";
        e.preventDefault();
        if (password === "" || newpassword === "" || name === "" || collagename === "" || YearOfPassOut === "" || emailid === "" || phonenum === ""){
            alert("Enter all the details")
            error = "True"
        }else if (name.length > 25){
            alert("Username and Name should be less than 25 charactes")
            error = "True"
        }else if (!newpassword.match(passrefd)){
            alert("Password should contain atleast 1 digit")
            error = "True"
        }else if (!newpassword.match(passrefC)){
            alert("Password should contain atleasr 1 UpperCase Letter")
            error = "True"
        }else if (!newpassword.match(passrefS)){
            alert("Password should contain atleasr 1 LowerCase Letter")
            error = "True"
        }else if (!newpassword.match(passrefSC)){
            alert("Password should contain atleast 1 Special Character")
            error = "True"
        }
        if (error === "False"){
            const data = {name, username, collagename, YearOfPassOut,emailid, phonenum, password, newpassword}
            const data2 =  {occupation, name, username, collagename, YearOfPassOut,emailid, phonenum};
            try{
                await axios.put(`http://localhost:3001/Editprofile/${id}`, {
                    name, username, collagename, YearOfPassOut,emailid, phonenum, password, newpassword
                }).then(res=>{
                    if(res.data === "Sucessfull"){
                        console.log("Sucessfull")
                        localStorage.removeItem("user");
                        localStorage.setItem("user", JSON.stringify(data2))
                        alert("Sucessfully Updated")
                        window.location.href="/Profile"
                    }else{
                        alert("Wrong Details")
                    }
                })
            }catch(e){
                console.log(e);
            }    
        }
    }
    return(
        
        <div >
            <div className="Regishead">
                <p>{user.username}</p>
                <h1>Upadate Your Account</h1>
            </div>
            <form>
                <div className="Regisdata">
                    <div className="editname">
                        <input id="name" value={name} onChange={(e)=> {setname(e.target.value)}} type="text"/>
                    </div>
                    {user.occupation === "Student" && <div className="regisqua">
                        <input id="clgname" value={collagename} onChange={(e)=> {setcollagename(e.target.value)}} type="text" />
                        <input id="year" value={YearOfPassOut} onChange={(e)=> {setyear(e.target.value)}} type="text" />
                    </div>}
                    <div className="regisconta">
                        <input id="email" onChange={(e)=> {setemail(e.target.value)}} value={emailid} type="text" />
                        <input id="phone" onChange={(e)=> {setphone(e.target.value)}} value={phonenum} type="text" />
                    </div>
                    <div className="regispass">
                        <input id="pass" onChange={(e)=> {setpass(e.target.value)}} type="password" placeholder="Password"/>
                        <input id="cnfpass" name="" onChange={(e)=> {setcnfpass(e.target.value)}} type="password" placeholder="New Password"/>
                    </div>
                    <div className="regissub">
                        <input id="signup" type="submit" onClick={submit} value="Update"/>
                    </div>
                </div>
            </form>
        </div>
    );
}