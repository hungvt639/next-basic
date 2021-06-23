import * as c from "../const";
export const addToken = (token) => {
    return {
        type: c.ADD_TOKEN,
        token: token,
    };
};
export const deleteToken = () => {
    return {
        type: c.DELETE_TOKEN,
    };
};
