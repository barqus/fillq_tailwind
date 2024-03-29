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
import Sponsors from './pages/SponsorPage.js';
import Background from './components/assets/background.png';
import fetchDataCall from './components/utils/fetchApi'
import Spinner from './components/utils/Spinner';
import Rules from './pages/RulesAndPrizes';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
// TODO FIX PRESSING ON TEXT
// TODO: SPINNER FOR COMPONENTS
Analytics.autoTrack('session', {
  enable: true,
  provider: 'AWSPinpoint'
});
function App({ hideLoader }) {
  const [isOpen, setIsOpen] = useState(false)
  const [userID, setUserID] = useState(null)
  const [participants, setParticipants] = useState([])
  const [loading, setLoading] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    const fetchData = async api => {
      let response = await fetchDataCall({ api: api });
      if (response !== undefined) {
        setParticipants(response.data);
      }

    };
    fetchData('participants/');

    

    window.addEventListener('resize', hideMenu)
    setUserID(localStorage.getItem('twitchCode'))
  }, [])
  const loadingDone = () => {
    hideLoader()
    setLoading(false)

  }
  //  {/* <div className=" bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: `url(${Background})` }} > */}
  return (
    <div className="main_div">
    <img src={Background} className="image_background" alt="backgroud" onLoad={() => loadingDone()}/>
    {!loading ?
      <div className="" >
        <NavBar toggle={toggle} userID={userID} setUserID={setUserID} />
        <Layout>
          <Dropdown isOpen={isOpen} toggle={toggle} userID={userID} setUserID={setUserID} />
          <div>
            <Routes>
              <Route exact path="/" element={<Home participants={participants} />} />
              <Route path="/dalyviai" element={<Participants participants={participants} />} />
              <Route path="/pickems" element={<Pickems participants={participants} />} />
              {/* <Route path="/video" element={<Highlights />} /> */}
              <Route path="/taisykles" element={<Rules />} />
              <Route path="/remejai" element={<Sponsors />} />
              <Route path="/twitchRedirect" element={<TwitchRedirect userID={userID} setUserID={setUserID} />} />
            </Routes>
          </div>
        </Layout>
        <Footer />
      </div>    
      : null
    }

    </div>

  );
}

export default App;
  