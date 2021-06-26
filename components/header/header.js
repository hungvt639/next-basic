import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as action from "../../store/actions/user";
import getFactory from "../../request/index";
import cookies from "next-cookies";
import { useAuth } from "../contexts/auth";
const Header = (props) => {
    // const { user } = useAuth();
    // console.log("h", user);
    // const router = useRouter();
    // const [token] = useState(cookies("/").token);
    // const [loading, setLoading] = useState(true);

    // const dispatch = useDispatch();
    // const user = useSelector((state) => state.user.user);

    // useEffect(() => {
    //     async function getUser() {
    //         try {
    //             console.log("fdsdsfd");
    //             const API = getFactory("user");
    //             const res = await API.getProfile();
    //             dispatch(action.addUser(res.user));
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     if (!token) router.push("/login");
    //     else {
    //         if (!user) getUser();
    //     }
    //     setLoading(false);
    // }, []);
    // console.log("u: ", props);
    // const user = useSelector((state) => state.user.user);
    // console.log(user);
    // if (!loading && user) {
    //     return (
    //         <div className="header">
    //             <Link href="/profile">
    //                 <p>Xin chào: {user.fullname}</p>
    //             </Link>
    //         </div>
    //     );
    // } else return <p>Loading...</p>;
    return <div>Header</div>;
};
// Header.getInitialProps = async (ctx) => {
//     console.log("ctx: ", ctx);
//     return { u: "abc" };
// };
// export async function getServerSideProps(context) {
//     console.log("context", context);
//     return {
//         props: { u: "uuuuu" }, // will be passed to the page component as props
//     };
// }
export default Header;
