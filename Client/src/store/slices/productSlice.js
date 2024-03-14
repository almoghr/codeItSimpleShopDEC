import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  singleProduct: {},
  categories: [],
  chosenCategory: "All Products",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSingleProducts: (state, action) => {
      state.singleProduct = action.payload;
    },
    setAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    setChosenCategory: (state, action) => {
      state.chosenCategory = action.payload;
      if (action.payload === "All Products") {
        console.log("here")
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
    setProductQuantity: (state,action) => {
      const productIndex = state.products.findIndex(prd => prd.id === action.payload.id)
      state.products[productIndex].quantity = action.payload.quantity
      state.filteredProducts[productIndex].quantity = action.payload.quantity
    }
  },
});

export const {
  setAllProducts,
  setSingleProducts,
  setAllCategories,
  setChosenCategory,
  setProductQuantity
} = productsSlice.actions;

export default productsSlice.reducer;



