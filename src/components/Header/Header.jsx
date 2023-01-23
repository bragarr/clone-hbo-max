import { Link } from "react-router-dom";
import hboLogo from '../../assets/img/hbo-max.png';
import './Header.css'

export function Header() {
    return (
        <header className="clone__header">
            <nav className="navigation__bar">
                <Link to={"/"}>
                    <img src={hboLogo} className="site__logo" alt="HBO MAX" />
                </Link>
                <div>
                    <Link to={"signIn"} className="link__subscription">SING IN</Link>
                    <Link to={"signUp"} className="link__subscription link__subscription--special ">SING UP NOW</Link>
                </div>
            </nav>
        </header>
    );
};