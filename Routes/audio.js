const express = require("express");
const router = express.Router();
const Audio = require("../Models/audio.model");
const fs = require('fs')
router.route("/:id").get(async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  try{
    const data = await Audio.findOne({ _id: _id });
    // console.log(data.MusicURL);
    res.status(200).send(data.MusicURL)
    // const fileStream = fs.createReadStream(data.MusicURL);
      
    //     fileStream.pipe(res);
        
  }catch(err){
    // fileStream.pipe(err);
    res.status(400).json(err);
  }
});

module.exports = router;