const express = require("express");
const router = express.Router();
const Likes = require("../Models/likes.model");

router.route("/:id").get(async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  try{
    const newItem = await Likes.find({ _id: _id });
    res.status(200).json(newItem);
  }catch(err){
    res.status(400).json(err);
  }
});

router.route("/update").post((req, res) => {
  const UserId = req.body.UserId;
  console.log(req.body.MusicId);
  Likes.findOneAndUpdate({ _id: UserId }, {MusicId: req.body.MusicId}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
