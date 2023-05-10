import { useState } from "react";
import axios from "axios";
// eslint-disable-next-line
import { useNavigate,Link} from "react-router-dom";

export const Editprofile= () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    const [id,setid] = useState('')
    const [name,setname] = useState('')
    const [username,setusname] = useState('')
    const [YearOfPassOut,setyear] = useState('')
    const [emailid,setemail] = useState('')
    const [phonenum,setphone] = useState('')
    const [password,setpass] = useState('')
    const [cnfpassword,setcnfpass] = useState('')
    const history = useNavigate();
    async function submit(e){
        var error = "False";
        setusname(user.username);
        setid(user._id);
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3001/Editprofile/${id}`, {
                name,username, YearOfPassOut,emailid, phonenum, password, cnfpassword
            })

        }catch(e){
            console.log(e);
        }
    }
    return(
        
        <div className="Register">
            <div className="Regishead">
                <p>{user.username}</p>
                <h1>Upadate Your Account</h1>
            </div>
            <form>
                <div className="Regisdata">
                    <div className="regispers">
                        <input id="name" name="" onChange={(e)=> {setname(e.target.value)}} type="text" placeholder="Name"/>
                    </div>
                    <div className="regisqua">
                        {/* {<input id="clgname" name="" onChange={(e)=> {setclgname(e.target.value)}} type="text" placeholder="College Name"/> */}
                        <input id="year" name="" onChange={(e)=> {setyear(e.target.value)}} type="text" placeholder="Year of Passout"/>
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