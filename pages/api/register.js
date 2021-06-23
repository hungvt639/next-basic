import dbConnect from "../../database";
let UsersModel = require("../../models/user");
const bcrypt = require("bcrypt");
dbConnect();
export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case "POST": {
            try {
                const value = req.body;
                const salt = bcrypt.genSaltSync(10);
                value.password = bcrypt.hashSync(value.password, salt);
                const user = await UsersModel.create(value);
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
