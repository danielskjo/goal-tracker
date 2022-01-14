import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

const GoalPage = () => {
    let {id} = useParams();
    let [goal, setGoal] = useState(null)
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        getGoal()
    }, [id])

    let getGoal = async () => {
        if (id == 'new') return

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        })

        fetch(`/api/goals/${id}`, {
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
                (<div>
                    <h1>{goal.title}</h1>
                    <h3>{goal.id}</h3>
                    <p>{goal.description}</p>
                    <p>{goal.date}</p>
                </div>) :
                `Goal  Page`
            }
        </div>
    )
}

export default GoalPage