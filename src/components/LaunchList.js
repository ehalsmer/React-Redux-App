import React from 'react';
import { useSelector } from 'react-redux';
import Launch from './Launch';

const LaunchList = (props) => {
    const state = useSelector( state => state )
    return (
        <>
        {state.map((launch)=><Launch launch={launch}/>)}
        </>
    )
}

export default LaunchList;