import React, { useState } from "react";
import getFactory from "../request/index";
import { useSelector, useDispatch } from "react-redux";
import * as t from "../store/actions/token";
import { useRouter } from "next/router";
const Login = () => {
    const router = useRouter();
    console.log(router);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    // console.log("t", token);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const add = (res) => dispatch(t.addToken(res.token));
    async function submit(e) {
        e.preventDefault();
        // console.log("login", env.URL);
        // try {
        const API = getFactory("user");
        const res = await API.signIn({
            username: username,
            password: password,
        });

        add(res);
        router.push("/profile");
        // } catch (e) {
        //     console.log(e);
        // }
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Tài khoản"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    type="password"
                />
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};
export default Login;
