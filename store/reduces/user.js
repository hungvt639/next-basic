import * as c from "../const";
const initialState = {
    user: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_USER:
            return {
                ...state,
                user: action.user,
            };
        case c.DELETE_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};
export default user;
