import { useSelector, useDispatch } from "react-redux";
import cookies from "next-cookies";
import getFactory from "../request";
import * as action from "../store/actions/user";
import { useRouter } from "next/router";

const client = (hander) => (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    if (user) return hander(props);
    else {
        const token = cookies("/").token;
        if (token) {
            try {
                async function getProfile() {
                    const API = getFactory("user");
                    const res = await API.getProfile();
                    dispatch(action.addUser(res.user));
                    return res.user;
                }
                const u = getProfile();

                return hander({ ...props, user: u });
            } catch (e) {
                console.log(e);
            }
        } else {
            return router.push("/login");
            // return hander(props);
        }
    }
    return hander(props);
};
export default client;
