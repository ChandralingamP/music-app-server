const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const playListSchema = new Schema(
  {
    UserId: { type: String, required: true },
    PlayListName : {type : String,required:true},
    newPlayList : []
  },
  {
    timestamps: true,
  }
);


const PlayList = mongoose.model("playlist", playListSchema);
module.exports = PlayList;
