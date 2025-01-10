import React from "react";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

function Orderplaced() {
  return (
    <>
      <div className="w-full h-screen ">
        <Link to="/">
          <div className=" absolute flex items-center top-5 left-5 cursor-pointer">
            <i className="fa-solid fa-angle-left"></i>
            <h2>Home</h2>
          </div>
        </Link>
        <div className="w-full h-full flex justify-center gap-5 items-center">
        <SpinnerDotted size={52} thickness={168} speed={137} color="rgba(255, 255, 0, 1)" />
          <h1 className="text-xl font-semibold">
            Congratulation! Order Has Been Placed
          </h1>
        </div>
      </div>
    </>
  );
}

export default Orderplaced;
