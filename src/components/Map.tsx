import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";


interface MapProps{
    coords: number[]
}

const Map = ({coords}: MapProps) => {
    const api: string = "AIzaSyBr1mbF3Najea1eVTyl1qMUqqSr0Nimcwg";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api,
  });

  if (!isLoaded) return <div>Loading...</div>
  return (
  <GoogleMap zoom={15} center={{lat: coords[0], lng: coords[1]}} mapContainerClassName="mapContainer" >
    <Marker position={{lat: coords[0], lng: coords[1]}}></Marker>
  </GoogleMap>
  );
}

export default Map;
