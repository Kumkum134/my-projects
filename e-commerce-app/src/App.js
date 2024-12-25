import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './contaner/home';
import QR from './image/Qrcode 1.png'
import Playstore from './image/goggle play.png'
import Applestore from './image/download-appstore.png'
import Contact from './contaner/contact';
import About from './contaner/about';
import SignUp from './contaner/signup';
import Wishlist from './contaner/wishlist';
import Cart from './contaner/cart';
import Profile from './contaner/profile';

function App() {
  const [activeButton, setActiveButton] = useState("Home");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div>
      <Router>
        <div className="flex justify-between p-11 border-b-2">
          <h1 className="text-4xl font-bold">Exclusive</h1>
          <div className='flex gap-10 mt-2'>
            <Link to='/'><button onClick={() => handleClick("Home")} style={{ textDecoration: activeButton === "Home" ? 'underline' : 'none' }} className='text-xl'>Home</button></Link>
            <Link to='/contact'><button onClick={() => handleClick("Contact")} style={{ textDecoration: activeButton === "Contact" ? 'underline' : 'none' }} className='text-xl'>Contact</button></Link>
            <Link to='/about'>  <button onClick={() => handleClick("About")} style={{ textDecoration: activeButton === "About" ? 'underline' : 'none' }} className='text-xl'>About</button></Link>
            <Link to='/sign-up'> <button onClick={() => handleClick("Sign Up")} style={{ textDecoration: activeButton === "Sign Up" ? 'underline' : 'none' }} className='text-xl'>Sign Up</button></Link>
          </div>
          <div className='flex gap-6'>
            <div className='bg-gray-200 w-60 p-2'>
              <input type="text" placeholder='What are you looking for?' className='w-52 bg-transparent'></input>
              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
            </div>
            <Link to='/wishlist'><i className="fa-regular fa-heart text-2xl cursor-pointer"></i></Link>
            <Link to='/cart'><i className="fa-solid fa-cart-shopping text-2xl cursor-pointer"></i></Link>
            <Link to='/profile'><i className="fa-regular fa-user text-2xl cursor-pointer"></i></Link> 
          </div>
        </div>
        <div className='h-auto w-full p-11'>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <div className='w-full h-[28rem] bg-black'>
          <div className='w-full p-11 text-white gap-7 flex'>
            <div className="w-72 p-2">
              <h1 className="text-2xl font-bold">Exclusive</h1>
              <h1 className="text-2xl mt-5">Subscribe</h1>
              <h1 className="text-lg mt-5">Get 10% off your first order</h1>
              <div className='mt-5 p-2 w-56 border-2 rounded-md text-lg'>
                <input type='email' placeholder='Enter yoyr email' className='bg-transparent w-[11rem]' />
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </div>
            </div>
            <div className="w-72 h-auto p-2">
              <h1 className="text-2xl font-bold">Support</h1>
              <p className="text-lg mt-5">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p className="text-lg mt-5">exclusive@gmail.com</p>
              <p className="text-lg mt-5">+88015-88888-9999</p>
            </div>
            <div className="w-72 h-auto p-2">
              <h1 className="text-2xl font-bold">Account</h1>
              <h1 className="text-lg mt-5">My Account</h1>
              <h1 className="text-lg mt-5">Lohin / Register</h1>
              <h1 className="text-lg mt-5">Cart</h1>
              <h1 className="text-lg mt-5">Wishlist</h1>
              <h1 className="text-lg mt-5">Shop</h1>
            </div>
            <div className="w-72 h-auto p-2">
              <h1 className="text-2xl font-bold">Quick Link</h1>
              <h1 className="text-lg mt-5">Privacy Policy</h1>
              <h1 className="text-lg mt-5">Terms Of Use</h1>
              <h1 className="text-lg mt-5">FAQ</h1>
              <h1 className="text-lg mt-5">Contact</h1>
            </div>
            <div className="w-72 h-auto p-2">
              <h1 className="text-2xl font-bold">Download App</h1>
              <p className='mt-5 text-gray-400'>Save $3 with App New User Only</p>
              <div className='flex  gap-2 mt-3'>
                <img src={QR} className='h-24' alt='QR' />
                <div>
                  <img src={Playstore} className='h-10' alt='Playstore' />
                  <img src={Applestore} className='mt-2 h-11' alt='Applestore' />
                </div>
              </div>
              <i class="mt-7 mr-9 text-2xl fa-brands fa-facebook-f"></i>
              <i class="mt-7 mr-9 text-2xl fa-brands fa-twitter"></i>
              <i class="mt-7 mr-9 text-2xl fa-brands fa-instagram"></i>
              <i class="mt-7 mr-9 text-2xl fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className='w-full p-4 border-2 border-black border-t-gray-900'>
            <h1 className='text-gray-600 text-center'><i class="fa-regular fa-copyright"></i> Copyright Rimel 2022. All right reserved</h1>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;