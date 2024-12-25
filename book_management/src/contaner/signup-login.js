import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import icon from "./images/icon.png";
import darkicon from "./images/black-logo.png";

const SignUpUser = () => {
    return (
        <div className="SignUp">
            <div className="flex flex-wrap h-screen w-full">
                <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-black rounded-r-3xl p-10 text-white">
                    <img src={icon} alt="icon" className="h-28" />
                    <h1 className="text-8xl font-light">BookWorm</h1>
                    <p className="text-3xl">LIBRARY</p>
                    <p className="mt-28 text-2xl text-center font-light">Already have Account? Sign In now</p>
                    <Link to='/login'>  <button className=" p-4 pl-24 pr-24 mt-12 border-2 border-white bg-transparent rounded-xl text-2xl"> SIGN IN </button></Link>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-1/2 p-10">
                    <div className="flex gap-4">
                        <h1 className="text-5xl mt-6">Sign Up</h1>
                        <img src={darkicon} alt="icon" className="h-24" />
                    </div>
                    <p className="text-lg mt-6 mb-2">Please enter your information to sign up.</p>
                    <div className="flex gap-4  mt-6">
                        <input type="text" placeholder="First Name" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                        <input type="text" placeholder="Last Name" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    </div>
                    <div className="flex gap-4 mt-6">
                        <input type="text" placeholder="Contact No" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                        <input type="text" placeholder="Email" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    </div>
                    <div className="flex gap-4 mt-6">
                        <input type="text" placeholder="Username" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                        <input type="text" placeholder="Password" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    </div>
                    <Link to='/login'><button className="p-4 pl-32 pr-32 mt-12 rounded-3xl border-2 border-black bg-black text-2xl text-white hover:bg-white hover:text-black">SIGN UP</button></Link>
                </div>
            </div>
        </div>
    );
}
export const SignUpAdmin = () => {
    return (
        <div className="SignUp">
            <div className="flex flex-wrap h-screen w-full">
                <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-black rounded-r-3xl p-10 text-white">
                    <img src={icon} alt="icon" className="h-28" />
                    <h1 className="text-8xl font-light">BookWorm</h1>
                    <p className="text-3xl">LIBRARY</p>
                    <p className="mt-28 text-2xl text-center font-light">Already have Account? Sign In now</p>
                    <Link to='/login'> <button className=" p-4 pl-24 pr-24 mt-12 border-2 border-white bg-transparent rounded-xl text-2xl"> SIGN IN </button></Link>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-1/2 p-10">
                    <div className="flex gap-4">
                        <h1 className="text-5xl mt-6">Sign Up</h1>
                        <img src={darkicon} alt="icon" className="h-24" />
                    </div>
                    <p className="text-lg mt-6 mb-2">Please enter your information to sign up.</p>
                    <input type="text" placeholder="Name" className="p-4 mt-6 w-96 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    <input type="text" placeholder="Email" className="p-4 mt-6 w-96 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    <div className="flex gap-4 mt-6">
                        <input type="text" placeholder="Username" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                        <input type="text" placeholder="Password" className="p-4 rounded-xl border-2 border-black  text-2xl text-white hover:text-black" />
                    </div>
                    <Link to='/login'><button className="p-4 pl-32 pr-32 mt-12 rounded-3xl border-2 border-black bg-black text-2xl text-white hover:bg-white hover:text-black">SIGN UP</button></Link>
                </div>
            </div>
        </div>
    );
}

export const Login = () => {
    const [role, setRole] = useState('');
    const [role2, setRole2] = useState('');
    const navigate = useNavigate();
    const handleSignUp = () => {
        if (role === 'User') {
            navigate('/signupuser');
        } else if (role === 'Admin') {
            navigate('/signupadmin');
        }
    };
    const handleLogin = () => {
        if (role2 === 'User') {
            navigate('/User/Home');
        } else if (role2 === 'Admin') {
            navigate('/Admin/Home');
        }
    };
    return (
        <div className="Login">
            <div className="flex flex-wrap h-screen w-full">
                <div className="flex flex-col justify-center items-center h-screen w-1/2 p-10 font-['Montserrat']">
                    <img src={darkicon} alt="icon" className="h-20" />
                    <h1 className="text-5xl mt-6">Welcome Back !!</h1>
                    <p className="text-lg mt-6 mb-2">Please enter your credentials to log in</p>
                    <input type="text" placeholder="Username" className="p-3 pr-16 mt-6 rounded-xl border-2 border-black text-2xl text-white hover:text-black" />
                    <input type="password" placeholder="Password" className="p-3 pr-16 mt-6 rounded-xl border-2 border-black text-2xl text-white hover:text-black" />
                    <select className="p-2 pl-24 pr-24 mt-6 border-2 border-black rounded-xl text-2xl" value={role2} onChange={(e) => setRole2(e.target.value)} >
                        <option value="" disabled className="text-black">Select</option>
                        <option value="User" className="text-black">User</option>
                        <option value="Admin" className="text-black">Admin</option>
                    </select>
                    <Link to="/forgot"> <h2>Forgot password?</h2></Link>
                    <button className="p-3 pl-32 pr-32 mt-6 rounded-3xl border-2 border-black bg-black text-2xl text-white hover:bg-white hover:text-black" onClick={handleLogin} > SIGN IN </button>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-black rounded-l-3xl p-10 text-white">
                    <img src={icon} alt="icon" className="h-24" />
                    <h1 className="text-8xl font-light">BookWorm</h1>
                    <p className="text-3xl">LIBRARY</p>
                    <p className="mt-28 text-2xl mb-10">New to our platform? Sign Up now.</p>
                    <div className="flex gap-3">
                        <select className="p-2 pl-8 pr-8 border-2 border-white bg-transparent rounded-xl text-2xl" value={role} onChange={(e) => setRole(e.target.value)} >
                            <option value="" disabled className="text-black">Select</option>
                            <option value="User" className="text-black">User</option>
                            <option value="Admin" className="text-black">Admin</option>
                        </select>
                        <button className="pl-8 pr-8 border-2 border-white bg-transparent rounded-xl text-2xl" onClick={handleSignUp} > SignUp </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUpUser;
