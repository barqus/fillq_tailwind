import React, { useState } from 'react'
import opgg from './opgg.png'
import { AiOutlineEdit, AiOutlineDownCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs'
import axios from 'axios';
import moment from 'moment';
import StreamerModal from '../Participant/StreamerModal'

// TODO: add sort for summoners
const TableStreamers = ({ streamers, participantID, summonerID, fetchStreamerData }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [hoveredAcc, setHoveredAcc] = useState("")
    const [timeStreamed, setTimeStreamed] = useState(null)
    const [showModal, setShowModal] = useState(false)
    // const [streamers, setStreamers] = useState([])
    const [editID, setEditID] = useState("")
    const [editUsername, setEditUsername] = useState("")
    const [editLive, setEditLive] = useState(false)
    const [openedID, setOpenedID] = useState("")
    const [openEditing, setOpenEditing] = useState(true)
    const [dropOpened, setDropOpened] = useState(false)

    const HandleEdit = async (id, name, live) => {
        setEditID(id)
        setEditUsername(name)
        setEditLive(live)
        setOpenEditing(true)
        setShowModal(true)
    }

    // async function fetchStreamers(id) {
    //     let response = await axios(
    //         "https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants/" + participantID + "/summoners/"+ id + "/streamers/"
    //     );
    //     let str = await response.data.streamers;
    //     if (str === null) {
    //         str = []
    //     }
    //     setStreamers(str);
    //     console.log("🚀 ~ file: TableSummoners.js ~ line 40 ~ fetchStreamers ~ str", str)
    // }
    // const openStreamers = async (id) => {
    //     if (!dropOpened) {
    //         fetchStreamers(id)
    //         setOpenedID(id)
    //     }
    //     setDropOpened(!dropOpened)
    // }

    const HandleDelete = async (id) => {
        const access_token = localStorage.getItem("access_token");
        await axios.delete('https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants/' + participantID + '/summoners/' + summonerID + '/streamers/'+ id,
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then((res) => {
                fetchStreamerData(participantID, summonerID)
                console.log("res", res)
            })
            .catch((err) => {
                console.log("ERR", err)
            })
    }

    const openModal = () => {
        setOpenEditing(false)
        setShowModal(true)
    }

    return (
        <div className="container" >
            <div className="flex my-6 ">
                <button onClick={() => openModal()} className="bg-purple-700 hover:bg-purple-500 text-xl text-white font-bold py-2 px-4 rounded">PRIDĖTI TRANSLIACIJĄ</button>
            </div>
            <div className="mt-6 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2     align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-2 border-purple-500 bg-opacity-10 sm:rounded-lg"
                        style={{
                            background: "linear-gradient(120deg,#722f818a 0%, rgba(3, 71, 57, 0.2) 100%)",
                        }}>
                        <table className=" min-w-full divide-y divide-purple-500 text-white">
                            <thead className="font-bold bg-gradient-to-r from-purple-800 to-green-500 ">
                                <tr >
                                    <th scope="col" className="px-6 py-3 text-left text-base  uppercase tracking-wider cursor-pointer">
                                        Slapyvardis
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-base  uppercase tracking-wider cursor-pointer">
                                        Transliacija
                                    </th>
                                    <th>
                                    </th>
                                    <th>
                                    </th>
                                    <th>
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{
                                background: "linear-gradient(120deg,#722f818a 0%, rgba(3, 71, 57, 0.2) 100%)",
                            }} className="bg-white bg-opacity-10   text-base font-semibold divide-y divide-purple-500">


                                {streamers.map((item, key) => (
                                    <>
                                        <tr key={key}>

                                            <td className="px-6 py-4 whitespace-nowrap text-left">{item.username}</td>
                                            <td className="pl-6 py-4 whitespace-nowrap text-left">{item.is_live ? "ĮJUNGTA" : "IŠJUNGTA"}</td>

                                            <td><AiOutlineEdit className=" text-yellow-400 text-2xl cursor-pointer" onClick={() => HandleEdit(item.id, item.username, item.is_live)} /></td>
                                            <td><BsTrash className=" text-red-400 text-2xl cursor-pointer" onClick={() => HandleDelete(item.id)} /></td>
                                            {/* <td><AiOutlineDownCircle className=" text-white-400 text-2xl cursor-pointer" onClick={() => openStreamers(item.id)} /></td> */}

                                        </tr>
                                        {openedID === item.id &&
                                            <tr>
                                                <td colSpan="5">

                                                </td>
                                            </tr>
                                        }
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showModal ? <StreamerModal fetchData={fetchStreamerData} setShowModal={setShowModal} editID={editID} editUsername={editUsername} editLive={Boolean(editLive)} isEditing={openEditing} participantID={participantID} summonerID={summonerID}/> : ""}
        </div >
    )
}

export default TableStreamers
