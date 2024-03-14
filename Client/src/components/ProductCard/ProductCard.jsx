import React from "react";
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";
import CartActionButtons from '../CartActionButtons/CartActionButtons.jsx'

const ProductCard = ({id,src,title,price, quantity}) => {
  const navigate = useNavigate()

  return (
    <div className="product-card">
      <div onClick={() => navigate(`/items/${id}`)} className="product-image">
        <img src={src} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
      </div>
      <CartActionButtons quantity={quantity} id={id}/>
    </div>
  );
};

export default ProductCard;
