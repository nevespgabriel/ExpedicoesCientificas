import { Schema, model } from "mongoose";

const specieSchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: true
    },
    discoveryLocation:{
        type: Schema.Types.String,
        required: true
    },
    rarity: {
        type: Schema.Types.Number,
        required: true,
        min: 1,
        max: 10
    },
    documented:{
        type: Schema.Types.Boolean,
        required: true
    }
});

const Specie = model("species", specieSchema);

export default Specie;