import React from "react";
import { Link } from 'react-router-dom'; // For routing
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

function MainPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center
            vh-100 bg-white text-center">
            <div style={{ maxWidth: '400px' }}>
                <Lottie animationData={animationData} loop={true} />
            </div>
            <h2 className="mt-4">It looks like you're not logged in</h2>
            <p>Please log in to access the Hotel Management System</p>
            <Link to="/login">
                <button className="btn btn-primary mt-3 px-4 py-2">
                    Log In
                </button>
            </Link>
        </div>
    );
}

export default MainPage;