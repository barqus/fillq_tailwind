import React, { useEffect, useState } from 'react'
import useKeypress from '../UseKeypress'
import axios from 'axios';
import { useRef } from 'react';
import useOutsideAlerter from '../UseOutsideAlerter';
import { AiOutlineClose } from 'react-icons/ai'
import { BsInstagram, BsTwitter, BsTwitch } from 'react-icons/bs'
import Amplify, { Analytics } from 'aws-amplify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Modal = ({ fetchData, setShowModal, isEditing, editID, editName, editSurname }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, setShowModal);
    useKeypress('Escape', () => {
        setShowModal(false)
    });
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // 
        if (isEditing) {
            const access_token = localStorage.getItem("access_token");
            await axios.put('https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants/'+editID, { id: editID, name: name, surname: surname },
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then((res) => {
                fetchData()
                setShowModal(false)
                console.log("res", res)
            })
            .catch((err) => {
                console.log("ERR", err)
            })
        } 
        else {
            const access_token = localStorage.getItem("access_token");
            await axios.post('https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants', { name: name, surname: surname },
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then((res) => {
                fetchData()
                setShowModal(false)
                console.log("res", res)
            })
            .catch((err) => {
                console.log("ERR", err)
            })
        }
    }

    useEffect(() => {
        setName(editName)
        setSurname(editSurname)
    }, [])

    return (
        <>
            <div
                className="flex overflow-x-hidden overflow-y-auto fixed text-lg inset-0 z-50 outline-none focus:outline-none"
                style={{ background: "linear-gradient(120deg,#722f818a 0%, rgba(3, 71, 57, 0.7) 100%)" }} >
                <div className="relative my-12 mx-auto">
                    <div className="w-6xl border-2 border-opacity-20 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none" ref={wrapperRef}>
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-gradient-to-r from-purple-800 to-green-500 ">
                            <h3 className="text-3xl font-semibold text-white">
                                {isEditing ? "DALYVIO REDAGAVIMAS" : "DALYVIO PRIDĖJIMAS"}
                            </h3>
                            <div className=" cursor-pointer p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                <AiOutlineClose onClick={() => setShowModal(false)} />
                            </div>

                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                                            Vardas
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="mx-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            id="inline-full-name" type="text" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                                            Pavardė
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="mx-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            id="inline-full-name" type="text" value={surname} onChange={e => setSurname(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <button onClick={handleSubmit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                            {isEditing ? "REDAGUOTI" : "PRIDĖTI"}
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
