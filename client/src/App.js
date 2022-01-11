import './App.css';
import {useState, useEffect} from "react";

function App() {
  let [goals, setGoals] = useState([])

  useEffect(() => {
    getGoals()
  }, [])

  let getGoals = async () => {
    let response = await fetch('/api/goals/')
    let data = await response.json()
    setGoals(data["data"])
    console.log(data["data"])
  }

  return (
    <div>
      <p>Hey</p>
        <div>
          {goals.map((goal, index) => (
              <p key={index}>{goal["title"]}</p>
          ))}
        </div>
    </div>
  );
}

export default App;
