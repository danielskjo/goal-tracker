import React, {useState} from 'react'

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const token = sessionStorage.getItem('token')

    const handleSubmit = () => {
        fetch('/api/auth/register', {
            method: 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password
            })
        }).then(res => {
            if (res.status === 201) return res.json()
            else alert('There has been some error')
        }).then(data => {
            console.log('This came from the server', data)
            sessionStorage.setItem('token', data.access)
        }).catch(err => console.log('There was an error', err))
    }

    return (
        <div>
            {token && token !== '' && token !== undefined ? ('You are logged in with this token ' + token) :
                <div>
                    <h1>Register</h1>
                    <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' placeholder='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleSubmit}>Register</button>
                </div>}
        </div>
    )
}

export default RegisterPage