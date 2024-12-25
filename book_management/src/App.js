import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './contaner/main';
import SignUpUser, { Login, SignUpAdmin } from './contaner/signup-login';
import Forgot, { Mailbox, NewPassword } from './contaner/forgot';
import UserHome from './contaner/User/User-home';
import AdminHome from './contaner/Admin/Admin-home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signupadmin' element={<SignUpAdmin />} />
        <Route path='/signupuser' element={<SignUpUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/mailbox' element={<Mailbox />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route path='/User/Home' element={<UserHome />} />
        <Route path='/Admin/Home' element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
