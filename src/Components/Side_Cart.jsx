import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Redux/Slice/Slice";

function Side_Cart() {
  const [Toggle, setToggle] = useState(false);
  function open() {
    setToggle(!Toggle);
  }

  const dispatch = useDispatch();

  const maincart = useSelector((state) => state.cart);
  // console.log(maincart);

  const totalamt = maincart.reduce((acc, item) => acc + Number(item.Price), 0);

  return (
    <>
      <div>
        {/* cart section */}
        <h2
          onClick={open}
          className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white cursor-pointer"
        >
          Cart <span className="text-white">{maincart.length}</span>
        </h2>
        <div
          className={`w-[20rem] h-screen  overflow-y-scroll bg-white fixed top-0 ${
            Toggle === true ? "right-0  " : "right-[100%]"
          } z-[5]`}
        >
          <div>
            <div
              onClick={open}
              className="w-full h-full flex items-center justify-between px-4"
            >
              <h2 className="text-lg font-semibold">My Orders</h2>
              <i className="fa-solid fa-x text-sm px-3 py-2 m-2 border rounded-full hover:bg-red-600 hover:text-white"></i>
            </div>

            <div className="px-3 mb-[8rem]">
              {maincart.map((items, id) => {
                return (
                  <div
                    key={id}
                    className="w-full h-[5rem] shadow-xl border rounded-lg mt-4 px-4 py-2 flex"
                  >
                    <div>
                      <img
                        src={items.Image}
                        alt="Image"
                        className="object-fill w-[6rem] h-full "
                      />
                    </div>
                    <div className="w-full flex flex-col px-2">
                      <div className="w-full flex justify-between">
                        <h2>{items.Name.slice(0, 16)}</h2>
                        <i
                          onClick={() => {
                            dispatch(removeItem(id)); // Pass the id inside an object
                          }}
                          className="fa-solid fa-trash"
                        ></i>
                      </div>
                      <div className="w-full h-full flex justify-between items-center">
                        <h2 className="text-green-500">₹ {items.Price}</h2>
                        <div>
                          <i className="fa-solid fa-minus border p-1 rounded"></i>
                          1
                          <i className="fa-solid fa-plus border p-1 rounded"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className={`font-semibold bg-white ${Toggle === true ? "": "hidden"} fixed bottom-0 right-4 py-5 px-1`}>
              <h2>Items: {maincart.length}</h2>
              <h2>Total Amount: ₹{totalamt}</h2>
              <button className="bg-green-500 hover:bg-green-600 hover:text-white rounded-xl mx-6 px-20 py-2 ">
                Check Out
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Side_Cart;
