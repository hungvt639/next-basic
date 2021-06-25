// import dbConnect from "../../database";
import connectDB from "../../middlewares/mongodb";

// let UserModel = require("../../models/user");
import User from "../../models/user";

const bcrypt = require("bcrypt");
// dbConnect();
async function register(req, res) {
    const { method } = req;
    switch (method) {
        case "POST": {
            try {
                const value = req.body;
                const salt = bcrypt.genSaltSync(10);
                value.password = bcrypt.hashSync(value.password, salt);
                const user = await User.create(value);
                res.status(200).json({ message: "ok", data: user });
            } catch (e) {
                res.status(400).json({ message: "error" });
            }
            break;
        }
        default:
            res.status(400).json({ message: "error" });
            break;
    }
    return;
}
export default connectDB(register);
