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
                    <Route path="/goal" element={<GoalPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<GoalsListPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

