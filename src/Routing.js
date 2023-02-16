import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

//import Header from './Header'
import LeftHeader from './LeftHeader';
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import Main from './src/screens/Main'
import About from './src/screens/About'
import AddProject from './src/screens/AddProject';
import Logout from './src/screens/Logout'
import Projects from './src/screens/Projects';
import Accounts from './src/screens/Accounts';
export default function Routing() {
    return (
        <div style={{
            background: 'white',
            minHeight: '100vh',
        }}>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<LeftHeader />}>
                        <Route index element={<Main />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signUp" element={<SignUp />} />
                        <Route path="addProject" element={<AddProject />} />
                        <Route path="about" element={<About />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="accounts" element={<Accounts />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
