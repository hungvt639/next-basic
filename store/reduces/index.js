import { combineReducers } from "redux";
import token from "./token";
import user from "./user";
const reducer = combineReducers({
    token: token,
    user: user,
});
export default reducer;
