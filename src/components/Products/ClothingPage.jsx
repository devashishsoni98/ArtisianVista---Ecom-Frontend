

import React from "react";
import clothingData from "../Data/clothingData";
// import { BsSuitHeartFill } from "react-icons/bs";
// import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
// import { MdOutlineLabelImportant } from "react-icons/md";
import '../Products/product.css';

const ClothingPage = ({ product }) => {
  return (
    <>
    <div className="p-card-container">

    <div className="p-card">
      <div className="card-img" style={{ backgroundImage: `url(${product.image})` }}></div>
      <div className="card-info">
        <p className="text-title">{product.title}</p>
        {/* <p className="text-body">{product.description}</p> */}
      </div>
      <div className="card-footer">
        <span className="text-title">${product.price}</span>
        <div className="card-button">
          <FaShoppingCart />
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
};

const Clothes = () => {
  return (
    <div className="products">
      {clothingData.map((product) => (
        <ClothingPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Clothes;
