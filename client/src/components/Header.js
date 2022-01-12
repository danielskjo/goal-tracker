import React from 'react'
import {Link} from "react-router-dom";


const Header = () => {
    const handleLogout = () => {
        sessionStorage.removeItem('token')
    }

    return (
        <div className="app-header">
            <Link to="/">Goals</Link>{" "}
            <Link to="/goal">Goal</Link>{" "}
            <Link to="/register">Register</Link>{" "}
            <Link to="/login">Login</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Header
