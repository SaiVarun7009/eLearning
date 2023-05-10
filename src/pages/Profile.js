import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Editprofile } from './Editprofile';

export const Profile = () => {
  useEffect(() => {
  });
  const [edit,setedit] = useState(false);
  const Edit=()=>{
    setedit(!edit);
  }
  const Logout = ()=>{
    localStorage.removeItem("user");
    window.location.href="/"
  }
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className='Profile'>
      {(edit) && <div>
      {<Editprofile />}
      </div>}
      {(!edit) && <div>
        <h1>{user.username}</h1>
        <p>{user.occupation}</p>
        <h2>Enrolled Courses</h2>
      </div>}
      <div>
        <button onClick={Edit}>Edit</button>
        <button onClick={Logout}>LogOut</button>
      </div>
    </div>
  )
}
