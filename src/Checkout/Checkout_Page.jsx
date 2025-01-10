import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout_Page() {
  const maincart = useSelector((state) => state.cart);
  console.log(maincart);
  return (
    <div className=" w-[70%] mx-auto">
      <div className="w-full h-full p-6">
        <h1 className="text-[1.5rem] font-semibold border-b-2 pb-8">
          Order Summary
        </h1>

        {/* Order Items */}
        <div className=" mt-10 pb-[6rem]">
          {maincart.map((items, id) => {
            return (
              <div className="">
                <div
                  key={id}
                  className="w-full h-[7rem] border border-grey-400 rounded-xl shadow-xl mt-6 flex"
                >
                  <div className="w-full h-full py-2 px-4 flex items-center gap-16">
                    <img
                      className="w-[8rem] h-full  border"
                      src={items.Image}
                      alt="Image"
                    />
                    <h2>{items.Name}</h2>
                  </div>
                  <div className="flex gap-[10rem] items-center px-20">
                    <h2>Price:₹ {items.Price}</h2>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-minus border p-1 rounded"></i>
                      <h2>1</h2>
                      <i className="fa-solid fa-plus border p-1 rounded"></i>
                    </div>
                  </div>
                  <div className="items-center flex px-4">
                    <button className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 hover:text-white">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Order Placed Button */}
      </div>
      <div className="flex justify-center items-center w-full bg-white h-[6rem] left-0 fixed bottom-0">
        <Link to="/order"><button className="px-10 py-4 bg-yellow-300 rounded-lg hover:bg-yellow-400">
          Place Your Order
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout_Page;
