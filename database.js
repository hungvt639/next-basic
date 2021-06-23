let mongoose = require("mongoose");
import { async } from "regenerator-runtime";
import * as env from "./env";

// class Database {
//     constructor() {
//         this._connect();
//     }
//     _connect() {
//         mongoose
//             .connect(env.DB)
//             .then(() => {
//                 console.log("Database connection successful");
//             })
//             .catch((err) => {
//                 console.error("Database connection error", err);
//             });
//     }
// }

// module.exports = new Database();

const connection = {};

async function dbConnect() {
    if (connection.isConnected) return;
    const db = await mongoose.connect(env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;
