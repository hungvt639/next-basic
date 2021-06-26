import React, { useState } from "react";
import getFactory from "../request/index";
import { useDispatch } from "react-redux";
import * as action from "../store/actions/user";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../components/contexts/auth";
const Login = () => {
    const { login } = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function submit(e) {
        e.preventDefault();
        if (username && password) {
            // try {
            //     const API = getFactory("user");
            //     const res = await API.signIn({
            //         username: username,
            //         password: password,
            //     });
            //     dispatch(action.addUser(res.user));
            //     // localStorage.setItem("token", res.token);
            //     document.cookie = `token=${res.token}; path=/`;
            //     router.push("/");
            // } catch (e) {
            //     console.log(e);
            // }
            login(username, password);
        }
    }
    return (
        <div className="forms">
            <form className="form" onSubmit={(e) => submit(e)}>
                <input
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Tài khoản"
                />
                <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    type="password"
                />
                <button type="submit">Đăng nhập</button>
                <p>
                    Bạn chưa có tài khoản? Đăng ký tại{" "}
                    <Link href="/register">đây</Link>
                </p>
            </form>
        </div>
    );
};
export default Login;
