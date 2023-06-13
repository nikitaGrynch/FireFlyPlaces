import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Place } from "./HomePage";

const Navbar =() => {
  return (
    <nav className="flex items-center justify-center rounded-full bg-black px-6 py-4 h-auto fixed top-0 left-0 right-0 mx-32 z-20">
      <div className=" transition delay-150 duration-300 text-center text-slate-50 hover:transition-all  hover:text-slate-500 duration-1000">
        <NavLink to="/"><h1 className=" text-3xl font-mono cursor-pointer">Firefly Places</h1></NavLink>
      </div>
      <div>
      </div>
    </nav>
  );
};

export default Navbar;
