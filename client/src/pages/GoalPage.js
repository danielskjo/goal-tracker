import React, {useEffect, useState} from 'react'
import {Navigate, useNavigate, useParams} from 'react-router-dom';

const GoalPage = () => {
    let {id} = useParams();
    let [goal, setGoal] = useState(null)
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        getGoal()
    }, [id])

    let getGoal = async () => {
        if (id === 'new') return

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        })

        await fetch(`/api/goals/${id}`, {
            method: 'GET',
            headers: headers,
        }).then(res => {
            if (res.status === 200) return res.json()
            else console.log('There has been some error')
        }).then(data => {
            console.log('This came from the server', data)
            setGoal(data)
        }).catch(err => console.log('There was an error', err))
    }

    return (
        <div>
            {token && token !== '' && token !== undefined ?
                <div>
                    <h1>{goal && goal.title}</h1>
                    <h3>{goal && goal.id}</h3>
                    <p>{goal && goal.description}</p>
                    <p>{goal && goal.date}</p>
                </div> :
                <Navigate to='/login'/>
            }
        </div>
    )
}

export default GoalPage