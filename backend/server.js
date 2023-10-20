
const express = require("express")
const app = express()

require('dotenv').config()
const WorkoutsRoutes = require("./routes/workouts")

const PORT = process.env.PORT


app.get("/", (req, res)=>{
    // res.json({"hello World": "a"})
    res.send("Hello World")
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})