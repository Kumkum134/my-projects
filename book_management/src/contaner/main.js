import React, { useState } from "react";
import logo from "./images/icon.png"
import { Link } from "react-router-dom";

const Main = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    return (
        <div className="Main">
            <div className="w-full bg-black flex flex-wrap justify-between text-white p-5">
                <div className="flex gap-4 items-center">
                    <img src={logo} alt="Logo" className="h-11" />
                    <h1 className="text-3xl">BookWorm</h1>
                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <Link to="/login"><button className="p-2 pl-6 pr-6 rounded-full border-2 hover:bg-white hover:text-black">Login</button></Link>
                    <Link to="/start"><button className="p-2 pl-6 pr-6 rounded-full border-2 hover:bg-white hover:text-black">Get Started</button></Link>
                </div>
                <div className="flex md:hidden items-center">
                    <button className="p-2 rounded-full hover:bg-white hover:text-black" onClick={toggleMenu}>=</button>
                </div>
                {isMenuOpen && (<div className="w-full flex flex-col items-center mt-4 md:hidden">
                    <Link to="/login"><button className="p-2 pl-6 pr-6 rounded-full border-2 hover:bg-white hover:text-black">Login</button></Link>
                    <Link to="/start"><button className="p-2 pl-6 pr-6 rounded-full border-2 hover:bg-white hover:text-black">Get Started</button></Link>
                </div>)}
            </div>

            <div className="text-center w-full p-10">
                <h1 className="text-6xl font-bold">Cloud Cataloging</h1>
                <p className="text-2xl pt-6">Your library has never looked so good.</p>
                <p className="text-2xl pt-2"> Book, Board Games, Movies, Music and Video Games.</p>
                <Link to="/start"><button className="p-3 pl-20 pr-20 mt-6 rounded-full border-4 border-black bg-black text-2xl text-white hover:bg-white hover:text-black">Get Started</button></Link>
            </div>
            <div className="text-center w-full p-10">
                <h1 className="text-5xl font-bold">Create & Share Your Collection</h1>
                <p className="text-base pt-6">Our library management service caters to libraries, schools, organizations, and home catalogs.<br />
                    Our online software lets you create multiple collections, catalog books, board games, movies, music, <br />
                    and video games, create tags, leave notes, import/export, share your collections and much more.<br />
                    We offer two different subscription options to best fit your needs. Libib is the best place for<br />
                    cataloging and managing your media available online. Now which version is the best for you?</p>
            </div>
            <div className="flex bg-black h-96 p-32 pt-16 text-white text-center gap-32 relative">
                <div className="h-52 w-20">
                    <button className="mt-4">Platform</button>
                    <button className="mt-4">Home</button>
                    <button className="mt-4">Pricing</button>
                    <button className="mt-4">Sign Up</button>
                </div>
                <div className="h-52 w-20">
                    <button className="mt-4">Learn</button>
                    <button className="mt-4">Contact</button>
                    <button className="mt-4">Support</button>
                    <button className="mt-4">Blog</button>
                    <button className="mt-4">FAQs</button>
                    <button className="mt-4">Careers</button>
                </div>
                <div className="h-52 w-20">
                    <button className="mt-4">Policies</button>
                    <button className="mt-4">Privact</button>
                    <button className="mt-4">Security</button>
                    <button className="mt-4">Terms</button>
                    <button className="mt-4">Sitemap</button>
                </div>
                <div className="h-52 w-20">
                    <button className="mt-4">Social</button>
                    <button className="mt-4">YouTube</button>
                    <button className="mt-4">Bluesky</button>
                    <button className="mt-4">TikTok</button>
                    <button className="mt-4">Instagram</button>
                </div>
                <div className="h-52 w-80">
                    <img src={logo} alt="Logo" className="h-20" />
                    <p>Whether you have 50 items or 5,000 items, your library is precious. With Libib, managing your own private library of books, board games, movies, music & video games is a snap. Create your account today.</p>
                </div>
                <h1 className="absolute bottom-10 left-1/3">© BookWorm.com / All rights reserved</h1>
            </div>
        </div>
    );
}

export default Main;