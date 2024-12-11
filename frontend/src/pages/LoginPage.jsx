import React, { useState } from "react";
import { Button } from'@mui/material';
import { Link } from 'react-router-dom';
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import SubmitButton from "../components/SubmitButton";
import '../styles/AuthStyle.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true);
        //Handle Login Logic
    };

    return (
        <AuthCard title="Login">
            <form onSubmit={handleLogin}>
                <AuthInput 
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <AuthInput 
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton label="Login" loading={loading} type="submit" />
                <div className="text-center mt-3">
                    <Link to='/register'>
                        <Button variant="outlined" color="secondary" fullWidth>
                            Register
                        </Button>
                    </Link>
                </div>
            </form>
        </AuthCard>
    );
};

export default LoginPage;