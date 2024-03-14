import React from "react";
import "./Cart.css";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import { useSelector } from "react-redux";
import CartActionButtons from '../../components/CartActionButtons/CartActionButtons.jsx'
const Cart = ({ isDrawer }) => {
  const cartItems = useSelector((state) =>
    state.products.products.filter((prd) => prd.quantity > 0)
  );
  return (
    <div>
      {!isDrawer && <NavigationButtons />}
      {cartItems.map((item) => (
        <div className="cartItem">
          <div>
            <img width={200} src={item.image} />
          </div>
          <div className="cartItemInfo">
            <span>{item.title}</span>

            <div>
            <CartActionButtons quantity={item.quantity} id={item.id}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
