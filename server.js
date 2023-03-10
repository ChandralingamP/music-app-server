const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// Create Connection

// let uri = "mongodb://127.0.0.1:27017/MusicApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";
let uri = "mongodb://ErrorPostingApplication:ErrorPostingApplication@ac-yrhngqc-shard-00-00.tdlpup9.mongodb.net:27017,ac-yrhngqc-shard-00-01.tdlpup9.mongodb.net:27017,ac-yrhngqc-shard-00-02.tdlpup9.mongodb.net:27017/?ssl=true&replicaSet=atlas-12gtpz-shard-0&authSource=admin&retryWrites=true&w=majority/BookStore";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection made");
});

// api's
const users = require('./Routes/users')
const music = require('./Routes/musicdb')
const likes = require('./Routes/Likes')
const recent = require('./Routes/recent')
const playlist = require('./Routes/playlist')
const audio = require('./Routes/audio')
app.use('/users',users)
app.use('/musics',music)
app.use('/likes',likes)
app.use('/recent',recent)
app.use('/playlist',playlist)
app.use('/audio',audio)

app.get("/", (req, res) => { res.send("Hii")});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = connection;
