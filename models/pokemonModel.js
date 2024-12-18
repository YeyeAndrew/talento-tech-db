const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema ({
    pokemon_id:{
        type:Number,
        required:true,
        unique:true
    },
    view:{
        type:Boolean,
        default:false
    },
    catch:{
        type:Boolean,
        default:true
    },
    in_team:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model("statusPokemon",PokemonSchema)