import React, {useState, useEffect} from 'react'

const Summoners = ({summnoer}) => {
    const [participants, setParticipants] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [loaded, setLoaded] = useState(false)

    // async function fetchData() {
    //     let response = await axios(
    //         "http://127.0.0.1:5001/api/v1/participants"
    //     );
    //     let participantsAPI = await response.data.participants;
    //     setParticipants(participantsAPI);
    //     setLoaded(true)
    // }


    return (
        <div>
            
        </div>
    )
}

export default Summoners
