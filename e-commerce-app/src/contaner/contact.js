import React from "react";
const Contact = () => {
    return (
        <div>
            <h2>Home {window.location.pathname}</h2>
            <div className="flex gap-8 p-16">
                <div className="w-[21rem] shadow-md rounded-md p-8">
                    <div className="flex gap-4 text-center">
                        <i class="text-xl p-2 h-12 w-12 rounded-[50%] bg-orange-600 text-white fa-solid fa-phone"></i>
                        <h1 className="mt-2">Call To Us</h1>
                    </div>
                    <p className="mt-4">We are available 24/7,7 days a week.</p>
                    <p className="mt-4">Phone: +8801611112222</p>
                    <hr className="mt-4 mb-4"></hr>
                    <div className="flex gap-4 text-center">
                        <i class="text-xl p-2 h-12 w-12 rounded-[50%] bg-orange-600 text-white fa-regular fa-envelope"></i>
                        <h1 className="mt-2">Write To Us</h1>
                    </div>
                    <p className="mt-4">Fill out our form and we will contact you within 24 hours.</p>
                    <p className="mt-4">Email: customer@exclusive.com</p>
                    <p className="mt-4">Email: support@exclusive.com</p>
                </div>
                <div className="w-[62rem] shadow-md rounded-md p-6 relative">
                    <div className="flex justify-between gap-6">
                        <input type="text" placeholder="Your Name *" className="w-1/3 p-3 bg-gray-100 rounded-md" />
                        <input type="email" placeholder="Your Email *" className="w-1/3 p-3 bg-gray-100 rounded-md" />
                        <input type="number" placeholder="Your Phone *" className="w-1/3 p-3 bg-gray-100 rounded-md" />
                    </div>
                    <input type="text" placeholder="Your Massage" className="w-full h-44 mt-9 p-3 bg-gray-100 rounded-md" />
                    <button className=" bg-orange-600 text-white rounded-md p-3 w-48 absolute bottom-10 right-9">Send Massage</button>
                </div>
            </div>
        </div>
    );
} 
export default Contact;