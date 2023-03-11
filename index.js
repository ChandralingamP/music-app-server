
require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

// let uri = "mongodb://127.0.0.1:27017/MusicApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";
let uri = "mongodb://musicapp:musicapp@ac-jl3soxk-shard-00-00.bwqynof.mongodb.net:27017,ac-jl3soxk-shard-00-01.bwqynof.mongodb.net:27017,ac-jl3soxk-shard-00-02.bwqynof.mongodb.net:27017/MusicApp?ssl=true&replicaSet=atlas-sjms9a-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(process.env.MONGO_URL);
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

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = connection;
