import clock from "./clock";
import { combineReducers } from "redux";
import token from "./token";
const reducer = combineReducers({
    clock: clock,
    token: token,
});
export default reducer;
