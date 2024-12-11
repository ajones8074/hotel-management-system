import React from "react";
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from '../assets/error.json'; // Add an error animation

function ErrorPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
            <div style={{maxWidth: '400px'}}>
                <Lottie animationData={animationData} loop={true} />
            </div>
            <h2 className="mt-4">Oops! Page Not Found</h2>
            <p>The page you are looking for doesn't exist or an error occurred</p>
            <Link to={'/'}>
                <button className="btn btn-primary mt-3 px-4 py-2">
                    Go Back to Home
                </button>
            </Link>
        </div>
    );
}

export default ErrorPage;