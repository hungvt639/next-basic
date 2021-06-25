import mongoose from "mongoose";
var Schema = mongoose.Schema;

let usersSchema = new Schema({
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
mongoose.models = {};
var User = mongoose.model("User", usersSchema);
export default User;
