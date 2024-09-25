import React from "react";
import { IoClose } from "react-icons/io5";
import ItemCart from "./ItemCart";

function Cart() {

  return (
    <>
      <div className=" CartTop fixed right-0 top-0 w-full lg:w-[22vw] bg-white h-full p-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">My Order</span>
          <IoClose
            className="border-2 border-black text-2xl rounded-full hover:text-red-500 cursor-pointer hover:border-red-500"
          />
        </div>
        <div className="">
          <ItemCart />
        </div>

        <div className="CartBottom absolute bottom-0 rounded-lg">
          <h3 className="font-semibold text-gray-800">Items:</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:</h3>
          <hr className="mb-3 lg:w-[18vw] w-[21.5rem] mx-auto" />
          <button className="lg:w-[18vw] w-[21.5rem] py-1 mx-5 mb-5 bg-green-500 text-white rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
