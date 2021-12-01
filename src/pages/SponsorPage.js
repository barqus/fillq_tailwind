import React from 'react'
import SponsorsComponent from '../components/Sponsors/SponsorsComponent';
import Amplify, { Analytics } from 'aws-amplify';
Analytics.record({ name: 'Sponsors Visited' });

const Sponsors = () => {
    return (
        <div className="grid justify-center mt-12 text-center text-white text-3xl font-bold font-sans">
            FILLQ REMĖJAI
            <SponsorsComponent />
        </div>
    )
}

export default Sponsors
