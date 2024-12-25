import React from "react";
import profile1 from "./image/profile1.jpg"
import profile2 from "./image/profile2.jpg"
import profile3 from "./image/profile3.jpg"
import profile4 from "./image/profile4.jpg"
import profile5 from "./image/profile5.jpg"


const Projrcts = () => {
    return (
        <div className="p-2 w-full">
            <h1 className="text-[18rem] font-bold border-t-2 border-b-2 border-black w-full mb-8">PROJECTS</h1>
            <h2 className="text-3xl font-bold pt-8 pb-8">List Project</h2>
            <div className="flex w-full h-[36rem] gap-5">
                <div className="h-full w-1/2">
                    <img src={profile1} alt="profile1" className="h-[330px] w-full" />
                    <h3 className="text-2xl mt-3 font-bold">User Experience Design Dashboard Hotel Management</h3>
                    <p className="text-[18px] mt-3 text-slate-500">n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-50 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                    <button className="w-[8rem] bg-red-50 text-red-700 rounded-2xl">Presentation</button>
                </div>
                <div className="h-full w-1/2">
                    <img src={profile2} alt="profile2" className="h-[330px] w-full" />
                    <h3 className="text-2xl mt-3 font-bold">Bring of User Experience Design to Policy Making, How to Impact Society</h3>
                    <p className="text-[18px] mt-3 text-slate-500">User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec</p>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 mt-5 rounded-2xl">Research</button>
                    <button className="w-[8rem] bg-red-50 text-red-700 rounded-2xl">Presentation</button>
                </div>
            </div>
            <div className="w-full h-[48rem]">
                <img src={profile3} alt="profile3" className="w-full h-[34rem]" />
                <h3 className="text-2xl mt-3 font-bold">UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons</h3>
                <p className="text-[18px] mt-3 text-slate-500">There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems.</p>
                <button className="w-[6rem] mt-5 mr-4 bg-violet-50 text-violet-700 rounded-2xl">Design</button>
                <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                <button className="w-[8rem] mr-4 bg-red-50 text-red-700 rounded-2xl">Presentation</button>
                <button className="w-[9rem] bg-indigo-50 text-blue-700 rounded-2xl">Collaboration</button>
            </div>
            <div className="flex w-full h-[32rem] gap-10">
                <div className="h-full w-1/2 ">
                    <img src={profile4} alt="profile4" className="h-[330px] w-full" />
                    <h3 className="text-2xl mt-3 font-bold">Icon Package of Slin Icon</h3>
                    <p className="text-[18px] mt-3 text-slate-500">An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-50 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Branding</button>
                    <button className="w-[6rem] bg-red-50 text-red-700 rounded-2xl">Identity</button>
                </div>
                <div className="h-full w-1/2 ">
                    <img src={profile5} alt="profile5" className="h-[330px] w-full" />
                    <h3 className="text-2xl mt-3 font-bold">UX review presentations</h3>
                    <p className="text-[18px] mt-3 text-slate-500">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-50 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                    <button className="w-[8rem] bg-red-50 text-red-700 rounded-2xl">Presentation</button>
                </div>
            </div>
        </div>
    );
}
export default Projrcts;