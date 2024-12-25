import React from "react";
import logo from "./images/main.jpg";

function Main() {
    const Search = () => {
        alert("Search is active")
    }
    return (
        <div className="h-96 md:h-[30rem] lg:h-[48rem] flex justify-center items-center relative w-full">
            <img src={logo} className="w-full h-full absolute" alt="img1"></img>
            <div className="absolute text-center text-white">
                <h1 className="text-6xl md:text-8xl lg:text-9xl my-2 md:my-4 lg:my-6">Cooked</h1>
                <h2 className="text-2xl md:text-4xl lg:text-5xl my-2 md:my-4 lg:my-6">Cooking.Made.Easy</h2>
                <div className="bg-white flex rounded-xl lg:h-12 md:h-10 h-9 lg:w-96 md:w-80 w-52">
                    <input type="search" placeholder="Type to Search" className="h-full w-10/12 lg:p-4 md:p-3 p-3 text-black rounded-l-xl"></input>
                    <p className="text-2xl md:text-3xl lg:text-4xl pl-2 cursor-pointer" onClick={Search}>&#x1F50E;</p>
                </div>
            </div>
        </div>
    );
}
export default Main;