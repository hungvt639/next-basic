import jwt from "jsonwebtoken";
import * as env from "../../env";
import dbConnect from "../../database";

let UsersModel = require("../../models/user");
const bcrypt = require("bcrypt");

dbConnect();
export default async function handler(req, res) {
    if (!req.body) {
        res.statusCode = 404;
        res.end("Error404");
        return;
    }
    const { method } = req;
    switch (method) {
        case "POST": {
            try {
                const { username, password } = req.body;

                const user = await UsersModel.findOne({ username: username });
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

                const token = jwt.sign({ username }, env.KEY);
                res.status(200).json({
                    message: "ok",
                    token: token,
                });
            } catch (e) {
                res.status(400).json({
                    message: "Đã có lỗi sảy ra, bạn vui lòng đăng nhập lại!",
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