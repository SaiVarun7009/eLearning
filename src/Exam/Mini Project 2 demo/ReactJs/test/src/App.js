import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  {Home } from "./pages/Home";
import { News } from './pages/News';
import  {Register } from "./pages/Register";
import {Editprofile} from "./pages/Editprofile"
import  {Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Navbar } from './Navbar';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{

  },[localStorage])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/News" element={<News />}/>
          <Route path="/Editprofile" element={<Editprofile />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Profile" element={<Profile />}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
