import React, { useEffect, useState, useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Place } from "./HomePage";
import Modal from "react-modal";
import { useLocation, useParams } from "react-router-dom";
import Map from "./Map";

interface PlaceDescProps {
  place: Place;
}

const PlaceDescription = () => {
  const place: Place = useLocation().state.place;

  return (
    <div className=" w-full">
      <h1 className=" p-5 font-serif text-3xl font-semibold">{place.name}</h1>
      <img
        className=" mx-auto h-72 w-5/6 rounded-3xl object-cover object-center"
        src={place.photos[0]}
        alt={place.name + "_cover"}
      />
      <div className=" my-6 mr-28 flex justify-end align-middle text-lg">
        <span className=" mr-3 h-7 w-0.5 bg-amber-400"></span>
        <h3 className=" font-mono">{place.category}</h3>
      </div>
      <div className="flex justify-between">
        <Carousel className="m-10 h-96 w-3/5" showThumbs={false} infiniteLoop>
          {place.photos.slice(1).map((photo, index) => (
            <div key={index}>
              <img
                className="mx-auto h-96 w-4/6 rounded-xl object-cover object-center"
                src={photo}
                alt={`Photo ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
        <div className="flex flex-col my-auto mx-28 rounded-md border-2 p-3 border-gray-400">
          <h3 className=" text-center font-sans text-xl font-light">Hours</h3>
          {
            Object.keys(place.hours).map((day: string, index:number) => {
                return <div key={index} className=" text-sm font-extralight">{day}: {place.hours[day]}</div>
            })
          }
        </div>
      </div>
      <Map coords={place.address_coords} />
    </div>
  );
};

export default PlaceDescription;
