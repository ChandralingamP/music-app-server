const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const audioSchema = new Schema({
    _id : { type: String, required: true },
    MusicURL: { type: String, required: true }
},{
    timestamps : true,
});

const Audio = mongoose.model("audios",audioSchema);
module.exports = Audio;