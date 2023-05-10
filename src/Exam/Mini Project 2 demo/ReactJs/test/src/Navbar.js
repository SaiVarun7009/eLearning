// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [user,setuser] = useState(null)
  useEffect(()=>{
    setuser(localStorage.getItem("user"))
  },[localStorage])
    return(
        <div className="Nava">
          <Link to="/" id="home">Home</Link>
          <Link to="/News" id="news">News</Link>
          {user
          ?<Link to="/Editprofile" id ="register">Edit Profile</Link>
          :<Link to="/Register" id="register">Register</Link>}
          
          {user
          ?<Link to="/Profile" id="profile">Profile</Link>
          :<Link to="/Login" id="login">Login</Link>}
        </div>
    );
}