import React from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const LoginPage = () => {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        fetch('/api/auth/login', {
            method: 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': formData.get('email'),
                'password': formData.get('password')
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
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            }
        </div>
    )
}

export default LoginPage