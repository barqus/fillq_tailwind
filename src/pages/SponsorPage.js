import React from 'react'
import SponsorsComponent from '../components/Sponsors/SponsorsComponent';
import Amplify, { Analytics } from 'aws-amplify';
Analytics.record({ name: 'Sponsors Visited' });

const Sponsors = () => {
    return (
        <div>
            <SponsorsComponent />
        </div>
    )
}

export default Sponsors
