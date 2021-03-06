import React, { useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../style/App.css'
import PopUp from './PopUp'
//import 'leaflet/dist/leaflet.css' //this create some problems with the marker, so it is imported in the html file
const coordBergamo = [45.6982642, 9.6772698]

function stringCoordParser(sc){
    let [X,Y] = sc.substring(1,sc.length - 2).split(',')
    return [parseFloat(X),parseFloat(Y)]
}

export default function MapElement({points}) {

    const [pressedPopUp,setPressedPopUp] = useState({pressed:false,arguments:{}});

    const togglePop = () => {
        setPressedPopUp({pressed:false,arguments:{}});
    }

    const handleClick = (code) => {
        fetch('http://localhost:5000/incidente',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Protocollo:code})
        })
        .then(res => res.json())
        .then(res => setPressedPopUp({pressed:true,arguments:res}))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <MapContainer style={{height:'100vh'}} center={coordBergamo} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    points.map((point) => {
                        return (
                            <Marker key={point.Protocollo} position={stringCoordParser(point.Localizzazione)}>
                                <Popup>
                                    <div onClick={() => handleClick(point.Protocollo)}>
                                    <h1>
                                        {point.Protocollo}
                                    </h1>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer>

            {pressedPopUp.pressed ? <PopUp incidente={pressedPopUp.arguments} toggle={togglePop}/> : null}

            
        </div>
    )
}
