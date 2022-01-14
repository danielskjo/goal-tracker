import React from "react"
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/Header";

import GoalsListPage from "./pages/GoalsListPage";
import GoalPage from "./pages/GoalPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" exact element={<GoalsListPage/>}/>
                    <Route path="/goals/:id" element={<GoalPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

