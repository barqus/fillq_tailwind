import React from 'react'
import PlayerBox from '../components/Participant/PlayerBox'

const Participants = () => {

    return (
        <div className=" mt-12 text-center text-white text-3xl font-bold font-sans">
        FILLQ DALYVAUJANTYS ŽAIDĖJAI
        <div className="mt-16 justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">  
            <PlayerBox name={"SAULIUS"}/>
            <PlayerBox name={"YASHIRO"}/>
            <PlayerBox name={"WARDEN"}/>
            <PlayerBox name={"TIGRIUKE"}/>
            <PlayerBox name={"JAUNUTIS"}/>
            <PlayerBox name={"ELOSANTA"}/>
            <PlayerBox name={"DOMAS"}/>
            <PlayerBox name={"UGNIUX15"}/>
            <PlayerBox name={"PAREIN"}/>
            <PlayerBox name={"GURKLYS"}/>
            <PlayerBox name={"RIMTUOLIS"}/>
            <PlayerBox name={"KURBSEN"}/>
        </div>
        </div>

    )
}

export default Participants
