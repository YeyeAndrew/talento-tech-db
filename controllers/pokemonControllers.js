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
exports.getPokemonStatus = async (req, res) => {
    try {
        const status = await statusPokemon.find({})
        res.status(200).json(status)
    } catch (e) {
        console.error(e)
        return res.status(500).json({e})
    }
}
exports.getPokemonByPokemonId = async (req,res)=>{
    try {
        const pokemon_id = req.params.pokemon_id;
        let pokemon = await statusPokemon.findOne({"pokemon_id":pokemon_id})
        if(!pokemon){
            res.status(404).json({message:"Pokemon not found"})
        }else{
            res.status(200).json(pokemon)
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}
exports.catchPokemonByPokemon_id = async (req,res)=>{
    const pokemon_id = req.params.pokemon_id;
    const pokemonStatusId = req.body.pokemon_id;
    if(pokemon_id==pokemonStatusId){
        try {
            const pokemonStatusView = req.body.view;
            const pokemonStatusCatch = req.body.catch;
            let pokemon = await statusPokemon.findOne({"pokemon_id":pokemon_id})
            if(!pokemon){
                return res.status(400).json({message:"Bad request, pokemon not view yet"})
            }else if(pokemon.view != pokemonStatusView) {
                return res.status(400).json({message:"Bad request, inconsistent data"})
            }else if(pokemon.catch){
                return res.status(200).json(pokemon)
            }else{
                pokemon = await statusPokemon
                .findOneAndReplace({"pokemon_id":pokemon_id},{
                    pokemon_id: pokemon_id,
                    view: true,
                    catch: true,
                }, {new:true}
            )
            return res.status(200).json(pokemon)
            }
        } catch (error) {
            console.error(error)
            return res.status(500).json({error})
        }
    }else{
        return res.status(400).json({message:"bad request, pokemon_id in body diferent pokemon_id in params"})
    }
}