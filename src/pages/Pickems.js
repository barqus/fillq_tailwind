import React from 'react'
import DragableTable from '../components/Pickem/DragableTable'
import Amplify, { Analytics } from 'aws-amplify';
Analytics.record({ name: 'Pickems Visited' });

const  Pickems = ({participants}) => {

    return (
        <div className="mb-24">
            <DragableTable participants={participants}/>
        </div>
    )
}

export default Pickems
