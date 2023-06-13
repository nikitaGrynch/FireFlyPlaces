import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import { NavLink } from "react-router-dom";

export interface Place {
  id: string;
  name: string;
  photos: string[];
  category: string;
  address_str: string;
  address_coords: number[];
  hours: {};
}

const categories = ["All", "Coffee Bar", "Restaurant", "Pub"];

const HomePage = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchValue, setSearchValue] = useState("");

  const fetchPlaces = async () => {
    await fetch("http://localhost:3000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div className="mx-auto flex flex-col justify-center">
      <div className=" flex justify-center rounded-full border-2 border-amber-200 p-2 align-middle">
        {categories.map((category: string, index: number) => {
          return selectedCategory == category ? (
            <button
              className={"m-3 scale-125 cursor-default font-medium"}
              key={index}
            >
              {category}
            </button>
          ) : (
            <button
              className={
                "m-3 cursor-default text-zinc-500  transition-transform hover:scale-125 hover:font-medium"
              }
              key={index}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="relative m-5 mx-auto flex h-12 w-1/5 items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg">
        <div className="grid h-full w-12 place-items-center text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={(e) => setSearchValue(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {places.map((place: Place) => {
          {
            return (selectedCategory == "All" ||
              selectedCategory == place.category) && place.name.toLocaleLowerCase().includes(searchValue) ? (
              <NavLink
                className="m-5"
                to={"place/" + place.name.replace(" ", "-").toLowerCase()}
                state={{
                  place: place,
                }}
                key={place.id}
              >
                <PlaceCard title={place.name} imageUrl={place.photos[0]} />
              </NavLink>
            ) : null;
          }
        })}
      </div>
    </div>
  );
};

export default HomePage;
