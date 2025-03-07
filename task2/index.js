const express= require("express");

const app = express();
const arr = ["cs","sw"]
app.get("/",(req,res)=>{
    res.send("hello world");
     
});

function door (name){
console.log(name)
}
door("nawal")
//proccessing

app.listen(3000,()=> {
    console.log("listen on port 3000");

});