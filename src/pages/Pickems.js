import React from 'react'
import DragableTable from '../components/Pickem/DragableTable'

const Pickems = () => {

    const finalSpaceCharacters = [
        {
            name: 'SAULIUS',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'YASHIRO',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'WARDEN',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'TIGRIUKE',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'JAUNUTIS',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'ELOSANTA',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'DOMAS',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'UGNIUX15',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'PAREIN',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'GURKLYS',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'RIMTUOLIS',
            image: 'https://picsum.photos/id/237/200/300'
        },
        {
            name: 'KURBSEN',
            image: 'https://picsum.photos/id/237/200/300'
        }
    ]
    return (
        <div className="mb-24">
            <DragableTable allParticipants={finalSpaceCharacters}/>
        </div>
    )
}

export default Pickems
