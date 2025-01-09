import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";

import { Link, Route, Routes } from "react-router-dom";
import Lunch from "./Filtered_component/Lunch";
import Fooditems from "./Components/Fooditems";
import Breakfast from "./Filtered_component/Breakfast";
import Dinner from "./Filtered_component/Dinner";
import Snacks from "./Filtered_component/Snacks";



function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      {/* <Fooditems /> */}
      <div>
          <Routes>
            <Route path="/" element={<Fooditems />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/snacks" element={<Snacks />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
