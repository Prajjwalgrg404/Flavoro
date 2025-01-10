import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Lunch from "./Filtered_component/Lunch";
import Fooditems from "./Components/Fooditems";
import Breakfast from "./Filtered_component/Breakfast";
import Dinner from "./Filtered_component/Dinner";
import Snacks from "./Filtered_component/Snacks";
import Checkout_Page from "./Checkout/Checkout_Page";
import Orderplaced from "./Checkout/Orderplaced";


function App() {
  const location = useLocation();

  // Check if the current route is the checkout page
  const isCheckoutPage = location.pathname === '/checkout' || location.pathname === '/order';


  return (
    <>
    <div>
      {/* Only show Navbar and Menu if it's not the checkout page */}
        {!isCheckoutPage && <Navbar />}
        {!isCheckoutPage && <Menu />}
      <Routes>
        <Route path="/" element={<Fooditems />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/checkout" element={<Checkout_Page />} />
        <Route path="/order" element={<Orderplaced />} />

      </Routes>
    </div>
    </>
  );
}

export default App;
