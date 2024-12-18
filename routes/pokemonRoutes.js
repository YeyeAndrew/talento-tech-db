const express = require("express");
const {test} = require("../controllers/pokemonControllers")
const router = express.Router()

router.get("/test",(req,res)=> {
    console.log("hello desde test")
    res.send("hola desde routes").status(200)
})

router.get("/test", test)

module.exports = router