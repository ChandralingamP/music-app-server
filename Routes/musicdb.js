const express = require("express")
const router = express.Router();
const MusicDB = require('../Models/musicdb.model')

router.route('/').get((req,res) => {
    MusicDB.find().then(data => res.json(data.slice(0,15)))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
        
});

router.route('/search/:query').get(async(req,res)=>{
    const query = req.params.query;
    console.log(query);
    try{
        const data = await MusicDB.find({Title : { $regex:  query }}).limit(6)
        // const es = data.map((d)=>{ d.Title = d.Title; return d})
        // console.log(es);
        res.status(200).json(data);
    }catch(err){
        res.status(400).json(err)
    }
})
router.route('/playlist/:name').get((req,res) => {
    const PlayList =  req.params.name;
    MusicDB.find({PlayList : PlayList}).then(data => res.status(200).json(data))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
});
router.route('/type/:name').get((req,res)=>{
    const Type = req.params.name;
    MusicDB.find({Type : Type}).then(data => res.json(data))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
});
router.route('/artist/:name').get((req,res)=>{
    const Artist = req.params.name;
    MusicDB.find({Artist : Artist}).then(data => res.json(data))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
});

module.exports = router;