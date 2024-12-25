import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "./home.css";
import logo from './image/logo.png';
import logo2 from './image/Profile Pic.jpeg';

function Homee() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const handleProfileToggle = () => {
        if (!isProfileOpen) {
            setIsProfileOpen(true);
            navigate('profile');
        } else {
            setIsProfileOpen(false);
            navigate(-1); 
        }
    };

    return (
        <>
            <div className="home">
                <div className="navbar1">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="button" onClick={handleProfileToggle}>
                        <img src={logo2} alt="profile" className="Profile" />
                    </div>
                </div>
                <div className="navbar2">
                    <Link to="/Home">
                        <input type="button" value="Home" className="btn3" />
                    </Link>
                    <Link to="create-quiz">
                        <input type="button" value="Create Quiz" className="btn3" />
                    </Link>
                </div>
                <Outlet />
            </div>
            <div className="body">
                <h1>Welcome to Quize</h1>
                <p>Quize is an online platform where you can test your knowledge.</p>
                <Link to="create-quiz">
                    <input type="button" value="Create Quiz" className="btn4" />
                </Link>
            </div>
            <div className="footer">
                &copy; 2023 Vidyard. All rights reserved.
            </div>
        </>
    );
}

export default Homee;
