const express = require("express");
const router = express.Router();
const Recent = require("../Models/recent.model");

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const newItem = await Recent.find({ _id: id });
    console.log(newItem,"user need");
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.route("/update").post(async (req, res) => {
  const  _id = req.body.userId;
  const Musics = req.body.MusicId;
  try {
    const d = await Recent.findById(_id);
    if (d) {
      const da = await Recent.findOneAndUpdate(
        { _id: _id },
        { MusicId: Musics }
      );
      res.status(200).send(da);
    } else {
      const data = await Recent.create({
        _id: _id,
        MusicId: Musics
      });
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
