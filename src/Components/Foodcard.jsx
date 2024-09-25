import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/slices/CartSlices";

function Foodcard({id,name,price,desc,rating,img}) {

  const dispatch = useDispatch()


  return (
    <div className="">
      <div className="w-[15vw] h-[19vw] bg-white p-2 border flex flex-col gap-4">
        <img
          className="w-full h-[9vw] hover:scale-105 cursor-pointer transition-all duration-250 ease-in"
          src={img}
        />
        <div className="flex justify-between items-center">
          <h2 className="text-[1vw] font-semibold">{name.slice(0,16)}...</h2>
          <span className="px-1 bg-blue-300 rounded-lg">₹{price}</span>
        </div>
        <p  className=" text-xs font-regular tracking-tight">
          {desc.slice(0,50)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="flex justify-center items-centers">
            <FaStar className="text-yellow" />
            {rating}
          </span>
          <button onClick={()=>{dispatch(addtocart({id,name,price,qty:1,rating}))}} className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
            Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Foodcard;
