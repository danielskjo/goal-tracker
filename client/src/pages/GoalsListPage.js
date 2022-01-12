import React from 'react'

const GoalsListPage = () => {
    // let [goals, setGoals] = useState([])
    //
    // useEffect(() => {
    //     getGoals()
    // }, [])
    //
    // let getGoals = async () => {
    //     let response = await fetch('/api/goals/')
    //     let data = await response.json()
    //     setGoals(data["data"])
    // }

    return (
        <div>
            {/*<div>*/}
            {/*    <h1>Goals (Count: {goals.length}</h1>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {goals.map((goal, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            <h3>{goal["title"]}</h3>*/}
            {/*            <p>{goal["description"]}</p>*/}
            {/*            <p>{goal["date"]}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            Goals List Page
        </div>
    )
}

export default GoalsListPage