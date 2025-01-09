import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice/Slice"


const Store = configureStore({
  reducer: {
    cart:Slice,
    
  },
});

export default Store;
