import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productSlice'
import drawerReducer from './slices/drawerSlice';


export const store = configureStore({
  reducer: {
    products: productsReducer,
    drawer: drawerReducer,
    // cart:cartReducer,
    // general: generalReducer
  },
})
