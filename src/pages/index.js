import React, { useEffect, useState } from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import axios from 'axios';
import pogchamp from '../components/assets/pogchamp.png';
import Countdown from 'react-countdown';

import PlayerTable from '../components/HomePage/PlayerTable';

const Home = ({ participants }) => {
    const [token, setToken] = useState("")
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        if (email === "admin@admin.lt" && password === "admin") {
            await axios.get('https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/token/admin/new')
                .then((res) => {
                    console.log("res", res)
                    localStorage.setItem("access_token", res.data.access_token)
                    setToken(res.data.access_token)
                })
                .catch((err) => {
                    console.log("ERR", err)
                })
        }
        if (email === "user@user.lt" && password === "user") {
            await axios.get('https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/token/new')
                .then((res) => {
                    localStorage.setItem("access_token", res.data.access_token)
                    setToken(res.data.access_token)
                })
                .catch((err) => {
                    console.log("ERR", err)
                })
        }

    };

    const Logout = () => {
        setToken(null)
        localStorage.removeItem('access_token');
    }
    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        setToken(access_token)
    }, [])
    return (
        <>
            {token === null ?
                <div className='mt-12 flex bg-gray-bg1'>
                    <div className='w-full max-w-md m-auto text-white bg-gray-900 rounded-lg border border-primaryBorder shadow-default py-10 px-16'>

                        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                            PRISIJUNKITE
                        </h1>

                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor='email'>El. paštas</label>
                                <input
                                    type='email'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-black`}
                                    id='email'
                                    placeholder='El. paštas'
                                />
                            </div>
                            <div>
                                <label htmlFor='password'>Slaptažodis</label>
                                <input
                                    type='password'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-black`}
                                    id='password'
                                    placeholder='Slaptažodis'
                                />
                            </div>

                            <div className='flex justify-center items-center mt-6'>
                                <button
                                    className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                                >
                                    Prisijungti
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                :

                <div className="text-center text-white text-3xl mt-6 font-bold font-sans">ESATE PRISIJUNGĘS!
                    <br />
                    <button
                        className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        onClick={() => Logout()}
                    >
                        Atsijungti
                    </button>
                </div>}
        </>

    )
}

export default Home
