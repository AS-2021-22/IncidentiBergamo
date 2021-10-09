import React, { useState,useEffect } from 'react';
import MapElement from './MapElement';

export default function MapIncidenti() {

    const [points,setPoints] = useState(() => [])

    const postPoints = (setter) => {
        fetch('http://localhost:5000/data',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
        })
        .then( res => res.json())
        .then(res => {console.log(res); setter(res)})
        .catch(err => console.log(err))
    }

    useEffect(() => postPoints(setPoints),[]);
    return (
        <div>
            <MapElement points={points}/>
        </div>
    )
}
