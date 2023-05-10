import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";
export const News =()=>{
    const [news, setNews] = useState(null); 
    const [user,setuser] = useState(null)
    useEffect(() => {
      setuser(JSON.parse(localStorage.getItem("user")))
      const fetchNews = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/News`);
          console.log("News:", response.data);
          setNews(response.data);
        } catch (error) {
          console.log("Error is ");
          console.log(error);
        }
      };
      fetchNews();
    }, []);   
    useEffect(() => {
        // console.log(news);
      }, [news]);   
    const [image,setimage] = useState('')
    const [head,sethead] = useState('')
    const [description,setdescription] = useState('')
    function convertTOBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          console.log(reader.result);
          setimage(reader.result);
          console.log(image)
        };
        reader.onerror = (error) => {
          console.log("Error:", error);
        };
      }
    async function upload(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/News", {image,head,description})
            .then(res=>{
                if(res.data === "High Memory"){
                    alert("Insert Image Under 500KB")
                }else{
                    window.location.href="/News"
                }
            })
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className="news">
            <h1 id="newpagehead">Latest News Available</h1>
            {(user) &&(user.occupation === "Admin") && <div className="insertnews">
                <form>
                    <h2 id="addnews">Add News</h2>
                    <div className="newsimg">
                        <input type="file" id="newsimage" onChange={convertTOBase64} required/>
                    </div>
                    <div className="newshd">
                        <input type="text" id="newshead" placeholder="Header" onChange={(e)=>{sethead(e.target.value)}} required/>
                    </div>
                    <div className="newsdes">
                        <textarea type="textarea" id="newsdesc" rows="2" cols="4" 
                        onChange={(e)=>{setdescription(e.target.value)}} 
                        placeholder="Enter the description" required
                        style={{height:"100px", width:"250px"}}/>
                    </div>
                    <div className="newsbut">
                        <button id="newsbutton" onClick={upload}>Upload</button>
                    </div>
                </form>
            </div>}
            <div>
                {news && news.map(newses =>{
                    return(
                        <div key={newses._id} className="card">
                            <img src={newses.image} width="100px" height="100px"/>
                            <div className="card-body">
                                <h2>{newses.head}</h2>
                                <p>{newses.description}</p>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    );
}