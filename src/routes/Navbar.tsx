import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"}>
                <h3 className="navbar__logo">LOGO</h3>
            </Link>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <aside className="nav-right">
                <select>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
                <button>Sign Up</button>
            </aside>
            <Outlet />
        </nav>
    );
};


