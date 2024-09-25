import { createSlice } from "@reduxjs/toolkit";

export const CartSlices = createSlice({
  name: "cart",
  initialState:{
    cart:[]
  },
  reducers: {
    addtocart : (state,action)=>{
        state.cart.push(action.payload);
    },
    removeFromCart : (state,action)=>{
        state.cart = state.cart.filter((item)=> item.id !== action.payload)
    }
  },
});

export default CartSlices.reducer;
export const { addtocart,removeFromCart } = CartSlices.actions;
