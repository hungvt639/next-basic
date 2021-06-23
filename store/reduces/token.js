import * as c from "../const";
const initialState = {
    token: "",
};

const token = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case c.DELETE_TOKEN:
            return {
                ...state,
                token: "",
            };
        default:
            return state;
    }
};
export default token;
