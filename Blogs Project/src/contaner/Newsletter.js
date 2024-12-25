import React from "react";
import newsletter1 from "./image/newsletter1.jpg";
import newsletter2 from "./image/newsletter2.jpg";
import newsletter3 from "./image/newsletter3.jpg";

const Newsletter = () => {
    return (
        <div>
            <div className="text-center p-6 w-full">
                <h4 className="text-violet-700 text-xl pb-3">Newsletter</h4>
                <h2 className="text-6xl font-bold pb-8">Stories and interviews</h2>
                <p className="text-2xl pb-8">Subscribe to learn about new product features, the latest in technology,<br /> solutions, and updates.</p>
                <input type="email" placeholder="Email address" className="p-3 bg-stone-100 rounded-md w-80" />
                <button className="ml-8 p-3 rounded-lg w-32 bg-purple-700 text-white">Subscribe</button>
                <h5 className="mr-48 text-sm mt-2 mb-8">We care about your data in our <span className="underline"> privacy policy </span></h5>
            </div>
            <div className="w-full h-auto relative grid gap-6 grid-cols-3 grid-rows-1 mt-20">
                <h2 className="font-bold text-3xl absolute top-[-5rem]">All blog posts</h2>
                <div>
                    <img src={newsletter1} alt="newsletter1" />
                    <h5 className="text-[14px] mt-3 text-indigo-500 font-bold">Sunday , 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">Bill Walsh leadership lessons </h3>
                    <p className="text-[18px] mt-3 text-slate-500">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                    <button className="w-[8rem] mr-4 mt-5 bg-violet-200 text-violet-700 rounded-2xl">Leadership</button>
                    <button className="w-[8rem] mr-4 bg-green-200 text-green-700 rounded-2xl">Management</button>
                    <button className="w-[8rem] bg-red-100 text-red-700 rounded-2xl">Presentation</button>
                </div>
                <div>
                    <img src={newsletter2} alt="newsletter2" />
                    <h5 className="text-[14px] mt-3 text-indigo-500 font-bold">Sunday , 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">PM mental models</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Mental models are simple expressions of complex processes or relationships.</p>
                    <button className="w-[6rem] mr-4 mt-5 bg-green-200 text-green-700 rounded-2xl">Product</button>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                    <button className="w-[8rem] bg-red-100 text-red-700 rounded-2xl">Frameworks</button>
                </div>
                <div>
                    <img src={newsletter3} alt="newsletter3" />
                    <h5 className="text-[14px] mt-3 text-indigo-500 font-bold">Sunday , 1 Jan 2023</h5>
                    <h3 className="text-2xl mt-3 font-bold">What is Wireframing?</h3>
                    <p className="text-[18px] mt-3 text-slate-500">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                    <button className="w-[6rem] mr-4 mt-5 bg-violet-200 text-violet-700 rounded-2xl">Design</button>
                    <button className="w-[6rem] mr-4 bg-indigo-50 text-blue-700 rounded-2xl">Research</button>
                    <button className="w-[8rem] bg-red-100 text-red-700 rounded-2xl">Presentation</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;