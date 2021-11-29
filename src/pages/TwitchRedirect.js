import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const TwitchRedirect = ({ userID, setUserID }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const twitchCode = new URLSearchParams(location.search).get("code")
        console.log(twitchCode)
        const apiEndpoint = "https://fillq-333518.appspot.com/api/v1/user/login/" + twitchCode
        axios.get(apiEndpoint, {withCredentials: true })
            .then(res => {
                const twitchUserID = res.data;
                localStorage.setItem('twitchCode', twitchUserID);
                setUserID(twitchUserID)
                navigate("/")
            })
            .catch((err) => console.log(err));
    }, [location, navigate, setUserID]);

    return (
        <>
        </>
    )
}

export default TwitchRedirect
