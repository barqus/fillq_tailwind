import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const TwitchRedirect = ({ userID, setUserID }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const twitchCode = new URLSearchParams(location.search).get("code")
        console.log(twitchCode)
        const token = "ya29.a0ARrdaM8JiGts1qxlF0c1ktmHY07FT1TJ-Hqen5E6OLCGammK53bbHwNg3Xn6wzCBOOvecR2CvzS7aAdeKpKSGsjNA2huRy4sPIlr_gCe9WkgrSUz5PVRRGNU5SOVcKBxWVvkmPthevtys9pPcjbhXJR7Btv8VvG0-9X_KcPWJlzQa0BRxpwCNguvHzcoQjJqLAoPamp4uqasWra0LWboAjEOA0wWMZoM4A"
        
        const apiEndpoint = "https://8080-265f63c4-b237-4a37-a931-06899ce61dd0.cs-europe-west4-bhnf.cloudshell.dev/api/v1/user/login/" + twitchCode
        axios.get(apiEndpoint,{withCredentials: true, headers: {Authorization: `Bearer ${token}`} })
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
