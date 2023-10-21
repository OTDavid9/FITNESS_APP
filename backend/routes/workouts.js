const express = require("express")

const router = express.Router()

const workout = require("../model/workoutModel")


//GET all workouts
router.get("/", (req, res) => {
    res.send("Get all workouts")
})

//GET a single workout
router.get("/:id", (req, res) => {
    res.send("Single Workout")
})

//POST a new workout
router.post("/", async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const Workout = await Workout.create({ title, load, reps })
        res.status(200).json({ workout })

    } catch (error) {
        res.status(400).json({ error: error.message })

    }
})

//DELETE a single workout
router.delete("/:id", (req, res) => {
    res.send("Delete a Workout")
})

//UPDATE a single workout
router.patch("/:id", (req, res) => {
    res.send("UpdateSingle Workout")
})



module.exports = router