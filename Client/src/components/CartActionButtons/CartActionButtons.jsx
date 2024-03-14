import React from "react";
import "./CartActionButtons.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setProductQuantity } from "../../store/slices/productSlice";

const CartActionButtons = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleProductsToCart = (mode) => {
    if (mode === "inc") {
      dispatch(setProductQuantity({ id, quantity: quantity + 1 }));
    } else {
      if (quantity < 1) {
        return;
      }
      dispatch(setProductQuantity({ id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="quantityToCart">
      <Button onClick={() => handleProductsToCart("dec")}>-</Button>
      <span>{quantity}</span>
      <Button onClick={() => handleProductsToCart("inc")}>+</Button>
    </div>
  );
};

export default CartActionButtons;

