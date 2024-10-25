const express=require("express")
const mysql=require("mysql")
const app=express()
const cors=require("cors")
app.use(cors())


const db=mysql.createConnection(
    {
        host:"bbb0rbjirxgwj1k1rbtb-mysql.services.clever-cloud.com",
        user:"uafhzhtxfkmhkztn",
        password:"Wex0OjCxd6bBmJsTqcAB",
        database:"bbb0rbjirxgwj1k1rbtb",
    }
)

app.get("/",(req,res)=>{
    db.query("SELECT * FROM admin",(err,data)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(data[0])
        }
    })
})


app.listen(3001,()=>{
    console.log("serveur en ecoute sur 3001")
})
