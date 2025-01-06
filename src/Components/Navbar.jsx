import React, { useState } from "react";

function Navbar() {
  const currentDate = () => new Date().toUTCString().slice(0, 16);
  const [Toggle, setToggle] = useState(false);
function open(){
 setToggle(!Toggle);
}
console.log(Toggle);

  return (
    <nav>
      <div className="flex justify-between items-center px-5 p-4">
        <div>
          <h3 className="text-xl font-bold text-gray-600">{currentDate()}</h3>
          <h2 className="texr-2xl font-bold text-gray-600">Flavoro Foods</h2>
        </div>
        <div className="flex justify-between items-center gap-4 overflow-x-hidden">
          <input
            className="border border-zinc-400 rounded-lg p-3 text-sm outline-none lg:w-[25vw]"
            type="search"
            placeholder="Search..."
          />
          <h2 onClick={open} className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white">
            Cart
          </h2>
          <div className={`w-[20rem] h-screen bg-red-300 absolute top-0 ${Toggle === true ? "right-0  ":"right-[100%]"} z-[5]`}>prajjwal</div>
        </div>
      </div>
      
      <div onClick={open} className={`${Toggle === true ? "bg-[rgba(0,0,0,0.3)] w-full h-screen fixed top-0":""} `}></div>
    </nav>

    
  );
}

export default Navbar;
