import mongoose from "mongoose";

const tracksSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    artist:{
        type: String,
        requiered: true
    },
},
    { timestamps: true}
)

const Track = mongoose.model('Track', tracksSchema);
export default Track