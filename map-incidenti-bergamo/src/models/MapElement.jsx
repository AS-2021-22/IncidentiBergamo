import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../style/App.css'
//import 'leaflet/dist/leaflet.css' //this create some problems with the marker, so it is imported in the html file


function stringCoordParser(sc){
    let [X,Y] = sc.substring(1,sc.length - 2).split(',')
    return [parseFloat(X),parseFloat(Y)]
}

export default function MapElement({points}) {
    return (
        <div>
            <MapContainer style={{height:'80vh'}} center={[45.6982642, 9.6772698]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    points.map((point) => {
                        return (
                            <Marker key={point.Protocollo} position={stringCoordParser(point.Localizzazione)}>
                                <Popup>
                                    {point.Protocollo}
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    )
}
