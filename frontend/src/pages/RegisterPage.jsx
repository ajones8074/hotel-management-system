import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import SubmitButton from "../components/SubmitButton";
import "../styles/AuthStyle.css";

function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setLoading(true);
        // Handle Register Logic
    };

    return (
        <AuthCard title="Register">
            <form onSubmit={handleRegister}>
                <AuthInput 
                    label="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <AuthInput 
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
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
                <SubmitButton label="Register" loading={loading} type="submit" />
                <div className="text-center mt-3">
                    <Link to="/login">
                        <Button variant="outlined" color="secondary" fullWidth>
                            Already a Member
                        </Button>
                    </Link>
                </div>
            </form>
        </AuthCard>
    );
};

export default RegisterPage;