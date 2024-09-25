import React from "react";

function CategoryMenu() {
  return (
    <div className="mx-5 my-8">
      <h3 className="font-bold text-xl mb-8">Find the best food</h3>
      <div className="flex gap-5 scroll-smooth overflow-x-scroll lg:overflow-x-hidden">
        <button className="px-4 py-2 border border-zinc-300 bg-green-500 hover:bg-green-600 hover:text-white rounded-lg">
          All
        </button>
        <button className="px-4 py-2 border border-zinc-300 hover:bg-green-600 hover:text-white rounded-lg">
          Lunch
        </button>
        <button className="px-4 py-2 border border-zinc-300 hover:bg-green-600 hover:text-white rounded-lg">
          Breakfast
        </button>
        <button className="px-4 py-2 border border-zinc-300 hover:bg-green-600 hover:text-white rounded-lg">
          Dinner
        </button>
        <button className="px-4 py-2 border border-zinc-300 hover:bg-green-600 hover:text-white rounded-lg">
          Snacks
        </button>
      </div>
    </div>
  );
}

export default CategoryMenu;
