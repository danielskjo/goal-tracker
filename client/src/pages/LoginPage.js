import React, {useState} from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
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
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (
         <div>
            <h1>Login</h1>
            <div>
                <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='text' placeholder='password' value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage