import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const HomeExam = () => {
  return (
    <div>
        <Link to="/rider" id="rider">Create a Ride</Link>
        <br></br>
        <Link to="/allRides" id="user">Join a Ride</Link>
    </div>
  )
}

export default HomeExam