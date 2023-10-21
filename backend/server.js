
const express = require("express")
const mongoose = require("mongoose")

require('dotenv').config()
const WorkoutsRoutes = require("./routes/workouts")
const e = require("express")

const PORT = process.env.PORT
const database = process.env.MONGO_URI

//Express App
const app = express()

//Middleware
app.use(express.json())


//Routes

app.use("/api/workouts", WorkoutsRoutes)

//Connect to db
mongoose.connect(database)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to database and running on port ${PORT}`);
            
        })

    }).catch((error) => {
        console.log(error)
    })
//Listening at port
