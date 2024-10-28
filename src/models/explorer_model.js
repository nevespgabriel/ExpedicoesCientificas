import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: true
    },
    fieldOfStudy:{
        type: Schema.Types.String,
        required: true
    },
    expeditionsParticipated:{
        type: Schema.Types.Number,
        required: true
    }
});

const Explorer = model("explorers", explorerSchema);

export default Explorer;