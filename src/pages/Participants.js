import React from 'react'
import PlayerBox from '../components/Participant/PlayerBox'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '../components/HomePage/Table'
import PlayerModal from '../components/Participant/PlayerModal'

const Participants = ({}) => {
    // TODO: FIX THIS ONE
    const [participants, setParticipants] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [loaded, setLoaded] = useState(false)

    async function fetchData() {
        let response = await axios(
            "https://cors-everywhere.herokuapp.com/http://3.250.73.88:5000/api/v1/participants"
        );
        let participantsAPI = await response.data.participants;
        setParticipants(participantsAPI);
        setLoaded(true)
    }


    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className=" mt-12 text-center text-white text-3xl font-bold font-sans">

            <div className="container mt-6 mb-6">
                <div className="flex my-6 ">
                    <button onClick={() => setShowModal(true)}  className="bg-purple-700 hover:bg-purple-500 text-xl text-white font-bold py-2 px-4 rounded">PRIDĖTI DALYVĮ</button>
                </div>
                { showModal ? <PlayerModal isEditing={false} fetchData={fetchData} setShowModal={setShowModal}/> : ""}
                { loaded ? <Table participants={participants} fetchData={fetchData}/> : "LOADING..."}
            </div>
        </div>

    )
}

export default Participants
