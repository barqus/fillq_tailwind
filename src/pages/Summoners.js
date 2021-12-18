import React, {useState, useEffect} from 'react'

const Summoners = ({summnoer}) => {
    const [participants, setParticipants] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [loaded, setLoaded] = useState(false)

    // async function fetchData() {
    //     let response = await axios(
    //         "http://54.74.76.227:5000/api/v1/participants"
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
