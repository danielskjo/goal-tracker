import React, {useState, useEffect} from 'react'

const GoalsListPage = () => {
    let [goals, setGoals] = useState([])
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
    }

    return (
        <div>
            {token && token !== '' && token !== undefined ?
                <div>
                    <h1>Goals (Count: {goals.length})</h1>
                    <div>
                        {goals.map((goal, index) => (
                            <div key={index}>
                                <h3>{goal["title"]}</h3>
                                <p>{goal["description"]}</p>
                                <p>{goal["date"]}</p>
                            </div>
                        ))}
                    </div>
                </div> :
                'Home Page'
            }
        </div>
    )
}

export default GoalsListPage