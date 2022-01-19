import React, {useState, useEffect} from 'react'
import List from '@mui/material/List';

import GoalCard from "../components/GoalCard"
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const GoalsListPage = () => {
    const [goals, setGoals] = useState([])
    const [name, setName] = useState('')
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        getGoals()
    }, [])

    let getGoals = async () => {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        })

        fetch('/api/goals/', {
            method: 'GET',
            headers: headers,
        }).then(res => {
            if (res.status === 200) return res.json()
            else console.log('There has been some error')
        }).then(data => {
            console.log('This came from the server', data)
            setGoals(data.data)
        }).catch(err => console.log('There was an error', err))

        fetch('/api/auth/me', {
            method: 'GET',
            headers: headers,
        }).then(res => {
            if (res.status === 200) return res.json()
            else console.log('There has been some error')
        }).then(data => {
            console.log('This came from the server', data)
            setName(data.name)
        }).catch(err => console.log('There was an error', err))
    }
    return (
        <div>
            {token && token !== '' && token !== undefined ?
                <div>
                    <h1>Welcome {name}!</h1>
                    <h3>Here are your goals:</h3>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        {goals.map((goal, index) => (
                            <GoalCard key={index} goal={goal}/>
                        ))}
                    </List>
                </div> :
                'Home Page'
            }
            <Fab style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed'
            }} color='primary' aria-label='add'>
                <AddIcon/>
            </Fab>
        </div>
    )
}

export default GoalsListPage