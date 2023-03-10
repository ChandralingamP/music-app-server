const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    userId : { type: String, required: true },
    userName: { type: String, required: true }
},{
    timestamps : true,
});

const Users = mongoose.model("music-users",usersSchema);
module.exports = Users;