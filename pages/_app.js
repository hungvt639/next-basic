import cookies from "next-cookies";
import jwt from "jsonwebtoken";
import { Provider } from "react-redux";
import { useStore } from "../store/store";
import "../public/css/index.css";
import { AuthProvider, ProtectRoute } from "../components/contexts/auth";
function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    return (
        <Provider store={store}>
            <AuthProvider>
                <ProtectRoute>
                    <Component {...pageProps} />
                </ProtectRoute>
            </AuthProvider>
        </Provider>
    );
}
// App.getInitialProps = async ({ Component, ctx }) => {
//     console.log("____________");
//     // console.log("ctx", ctx);
//     const pageProps = Component.getInitialProps
//         ? await Component.getInitialProps(ctx)
//         : {};
// const cookie = ctx.req.headers.cookie.split("; ");
// const tokens = cookie.filter((token) => token.includes("token="));
// if (tokens.length) {
//     let token = tokens[0].split("=")[1];
//     jwt.verify(token, process.env.secret, async (err, payload) => {
//         if (payload) {
//             pageProps.user = payload;
//             // return { pageProps: pageProps };
//         }
//     });
// }
// const url = ctx.req.url;
// if (
//     !pageProps.use &&
//     url.substring(0, 6) !== "/login" &&
//     url.substring(0, 9) !== "/register"
// ) {
//     ctx.res.writeHead(301, {
//         Location: "/login",
//     });
//     ctx.res.end();
// }
// console.log("ctx", ctx);
// console.log(
//     "__________________________________________________________________________________________________"
// );
//     return { pageProps: pageProps };
// };

export default App;
