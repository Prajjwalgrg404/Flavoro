import React from "react";

function Navbar() {

  const currentDate = () => new Date().toUTCString().slice(0, 16);

  return (
    <nav className="flex justify-between items-center px-5 p-4">
      <div>
      <h3 className="text-xl font-bold text-gray-600">{currentDate()}</h3>
      <h2 className="texr-2xl font-bold text-gray-600">Flavoro Foods</h2>
      </div>
      <div>
        <input className="border border-zinc-400 rounded-lg p-3 text-sm outline-none lg:w-[25vw]" type="search" placeholder="Search..."/>
      </div>
    </nav>
  );
}

export default Navbar;
