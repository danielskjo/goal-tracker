import React, {useState} from 'react'

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Register</h1>
            <div>
                <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='text' placeholder='password' value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleSubmit}>Register</button>
            </div>
        </div>
    )
}

export default RegisterPage