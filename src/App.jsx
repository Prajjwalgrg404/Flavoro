import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";

const Fooditems = lazy(() => import("./Components/Fooditems"));

function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <h1 className="text-[5rem] font-semibold">Loading...</h1>
          </div>
        }
      >
        <Fooditems />
      </Suspense>
    </div>
  );
}

export default App;
