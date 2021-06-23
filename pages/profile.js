import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as t from "../store/actions/token";
import getFactory from "../request/index";

const Profile = () => {
    const router = useRouter();
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    useEffect(() => {
        async function getUser() {
            try {
                const API = getFactory("user");
                const res = await API.getProfile(token.token);
                console.log(res);
                setUser(res);
            } catch (e) {
                console.log(e);
            }
        }
        if (!token.token) router.push("/login");
        else {
            getUser();
        }
    }, [token.token]);
    function logOut() {
        dispatch(t.deleteToken());
    }
    if (token.token) {
        return (
            <div>
                <h1>Thông tin cá nhân</h1>
                {Object.keys(user).length === 0 ? (
                    <p>Không có dữ liệu</p>
                ) : (
                    <div>
                        <p>
                            <strong>Họ-tên:</strong>{" "}
                            {`${user.last_name} ${user.first_name}`}
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
export default Profile;
