import React from "react";
import about from "./image/about.jpg"

const About = () => {
    return (
        <div className="w-full pb-8">
            <h1 className="text-[19rem] text-center font-bold border-t-2 border-b-2 border-black w-full">John Doe</h1>
            <img src={about} alt="About" className="mt-4 mb-4" />
            <h2 className="mt-2 text-3xl font-bold">About Me</h2>
            <p className="text-[19px] mt-3 text-slate-500">As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences that meet the needs of my clients and their users. I have a strong understanding of design principles and a proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition. I am confident in my ability to create designs that are both visually appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.</p>
            <h2 className="mt-8 text-3xl font-bold">Skills:</h2>
            <ul className="list-disc ml-5 mt-4">
                <li className="text-[19px] text-slate-500">Extensive experience in UI design, with a strong portfolio of completed projects</li>
                <li className="text-[19px] text-slate-500">Proficiency in design tools such as Adobe Creative Suite and Sketch</li>
                <li className="text-[19px] text-slate-500">Excellent visual design skills, with a strong understanding of layout, color theory, and typography</li>
                <li className="text-[19px] text-slate-500">Ability to create wireframes and prototypes to communicate design concepts</li>
                <li className="text-[19px] text-slate-500">Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams</li>
                <li className="text-[19px] text-slate-500">Experience conducting user research and gathering insights to inform design decisions</li>
                <li className="text-[19px] text-slate-500">Proficiency in HTML, CSS, and JavaScript</li>
            </ul>
            <h2 className="mt-8 text-3xl font-bold">Experience:</h2>
            <ul className="list-disc ml-5 mt-4"> 
                <li className="text-[19px] text-slate-500">5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries</li>
                <li className="text-[19px] text-slate-500">Led the design of a successful e-commerce website, resulting in a 25% increase in online sales</li>
                <li className="text-[19px] text-slate-500">Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage</li>
                <li className="text-[19px] text-slate-500">Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic</li>
            </ul>
            <h2 className="mt-8 text-3xl font-bold">Education:</h2>
            <ul className="list-disc ml-5 mt-4">
                <li className="text-[19px] text-slate-500">Bachelor's degree in Graphic Design</li>
                <li className="text-[19px] text-slate-500">Certified User Experience Designer (CUED)</li>
            </ul>
        </div>
    );
};

export default About;