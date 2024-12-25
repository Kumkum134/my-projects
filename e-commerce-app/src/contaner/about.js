import React from "react";
import shopping from "./images/about image.png"
import image1 from "./images/about p1.png"
import image2 from "./images/about p2.png"
import image3 from "./images/about p3.png"
const About = () => {
    return (
        <div className="h-auto w-full">
            <h2>Home {window.location.pathname}</h2>
            <div className="flex h-[42rem]">
                <div className="w-1/2 pt-40 p-20">
                    <h1 className="text-5xl font-bold">Our Story</h1>
                    <p className="mt-9 text-xl">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
                    <p className="mt-9 text-xl">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <img src={shopping} alt="shopping" className=" h-[42rem] w-1/2 absolute right-0" />
            </div>
            <div className="flex justify-evenly mt-28">
                <div className="border-2 rounded-md p-8 text-center hover:bg-rose-400 ">
                    <i class="text-2xl bg-black text-white  border-8 p-2 border-gray-300 rounded-[50%] h-16 w-16  fa-solid fa-shop"></i>
                    <h1 className="text-3xl mt-4 font-bold">10.5k</h1>
                    <p className="text-xl mt-2">Sallers action our site</p>
                </div>
                <div className="border-2 rounded-md p-8 text-center hover:bg-rose-400 ">
                    <i class="text-2xl bg-black text-white  border-8 p-2 border-gray-300 rounded-[50%] h-16 w-16  fa-solid fa-dollar-sign"></i>
                    <h1 className="text-3xl mt-4 font-bold">33k</h1>
                    <p className="text-xl mt-2">Mopnthly Product Sale</p>
                </div>
                <div className="border-2 rounded-md p-8 text-center hover:bg-rose-400 ">
                    <i class="text-2xl bg-black text-white  border-8 p-2 border-gray-300 rounded-[50%] h-16 w-16  fa-brands fa-shopify"></i>
                    <h1 className="text-3xl mt-4 font-bold">45.5k</h1>
                    <p className="text-xl mt-2">Customer action in our site</p>
                </div>
                <div className="border-2 rounded-md p-8 text-center hover:bg-rose-400 ">
                    <i class="text-2xl bg-black text-white  border-8 p-2 border-gray-300 rounded-[50%] h-16 w-16 fa-solid fa-wallet"></i>
                    <h1 className="text-3xl mt-4 font-bold">25k</h1>
                    <p className="text-xl mt-2">Anual gross sale in our site</p>
                </div>
            </div>
            <div className="flex justify-evenly mt-28">
                <div className="h-[40rem] w-96">
                    <img src={image1} alt="image1" className="h-[30rem] pb-0 bg-slate-200 w-full p-9" />
                    <h1 className="text-4xl mt-6">Tom Cruise</h1>
                    <p className="mt-2 text-xl">Founder & Chairman</p>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-twitter"></i>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-instagram"></i>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-linkedin-in"></i>
                </div>
                <div className="h-[40rem] w-96">
                    <img src={image2} alt="image2" className="h-[30rem] pb-0 bg-slate-200 w-full p-9" />
                    <h1 className="text-4xl mt-6">Emma Watson</h1>
                    <p className="mt-2 text-xl">Managing Director</p>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-twitter"></i>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-instagram"></i>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-linkedin-in"></i>
                </div>
                <div className="h-[40rem] w-96">
                    <img src={image3} alt="image3" className="h-[30rem] pb-0 bg-slate-200 w-full p-9" />
                    <h1 className="text-4xl mt-6">Will Smith</h1>
                    <p className="mt-2 text-xl">Product Designer</p>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-twitter"></i>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-instagram"></i>
                    <i class="mt-3 mr-9 text-xl fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className="flex justify-evenly mt-28">
                <div className="text-center mb-28">
                    <i class="text-3xl bg-black text-white  border-8 p-[1rem] border-gray-300 rounded-[50%] h-20 w-20 fa-solid fa-truck-fast"></i>
                    <h1 className="text-xl font-bold mt-5">FREE AND FAST DELIVERY</h1>
                    <p className="text-[15.5px] mt-2">Free delivery for all orders over $140</p>
                </div>
                <div className="text-center mb-28">
                    <i class="text-3xl bg-black text-white  border-8 p-[1rem] border-gray-300 rounded-[50%] h-20 w-20 fa-solid fa-headset"></i>
                    <h1 className="text-xl font-bold mt-5">24/7 CUSTOMER SERVICE</h1>
                    <p className="text-[15.5px] mt-2">Friendly 24/7 customer support</p>
                </div>
                <div className="text-center mb-28">
                    <i class="text-3xl bg-black text-white  border-8 p-[1rem] border-gray-300 rounded-[50%] h-20 w-20 fa-solid fa-key"></i>
                    <h1 className="text-xl font-bold mt-5">MONEY BACK GUARANTEE</h1>
                    <p className="text-[15.5px] mt-2">We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
}
export default About;