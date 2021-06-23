import jwt from "jsonwebtoken";
import * as env from "../env";
import dbConnect from "../database";

let UsersModel = require("../models/user");

dbConnect();
async function checkToken(req, res, next) {
    try {
        const token = req.headers.authorization;
        await jwt.verify(token, env.KEY, async (err, decoded) => {
            if (decoded && decoded.username) {
                console.log("check", decoded.username);

                const user = await UsersModel.findOne({
                    username: decoded.username,
                });
                console.log("u", user);
                if (user) {
                    req.user = user;
                    // return user;
                } else {
                    res.status(401).json({ message: "token bị lỗi" });
                }
                res.status(200).json({ message: decoded });
            }
            if (err) {
                res.status(401).json({ message: err.message });
            }
        });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

// module.exports = {
//     checkToken,
// };
export default checkToken;
