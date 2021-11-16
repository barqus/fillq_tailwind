import React from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { FaTwitch } from 'react-icons/fa';
import { ImExit } from 'react-icons/im'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

const Dropdown = ({isOpen, toggle, userID, setUserID}) => {
    const [userInfo, setUserInfo] = useState({})
    const location = useLocation();
    useEffect(() => {
        if(userID !== null) {
            const apiEndpoint = "http://localhost:8080/api/v1/user/" + userID
            axios.get(apiEndpoint)
                .then(res => {
                    setUserInfo(res.data)
                })
                .catch(
                    () => {
                        console.log("HERRE")
                        setUserID(null)
                    }
                )
        }
    }, [setUserID, userID])

    const accountAction = () => {
        if (userID === null) {
            const REACT_APP_TWITCH_CLIENT_ID="q710om0wgq4hd1e9a0ndi6qgryikee"
            const REACT_APP_TWITCH_REDIRECT_URI = "http://localhost:3000/twitchRedirect"
            var twitchLoginURI = `https://id.twitch.tv/oauth2/authorize?client_id=${REACT_APP_TWITCH_CLIENT_ID}&response_type=code&scope=user:read:email&redirect_uri=${REACT_APP_TWITCH_REDIRECT_URI}`
            window.location.href = twitchLoginURI
        }
        else {
            localStorage.removeItem("twitchCode")
            setUserID(null)
        }
    }
    return ( 
        <div className={isOpen ? 'grid grid-rows-6 text-center items-center bg text-white font-sans font-bold text-lg' : 'hidden'}  onClick={toggle}
        style={{background: "linear-gradient(120deg,#722f818a 0%, rgba(3, 71, 57, 1) 100%)"}}>
            <NavLink to="/dalyviai" className="p-4 hover:text-purple-400"><span className={location.pathname === "/dalyviai" ? " text-purple-500"  : ""}>DALYVIAI</span></NavLink>
            <NavLink to="/pickems" className="p-4 hover:text-purple-400"> <span className={location.pathname === "/pickems" ? " text-purple-500" : ""}>PICK'EM</span></NavLink>
            <NavLink to="/spejimai" className="p-4 hover:text-purple-400"><span className={location.pathname === "/spejimai" ? " text-purple-500" : ""}>SPĖJIMAI</span></NavLink>
            <NavLink to="/taisykles" className="p-4 hover:text-purple-400"><span className={location.pathname === "/taisykles" ? " text-purple-500" : ""}>TAISYKLĖS</span></NavLink>
            <NavLink to="/remejai" className="p-4 hover:text-purple-400"><span className={location.pathname === "/remejai" ? " text-purple-500" : ""}>REMĖJAI</span></NavLink>
            <button onClick={() => accountAction()} className="bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-1 px-2 border border-purple-400 hover:border-transparent rounded" >
                <div className="text-lg">
                    {userID === null ? <>PRISIJUNGTI <FaTwitch className="inline"/></> : 
                    <div>
                        {/* <img src={userInfo.profile_image_url} className="object-contain w-6 inline rounded-lg border border-purple-400 mr-6" alt="user avatar"></img>  */}
                        {userInfo.display_name} <ImExit className="inline ml-2"/>
                    </div>}
                </div> 
            </button>
        </div>
    )
}

export default Dropdown
