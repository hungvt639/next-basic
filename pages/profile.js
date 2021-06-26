import React from "react";
import { useRouter } from "next/router";
import Header from "../components/header/header";
import { useSelector } from "react-redux";

import { useAuth } from "../components/contexts/auth";

const profile = () => {
    const { users, loading, logout } = useAuth();
    const user = useSelector((s) => s.user.user);
    const router = useRouter();
    function logOut() {
        logout();
        router.push("/login");
    }
    return (
        <div>
            <Header />
            {!loading && user ? (
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
            ) : (
                <div>Loading...!</div>
            )}
        </div>
    );
};

export default profile;
