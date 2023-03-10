const express = require("express");
const router = express.Router();
const Users = require("../Models/users.model");
const Likes = require("../Models/likes.model");
router.route("/add").post(async (req, res) => {
  const userId = req.body.userId;
  const userName = req.body.userName;
  try{
    const newItem = await Users.create({ userId, userName});
    Likes.create({ _id: userId })
    res.status(200).json(newItem);
  }catch(err){
    res.status(400).json(err);
  }
});

router.route("/:id").get((req, res) => {
  let userId = req.params.id;
  if(userId.startsWith(":")){
    userId = userId.slice(1);
  }
  console.log(userId);
  Users.find({ userId: userId })
    .then((data) => { console.log(data); res.status(200).json(data[0])})
    .catch((err) => res.status(400).json(err.message));
  
});


module.exports = router;
