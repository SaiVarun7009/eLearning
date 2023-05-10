// eslint-disable-next-line
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [user,setuser] = useState(null)
  useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem("user")))
  },[localStorage])
    return(
        <div className="Nava">
          <Link to="/" id="home">Home</Link>
          {(user) && (user.occupation === "Teacher") && <Link to="/Admin" id="home">Admin</Link>}
          {(user) && (user.occupation === "Student") && <Link to="/CoursePage" id='home'>CoursePage</Link>}
          {(user) && (user.occupation === "Student") && <Link to="/PathwayPage" id='home'>PathwayPage</Link>}
          <Link to="/News" id="news">News</Link>
          {(!user) && <Link to="/Register" id="register">Register</Link>}
          
          {user
          ?<Link to="/Profile" id="profile">Profile</Link>
          :<Link to="/Login" id="login">Login</Link>}
        </div>
    );
}