import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function ItemCart() {
  return (
    <div className="flex gap-2 shadow-md border mt-3 rounded-md p-2">
    <MdDelete  className="absolute right-7 text-grey cursor-pointer text-lg"/>
      <img
        className="w-[3vw] h-[3vw] object-contain"
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
      />
      <div className="leading-2">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex">
          <span className="text-green-500 font-semibold">₹120</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <IoMdAdd className="border-2 border-grey-700 rounded-lg p-1 text-xl hover:text-white hover:bg-green-500 hover:border-none" />
            <span>1</span>
            <FaMinus className="border-2 border-grey-700 rounded-lg p-1 text-xl hover:text-white hover:bg-green-500 hover:border-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
