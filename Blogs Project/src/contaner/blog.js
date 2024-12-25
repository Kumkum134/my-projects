import React from "react";
import blog1 from "./image/blog1.jpg"
import blog2 from "./image/blog2.jpg"
import blog3 from "./image/blog3.jpg"
import blog4 from "./image/blog4.jpg"
import blog5 from "./image/blog5.jpg"
import blog6 from "./image/blog6.jpg"
import blog7 from "./image/blog7.jpg"
import blog8 from "./image/blog8.jpg"
import blog9 from "./image/blog9.jpg"
import blog10 from "./image/blog10.jpg"

const Blog = () => {
    return (
        <div className="p-2 w-full">
            <h1 className="text-[18rem] font-bold border-t-2 border-b-2 border-black w-full">THE BLOG</h1>
            <div className="pt-9 w-full flex gap-2 h-[38rem]">
                <h2 className="font-bold text-3xl absolute">Recent blog posts</h2>
                <div className="pt-14 w-1/2 h-auto">
                    <img src={blog1} alt="blog1" className="h-64 w-full" />
                    <h5 className="text-[14px] pt-2 text-indigo-500 font-bold">Olivia Rhye , 1 Jan 2023</h5>
                    <h3 className="text-2xl pt-2 font-bold">UX review presentations</h3>
                    <p className="text-[18px] pt-2 text-slate-500">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <button className="w-[6rem] mt-4 bg-violet-200 mr-4 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] bg-indigo-50 mr-4 text-blue-700 rounded-2xl">Research</button>
                    <button className="w-[8rem] bg-red-100 text-red-700 rounded-2xl">Presentation</button>
                </div>
                <div className="pt-14 w-1/2 h-full">
                    <div className="flex gap-4 w-full">
                        <img src={blog2} alt="blog2" className="h-56 mr-3 w-[42rem]" />
                        <div>
                            <h5 className="text-[14px]  text-indigo-500 font-bold">Phoenix Baker • 1 Jan 2023</h5>
                            <h3 className="text-2xl pt-3 font-bold">Migrating to Linear 101</h3>
                            <p className="text-[18px] pt-3 text-slate-500">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>
                            <button className="w-[6rem] mt-5 mr-4 rounded-2xl bg-indigo-50 text-blue-700">Design</button>
                            <button className="w-[6rem]  bg-red-100 text-red-700 rounded-2xl">Research</button>
                        </div>
                    </div>
                    <div className="flex mt-3 gap-4 w-full">
                        <img src={blog3} alt="blog3" className="h-56 mr-3 w-[42rem]" />
                        <div>
                            <h5 className="text-[14px] text-indigo-500 font-bold">Lana Steiner • 1 Jan 2023</h5>
                            <h3 className="text-2xl pt-3 font-bold">Building your API Stack</h3>
                            <p className="text-[18px] pt-3 text-slate-500">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                            <button className="w-[6rem] mt-5 mr-4 rounded-2xl bg-green-200 text-green-700">Design</button>
                            <button className="w-[6rem]  bg-red-100 text-red-700 rounded-2xl">Research</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mb-28 gap-5 h-72">
                <img src={blog4} alt="blog4" className="h-full mr-4 w-1/2" />
                <div className="w-1/2">
                    <h5 className="text-[14px] text-indigo-500 font-bold">Olivia Rhye • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">Grid system for better Design User Interface</h3>
                    <p className="text-[18px] mt-3 text-slate-500">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-200 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem]  bg-red-100 text-red-700 rounded-2xl">Interface</button>
                </div>
            </div>
            <div className="w-full h-[72rem]  relative grid gap-8 grid-cols-3 grid-rows-2 mt-5">
                <h2 className="font-bold text-3xl absolute top-[-4rem]">All blog posts</h2>
                <div>
                    <img src={blog5} alt="blog5" className="pb-6" />
                    <h5 className="text-[14px] text-indigo-500 font-bold">Alec Whitten • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">Bill Walsh leadership lessons</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                    <button className="w-[7rem] mt-5 mr-4 bg-violet-200 text-violet-700 rounded-2xl">Leadership</button>
                    <button className="w-[8rem] bg-indigo-50 text-blue-700 rounded-2xl">Management</button>
                </div>
                <div>
                    <img src={blog6} alt="blog6" className="pb-6" />
                    <h5 className="text-[14px] text-indigo-500 font-bold">Demi WIlkinson • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">PM mental models</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Mental models are simple expressions of complex processes or relationships.</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-200 text-violet-700 rounded-2xl">Product</button>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                    <button className="w-[7rem]  bg-red-100 text-red-700 rounded-2xl">Frameworks</button>
                </div>
                <div>
                    <img src={blog7} alt="blog7" className="pb-6" />
                    <h5 className="text-[14px] text-indigo-500 font-bold">Candice Wu • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">What is Wireframing?</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-200 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                </div>
                <div>
                    <img src={blog8} alt="blog8" className="pb-6" />
                    <h5 className="text-[14px] text-indigo-500 font-bold">Natali Craig • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">How collaboration makes us better designers</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Collaboration can make our teams stronger, and our individual designs better.</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-200 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                </div>
                <div>
                    <img src={blog9} alt="blog9" className="pb-6" />
                    <h5 className="text-[14px] text-indigo-500 font-bold">Drew Cano • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">Our top 10 Javascript frameworks to use</h3>
                    <p className="text-[18px] mt-3 text-slate-500">JavaScript frameworks make development easy with extensive features and functionalities.</p>
                    <button className="w-[12rem] mt-5 mr-7 bg-green-200 text-green-700 rounded-2xl">Software Development</button>
                    <button className="w-[6rem] mr-7 bg-indigo-50 text-blue-700 rounded-2xl">Tools</button>
                    <button className="w-[6rem]  bg-red-100 text-red-700 rounded-2xl">SaaS</button>
                </div>
                <div>
                    <img src={blog10} alt="blog10" className="pb-6" />
                    <h5 className="text-[14px] text-indigo-500 font-bold">Orlando Diggs • 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">Podcast: Creating a better CX Community</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Starting a community doesn’t need to be complicated, but how do you get started?</p>
                    <button className="w-[6rem] mt-5 mr-4 bg-violet-200 text-violet-700 rounded-2xl">Podcasts</button>
                    <button className="w-[10rem] bg-indigo-50 text-blue-700 rounded-2xl">Customer Success</button>
                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-200"></div>
            <div className="flex justify-between pt-5">
                <h2>&lt;-Previous</h2>
                <h2>1 2 3 ... 8 9 10</h2>
                <h2>Next-&gt;</h2>
            </div>
        </div>
    );
};

export default Blog;