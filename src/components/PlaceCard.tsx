import React from "react";
import PlaceDescriptionModal from "./PlaceDescription";
import { Place } from "./HomePage";

interface CardProps {
  title: string;
  imageUrl: string;
}

const PlaceCard = ({ title, imageUrl }: CardProps) => {
  return (
    <div className=" transition-transform hover:scale-105">
      <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
        <img
          className="h-48 w-full object-cover"
          src={imageUrl}
          alt={title + "_photo"}
        />

        <div className="absolute bottom-0 left-0 px-6 py-4 ">
          <h4 className="mb-3 text-2xl font-semibold tracking-tight text-white">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
