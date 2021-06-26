import jwt from "jsonwebtoken";
import User from "../models/user";

const checkToken = (hander) => (req, res) => {
    try {
        const token = req.headers.authorization;
        jwt.verify(token, process.env.secret, async (err, payload) => {
            if (payload) {
                // const user = await User.findOne({ username: payload.username });
                // if (user) {
                //     req.user = user;
                //     return hander(req, res);
                // } else {
                //     res.status(401).json({
                //         message: "Token không đúng với tài khoản nào",
                //     });
                // }
                req.user = payload;
                return hander(req, res);
            } else {
                res.status(401).json({ message: err.message });
            }
        });
    } catch (e) {
        res.status(401).json({ message: e.message });
    }
};

export default checkToken;
