import React from 'react'
import {useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FlagIcon from '@mui/icons-material/Flag';


const Header = () => {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('')
        window.location.reload()
    }


    const navigateToRegister = () => {
        navigate('register')
        window.location.reload()
    }

    const navigateToLogin = () => {
        navigate('login')
        window.location.reload()
    }

    const handleLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('token')
        navigate('')
        window.location.reload()
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <FlagIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Button color="inherit" onClick={navigateToHome}>Home</Button>
                    </Typography>
                    {token && token !== '' && token !== undefined ?
                        <Button color="inherit" onClick={handleLogout}>Logout</Button> :
                        (<div>
                            <Button color="inherit" onClick={navigateToRegister}>Register</Button>
                            {" "}
                            <Button color="inherit" onClick={navigateToLogin}>Login</Button>
                        </div>)
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
