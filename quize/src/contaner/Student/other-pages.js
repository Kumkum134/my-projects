import React from 'react';
import './other-page.css';
import about from "./image/WhatsApp Image 2024-09-24 at 15.10.15_897a36ff.jpg"
import blog from './image/blog.jpg';
import blog1 from './image/blog1.jpg';
import blog2 from './image/blog2.jpg';
import blog3 from './image/blog3.jpg';

function Blogs() {
    return (
        <div className="container3">
            <div className="mainblock1">
                <div className="block3">
                    <img src={blog} alt="blog" />
                    <p>COMPANY</p>
                    <h2>How Travel Writer and Vlogger Gutierezz<br /> Overcomes Self-Doubt</h2>
                </div>
                <div className='block4'>
                    <h1>Staff Picks</h1>
                    <div className="box1">
                        <h2>How To</h2>
                        <p>How to write the perfect Email -- Tips and Tricks</p>
                    </div>
                    <div className="box1">
                        <h2>Product</h2>
                        <p>Grammaly Is Here to Improve your writing in Google Docs</p>
                    </div>
                    <div className="box1">
                        <h2>How To</h2>
                        <p>Grammaly Is Here to Improve your writing in Google Docs</p>
                    </div>
                    <div className="box1">
                        <h2>Product</h2>
                        <p>How to write the perfect Email -- Tips and Tricks</p>
                    </div>
                    <div className="box1">
                        <h2>Product</h2>
                        <p>How to write the perfect Email -- Tips and Tricks</p>
                    </div>
                </div>
            </div>
            <div className="mainblock2">
                <div className="block5">
                    <img src={blog1} alt="blog" />
                    <p>COMPANY</p>
                    <h2>How Travel Writer and Vlogger Gutierezz<br /> Overcomes Self-Doubt</h2>
                </div>
                <div className="block6">
                    <img src={blog2} alt="blog" />
                    <p>COMPANY</p>
                    <h2>How Travel Writer and Vlogger Gutierezz<br /> Overcomes Self-Doubt</h2>
                </div>
                <div className="block7">
                    <img src={blog3} alt="blog" />
                    <p>COMPANY</p>
                    <h2>How Travel Writer and Vlogger Gutierezz<br /> Overcomes Self-Doubt</h2>
                </div>
            </div>
        </div>
    );
}

export default Blogs;

export const Services = () => {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <p>We offer a wide range of services to enhance your learning experience through quizzes:</p>

            <div className="service-list">
                <div className="service-item">
                    <h2>1. Quiz Categories</h2>
                    <p>Choose from various categories such as Html,CSS, JavaScript, React and more. Our quizzes are designed to challenge and improve your knowledge in different areas.</p>
                </div>

                <div className="service-item">
                    <h2>2. Progress Tracking</h2>
                    <p>Track your quiz results over time and measure your improvement. Our app allows you to see your performance history and identify areas to focus on.</p>
                </div>

                <div className="service-item">
                    <h2>3. Timed Quizzes</h2>
                    <p>For those who love a challenge, we offer timed quizzes that test not only your knowledge but also how quickly you can think on your feet.</p>
                </div>

                <div className="service-item">
                    <h2>4. Premium Quizzes</h2>
                    <p>Unlock advanced quizzes with more difficult questions by subscribing to our premium service. This offers deeper insights and tougher challenges.</p>
                </div>

                <div className="service-item">
                    <h2>5. Personalized Learning</h2>
                    <p>Get customized quizzes based on your performance. Our algorithm suggests questions to help you focus on areas where you need the most improvement.</p>
                </div>
            </div>
        </div>
    );
}

export const About=()=> {
    return (
        <div className="about">
        <div className="blocka1">
            <h3>A B O U T  &nbsp;&nbsp;&nbsp; U S</h3>
            <p>Our Quiz App is designed to help users enhance their knowledge and test their skills on various subjects through interactive quizzes. 
            Whether you're a student, a professional, or someone who enjoys challenging themselves, this app offers quizzes on a wide range of topics. 
            We are committed to providing a fun and educational experience.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to make learning fun and accessible through engaging quizzes, helping people expand their knowledge and improve their understanding of various subjects.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out at quizapp@example.com.</p>
        </div>
        <div className="blocka2">
            <img src={about} alt="home"/>
        </div>
    </div>
    );
}