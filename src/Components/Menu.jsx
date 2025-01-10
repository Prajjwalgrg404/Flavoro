import React, { useState } from "react";

import { Link } from "react-router-dom";

function Menu() {
  const [change, setchange] = useState(0);
  //  setopen(open)
  // console.log(open);

  const button_css = "px-4 py-2 border-2 border-zinc-300 hover:bg-green-500 hover:text-white rounded-lg";
  const button_change ="px-4 py-2 border border-zinc-300 bg-green-500 text-white rounded-lg"
  return (
    <>
      <div className="mx-5 my-8">
        <h3 className="font-bold text-xl mb-8">Find the best food</h3>

        <div className="flex gap-5 scroll-smooth overflow-x-scroll lg:overflow-x-hidden">
          <Link to="/">
            {" "}
            <h2 onClick={()=>setchange(0)} className={`${button_css} ${change === 0 ? button_change:""}`}>
              All
            </h2>
          </Link>
          <Link to="/lunch">
            <h2 onClick={()=>setchange(1)} className={`${button_css} ${change === 1 ? button_change:""}`}>
              Lunch
            </h2>
          </Link>
          <Link to="/breakfast">
            {" "}
            <h2 onClick={()=>setchange(2)} className={`${button_css} ${change === 2 ? button_change:""}`}>
              Breakfast
            </h2>
          </Link>
          <Link to="/dinner">
            {" "}
            <h2 onClick={()=>setchange(3)} className={`${button_css} ${change === 3 ? button_change:""}`}>
              Dinner
            </h2>
          </Link>
          <Link to="/snacks">
            <h2 onClick={()=>setchange(4)} className={`${button_css} ${change === 4 ? button_change:""}`}>
              Snacks
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
