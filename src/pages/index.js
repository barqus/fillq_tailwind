import React from 'react'
import { AiOutlineFacebook,AiOutlineInstagram } from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import pogchamp from '../components/assets/pogchamp.png';

const Home = () => {
    return (
        <div className="text-white text-5xl md:text-8xl font-bold font-sans text-center mt-52">
            <h1> FILLQ SUGRĮŽTA </h1><img src={pogchamp} className="object-contain inline" alt="PogChamp"></img> 
            <h2 className="mt-6 text-4xl"> Sekite naujienas: 
                <AiOutlineFacebook className="cursor-pointer text-6xl inline mb-1 mx-2" onClick={()=> window.open("https://www.facebook.com/ironwolveslt", "_blank")}></AiOutlineFacebook> 
                <AiOutlineInstagram className="cursor-pointer text-6xl inline mb-1 mx-2" onClick={()=> window.open("https://www.instagram.com/ironwolveslt", "_blank")}></AiOutlineInstagram> 
                <FaDiscord className="cursor-pointer text-6xl inline mb-1 mx-2" onClick={()=> window.open("https://discord.com/invite/3wbXrM5JqG", "_blank")}></FaDiscord> 
            </h2>
        </div>
    )
}

export default Home
