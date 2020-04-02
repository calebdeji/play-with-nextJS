import Link from "next/link";
import style from "./header.module.css";
const Header = () => {
    return (
        <header style={style.header}>
            <Link href='/main'>
                <a> Home </a>
            </Link>
            <Link href='/about'>
                <a> About </a>
            </Link>
        </header>
    );
};
export default Header;
