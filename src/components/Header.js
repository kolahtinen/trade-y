import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const Header = () => {

    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <LoginButton/>
            <Link to="/sell">Sales</Link>
        </div>
    )
}

export default Header;