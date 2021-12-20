import React, { useState } from 'react'
import opgg from './opgg.png'
import { AiOutlineEdit, AiOutlineDownCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs'
import axios from 'axios';
import moment from 'moment';
import PlayerModal from '../Participant/PlayerModal'
import TableSummoners from './TableSummoners';
// TODO: add sort for participants
const Table = ({ participants, fetchData }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [hoveredAcc, setHoveredAcc] = useState("")
    const [timeStreamed, setTimeStreamed] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [summoners, setSummoners] = useState([])
    const [editID, setEditID] = useState("")
    const [editName, setEditName] = useState("")
    const [editSurname, setEditSurname] = useState("")
    const [openedID, setOpenedID] = useState("")
    const [dropOpened, setDropOpened] = useState(false)

    const HoverEnter = (nickname, started_at) => {
        setIsHovered(true)
        setHoveredAcc(nickname)
        const diffInSeconds = moment.utc(moment(moment(), "DD/MM/YYYY HH:mm:ss").diff(moment(moment(started_at), "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
        setTimeStreamed(diffInSeconds)
    }

    const HandleEdit = async (id, name, surname) => {
        setEditID(id)
        setEditName(name)
        setEditSurname(surname)
        setShowModal(true)
    }

    async function fetchSummoners(id) {
        let response = await axios(
            "https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants/" + id + "/summoners/"
        );
        let summ = await response.data.summoners;
        if (summ === null) {
            summ = []
        }
        setSummoners(summ);
        console.log(summ)
    }

    const openSumoners = async (id) => {
        if (!dropOpened) {
            fetchSummoners(id)
            setOpenedID(id)
        }
        setDropOpened(!dropOpened)

    }

    const HandleDelete = async (id) => {
        // let response = await axios(
        //     "https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants"
        // );
        // let participantsAPI = await response.data.participants;
        // setParticipants(participantsAPI);
        // setLoaded(true)
        const access_token = localStorage.getItem("access_token");
        await axios.delete('https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants/' + id,
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then((res) => {
                fetchData()
                console.log("res", res)
            })
            .catch((err) => {
                console.log("ERR", err)
            })
    }

    return (
        <div className="container" >
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
                                        Vardas
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-base  uppercase tracking-wider cursor-pointer">
                                        Pavardė
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


                                {participants.map((item, key) => (
                                    <>
                                        <tr key={key}>

                                            <td className="px-6 py-4 whitespace-nowrap text-left">{item.name}</td>
                                            <td className="pl-6 py-4 whitespace-nowrap text-left">{item.surname}</td>

                                            <td><AiOutlineEdit className=" text-yellow-400 text-2xl cursor-pointer" onClick={() => HandleEdit(item.id, item.name, item.surname)} /></td>
                                            <td><BsTrash className=" text-red-400 text-2xl cursor-pointer" onClick={() => HandleDelete(item.id)} /></td>
                                            <td><AiOutlineDownCircle className=" text-white-400 text-2xl cursor-pointer" onClick={() => openSumoners(item.id)} /></td>

                                        </tr>
                                        {dropOpened && openedID === item.id &&
                                            <tr>
                                                <td colSpan="5" className="p-4">
                                                    <TableSummoners summoners={summoners} participantID={item.id} fetchSummonerData={fetchSummoners}/>
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
            {showModal ? <PlayerModal fetchData={fetchData} setShowModal={setShowModal} editID={editID} editName={editName} editSurname={editSurname} isEditing={true} /> : ""}
        </div >
    )
}

export default Table