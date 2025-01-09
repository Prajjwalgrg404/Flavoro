import React, { useState } from "react";
import FoodData from "../FoodData/FoodData";
import { FaStar } from "react-icons/fa";
import { addItem } from "../Redux/Slice/Slice";
import { useDispatch } from "react-redux";

function Lunch() {
  const dispatch = useDispatch();

  const [data, setdata] = useState(FoodData);

  const FilteredData = data.filter((items) => {
    return items.category === "Lunch";
  });
  return (
    <div className="w-[90%] mx-auto ">
      <div className="flex gap-[2rem] mx-10 px-12 flex-wrap ">
        {FilteredData.map((items, id) => {
          return (
            <div
              key={id}
              className="w-[17rem]  shadow-2xl bg-white rounded-lg my-2"
            >
              <div className="overflow-hidden p-2">
                <img
                  className="w-full h-[10rem] rounded-lg ease-in duration-100 hover:scale-105 object-fill"
                  src={items.img}
                  alt=""
                />
              </div>
              <div className="px-4">
                <div className="flex justify-between mt-2">
                  <h3 className="font-semibold text-base">{items.name}</h3>
                  <h3 className="text-green-500">₹{items.price}</h3>
                </div>
                <div className="mt-2 text-sm">
                  <p className="">{items.desc.slice(0, 40)}.....</p>
                </div>
                <div className="flex justify-between mt-4 mb-4">
                  <div className="flex items-center justify-center">
                    <FaStar />
                    <h3 className="font-semibold">{items.rating}</h3>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          Name: items.name,
                          Price: items.price,
                          Image: items.img,
                        })
                      );
                    }}
                    className="px-4 py-1 bg-green-500 hover:bg-green-600 hover:text-white rounded-lg text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Lunch;
