const express=require("express")
const mysql=require("mysql")
const app=express()
const cors=require("cors")
app.use(cors())


app.get("/",(req,res)=>{
    res.send("reussi")
})


app.listen(3001,()=>{
    console.log("serveur en ecoute sur 3001")
})
