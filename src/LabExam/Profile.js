import React, { useState } from 'react'
import axios from "axios";

export const Profile = () => {
  const [name,setname] = useState('')
  const Logout = ()=>{
    localStorage.removeItem("user");
    window.location.href="/"
  }
  function DeleteAcc(){
    
    setname(user.username)
    try{
      const k =  axios.delete(`http://localhost:3001/Profile/${name}`)
      alert("Account Deleted")
      console.log("Deleted")
    }
    catch(e){
      console.log(e);
    }
    // localStorage.removeItem("user");
    // window.location.href="/"
  }
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className='Profile'>
      <h1>{user.username}</h1>
      <button onClick={Logout}>LogOut</button>
      <button onClick={DeleteAcc}>Delete Account</button>
    </div>
  )
}
