import React, { createContext, useState, useContext, useEffect } from "react";
import cookies from "next-cookies";
import Router, { useRouter } from "next/router";
import getFactory from "../../request";
import LoadingScreen from "./LoadingScreen";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../store/actions/user";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    const user = useSelector((s) => s.user.user);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        async function loadUserFromCookies() {
            const token = cookies("/").token;
            if (token) {
                try {
                    const API = getFactory("user");
                    const res = await API.getProfile();
                    // setUser(res.user);
                    dispatch(action.addUser(res.user));
                } catch (e) {
                    console.log(e);
                }
            } else if (
                window.location.pathname !== "/login" &&
                window.location.pathname !== "/register"
            ) {
                window.location.pathname = "/login";
            }
            setLoading(false);
        }
        loadUserFromCookies();
    }, []);

    const login = async (username, password) => {
        setLoading(true);
        try {
            console.log("login");
            const API = getFactory("user");
            const res = await API.signIn({
                username: username,
                password: password,
            });
            // setUser(res.user);
            dispatch(action.addUser(res.user));
            document.cookie = `token=${res.token}; path=/`;
            window.location.pathname = "/";
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const logout = () => {
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        // setUser(null);
        dispatch(action.deleteUser());
        window.location.pathname = "/login";
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated: !!user, user, login, loading, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    console.log("protectRoute______", useAuth());
    if (isLoading) return <LoadingScreen />;
    // if (!isLoading && !isAuthenticated) {
    //     if (typeof window !== "undefined") {
    //         if (
    //             window.location.pathname !== "/login" &&
    //             window.location.pathname !== "/register"
    //         ) {
    //             window.location.pathname = "/login";
    //             return;
    //         }
    //     }
    // }
    // if (typeof window !== "undefined") {
    //     if (
    //         !isAuthenticated &&
    //         (window.location.pathname !== "/login" ||
    //             window.location.pathname !== "/register")
    //     ) {
    //         window.location.pathname = "/login";
    //         return;
    //     }
    // }

    return children;
};
