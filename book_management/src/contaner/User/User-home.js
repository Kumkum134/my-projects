import React from "react";
import icon from "../images/icon.png";
import Dashboard from "../images/Dashboard.png";
import Catalog from "../images/User-Catalog.png";
import Books from "../images/User_Book.png";
import Users from "../images/User.png";
import Branches from "../images/Branches.png";

const UserHome = () => {
    return (
        <div className="UserHome-Page flex">
            <div className='h-screen w-2/12 bg-black text-white text-center flex flex-col justify-between'>
                <div>
                    <div className="flex justify-center pt-9">
                        <img src={icon} alt="Icon" className="h-10 " />
                    </div>
                    <h1 className="text-2xl font-light">BookWorm</h1>
                    <p className="text-xs">LIBRARY</p>
                    <div>
                        <button className="flex w-full p-2 gap-4 pl-5 mt-5">
                            <img src={Dashboard} alt="Dashboard" className="h-5" />
                            Dashboard
                        </button>
                        <button className="flex w-full p-2 gap-4 pl-5 mt-5">
                            <img src={Catalog} alt="Catalog" className="h-5" />
                            Catalog
                        </button>
                        <button className="flex w-full p-2 gap-4 pl-5 mt-5">
                            <img src={Books} alt="Books" className="h-5" />
                            Books
                        </button>
                        <button className="flex w-full p-2 gap-4 pl-5 mt-5">
                            <img src={Users} alt="Users" className="h-5" />
                            Users
                        </button>
                        <button className="flex w-full p-2 gap-4 pl-5 mt-5">
                            <img src={Branches} alt="Branches" className="h-5" />
                            Branches
                        </button>
                    </div>
                </div>
                <button className="mb-5">Log Out</button>
            </div>
            <div className="w-full h-16 bg-slate-500"></div>
        </div>
    );
}
export default UserHome;
