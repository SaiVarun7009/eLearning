import React, { useState } from "react";
import axios from "axios";
export const Admin=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user.username
    const [coursedesc,setcoursedescription] = useState('');
    const [courseval,setcourseval] = useState("Free");
    const [coursecost, setcoursecost] = useState('0');
    const [CourseName,setcoursename] = useState('')
    const [CourseID,setcourseid] = useState('')
    const [courseimg,setimage] = useState('')
    const [course,setcourse] = useState(true)
    function convertTOBase64(e) {
        // console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          console.log(reader.result);
          setimage(reader.result);
        //   console.log(courseimg)
        };
        reader.onerror = (error) => {
          console.log("Error:", error);
        };
      }
    async function Handelcourse(e){
        e.preventDefault()
        const data = {username,CourseName,CourseID,coursedesc,courseimg,courseval,coursecost}
        try{
            await axios.post("http://localhost:3001/Course", data)
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div>
            <div>
                <button onClick={(e)=>setcourse(true)}>Add Course</button>
                <button onClick={(e)=>{setcourse(false)}}>Add Topic</button>
            </div>
            {(course) && <div className="Admincourse">
                <div className="adminhead">
                    <h1>ADD COURSE</h1>
                </div>
                <div>
                    <form>
                        <div className="admincourse1" ><input type="text" placeholder="CourseName" onChange={(e)=>setcoursename(e.target.value)}/></div>
                        <div className="admincourse1"><input type="text" placeholder="CourseID" onChange={(e)=>setcourseid(e.target.value)}/></div>
                        <div className="admincourseimg"><input type="File" placeholder="CourseImage" onChange={convertTOBase64}/></div>
                        <div className="admindesc">
                            <textarea type="textarea" id="coursedesc" rows="2" cols="4" 
                            onChange={(e)=>{setcoursedescription(e.target.value)}} 
                            placeholder="Enter the description" required
                            style={{height:"100px", width:"250px"}}/></div>
                        <div className="admincourse2">
                            <select value={courseval} onChange={(e)=>setcourseval(e.target.value)} id="courseval">
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                        {(courseval === "Paid") && <div className="admincourse1">
                            <input type="String"  placeholder={coursecost} onChange={(e)=>{setcoursecost(e.target.value)}}/>
                        </div>}
                        <div>
                            <button onClick={Handelcourse}>Add</button>
                        </div>
                    </form>
                </div>
            </div>}
            {(!course) && <div className="Admincourse">
                <div className="adminhead">
                    <h1>ADD TOPIC</h1>
                </div>
                <form>
                    <div className="admincourse1"><input  type="text" placeholder="TopicName"/></div>
                    <div className="admincourse1"><input  type="text" placeholder="CourseID" /></div>
                    <div className="admincourse1"><input  type="text" placeholder="URL YouTube" /></div>
                    <div className="admincourse1"><input  type="text" placeholder="URL Notes" /></div>
                    <div>
                        <button>Add</button>
                    </div>
                </form>
            </div>}
        </div>
    );
}