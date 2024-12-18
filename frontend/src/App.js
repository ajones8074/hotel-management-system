import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage'
// import logo from './assets/logo512.png';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';

function App() {
    const [message, setMessage] = useState("")
    useEffect(() => {
        axios
        .get('http://localhost:3001/')
        .then((res) => {
            setMessage(res.data)
        })
        .catch((error) => console.log(error))
    })

    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
