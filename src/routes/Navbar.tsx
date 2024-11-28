import "./Navbar.css";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar__logo">LOGO</h3>
            <ul>
                <li>Home</li>
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


