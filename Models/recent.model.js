const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recentSchema = new Schema(
  {
    _id: { type: String, required: true },
    MusicId: []
  },
  {
    timestamps: true,
  }
);
const Recent = mongoose.model("recent", recentSchema);
module.exports = Recent;
