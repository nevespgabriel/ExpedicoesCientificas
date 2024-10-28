import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
    location:{
        type: Schema.Types.String,
        required: true
    },
    date:{
        type: Schema.Types.Date,
        required: true
    },
    participants:{
        type: [Schema.ObjectId],
        ref: "Explorer",
        required: true,
        minLenght: 2
    },
    speciesFound:{
        type: [Schema.ObjectId],
        ref: "Specie",
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 1; 
            },
            message: props => `${props.value} needs to have at least one specie!`
        }
    }
},
{ strictPopulate: false });

const Expedition = model("Expedition", expeditionSchema);

export default Expedition;