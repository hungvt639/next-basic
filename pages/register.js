import React, { useState, Fragment } from "react";
import getFactory from "../request/index";
import { useRouter } from "next/router";
import Link from "next/link";
const Login = () => {
    const router = useRouter();
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [checkUsername, setCheckUsername] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [check, setCheck] = useState(false);
    async function submit(e) {
        e.preventDefault();
        if (!username) setCheckUsername(true);
        if (!password) setCheckPassword(true);
        if (password !== rePassword) setCheck(true);
        if (!checkUsername && !checkPassword && !check) {
            try {
                const API = getFactory("user");
                await API.signUp({
                    fullname: fullname,
                    username: username,
                    password: password,
                });

                router.push("/login");
            } catch (e) {
                console.log(e);
            }
        }
    }
    return (
        <div className="forms">
            <form className="form" onSubmit={(e) => submit(e)}>
                <input
                    name="fullname"
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value);
                    }}
                    placeholder="Họ và Tên"
                />
                <input
                    name="username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setCheckUsername(false);
                    }}
                    placeholder="Tài khoản"
                />
                {checkUsername ? (
                    <p>Tài khoản không được để trống</p>
                ) : (
                    <Fragment />
                )}
                <input
                    name="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setCheckPassword(false);
                    }}
                    placeholder="Mật khẩu"
                    type="password"
                />
                {checkPassword ? (
                    <p>Mật khẩu không được để trống</p>
                ) : (
                    <Fragment />
                )}
                <input
                    name="re-password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                />
                {check ? (
                    <p>Nhập lại mật khẩu không chính xác</p>
                ) : (
                    <Fragment />
                )}
                <button type="submit">Đăng ký</button>
                <br></br>
                <p>
                    Bạn đã có tài khoản? Đăng nhập tại{" "}
                    <Link href="/login">đây</Link>
                </p>
            </form>
        </div>
    );
};
export default Login;
