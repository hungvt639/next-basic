import jwt from "jsonwebtoken";
import * as env from "../../env";
import connectDB from "../../middlewares/mongodb";
import User from "../../models/user";
const bcrypt = require("bcrypt");

async function login(req, res) {
    const { method } = req;
    switch (method) {
        case "POST": {
            try {
                const { username, password } = req.body;

                const user = await User.findOne({ username: username });
                if (!user) {
                    res.status(400).json({
                        message: "Sai tên tài khoản hoặc mật khẩu!",
                    });
                    return;
                }

                const match = await bcrypt.compare(password, user.password);
                if (!match) {
                    res.status(400).json({
                        message: "Sai tên tài khoản hoặc mật khẩu!",
                    });
                    return;
                }

                const token = jwt.sign(
                    {
                        _id: user.id,
                        username: user.username,
                        fullname: user.fullname,
                    },
                    env.KEY
                );
                user.password = "";
                res.status(200).json({
                    message: "ok",
                    token: token,
                    user: user,
                });
            } catch (e) {
                res.status(400).json({
                    message: e.message,
                });
            }
            break;
        }
        default:
            res.status(400).json({ message: "Method không được định nghĩa!" });
            break;
    }
    return;
}
export default connectDB(login);
