import React, { useState } from 'react'
import opgg from './opgg.png'
import { AiOutlineEdit, AiOutlineDownCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs'
import axios from 'axios';
import moment from 'moment';
import SummonerModal from '../Participant/SummonerModal'

// TODO: add sort for summoners
const TableSummoners = ({ summoners, participantID, fetchSummonerData }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [hoveredAcc, setHoveredAcc] = useState("")
    const [timeStreamed, setTimeStreamed] = useState(null)
    const [showModal, setShowModal] = useState(false)
    // const [summoners, setSummoners] = useState([])
    const [editID, setEditID] = useState("")
    const [editName, setEditName] = useState("")
    const [editRank, setEditRank] = useState("")
    const [openedID, setOpenedID] = useState("")
    const [openEditing, setOpenEditing] = useState(true)

    const HandleEdit = async (id, name, rank) => {
        setEditID(id)
        setEditName(name)
        setEditRank(rank)
        setOpenEditing(true)
        setShowModal(true)
    }

    // async function fetchSummoners(id) {
    //     let response = await axios(
    //         "http://127.0.0.1:5001/api/v1/participants/" + id + "/summoners/"
    //     );
    //     let summ = await response.data.summoners;
    //     if (summ === null) {
    //         summ = []
    //     }
    //     setSummoners(summ);
    //     console.log(summ)
    // }

    // const openSumoners = async (id) => {
    //     fetchSummoners(id)
    //     setOpenedID(id)
    // }

    const HandleDelete = async (id) => {
        // let response = await axios(
        //     "http://127.0.0.1:5001/api/v1/participants"
        // );
        // let participantsAPI = await response.data.participants;
        // setParticipants(participantsAPI);
        // setLoaded(true)
        await axios.delete('http://127.0.0.1:5001/api/v1/participants/' + participantID + '/summoners/' + id,
            {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjM5NzQxOTIzfQ.4XghpfHrrzNQrqwIh3IHaay1_aEIEsy5idawtxWVZ4A`
                }
            })
            .then((res) => {
                fetchSummonerData(participantID)
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
                <button onClick={() => openModal()} className="bg-purple-700 hover:bg-purple-500 text-xl text-white font-bold py-2 px-4 rounded">ADD SUMMONER</button>
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
                                        Summoner Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-base  uppercase tracking-wider cursor-pointer">
                                        Rank
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


                                {summoners.map((item, key) => (
                                    <>
                                        <tr key={key}>

                                            <td className="px-6 py-4 whitespace-nowrap text-left">{item.name}</td>
                                            <td className="pl-6 py-4 whitespace-nowrap text-left">{item.rank}</td>

                                            <td><AiOutlineEdit className=" text-yellow-400 text-2xl cursor-pointer" onClick={() => HandleEdit(item.id, item.name, item.rank)} /></td>
                                            <td><BsTrash className=" text-red-400 text-2xl cursor-pointer" onClick={() => HandleDelete(item.id)} /></td>
                                            {/* <td><AiOutlineDownCircle className=" text-white-400 text-2xl cursor-pointer" onClick={() => openSumoners(item.id)} /></td> */}

                                        </tr>
                                        {summoners.length > 0 && openedID === item.id &&
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
            {showModal ? <SummonerModal fetchData={fetchSummonerData} setShowModal={setShowModal} editID={editID} editName={editName} editRank={editRank} isEditing={openEditing} participantID={participantID} /> : ""}
        </div >
    )
}

export default TableSummoners
