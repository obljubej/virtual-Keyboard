"use client";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-gradient-to-br from-gray-800 via-purple-50 to-purple-100 text-white shadow-lg">
      <div className="flex items-center justify-between">
        {/* Title and Logo*/}
        <Link
          to="/"
          className=""
        >
          <h1 className="text-3xl font-bold hover:shadow-md hover:text-gray-300 transition duration-50 font-geist">Ink-Keys</h1>
        </Link>
        <img
            src="/apple-touch-icon.png" 
            alt="Logo"
            className="w-12 h-12" 
          />
      </div>


      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-geist">
        <Link
          to="/"
          className="px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/play"
          className="px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300"
        >
          Play
        </Link>
        <Link
          to="/learn"
          className="px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300"
        >
          Learn
        </Link>
        <Link
          to="/create"
          className="px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300"
        >
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
