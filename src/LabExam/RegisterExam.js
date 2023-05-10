import { useState } from "react";
import axios from "axios";
// eslint-disable-next-line
import { useNavigate,Link} from "react-router-dom";

export const RegisterExam= () =>{
    var passrefd = /(?=.*[0-9])/
    var passrefC = /(?=.*[A-Z])/
    var passrefS = /(?=.*[a-z])/
    var passrefSC = /(?=.*[!@#$%^&*])/
    const [name,setname] = useState('')
    const [username,setaadhar] = useState('')
    const [freqStartLocation,setsrc] = useState('')
    const [freqDestLocation,setdst] = useState('')
    const [emailid,setemail] = useState('')
    const [phonenum,setphone] = useState('')
    const [password,setpass] = useState('')
    const [cnfpassword,setcnfpass] = useState('')
    const history = useNavigate();
    async function submit(e){
        var error = "False";
        e.preventDefault();
        if (name === "" || username === "" || emailid === "" || phonenum === "" || password === "" || cnfpassword === ""){
            alert("Enter all the details")
            error = "True"
        }else if (name.length > 25 || username.length > 25){
            alert("Username and Name should be less than 25 charactes")
            error = "True"
        }else if (password !== cnfpassword){
            alert("Incorrect password")
            error = "True"
        }else if (!username[0].match(passrefC)){
            alert("Usrname should start with Capital Letter")
            error = "True"
        }else if (!password.match(passrefd)){
            alert("Password should contain atleast 1 digit")
            error = "True"
        }else if (!password.match(passrefC)){
            alert("Password should contain atleasr 1 UpperCase Letter")
            error = "True"
        }else if (!password.match(passrefS)){
            alert("Password should contain atleasr 1 LowerCase Letter")
            error = "True"
        }else if (!password.match(passrefSC)){
            alert("Password should contain atleast 1 Special Character")
            error = "True"
        }
        if (error === "False"){
            // try{
            //     await axios.post("http://localhost:3001/Register", {
            //         name, aadharNumber, freqStartLocation, freqDestLoction,emailid, phonenum, password, cnfpassword
            //     })
            //     .then(res=>{
            //         if (res.data === "notexist"){
            //             alert("sucessfully stored data")
            //             history("/")
            //         }else if (res.data === "exist"){
            //             alert("Username Already Exist")
            //         }
            //     })
            //     .catch(e=>{
            //         alert("Wrong Details")
            //     })
            // }catch(e){
            //     console.log(e);
            // }
        }
    }
    return(
        
        <div className="Register">
            <div className="Regishead">
                <p>Start for Free</p>
                <h1>Create an Account</h1>

            </div>
            <form>
                <div className="Regisdata">
                    <div className="regispers">
                        <input id="name" name="" onChange={(e)=> {setname(e.target.value)}} type="text" placeholder="Name"/>
                        <input id="aadhar" name="" onChange={(e)=> {setaadhar(e.target.value)}} type="text" placeholder="AadharNumber"/>
                    </div>
                    <div className="regisqua">
                        <input id="source" name="" onChange={(e)=> {setsrc(e.target.value)}} type="text" placeholder="Source Address"/>
                        <input id="dest" name="" onChange={(e)=> {setdst(e.target.value)}} type="text" placeholder="Destination Address"/>
                    </div>
                    <div className="regisconta">
                        <input id="email" onChange={(e)=> {setemail(e.target.value)}} name="" type="text" placeholder="Email-Id"/>
                        <input id="phone" onChange={(e)=> {setphone(e.target.value)}} name="" type="text" placeholder="Phone Number"/>
                    </div>
                    <div className="regispass">
                        <input id="pass" name="" onChange={(e)=> {setpass(e.target.value)}} type="password" placeholder="Password"/>
                        <input id="cnfpass" name="" onChange={(e)=> {setcnfpass(e.target.value)}} type="password" placeholder="Confirm Password"/>
                    </div>
                    <div className="regissub">
                        <input id="signup" type="submit" onClick={submit}/>
                    </div>
                </div>
            </form>
        </div>
    );
}