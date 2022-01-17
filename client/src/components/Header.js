import React from 'react'
import {Link} from "react-router-dom";


const Header = () => {
    const token = sessionStorage.getItem('token')

    const handleLogout = () => {
        sessionStorage.removeItem('token')
    }

    return (
        <div className="app-header">
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
