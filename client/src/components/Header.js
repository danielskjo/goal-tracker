import React from 'react'
import {Link, useNavigate} from "react-router-dom";


const Header = () => {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('token')
        navigate('login')
        window.location.reload()
    }

    return (
        <div className="app-header">
            <Link to="/">Home</Link>
            {token && token !== '' && token !== undefined ?
                <button onClick={handleLogout}>Logout</button> :
                (<div>
                    <Link to="/register">Register</Link>
                    {" "}
                    <Link to="/login">Login</Link>
                </div>)
            }
        </div>
    )
}

export default Header
