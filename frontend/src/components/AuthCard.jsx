import React from "react";
import "../styles/AuthStyle.css";

const AuthCard = ({ title, children }) => {
    return(
        <div className="auth-page d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 m-4 shadow rounded">
                <div className="text-center mb-4">
                    <img src="/logo192.png" alt="logo" width="80" />
                </div>
                <h3 className="text-center mb-3 text-primary">{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default AuthCard;