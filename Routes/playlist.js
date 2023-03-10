const express = require("express");
const router = express.Router();
const PlayList = require("../Models/userplaylist.model");
router.route("/:id").get(async (req, res) => {
  const UserId = req.params.id;
  try {
    const data = await PlayList.find({ UserId: UserId });
    res.status(200).json(data);
  } catch (err) {
    res.statusCode(400).json(err);
  }
});

router.route("/add").post(async (req, res) => {
  const UserId = req.body.UserId;
  const PlayListName = req.body.PlayListName;
  try {
    const newItem = await PlayList.create({ UserId, PlayListName });
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

router.route("/update").post(async (req, res) => {
  const UserId = req.body.UserId;
  const PlayListName = req.body.PlayListName;
  const newPlayList = req.body.nePlayList;
  PlayList.updateOne(
    { UserId: UserId, PlayListName: PlayListName },
    { newPlayList: newPlayList },
    (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
});
router.route("/delete/:id/:name").delete((req, res) => {
  const UserId = req.params.id;
  const PlayListName = req.params.name;
  PlayList.findOneAndDelete(
    { UserId: UserId, PlayListName: PlayListName },
    function (err, doc) {
      if (err) {
        res.status(400).json({ err: err.message });
      } else {
        res.status(200).json({ data: "deleted successfully" });
      }
    }
  );
});

module.exports = router;
