import * as c from "../const";
export const addUser = (user) => {
    return {
        type: c.ADD_USER,
        user: user,
    };
};
export const deleteUser = () => {
    return {
        type: c.DELETE_USER,
    };
};
