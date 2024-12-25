import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './contaner/blog';
import Projects from './contaner/profile';
import About from './contaner/about';
import Newsletter from './contaner/Newsletter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState("Blog");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <div className="flex justify-end p-3 pt-8 pb-8">
          <h2 className='text-2xl font-bold absolute left-14'>Kumkum</h2>
          <div className="space-x-4 flex pr-10">
            <Link to="/"><button className="text-xl" onClick={() => handleClick("Blog")} style={{ textDecoration: activeButton === "Blog" ? 'underline' : 'none' }}> Blog </button></Link>
            <Link to="/project"><button className="text-xl" onClick={() => handleClick("Projects")} style={{ textDecoration: activeButton === "Projects" ? 'underline' : 'none' }}> Projects </button></Link>
            <Link to="/about"><button className="text-xl" onClick={() => handleClick("About")} style={{ textDecoration: activeButton === "About" ? 'underline' : 'none' }}> About </button></Link>
            <Link to="/newsletter"><button className="text-xl" onClick={() => handleClick("Newsletter")} style={{ textDecoration: activeButton === "Newsletter" ? 'underline' : 'none' }}> Newsletter </button></Link>
            <button className="toggle-button text-xl" onClick={toggleTheme}>{isDarkMode ? '🌙 Night Mode' : '☀️ Day Mode'}</button>
          </div>
        </div>
        <div className='pl-12 pr-12 h-auto'>
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/newsletter' element={<Newsletter />} />
          </Routes>
        </div>
        <div className="p-6 pl-11"><h2>© 2023 Twitter LinkedIn Email RSS feed Add to Feedly</h2></div>
      </div>
    </Router>
  );
}

export default App;
