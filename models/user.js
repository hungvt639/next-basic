// import mongoose from "mongoose";
let mongoose = require("mongoose");

let usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", usersSchema);
