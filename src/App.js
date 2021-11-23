import './App.css';
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Home from './pages/index.js';
import Participants from './pages/Participants';
import React, { useState, useEffect } from "react";
// import {Route} from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TwitchRedirect from './pages/TwitchRedirect';
import Pickems from './pages/Pickems';
import Highlights from './pages/Highlights';
import Background from './components/assets/background.png';


function App({hideLoader}) {
  const [isOpen, setIsOpen] = useState(false)
  const [userID, setUserID] = useState(null)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize',hideMenu)
    setUserID(localStorage.getItem('twitchCode'))
    
    hideLoader()
  }, [])

  return (
    <div className=" bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: `url(${Background})` }} >
      {/* <NavBar toggle={toggle} userID={userID} setUserID={setUserID} /> */}
      <Layout>
        {/* <Dropdown isOpen={isOpen} toggle={toggle} userID={userID} setUserID={setUserID} /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/dalyviai" element={<Participants />} />
            <Route path="/pickems" element={<Pickems />} />
            <Route path="/video" element={<Highlights />} />
            <Route path="/twitchRedirect" element={<TwitchRedirect userID={userID} setUserID={setUserID} />} /> */}

          </Routes>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
