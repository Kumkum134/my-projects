import React from "react";
import icon from "./images/icon.png";
import darkicon from "./images/black-logo.png";
import { Link } from "react-router-dom";

const Forgot = () => {
    return (
        <div className="Forgot">
            <div className="flex flex-wrap h-screen w-full">
                <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-black rounded-r-3xl p-10 text-white">
                    <img src={icon} alt="icon" className="h-28" />
                    <h1 className="text-8xl font-light">BookWorm</h1>
                    <p className="text-3xl">LIBRARY</p>
                    <p className="mt-28 text-4xl text-center font-light">"Your premier digital library <br /> for borrowing and reading <br /> books"</p>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-1/2 p-10">
                    <img src={darkicon} alt="icon" className="h-20" />
                    <h1 className="text-5xl mt-6">Forgot Password</h1>
                    <p className="text-lg mt-6 mb-2">Please enter your username</p>
                    <input type="text" placeholder="Username" className="p-3 pr-20 mt-6 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    <Link to='/mailbox'><button className="p-3 pl-20 pr-20 mt-6 rounded-3xl border-2 border-black bg-black text-2xl text-white hover:bg-white hover:text-black">RESET PASSWORD</button></Link>
                </div>
                <div></div>
            </div>
        </div>
    );
}
export default Forgot;

export const Mailbox = () => {
    return (
        <div className="Mailbox">
            <div className="flex flex-wrap h-screen w-full">
                <div className="flex flex-col justify-center items-center h-screen w-1/2 p-10">
                    <img src={darkicon} alt="icon" className="h-20" />
                    <h1 className="text-5xl mt-6">Check your Mailbox</h1>
                    <p className="text-lg mt-6 mb-14">Please enter the OTP to proceed</p>
                    <input type="text" placeholder="OTP" className="p-3 pr-20 mt-6 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    <Link to='/newpassword'> <button className="p-3 pl-36 pr-36 mt-6 rounded-3xl border-2 border-black bg-black text-2xl text-white hover:bg-white hover:text-black">VERIFY</button></Link>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-black rounded-l-3xl p-10 text-white">
                    <img src={icon} alt="icon" className="h-28" />
                    <h1 className="text-8xl font-light">BookWorm</h1>
                    <p className="text-3xl">LIBRARY</p>
                    <p className="mt-28 text-4xl text-center font-light">"Your premier digital library <br /> for borrowing and reading <br /> books"</p>
                </div>
            </div>
        </div>
    );
}

export const NewPassword = () => {
    return (
        <div className="NewPassword">
            <div className="flex flex-wrap h-screen w-full">
                <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-black rounded-l-3xl p-10 text-white">
                    <img src={icon} alt="icon" className="h-28" />
                    <h1 className="text-8xl font-light">BookWorm</h1>
                    <p className="text-3xl">LIBRARY</p>
                    <p className="mt-28 text-4xl text-center font-light">"Your premier digital library <br /> for borrowing and reading <br /> books"</p>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-1/2 p-10">
                    <img src={darkicon} alt="icon" className="h-20" />
                    <h1 className="text-5xl mt-6">Reset Password</h1>
                    <p className="text-lg mt-6 mb-14">Please enter your new password</p>
                    <input type="text" placeholder="New Password" className="p-4 pr-20 mt-6 rounded-2xl border-2 border-black  text-2xl text-white hover:text-black" />
                    <input type="text" placeholder="Confirm Password" className="p-4 pr-20 mt-6 rounded-2xl border-2 border-black  text-2xl text-white hover:text-black" />
                    <Link to='/login'> <button className="p-4 pl-20 pr-20 mt-6 rounded-3xl border-2 border-black font-bold bg-black text-2xl text-white hover:bg-white hover:text-black">RESET PASSWORD</button></Link>
                </div>
            </div>
        </div>
    );
}