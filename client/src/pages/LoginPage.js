import React, {useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/auth/login', {
            method: 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        }).then(res => {
            if (res.status === 200) return res.json()
            else console.log('There has been some error')
        }).then(data => {
            console.log('This came from the server', data)
            sessionStorage.setItem('token', data.access)
            navigate('/')
            window.location.reload()
        }).catch(err => console.log('There was an error', err))
    }

    return (
        <div>
            {token && token !== '' && token !== undefined ?
                <Navigate to='/'/> :
                <div>
                    <h1>Login</h1>
                    <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' placeholder='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleSubmit}>Login</button>
                </div>
            }
        </div>
    )
}

export default LoginPage