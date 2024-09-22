import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
  searchTerm: "", // Add searchTerm to initial state
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: 1 }); // Ensure quantity is initialized
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
    incrementItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    setSearchTerm: (state, action) => { // Add setSearchTerm action
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementItem,
  decrementItem,
  setSearchTerm, // Export the action
} = amazonSlice.actions;

export default amazonSlice.reducer;
