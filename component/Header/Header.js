import Link from "next/link";
import "./header.scss";
const Header = () => {
    return (
        <header className='header'>
            <Link href='/'>
                <a className='header__link'> Home </a>
            </Link>
            <Link href='/about'>
                <a className='header__link'> About </a>
            </Link>
            <Link href='/blog'>
                <a className='header__link'> Blog </a>
            </Link>
            <Link href='/shows'>
                <a className='header__link'> Show </a>
            </Link>
        </header>
    );
};
export default Header;
