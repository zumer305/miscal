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


// FACTORY FUNCTION  fails bcz copies ban re hr bar
// function personf(name,age){

//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log("talking");
//         }

//     }
//     return person;
// }
// let p1=personf("zumer",18);
// ------------------------------------------------------------------------------------



// new operator 
// function Personf(name,age){
// this.name:name,
// this.age:age,
// }
// let p2=Personf("zumer",18);

// Personf.prototype.talk=function(){
//     console.log("Hiiiii");
// }
// let p=new Personf("zumer",12); //new keyword

// ------------------------------------------------------------------------------------
// Class 
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log("Hi  am class");
//     }

// }
// let a= new Person("z",1);
// let b= new Person("n",2);
// ------------------------------------------------------------------------------------
// CLASS INHERITANCE
// class Person{
//     constructor(name,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//     }
//     talk(){
//         console.log("Hi  am class");
//     }

// }



// class Student extends Person{
//     constructor(name,age,marks){
//     super(name,age);
//         this.marks=marks;
//     }
//    

// }


// class Teacher extends Person {
//     constructor(name,age,marks){
//        //     super(name,age);
//         this.marks=marks;
//     }
//    
// }




