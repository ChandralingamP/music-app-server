const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {
    _id: { type: String, required: true },
    MusicId: []
  },
  {
    timestamps: true,
  }
);
const Likes = mongoose.model("like", likeSchema);
module.exports = Likes;
