const statusPokemon = require("../models/pokemonModel")

exports.test = (req, res) => {
    console.log("hola controller")
    res.status(200).send ("hola desde controller")
}
exports.createPokemonStatus = async (req, res) => {
    try {
        const status = await statusPokemon.create ({
            pokemon_id: req.body.pokemon_id,
            view: req.body.view,
            catch: req.body.catch,
            in_team: req.body.in_team
        })
        res.status(201).json(status)
    } catch (e) {
        console.error(e)
        return res.status(500).json({e})
    }
}