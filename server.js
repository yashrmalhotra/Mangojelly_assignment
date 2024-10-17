const app = require("express")()
const routes = require("./routes/routes.js")
const db = require("mongoose")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
require("dotenv").config()
db.connect("mongodb://localhost:27017/Books").then(()=>console.log("db connected"))//connecting mongodb
const PORT = process.env.PORT || 3000
app.use("/",routes)
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})