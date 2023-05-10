// import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Navbar.css'


// const Navbar = () => {
//   return (
//     <nav>
//         <NavLink to='/'>Home</NavLink>
//         <NavLink to='/about'>About</NavLink>
//         <NavLink to='/Courses'>Courses</NavLink>
//         <NavLink to='/Pathways'>Pathways</NavLink>
//     </nav>
//   )
// }



import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user,setuser] = useState(null)
  useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem("user")))
  },[localStorage])
    return(
        <div className="Nava">
          {/* <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/Courses'>Courses</NavLink>
            <NavLink to='/Pathways'>Pathways</NavLink>
          </nav> */}
          <Link to="/" id="home">Home</Link>

          <Link to='/about' id="home">About</Link>
          <Link to='/Courses' id="home">Courses</Link>
          <Link to='/Pathways' id="home">Pathways</Link>
          

          {(user) && (user.occupation === "Teacher") && <Link to="/Admin" id="home">Admin</Link>}
          {/* {(user) && (user.occupation === "Student") && <Link to="/CoursePage" id='home'>CoursePage</Link>}
          {(user) && (user.occupation === "Student") && <Link to="/PathwayPage" id='home'>PathwayPage</Link>} */}
          <Link to="/News" id="home">News</Link>
          {(!user) && <Link to="/Register" id="home">Register</Link>}
          
          {user
          ?<Link to="/Profile" id="home">Profile</Link>
          :<Link to="/Login" id="home">Login</Link>}
        </div>
    );
}

export default Navbar