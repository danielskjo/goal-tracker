import React from 'react'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="app-header">
            <Link to="/">Goals</Link>{" "}
            <Link to="/goal">Goal</Link>{" "}
            <Link to="/register">Register</Link>{" "}
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Header
