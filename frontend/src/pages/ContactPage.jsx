import React, { useState } from "react";
import { TextField, Grid2 } from "@mui/material";
import SubmitButton from "../components/SubmitButton";
import '../styles/ContactStyle.css';

function ContactPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
    };

    return (
        <div className="contact-page d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 m-4 shadow rounded">
                <div className="text-center mb-4">
                    <img src="/logo192.png" alt="logo" width="80" />
                </div>
                <h3 className="text-center mb-3 text-primary">Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <Grid2 container rowSpacing={2} columnSpacing={2}>
                        <Grid2 item size={6}>
                            <TextField
                                fullWidth
                                required
                                label="First Name"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Grid2>
                        <Grid2 item size={6}>
                            <TextField
                                fullWidth
                                required
                                label="Last Name"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid2>
                        <Grid2 item size={12}>
                            <TextField 
                                required
                                fullWidth
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid2>
                        <Grid2 item size={12}>
                            <TextField 
                                fullWidth
                                label="Phone Number"
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </Grid2>
                        <Grid2 item size={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={6}
                                label="Message"
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Grid2>
                        <Grid2 item size={12}>
                            <SubmitButton label="Submit" loading={loading} type="submit" />
                        </Grid2>
                    </Grid2>
                </form>
            </div>
        </div>
    )

};

export default ContactPage