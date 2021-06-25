import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as action from "../store/actions/user";
import getFactory from "../request/index";
import cookies from "next-cookies";

const profile = () => {
    const router = useRouter();
    const [token, setToken] = useState(cookies("/").token);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    useEffect(() => {
        async function getUser() {
            try {
                const API = getFactory("user");
                const res = await API.getProfile();
                dispatch(action.addUser(res.user));
            } catch (e) {
                console.log(e);
            }
        }
        if (!token) router.push("/login");
        else {
            getUser();
        }
    }, [token]);
    function logOut() {
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        dispatch(action.deleteUser());
        setToken("");
    }
    if (token) {
        return (
            <div>
                <h1>Thông tin cá nhân</h1>
                {!user ? (
                    <p>Không có dữ liệu</p>
                ) : (
                    <div>
                        <p>
                            <strong>Họ-tên:</strong> {user.fullname}
                        </p>
                    </div>
                )}

                <button onClick={logOut}>Đăng xuất</button>
            </div>
        );
    } else {
        return <div>Vui lòng đăng nhập</div>;
    }
};

export default profile;
