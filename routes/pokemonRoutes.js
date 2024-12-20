const express = require("express");
const {test, createPokemonStatus,getPokemonStatus, getPokemonByPokemonId, catchPokemonByPokemonId } = require("../controllers/pokemonControllers")
const router = express.Router()

// router.get("/test",(req,res)=> {
//     console.log("hello desde test")
//     res.send("hola desde routes").status(200)
// })

router.get("/test", test)
router.get("/",getPokemonStatus)
router.get("/pokemonid/:pokemon_id", getPokemonByPokemonId)
router.post("/", createPokemonStatus)
router.put("/catch/:pokemon_id", catchPokemonByPokemonId)
module.exports = router

