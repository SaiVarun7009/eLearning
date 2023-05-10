const express = require("express");
const app = express();
const cors = require("cors")
const path = require("path");
const port = process.env.PORT || 3001;
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
require("./db/conn")
const register = require("./models/register");
const news = require("./models/news");
app.use(cors())
app.get("/",cors(),(req,res)=>{

})
app.post("/News", async (req,res)=>{
    const {image} = req.body
    const data = new news({
        image: image
    })
    try{
        await data.save()
    }
    catch(e){
        console.log(`${e}`)
    }
});
app.post("/Register", async (req, res) => {
    const {name, username, collagename, YearOfPassOut,emailid, phonenum, password, cnfpassword} = req.body;
    const data = new register({
        name:name,
        username:username,
        collagename:collagename,
        YearOfPassOut:YearOfPassOut,
        emailid:emailid,
        phonenum:phonenum,
        password:password,
        cnfpassword:cnfpassword
    })
    try{
        const check = await register.findOne({username:username})
        if (check){
            res.json("exist")
        }else{
            res.json("notexist");
            await data.save(function (e,result){
                if(e){
                    console.log(e)
                }else{
                    console.log("sucessfull")
                }
            })
        }
    }catch(e){
        res.json("exist");
    }
})
app.post("/Login", async (req,res)=>{
    const {username, password} = req.body;
    try{
        const check = await register.findOne({username:username})
        
        if (check){
            if (check.password === password){
                console.log("Succesfull")
                const {password,cnfpassword,...newD} = check._doc
                res.json(newD)
            }else{
                res.json("notexist")
            }
        }else{
            res.json("notexist");
        }
    }catch(e){
        res.json("notexist");
    }
});


app.delete("/Profile/:id", async (req,res)=>{
    console.log("Hi")
    const id = req.params.id
    console.log(id);
    try{
        const delitem = await register.deleteOne({username:id})
        console.log(delitem)
    }
    catch(e){
        console.log(e)
    }
    res.send("Done")
})

app.put("/Editprofile/:id", async (req,res)=>{
    const id = req.params.id;
    const data = req.body;
    console.log(id)
    register.findByIdAndUpdate(id,data)
    res.send("Done")
})

app.listen(port, () => {
    console.log(`This server is listening to ${port}`)
});