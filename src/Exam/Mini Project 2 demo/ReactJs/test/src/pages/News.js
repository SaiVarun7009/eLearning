import { useState } from "react";
import axios from "axios";
export const News =()=>{
    const [image,setimage] = useState('')
    function convertToBase64(e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setimage(reader.result);
        }
        reader.onerror = () =>{
            console.log("Error");
        }
    }
    async function upload(e){
        try{
            await axios.post("http://localhost:3001/News", {
                image
            })
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div>
            <h1>This is News Page</h1>
            <input type="file" onChange={convertToBase64} />
            <button onClick={upload}>Upload</button>
        </div>
    );
}