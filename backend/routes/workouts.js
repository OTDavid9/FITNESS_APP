const express = require("express")

const router = express.Router()

router.get("/", ()=>{

    res.send("Hellooo")

})

module.exports = router