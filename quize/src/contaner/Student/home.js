import React, { useState } from "react";
import "./home.css";
import logo from './image/logo.png';
import Profile from './image/Profile Pic.jpeg';
import { useNavigate, Link, Outlet } from "react-router-dom";

function Home() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const handleProfileToggle = () => {
        if (!isProfileOpen) {
            setIsProfileOpen(true);
            navigate('SProfile');
        } else {
            setIsProfileOpen(false);
            navigate(-1); 
        }
    };

    return (
        <>
            <div className="homes">
                <div className="navbars1">
                    <img src={logo} alt="logo" className="logos" />
                    <div className="buttons" onClick={handleProfileToggle}>
                        <img src={Profile} alt="profile" className="Profiles" />
                    </div>
                </div>
                <div className="navbars2">
                    <Link to="/SHome">
                        <input type="button" value="Home" className="btns3" />
                    </Link>
                    <Link to="quiz">
                        <input type="button" value="Quiz" className="btns3" />
                    </Link>
                    <Link to="blog">
                        <input type="button" value="Blog" className="btns3" />
                    </Link>
                    <Link to="about">
                        <input type="button" value="About" className="btns3" />
                    </Link>
                    <Link to="services">
                        <input type="button" value="Services" className="btns3" />
                    </Link>
                </div>
                <Outlet />
            </div>
            <div className="bodys">
                <h1>Welcome to Quize</h1>
                <p>Quize is an online platform where you can test your knowledge.</p>
                <Link to="quiz">
                    <input type="button" value="Start Quiz" className="btns4" />
                </Link>
            </div>
            <div className="footer">&copy; 2023 Vidyard. All rights reserved.</div>
        </>
    );
}

export default Home;
