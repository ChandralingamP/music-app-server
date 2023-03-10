const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicdbSchema = new Schema(
  {
    _id : {type:String,required : true},
    Title: { type: String, required: true },
    Type: { type: String, required: true },
    PlayList: { type: String, required: true },
    Artist: { type: String, required: true },
    Fav: { type: Boolean,required : true},
    Year :{type:String},
    Duration : {type: Number },
    Singer : {type:String},
    imgPath : {type : String}
  },
  {
    timestamps: true,
  }
);
const MusicDB = mongoose.model("musicdatas", musicdbSchema);
module.exports = MusicDB;