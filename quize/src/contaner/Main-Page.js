import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from './logo.png';
import "./Main.css";

export const LogoAnimation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const lastLetter = document.querySelector(".Mlogo-container");

        lastLetter.addEventListener("animationend", () => {
            setTimeout(() => {
                navigate('/main');
            }, 3000);
        });

        return () => {
            lastLetter.removeEventListener("animationend", () => { });
        };
    }, [navigate]);

    return (
        <div className="Mlogo-container">
            <div className="Mlogo">
                <span>Q</span>
                <span>u</span>
                <span>i</span>
                <span>z</span>
                <span>e</span>
            </div>
        </div>
    );
};
const MainPage = () => {
    return (<div className="Main">
        <img src={logo} alt="logo" className="logo1" />
        <div className="text">
            <h1>Welcome to Quize</h1>
            <p>Quize is an online platform where Teachera can create the MCQ Quiz and<br /> Student can test their knowledge.</p>
        </div>
        <div className="main">
            <Link to={"/TSignup"}> <input type="button" value="Teacher" className="btn" /></Link>
            <Link to={"/SSignup"}> <input type="button" value="Student" className="btn" /></Link>
        </div>
        <Outlet />
    </div>
    );
}

export default MainPage;