// import Page from "../components/page";
import Link from "next/link";
import Header from "../components/header/header";
export default function Index() {
    return (
        <div>
            {/* <Header /> */}
            <p>Hello all</p>
            <Link href="/profile">Profile</Link>
        </div>
    );
}
