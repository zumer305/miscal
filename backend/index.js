const express=require("express");
const app=express();
const port =8080;
app.listen(port,()=>{
    console.log("app is listening");
})



app.use(express.urlencoded({extended:true}));//for post request must add line
app.use(express.json());// for json type




// get request 
app.get("/register",(req,res)=>{
    let{user,password}=req.query; //query ka through ata getreq ma
    res.send(`Get request accepted ${user}`);
})
// post request 
app.post("/register",(req,res)=>{
        let{user,password}=req.body; //body ka through ata postreq ma
 res.send(`Post request accepted ${user}`);
})